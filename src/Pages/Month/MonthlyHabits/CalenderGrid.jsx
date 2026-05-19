import React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import ProgressBar from "./ProgressBar";

const CalendarGrid = ({
  year,
  month,
  totalDays,
  habitList,
  days,
  isChecked,
  toggleHabit,
  getWeek,
  getWeekColor,
  isToday,
  deleteHabit,
  setEditingHabit,
}) => {
  return (
    <div className="w-full overflow-auto max-h-[70vh] rounded-xl border border-gray-700 bg-gray-950 shadow-lg">
      <div
        className="grid gap-[3px] min-w-max"
        style={{
          // gridTemplateColumns: `180px repeat(${totalDays}, 42px)`,
          gridTemplateColumns: `140px repeat(${totalDays}, minmax(36px, 1fr))`,
        }}
      >
        {/* HEADER */}
        <div className="font-semibold p-3 bg-gray-900 sticky left-0 top-0 z-20 flex justify-center items-center">
          Habits / Days
        </div>

        {Array.from({ length: totalDays }, (_, i) => {
          const day = i + 1;
          const date = new Date(year, month, day);
          const week = getWeek(day);

          return (
            <div
              key={`h-${day}`}
              className={`text-center text-xs py-2 transition sticky top-0 z-10 rounded-sm  ${getWeekColor(
                week,
              )}`}
            >
              <div className="text-gray-500 text-[10px]">
                {days[date.getDay()]}
              </div>

              <div
                className={`w-7 h-7 mx-auto rounded-full flex items-center justify-center text-sm font-medium transition
                  ${
                    isToday(day)
                      ? "bg-orange-500/70 text-white shadow"
                      : "bg-gray-700 text-white"
                  }`}
              >
                {day}
              </div>

              <div className="text-[10px] text-gray-500 mt-1">W{week}</div>
            </div>
          );
        })}

        {habitList.length === 0 && (
          <div className="col-span-full text-center py-10 text-gray-500">
            No habits yet. Add one above to start tracking!
          </div>
        )}

        {/* ROWS */}
        {habitList.map((habit, index) => (
          <React.Fragment key={habit.id}>
            {/* LEFT PANEL */}
            <div className="bg-gray-900 p-[6px] rounded-sm sticky left-0 z-10 flex items-center justify-between gap-[6px]">
              {/* LEFT INFO */}
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <div className="w-[16.7px] h-[16.7px] flex items-center justify-center rounded-full bg-gray-700 text-[10px] text-white">
                    {index + 1}
                  </div>

                  <h3 className="font-semibold text-xs leading-tight">
                    {habit.name}
                  </h3>
                </div>

                <p className="text-xs text-gray-400 font-semibold">
                  Goal: {habit.goal}
                </p>

                <ProgressBar
                  label={`${habit.status.done}/${habit.status.goal}`}
                  value={habit.status.percent}
                />
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => setEditingHabit(habit)}
                  className="w-7 h-7 flex items-center justify-center bg-green-500/40 rounded hover:bg-green-500/60 cursor-pointer"
                >
                  <FiEdit2 size={13} />
                </button>

                <button
                  onClick={() => {
                    if (
                      confirm("Are you sure you want to delete this habit?")
                    ) {
                      deleteHabit(habit.id);
                    }
                  }}
                  className="w-7 h-7 flex items-center justify-center bg-red-500/40 rounded hover:bg-red-500/60 cursor-pointer"
                >
                  <FiTrash2 size={13} />
                </button>
              </div>
            </div>

            {/* CHECK GRID */}
            {Array.from({ length: totalDays }, (_, i) => {
              const day = i + 1;
              const week = getWeek(day);
              const checked = isChecked(habit, day);
              const isGoalReached = habit.status.done >= habit.status.goal;

              return (
                <button
                  key={`${habit.id}-${day}`}
                  onClick={() => {
                    if (!isGoalReached) {
                      toggleHabit(habit, day);
                    }
                  }}
                  disabled={isGoalReached}
                  className={`w-9 h-9 border rounded-sm border-gray-800 flex items-center justify-center text-xs transition
                       ${
                         checked
                           ? "bg-green-500/70 text-white scale-105"
                           : `${getWeekColor(week)} hover:scale-105 hover:brightness-125 active:scale-95`
                       }
                       ${isGoalReached ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
                     `}
                >
                  <span className={checked ? "text-white" : "text-red-400/70"}>
                    {checked ? "✓" : "✗"}
                  </span>
                </button>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
