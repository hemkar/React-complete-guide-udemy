import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredDate, setFilteredDate] = useState("2019");

  const handleExpenseFilter = (date) => {
    setFilteredDate(date);
  };

  const filteredItems = props.expenseItems.filter((item) => {
    return item.date.getFullYear().toString() === filteredDate;
  });

  let FilteredItemsCom = <p>No data found</p>;
  if (filteredItems.length > 0) {
    FilteredItemsCom = filteredItems.map((expenseItem) => (
      <ExpenseItem
        key={expenseItem.id}
        title={expenseItem.title}
        amount={expenseItem.amount}
        date={expenseItem.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredDate={filteredDate}
          expenseFilterHandler={handleExpenseFilter}
        />
        {FilteredItemsCom}
      </Card>
    </div>
  );
}

export default Expenses;
