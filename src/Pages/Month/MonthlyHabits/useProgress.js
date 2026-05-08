const useProgress = ({
  habitList,
  isChecked,
  getWeek,
  totalDays,
}) => {

  const getDailyProgress = (day) => {
    let total = habitList.length;
    let done = 0;

    habitList.forEach((habit) => {
      if (isChecked(habit, day)) done++;
    });

    return total ? Math.round((done / total) * 100) : 0;
  };

  const getWeeklyProgress = (week) => {
    let total = 0;
    let done = 0;

    habitList.forEach((habit) => {
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
    let total = 0;
    let done = 0;

    habitList.forEach((habit) => {
      for (let day = 1; day <= totalDays; day++) {
        total++;
        if (isChecked(habit, day)) done++;
      }
    });

    return total ? Math.round((done / total) * 100) : 0;
  };

  return {
    getDailyProgress,
    getWeeklyProgress,
    getMonthlyProgress,
  };
};

export default useProgress;