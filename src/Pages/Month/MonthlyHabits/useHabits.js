import { useEffect, useState } from "react";

const useHabits = (calendar) => {
  const { year, month } = calendar;

  const safeParse = (data) => {
    try {
      return JSON.parse(data);
    } catch {
      return {};
    }
  };

  const [habitsState, setHabitsState] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? safeParse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habitsState));
  }, [habitsState]);

  // const getKey = (habit, day) =>
  //   `${habit.name}-${year}-${month}-${day}`;

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