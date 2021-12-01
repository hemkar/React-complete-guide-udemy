import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredDate, setFilteredDate] = useState("2019");

  const handleExpenseFilter = (date) => {
    setFilteredDate(date);
  };

  const filteredItems = props.expenseItems.filter((item) => {
    return item.date.getFullYear().toString() === filteredDate;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredDate={filteredDate}
          expenseFilterHandler={handleExpenseFilter}
        />
        <ExpensesList filteredItems={filteredItems} />
      </Card>
    </div>
  );
}

export default Expenses;
