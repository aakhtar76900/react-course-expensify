import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from '../components/ExpenseListItem';
import selectExpenses from '../selector/getVisibleExpense';

export const ExpenseList = (props) => {
    return (
        <div>
            {props.expenses.length === 0 ? (
                <p>No expenses available</p>
            ) : (props.expenses.map((expense) => {
                return (
                    <ExpenseListItem key={expense.id} expense={expense} />
                )
            }))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: 'Andrew jackson',
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);

