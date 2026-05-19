import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "habit-state";

// helper
const formatMonth = (month) => String(month + 1).padStart(2, "0");

const useHabits = ({ year, month }) => {
  // ✅ safe init (prevents crash on bad data)
  const [habitsState, setHabitsState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const parsed = saved ? JSON.parse(saved) : {};

      return typeof parsed === "object" && parsed !== null ? parsed : {};
    } catch {
      return {};
    }
  });

  // ✅ persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(habitsState));
    } catch (e) {
      console.log("Save error:", e);
    }
  }, [habitsState]);

  // ✅ stable key generator
  const getKey = useCallback(
    (habit, day) => `${habit.id}-${year}-${formatMonth(month)}-${day}`,
    [year, month],
  );

  // ✅ toggle habit
  const toggle = useCallback(
    (habit, day) => {
      const key = getKey(habit, day);

      setHabitsState((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    },
    [getKey],
  );

  // ✅ check state
  const isChecked = useCallback(
    (habit, day) => !!habitsState[getKey(habit, day)],
    [habitsState, getKey],
  );

  // ✅ clear all habits for current month (bonus feature)
  const clearMonth = useCallback(() => {
    setHabitsState((prev) => {
      const updated = { ...prev };
      const prefix = `-${year}-${formatMonth(month)}-`;

      Object.keys(updated).forEach((key) => {
        if (key.includes(prefix)) {
          delete updated[key];
        }
      });

      return updated;
    });
  }, [year, month]);

  // ✅ get all checked days for a habit (useful for streaks later)
  const getHabitDays = useCallback(
    (habit) => {
      const days = [];

      for (let day = 1; day <= 31; day++) {
        if (habitsState[getKey(habit, day)]) {
          days.push(day);
        }
      }

      return days;
    },
    [habitsState, getKey],
  );

  return {
    habitsState,
    toggle,
    isChecked,
    clearMonth, // 🔥 bonus
    getHabitDays, // 🔥 for streak system
  };
};

export default useHabits;
