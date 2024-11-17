const ExpenseItem = (props) => {

    const title = props.data.title
    const price = props.data.price

    return (
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{price}</div> 
        </div>   
    )
}

export default ExpenseItem