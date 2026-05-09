import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CalendarHeader = ({ currentDate, year, next, prev }) => {
  return (
    <div className="flex items-center justify-center gap-12 mb-4 bg-gray-900 p-3 rounded-lg shadow ">
      <button
        onClick={prev}
        className="px-3 py-1 bg-gray-800 rounded hover:bg-gray-700 transition cursor-pointer"
      >
        <FaArrowLeft />
      </button>

      <h2 className="text-lg md:text-xl font-semibold">
        {currentDate.toLocaleString("default", { month: "long" })} {year}
      </h2>

      <button
        onClick={next}
        className="px-3 py-1 bg-gray-800 rounded hover:bg-gray-700 transition cursor-pointer"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default CalendarHeader;