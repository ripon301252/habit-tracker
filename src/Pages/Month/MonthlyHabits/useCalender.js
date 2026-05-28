import { useEffect, useState } from "react";

const STORAGE_KEY = "habit-data";

const useCalendar = (initialDate) => {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());

  const [habitData, setHabitData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // const key = `${year}-${month}`;
  const key = `${year}-${String(month + 1).padStart(2, "0")}`;

  // current month list
  const habitList = habitData?.[key] || [];

  // add habit
  // const addHabit = (habit) => {
  //   setHabitData((prev) => ({
  //     ...prev,
  //     [key]: [
  //       ...(prev[key] || []),
  //       {
  //         id: Date.now(),
  //         ...habit,
  //       },
  //     ],
  //   }));
  // };

  const addHabit = (habit) => {
    setHabitData((prev) => ({
      ...prev,
      [key]: [
        ...(prev[key] || []),
        {
          id: Date.now(),
          name: habit.name,
          goal: habit.goal,
          completed: [], // 🔥 must for progress tracking
        },
      ],
    }));
  };

  // delete habit
  const deleteHabit = (id) => {
    setHabitData((prev) => {
      const list = prev[key] || [];
      return {
        ...prev,
        [key]: list.filter((h) => h.id !== id),
      };
    });
  };

  // update habit
  const updateHabit = (id, newData) => {
    setHabitData((prev) => {
      const list = prev[key] || [];

      return {
        ...prev,
        [key]: list.map((h) => (h.id === id ? { ...h, ...newData } : h)),
      };
    });
  };

  // ✅ persist safely
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(habitData));
    } catch (e) {
      console.log("Save error:", e);
    }
  }, [habitData]);

  // month navigation sync
  useEffect(() => {
    if (initialDate) setCurrentDate(initialDate);
  }, [initialDate]);

  const totalDays = new Date(year, month + 1, 0).getDate();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const next = () => setCurrentDate(new Date(year, month + 1, 1));

  const prev = () => setCurrentDate(new Date(year, month - 1, 1));

  const getWeek = (day) => Math.ceil(day / 7);

  // const getWeekColor = (week) => {
  //   const colors = [
  //     "bg-gray-900",
  //     "bg-gray-800",
  //     "bg-gray-900",
  //     "bg-gray-800",
  //     "bg-gray-900",
  //   ];
  //   return colors[(week - 1) % colors.length];
  // };

  const getWeekColor = (week) =>
    week % 2 === 0 ? "bg-gray-800" : "bg-gray-900";

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
    addHabit,
    deleteHabit,
    updateHabit,
  };
};

export default useCalendar;
