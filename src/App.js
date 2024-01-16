import "./App.css";
import React from "react";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

function App() {
  /* 
    we have a create a const named courseGoals which is a array of objects 
    which contains two things an 'id' and a 'text' of objects.
   */
  const courseGoals = [
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the Course Main Topic" },
    { id: "cg3", text: "Help other students in the Course Q&A" },
  ];

  const addNewGoalHandler = (newGoal) => {
    courseGoals.push(newGoal);
    console.log(courseGoals);
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
