import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.filteredItems.length === 0) {
    return <h2 className="expenses-list__fallback"> No items found</h2>;
  }

  return (
    <ul className="expenses-list ">
      {props.filteredItems.map((expenseItem) => (
        <ExpenseItem
          key={expenseItem.id}
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
