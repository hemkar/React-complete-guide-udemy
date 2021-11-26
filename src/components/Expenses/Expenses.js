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
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredDate={filteredDate}
          expenseFilterHandler={handleExpenseFilter}
        />

        {props.expenseItems.map((expenseItem) => (
          <ExpenseItem
            title={expenseItem.title}
            amount={expenseItem.amount}
            date={expenseItem.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
