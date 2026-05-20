import { useEffect, useState } from "react";

const HabitForm = ({
  addHabit,
  updateHabit,
  editingHabit,
  setEditingHabit,
}) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [error, setError] = useState("");

  const editMode = Boolean(editingHabit);

  // যখন edit click হবে → form auto fill
  useEffect(() => {
    if (editingHabit) {
      setName(editingHabit.name);
      setGoal(editingHabit.goal);
    }
  }, [editingHabit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const parsedGoal = Number(goal);

    if (!name.trim() || !parsedGoal || parsedGoal <= 0) {
      setError("Enter valid habit & goal");
      return;
    }

    const habitData = {
      name: name.trim(),
      goal: parsedGoal,
    };

    if (editMode) {
      updateHabit(editingHabit.id, habitData);
      setEditingHabit(null);
    } else {
      addHabit(habitData);
    }

    setName("");
    setGoal("");
    setError("");
  };



  return (
    <div className="flex flex-col md:flex-row gap-2 bg-gray-900 p-3 rounded-lg shadow">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Habit name"
        className="flex-1 px-3 py-2 rounded bg-gray-800 text-white outline-none"
      />

      <input
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Goal"
        type="number"
        className="w-full md:w-24 px-3 py-2 rounded bg-gray-800 text-white outline-none"
      />

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        onClick={handleSubmit}
        className="bg-green-500/50 px-4 py-2 rounded hover:bg-green-600/50 transition cursor-pointer"
      >
        {editMode ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default HabitForm;
