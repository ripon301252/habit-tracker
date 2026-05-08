const CalendarHeader = ({ currentDate, year, next, prev }) => {
  return (
    <div className="flex justify-between mb-3">
      <button onClick={prev}>⬅</button>

      <h2 className="text-xl">
        {currentDate.toLocaleString("default", { month: "long" })} {year}
      </h2>

      <button onClick={next}>➡</button>
    </div>
  );
};

export default CalendarHeader;
