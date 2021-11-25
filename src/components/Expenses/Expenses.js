import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredDate, setFilteredDate] = useState("2020");
  const expenseItems = props.expenseItems;
  const handleExpenseFilter = (date) => {
    setFilteredDate(date);
    console.log(filteredDate);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredDate={filteredDate}
        expenseFilterHandler={handleExpenseFilter}
      />
      <ExpenseItem
        title={expenseItems[0].title}
        amount={expenseItems[0].amount}
        date={expenseItems[0].date}
      />
      <ExpenseItem
        title={expenseItems[1].title}
        amount={expenseItems[1].amount}
        date={expenseItems[1].date}
      />
      <ExpenseItem
        title={expenseItems[2].title}
        amount={expenseItems[2].amount}
        date={expenseItems[2].date}
      />
    </Card>
  );
}

export default Expenses;
