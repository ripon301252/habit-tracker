import { useEffect, useState } from "react";

const useCalendar = (initialDate) => {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());

  const [habitList] = useState([
    { name: "Exercise", goal: 20 },
    { name: "Reading", goal: 30 },
    { name: "Coding", goal: 31 },
  ]);

  useEffect(() => {
    if (initialDate) setCurrentDate(initialDate);
  }, [initialDate]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const totalDays = new Date(year, month + 1, 0).getDate();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const next = () => setCurrentDate(new Date(year, month + 1, 1));
  const prev = () => setCurrentDate(new Date(year, month - 1, 1));

  const getWeek = (day) => Math.ceil(day / 7);

  const getWeekColor = (week) => {
    const colors = ["bg-gray-900", "bg-gray-800", "bg-gray-700"];
    return colors[(week - 1) % colors.length];
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year
    );
  };

  const getHabitProgress = (habit, isChecked) => {
    let count = 0;

    for (let day = 1; day <= totalDays; day++) {
      if (isChecked(habit, day)) count++;
    }

    return count;
  };

  const getGoalStatus = (habit, isChecked) => {
    const done = getHabitProgress(habit, isChecked);

    return {
      done,
      goal: habit.goal,
      percent: habit.goal
        ? Math.min(100, Math.floor((done / habit.goal) * 100))
        : 0,
    };
  };

  return {
    currentDate,
    year,
    month,
    totalDays,
    habitList,
    days,
    next,
    prev,
    getWeek,
    getWeekColor,
    isToday,
    getGoalStatus,
  };
};

export default useCalendar;