import { useEffect, useState } from "react";

const STORAGE_KEY = "habit-state";

const useHabits = (calendar) => {
  const { year, month } = calendar;

  // ✅ lazy init + safe parse
  const [habitsState, setHabitsState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // ✅ save safely
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(habitsState));
    } catch (e) {
      console.log("Save error:", e);
    }
  }, [habitsState]);

  const getKey = (habit, day) =>
    `${habit.id}-${year}-${month}-${day}`;

  const toggle = (habit, day) => {
    const key = getKey(habit, day);

    setHabitsState((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isChecked = (habit, day) =>
    !!habitsState[getKey(habit, day)];

  return { habitsState, toggle, isChecked };
};

export default useHabits;