import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';

const EditExpense = ({match,expense,dispatch,history}) => {
    return (
        <div>
            <h3>Edit Page</h3>
            <p>You are editing item with id = {match.params.id} </p>
            <ExpenseForm 
                onSubmitForm={(updatedExpense) => {
                   dispatch(editExpense(expense.id,updatedExpense));
                    history.push('/');
                }}
                expense={expense}
            />
        </div>

    )
}

const mapStateToProps = (state,props) => {
    return {
        expense : state.expenses.find((expense) => (expense.id === props.match.params.id))
    };
    
}

export default connect(mapStateToProps)(EditExpense);