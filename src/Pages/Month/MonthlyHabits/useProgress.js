import { useMemo } from "react";

const useProgress = ({
  habitList,
  isChecked,
  getWeek,
  totalDays,
}) => {
  const safeList = Array.isArray(habitList)
    ? habitList
    : [];

  const progressMap = useMemo(() => {
    const map = {};

    safeList.forEach((habit) => {
      let count = 0;
      for (let day = 1; day <= totalDays; day++) {
        if (isChecked(habit, day)) count++;
      }
      map[habit.id] = count;
    });

    return map;
  }, [safeList, isChecked, totalDays]);

  const totalHabits = safeList.length;

  const getDailyProgress = (day) => {
    let done = 0;

    safeList.forEach((habit) => {
      if (isChecked(habit, day)) done++;
    });

    return totalHabits
      ? Math.round((done / totalHabits) * 100)
      : 0;
  };

  const getWeeklyProgress = (week) => {
    let total = 0;
    let done = 0;

    safeList.forEach((habit) => {
      for (let day = 1; day <= totalDays; day++) {
        if (getWeek(day) === week) {
          total++;
          if (isChecked(habit, day)) done++;
        }
      }
    });

    return total ? Math.round((done / total) * 100) : 0;
  };

  const getMonthlyProgress = () => {
    const total = totalHabits * totalDays;
    const done = Object.values(progressMap).reduce(
      (a, b) => a + b,
      0
    );

    return total ? Math.round((done / total) * 100) : 0;
  };

  return {
    getDailyProgress,
    getWeeklyProgress,
    getMonthlyProgress,
    progressMap,
  };
};

export default useProgress;