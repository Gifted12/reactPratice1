// eslint-disable-next-line
import React, {useState} from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props){
    const [title, setTitle] = useState(props.title);
    


    return(
        <Card className="expense-item" >
            <ExpenseDate date2={props.date}/>
            <div className="expense-item_description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>

        </Card>
    );
}
export default ExpenseItem;