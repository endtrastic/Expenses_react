import ExpenseItem from './Expenseitem'
import Card from './Card'
import './Expenses.css'


const Expenses = (props) => {
    console.log(props.expenses[1])
    return (
        <Card className="expenses">
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
        </Card>
    )
}

export default Expenses;