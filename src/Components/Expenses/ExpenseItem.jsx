
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from '../UI/Card';
import "../Expenses/ExpenseItem.css";

function ExpenseItem(props) {
 
  return (
    <li>
    <Card className='expense-item'>
        <ExpenseDate 
        date={props.date}
        />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={()=>{console.log("Clickedddddddd")}}>Change title</button> */}
    </Card>
    </li>
  );
}

export default ExpenseItem;