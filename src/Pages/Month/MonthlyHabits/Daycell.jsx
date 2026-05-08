const DayCell = ({ checked, onChange, week }) => {
  
  return (
    <button
      onMouseDown={() => onChange()}
      className={`w-8 h-8 border ${checked ? "bg-green-500" : "bg-gray-900"}`}
    />
  );
};

export default DayCell;
