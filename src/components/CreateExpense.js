import React from 'react';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const CreateExpense = (props) => {
    return (
        <div>
            <h3>Create Page</h3>
            <ExpenseForm expense={{}}
                onSubmitForm={(expense) => {
                    props.dispatch(addExpense(expense));
                    props.history.push('/');
                }} />
        </div>

    )
}

export default connect()(CreateExpense);