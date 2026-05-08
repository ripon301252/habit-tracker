import { useEffect, useState } from "react";

const HabitForm = ({ addHabit, updateHabit, editingHabit, setEditingHabit }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const editMode = Boolean(editingHabit);

  // যখন edit click হবে → form auto fill
  useEffect(() => {
    if (editingHabit) {
      setName(editingHabit.name);
      setGoal(editingHabit.goal);
    }
  }, [editingHabit]);

  const handleSubmit = () => {
    if (!name) return;

    const habitData = {
      name,
      goal: Number(goal),
    };

    if (editMode) {
      updateHabit(editingHabit.id, habitData);
      setEditingHabit(null);
    } else {
      addHabit(habitData);
    }

    setName("");
    setGoal("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Habit"
        className="text-black px-2"
      />

      <input
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Goal"
        type="number"
        className="text-black px-2"
      />

      <button onClick={handleSubmit} className="bg-green-500 px-3 rounded">
        {editMode ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default HabitForm;