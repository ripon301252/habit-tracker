import { useMemo, useState } from "react";

import CalendarGrid from "./CalenderGrid";
import CalendarHeader from "./CalenderHeader";
import useCalendar from "./useCalender";
import useHabits from "./useHabits";
import useProgress from "./useProgress";
import ProgressBar from "./ProgressBar";
import HabitForm from "./HabitForm";

const Calendar = ({ initialDate }) => {
  const calendar = useCalendar(initialDate);

  const { isChecked, toggle } = useHabits(calendar);

  // 👇 edit state (IMPORTANT)
  const [editingHabit, setEditingHabit] = useState(null);

  // progress system
  const progress = useProgress({
    habitList: calendar.habitList,
    isChecked,
    getWeek: calendar.getWeek,
    totalDays: calendar.totalDays,
  });

  const monthly = progress.getMonthlyProgress();
  const daily = progress.getDailyProgress(new Date().getDate());

  // ✅ FIX: stable status calculation
  const habitListWithStatus = useMemo(() => {
    return calendar.habitList.map((habit) => ({
      ...habit,
      status: calendar.getGoalStatus(habit, isChecked),
    }));
  }, [calendar.habitList, isChecked, calendar.getGoalStatus]);

  return (
    <div className="p-4 text-white">

      {/* PROGRESS BARS */}
      <div className="mb-4">
        <ProgressBar label="Monthly" value={monthly} />

        {[1, 2, 3, 4, 5].map((week) => (
          <ProgressBar
            key={week}
            label={`Week ${week}`}
            value={progress.getWeeklyProgress(week)}
          />
        ))}

        <ProgressBar label="Today" value={daily} />
      </div>

      {/* HEADER */}
      <CalendarHeader {...calendar} />

      {/* HABIT FORM (ADD + EDIT) */}
      <HabitForm
        addHabit={calendar.addHabit}
        updateHabit={calendar.updateHabit}
        editingHabit={editingHabit}
        setEditingHabit={setEditingHabit}
      />

      {/* GRID */}
      <CalendarGrid
        {...calendar}
        habitList={habitListWithStatus}
        isChecked={isChecked}
        toggleHabit={toggle}
        deleteHabit={calendar.deleteHabit}
        setEditingHabit={setEditingHabit}
      />
    </div>
  );
};

export default Calendar;