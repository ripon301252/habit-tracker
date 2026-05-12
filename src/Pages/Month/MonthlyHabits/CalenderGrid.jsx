import React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

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
        className="grid gap-[2px]"
        style={{
          // gridTemplateColumns: `180px repeat(${totalDays}, 42px)`,
          gridTemplateColumns: `140px repeat(${totalDays}, minmax(36px, 1fr))`,
        }}
      >
        {/* HEADER */}
        <div className="font-semibold p-3 bg-gray-800 sticky left-0 z-20">
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
                      ? "bg-orange-500 text-white shadow"
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
        {habitList.map((habit) => (
          <React.Fragment key={habit.id}>
            {/* LEFT PANEL */}
            <div className="bg-gray-800 p-2 sticky left-0 z-10 border-r border-gray-700 h-full grid grid-cols-[1fr_auto] items-center gap-2">
              {/* LEFT: Habit Info */}
              <div>
                <h3 className="font-semibold text-sm">{habit.name}</h3>

                <p className="text-[11px] text-gray-400">Goal: {habit.goal}</p>

                <p className="text-[11px] text-green-400">
                  {habit.status.done} / {habit.status.goal} (
                  {habit.status.percent}%)
                </p>
              </div>

              {/* RIGHT: Actions */}
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => setEditingHabit(habit)}
                  className="flex items-center justify-center w-6 h-6 bg-green-500/50 rounded hover:bg-green-600/50 transition cursor-pointer"
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
                  className="flex items-center justify-center w-6 h-6 bg-red-500/50 rounded hover:bg-red-600/50 transition cursor-pointer"
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

              return (
                <button
                  key={`${habit.id}-${day}`}
                  onClick={() => toggleHabit(habit, day)}
                  className={`w-9 h-9 border rounded-sm border-gray-800 cursor-pointer flex items-center justify-center text-xs transition
                    ${
                      checked
                        ? "bg-green-500/70 text-white scale-105"
                        : `${getWeekColor(week)} hover:scale-105 hover:brightness-125 active:scale-95`
                    }
                  `}
                >
                  {checked ? "✓" : "✗"}
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
