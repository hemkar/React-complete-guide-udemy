import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    amount: 94.12,
    title: "Car insurance",
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    amount: 92.34,
    title: "Paper",
    date: new Date(2021, 12, 12),
  },
  {
    id: "e3",
    amount: 54.27,
    title: "Soda",
    date: new Date(2019, 2, 1),
  },
];

function App() {
  const [expenseItems, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseItems={expenseItems} />
    </div>
  );
}

export default App;
