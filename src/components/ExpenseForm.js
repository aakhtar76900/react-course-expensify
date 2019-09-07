import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import {connect} from 'react-redux';
import { addExpense } from '../actions/expenses';


 class ExpenseForm extends React.Component {
    

    state = {
        description: this.props.expense.description ? this.props.expense.description : '',
        note: this.props.expense.note ? this.props.expense.note : '',
        amount: this.props.expense.amount ? this.props.expense.amount.toString() : '',
        createdAt: this.props.expense.amount? moment(this.props.expense.amount) : moment(),
        calendarFocused: false,
        error : undefined
    }

    handleDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }

    handleNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    handleAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    handleOnDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }));
    }

    handleOnFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description)
        {
            this.setState(() => ({error: 'Please enter description'}));
            return false;
        }
        if(!this.state.amount)
        {
            this.setState(() => ({error: 'Please enter Amount'}));
            return false;
        }

        this.setState(() => ({error : undefined}));
        this.props.onSubmitForm({
            description : this.state.description ,
            amount : parseFloat(this.state.amount),
            createdAt : this.state.createdAt.valueOf(),
            note : this.state.note
        })

    }

    render() {
       
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.handleAmountChange}
                    />
                    <textarea
                        placeholder="Enter Note"
                        value={this.state.note}
                        onChange={this.handleNoteChange}
                    ></textarea>

                    <div></div>

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.handleOnDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={({focused}) => (this.handleOnFocusChange(focused))}
                        numberOfMonths={1}
                        isOutsideRange={(day)=> false}

                    />



                    <button>Add Expense</button>
                    
                </form>
            </div>
        )
    }
}

export default connect()(ExpenseForm);