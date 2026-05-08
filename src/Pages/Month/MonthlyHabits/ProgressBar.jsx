const ProgressBar = ({ label, value }) => {

  return (
    <div className="mb-2">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="w-full h-2 bg-gray-700 rounded">
        <div
          className="h-2 bg-green-500 rounded"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
