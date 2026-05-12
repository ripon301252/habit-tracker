const ProgressBar = ({ label, value }) => {
  const getColor = () => {
    if (value < 40) return "bg-red-500";
    if (value < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-gray-300">{label}</span>
        <span className="text-gray-400">{value}%</span>
      </div>

      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-2 ${getColor()} rounded-full transition-all duration-300`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
