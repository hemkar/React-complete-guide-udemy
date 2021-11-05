import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const expenseItems = props.expenseItems;
  return (
    <Card className="expenses">
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
