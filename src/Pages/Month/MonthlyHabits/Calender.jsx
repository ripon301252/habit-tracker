import CalendarGrid from "./CalenderGrid";
import CalendarHeader from "./CalenderHeader";
import useCalendar from "./useCalender";
import useHabits from "./useHabits";
import useProgress from "./useProgress";
import ProgressBar from "./ProgressBar";

const Calendar = ({ initialDate }) => {
  const calendar = useCalendar(initialDate);
  const { isChecked, toggle } = useHabits(calendar);

  const progress = useProgress({
    habitList: calendar.habitList,
    isChecked,
    getWeek: calendar.getWeek,
    totalDays: calendar.totalDays,
  });

  const monthly = progress.getMonthlyProgress();
  const daily = progress.getDailyProgress(new Date().getDate());

  const habitListWithStatus = calendar.habitList.map((habit) => ({
  ...habit,
  status: calendar.getGoalStatus(habit, isChecked),
}));

  return (
    <div className="p-4 text-white">
      {/* PROGRESS */}
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

      {/* GOAL LIST */}
      {/* {calendar.habitList.map((habit) => {
        const status = calendar.getGoalStatus(habit, isChecked);

        return (
          <div key={habit.name}>
            <h3>{habit.name}</h3>
            <p>{status.done} / {status.goal}</p>
            <div>{status.percent}%</div>
          </div>
        );
      })} */}

      {/* {calendar.habitList.map((habit) => {
        const status = calendar.getGoalStatus(habit, isChecked);

        return { ...habit, status };
      })} */}

      {/* GRID */}
      <CalendarGrid
        {...calendar}
        habitList={habitListWithStatus}
        isChecked={isChecked}
        toggleHabit={toggle}
      />
    </div>
  );
};

export default Calendar;
