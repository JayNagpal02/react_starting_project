import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState("");

  // function inside a function or nested function
  const addGoalHandler = (event) => {
    event.preventDefault();

    if (enteredText != "") {
      const newGoal = {
        id: Math.random().toString(),
        text: enteredText,
      };

      setEnteredText("");

      props.onAddGoal(newGoal);
    }
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" onChange={textChangeHandler} value={enteredText} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
