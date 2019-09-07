import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


export const ExpenseListItem = (props) => {
    return (
        <div>
            <Link to={`/edit/${props.expense.id}`}>
            <h3>{props.expense.description} </h3></Link>
            <p>Amount : {props.expense.amount}</p>
            <p>Created At : {props.expense.createdAt}</p>
            <button onClick={() => {
                props.dispatch(removeExpense(props.expense.id));
            }} >Remove</button>
        </div>

    )
}


export default connect()(ExpenseListItem);