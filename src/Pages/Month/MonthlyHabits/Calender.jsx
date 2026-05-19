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

  const [editingHabit, setEditingHabit] = useState(null);

  const progress = useProgress({
    habitList: calendar.habitList,
    isChecked,
    getWeek: calendar.getWeek,
    totalDays: calendar.totalDays,
  });

  const monthly = progress.getMonthlyProgress();
  // const daily = progress.getDailyProgress(new Date().getDate());
  const today = new Date();

  const isCurrentMonth =
    today.getFullYear() === calendar.year &&
    today.getMonth() === calendar.month;

  const daily = isCurrentMonth ? progress.getDailyProgress(today.getDate()) : 0;

  // ✅ stable status
  const habitListWithStatus = useMemo(() => {
    return calendar.habitList.map((habit) => ({
      ...habit,
      status: calendar.getGoalStatus(habit, isChecked),
    }));
  }, [calendar.habitList, isChecked]);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-3 md:p-6">
      <div className="max-w-[1400px] mx-auto space-y-4">
        {/* 🔥 TOP DASHBOARD */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Monthly */}
          <div className="bg-gray-950 p-4 rounded-xl shadow border border-gray-800">
            <h3 className="text-sm text-gray-400 mb-2">Monthly Progress</h3>
            <ProgressBar label="Overall" value={monthly} />
          </div>

          {/* Weekly */}
          <div className="bg-gray-950 p-4 rounded-xl shadow border border-gray-800">
            <h3 className="text-sm text-gray-400 mb-2">Weekly Progress</h3>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((week) => (
                <ProgressBar
                  key={week}
                  label={`W${week}`}
                  value={progress.getWeeklyProgress(week)}
                />
              ))}
            </div>
          </div>

          {/* Daily */}
          <div className="bg-gray-950 p-4 rounded-xl shadow border border-gray-800">
            <h3 className="text-sm text-gray-400 mb-2">Today</h3>
            <ProgressBar label="Today" value={daily} />
          </div>
        </div>

        {/* 📅 HEADER */}
        <div className="bg-gray-950 p-3 rounded-xl border border-gray-800 shadow">
          <CalendarHeader {...calendar} />
        </div>

        {/* ✏️ FORM */}
        <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 shadow">
          <HabitForm
            addHabit={calendar.addHabit}
            updateHabit={calendar.updateHabit}
            editingHabit={editingHabit}
            setEditingHabit={setEditingHabit}
          />
        </div>

        {/* 📊 GRID */}
        <div className="bg-gray-950 p-3 rounded-xl border border-gray-800 shadow overflow-hidden">
          <CalendarGrid
            {...calendar}
            habitList={habitListWithStatus}
            isChecked={isChecked}
            toggleHabit={toggle}
            deleteHabit={calendar.deleteHabit}
            setEditingHabit={setEditingHabit}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
