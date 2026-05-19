const ProgressBar = ({ label, value, className = "" }) => {
  const safeValue = Math.min(100, Math.max(0, value));

  const color =
    safeValue < 40
      ? "bg-gradient-to-r from-red-500 to-red-400"
      : safeValue < 70
      ? "bg-gradient-to-r from-yellow-500 to-yellow-400"
      : "bg-gradient-to-r from-green-500 to-green-400";

  return (
    <div className={`${className}`}>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-gray-300">{label}</span>
        <span className="text-gray-400">{safeValue}%</span>
      </div>

      <div
        className="w-full h-2 bg-gray-800 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={safeValue}
        aria-valuemin="0"
        aria-valuemax="100"
        title={`${safeValue}% completed`}
      >
        <div
          className={`h-2 ${color} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
