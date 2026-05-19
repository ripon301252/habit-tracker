import { useParams } from "react-router";
import Calendar from "./Calender";

const MonthPage = () => {
  const { year, month } = useParams();
  console.log("MonthPage rendered", year, month);

  const monthMap = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  const monthIndex = monthMap?.[month?.toLowerCase()];

  const parsedYear = Number(year);

  if (!parsedYear || monthIndex === undefined) {
    // return <div>Invalid Month or Year</div>;
    return (
      <div className="text-center text-red-400 mt-10">
        Invalid Month or Year
      </div>
    );
  }

  // if (!year || monthIndex === undefined) {
  //   return <div>Invalid Month or Year</div>;
  // }

  const date = new Date(year, monthIndex, 1);

  return <Calendar initialDate={date} />;
};

export default MonthPage;
