import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   entereTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangedHandler = (event) => {
    //setUserInput({ ...userInput, entereTitle: event.target.value });

    //Use below approach if current state depends on previous state.
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    //setUserInput({ ...userInput, enteredAmount: event.target.value });
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    //setUserInput({ ...userInput, enteredDate: event.target.amount });
    setEnteredDate(event.target.amount);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls ">
          <label>Title</label>
          <input type="text" onChange={titleChangedHandler} />
        </div>
        <div className="new-expense__controls ">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls ">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions ">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
