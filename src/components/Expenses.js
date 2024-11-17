import ExpenseItem from './Expenseitem'
import Expensedate from './Expensedate'
import './Expenseitem.css'


const Expenses = (props) => {

    return (
            <div className="expense-item">
                <Expensedate date={props.data.date} />
                <ExpenseItem 
                data={{
                    price: props.data.price,
                    title: props.data.title,
                }}
                />
            </div>
    )
}

export default Expenses