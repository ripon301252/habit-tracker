import React from "react";

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
    <div className="overflow-x-auto">
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `150px repeat(${totalDays}, 40px)`,
        }}
      >
        {/* HEADER */}
        <div className="font-bold">Habits</div>

        {Array.from({ length: totalDays }, (_, i) => {
          const day = i + 1;
          const date = new Date(year, month, day);
          const week = getWeek(day);

          return (
            <div
              key={`h-${day}`}
              className={`text-center text-xs ${getWeekColor(week)}`}
            >
              <div className="text-gray-400">{days[date.getDay()]}</div>

              <div
                className={`w-6 h-6 mx-auto rounded-full flex items-center justify-center ${
                  isToday(day)
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 text-white"
                }`}
              >
                {day}
              </div>

              <div className="text-[10px] text-gray-400">W{week}</div>
            </div>
          );
        })}

        {/* ROWS */}
        {habitList.map((habit) => (
          <React.Fragment key={habit.id}>
            {/* LEFT SIDE */}
            <div className="bg-gray-800 p-2 sticky left-0 z-10 flex flex-col gap-1">
              <span className="font-bold">{habit.name}</span>

              <span className="text-xs text-gray-400">Goal: {habit.goal}</span>

              <span className="text-xs text-green-400">
                {habit.status.done} / {habit.status.goal} (
                {habit.status.percent}%)
              </span>

              {/* ACTIONS */}
              <div className="flex gap-1 mt-1">
                <button
                  onClick={() => setEditingHabit(habit)}
                  className="text-xs bg-blue-500 px-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteHabit(habit.id)}
                  className="text-xs bg-red-500 px-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>

            {/* CHECKBOX GRID */}
            {Array.from({ length: totalDays }, (_, i) => {
              const day = i + 1;
              const week = getWeek(day);
              const checked = isChecked(habit, day);

              return (
                <button
                  key={`${habit.id}-${day}`}
                  onClick={() => toggleHabit(habit, day)}
                  className={`w-8 h-8 border flex items-center justify-center text-xs
                    ${getWeekColor(week)}
                    ${checked ? "bg-green-500 text-white" : "text-gray-400"}
                  `}
                >
                  {checked ? "✓" : ""}
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
