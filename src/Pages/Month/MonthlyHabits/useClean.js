// import React, { useEffect, useState } from 'react';

// const STORAGE_KEY = "habit-data";

// const useClean = (initialDate) => {
//     const [currentDate, setCurrentDate] = useState(initialDate || new Date());
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth();
//     const key = `${year}-${String(month + 1).padStart(2, "0")}`;

//     const [habitData, setHabitData] = useState(()=>{
//         try {
//             const saved = localStorage.getItem(STORAGE_KEY);
//             return saved ? JSON.parse(saved) : {};
//         }catch{
//             return {}
//         }
//     });

//     const habitList = habitData?.[key] || [];

//     const addHabit = (habit)=>{
//         setHabitData((prev)=>({
//             ...prev,
//             [key]: [...(prev[key] || []), {id: Date.now(), ...habit},]
//         }));
//     };

//     const deleteHabit = (id)=>{
//         setHabitData((prev)=>{
//             const list = prev[key] || [];
//             return {
//                 ...prev,
//                 [key]: list.filter((h)=>h.id !== id),
//             };
//         });
//     };

//     const updateHabit = (id, newData)=>{
//         setHabitData((prev)=>{
//             const list = prev[key] || [];
//             return {
//                 ...prev,
//                 [key]: list.map((h)=>h.id === id ? {...h, ...newData} : h), 
//             }
//         });
//     }

//     useEffect(()=>{
//         try {
//             localStorage.setItem(STORAGE_KEY, JSON.stringify(habitData))
//         } catch (e) {
//             console.log("Save error:", e);
//         }
//     }, [habitData]);


//     useEffect(()=>{
//         if (initialDate) {
//             setCurrentDate(initialDate);
//         }
//     }, [initialDate]);
    
//     const totalDays = new Date(year, month + 1, 0).getDate();

//     // const firstDay = new Date(year, month, 1).getDay();
//     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//     const next = ()=>{
//         setCurrentDate(new Date(year, month + 1, 1));
//     }

//     const prev = ()=>{
//         setCurrentDate(new Date(year, month - 1, 1));
//     }

//     const getWeek = (day) => {
//         return Math.ceil(day / 7);
//     }

//     const getWeekColor = (week) => {
//         return week % 2 === 0 ? "bg-gray-800" : "bg-gray-900";
//     }

//     const isToday = (day) => {
//         const today = new Date();
//         return (
//             today.getDate() === day &&
//             today.getMonth() === month &&
//             today.getFullYear() === year
//         );
//     }

//     const getHabitProgress = (habit, isChecked) => {
//         let count = 0;
//         for(let day = 1; day <= totalDays; day++){
//             if(isChecked(habit, day)){
//                   count++
//             }
//         }
//         return count;
//     }

//     const getGoalStatus = (habit, isChecked)=>{
//         const done = getHabitProgress(habit, isChecked);
//         return {
//             done,
//             goal: habit.goal,
//             percent: habit.goal ? Math.min(100, Math.floor((done / habit.goal) * 100)) : 0,
//         };
//     };



//     return {
//         currentDate,
//         year,
//         month,
//         totalDays,
//         habitList,
//         days,
//         addHabit,
//         deleteHabit,
//         updateHabit,
//         next,
//         prev,
//         getWeek,
//         getWeekColor,
//         isToday,
//         getGoalStatus,
//     }
// };

// export default useClean;