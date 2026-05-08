import { useEffect, useState } from "react";

const useCalendar = (initialDate) => {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());

  const [habitData, setHabitData] = useState({});

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const key = `${year}-${month}`;

  // ✅ current month habit list
  const habitList = Array.isArray(habitData?.[key]) ? habitData[key] : [];

  const addHabit = (habit) => {
    setHabitData((prev) => ({
      ...prev,
      [key]: [
        ...(prev[key] || []),
        {
          id: Date.now(),
          ...habit,
        },
      ],
    }));
  };

  const deleteHabit = (id) => {
    setHabitData((prev) => {
      const list = prev[key] || [];

      return {
        ...prev,
        [key]: list.filter((h) => h.id !== id),
      };
    });
  };

  const updateHabit = (id, newData) => {
    setHabitData((prev) => {
      const list = prev[key] || [];

      return {
        ...prev,
        [key]: list.map((h) => (h.id === id ? { ...h, ...newData } : h)),
      };
    });
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("habits");

      if (saved) {
        const parsed = JSON.parse(saved);
        setHabitData(parsed && typeof parsed === "object" ? parsed : {});
      }
    } catch {
      setHabitData({});
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habitData));
  }, [habitData]);

  useEffect(() => {
    if (initialDate) {
      setCurrentDate(initialDate);
    }
  }, [initialDate]);

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
    addHabit,
    deleteHabit,
    updateHabit,
  };
};

export default useCalendar;
