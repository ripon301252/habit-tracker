import { useMemo } from "react";

const useProgress = ({ habitList, isChecked, getWeek, totalDays }) => {
  const safeList = Array.isArray(habitList) ? habitList : [];

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

  // ================= NORMAL =================

  // const getDailyProgress = (day) => {
  //   let done = 0;

  //   safeList.forEach((habit) => {
  //     if (isChecked(habit, day)) done++;
  //   });

  //   return safeList.length
  //     ? Math.round((done / safeList.length) * 100)
  //     : 0;
  // };

  // const getWeeklyProgress = (week) => {
  //   let total = 0;
  //   let done = 0;

  //   safeList.forEach((habit) => {
  //     for (let day = 1; day <= totalDays; day++) {
  //       if (getWeek(day) === week) {
  //         total++;
  //         if (isChecked(habit, day)) done++;
  //       }
  //     }
  //   });

  //   return total ? Math.round((done / total) * 100) : 0;
  // };

  // const getMonthlyProgress = () => {
  //   const total = safeList.length * totalDays;
  //   const done = Object.values(progressMap).reduce((a, b) => a + b, 0);

  //   return total ? Math.round((done / total) * 100) : 0;
  // };


  // ================= GOAL BASED =================
  const getMonthlyGoalProgress = () => {
    let totalGoal = 0;
    let totalDone = 0;

    safeList.forEach((habit) => {
      const goal = habit.goal || 0;
      const done = progressMap[habit.id] || 0;

      totalGoal += goal;
      totalDone += Math.min(done, goal);
    });

    return totalGoal
      ? Math.round((totalDone / totalGoal) * 100)
      : 0;
  };

  const getWeeklyGoalProgress = (week) => {
    let totalGoal = 0;
    let totalDone = 0;

    safeList.forEach((habit) => {
      const monthlyGoal = habit.goal || 0;

      // 🔥 better distribution based on actual weeks (5 weeks max)
      const weeksInMonth = 5;
      const weeklyGoal = Math.ceil(monthlyGoal / weeksInMonth);

      let done = 0;

      for (let day = 1; day <= totalDays; day++) {
        if (getWeek(day) === week && isChecked(habit, day)) {
          done++;
        }
      }

      totalGoal += weeklyGoal;
      totalDone += Math.min(done, weeklyGoal);
    });

    return totalGoal
      ? Math.round((totalDone / totalGoal) * 100)
      : 0;
  };

  const getTodayGoalProgress = (day) => {
    let done = 0;

    safeList.forEach((habit) => {
      if (isChecked(habit, day)) done++;
    });

    return safeList.length
      ? Math.round((done / safeList.length) * 100)
      : 0;
  };

  return {
    // normal
    // getDailyProgress,
    // getWeeklyProgress,
    // getMonthlyProgress,

    // goal
    getMonthlyGoalProgress,
    getWeeklyGoalProgress,
    getTodayGoalProgress,

    progressMap,
  };
};

export default useProgress;