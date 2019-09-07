import React from 'react';
import { connect } from 'react-redux';
import {setFilterText, setSortByAmount, setSortByDate, setStartDate, setEndDate} from '../actions/filters';
import moment from 'moment';
import {DateRangePicker} from 'react-dates';


class ExpenseListFilter extends React.Component {

    state = {
        calendarFocused : null
    }

    handleOnDateChange = ({startDate, endDate}) => {
       
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    handleFocusChange = (focusInput) => {
        this.setState(() => ({calendarFocused : focusInput}))
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e)=> {
                    this.props.dispatch(setFilterText(e.target.value));
                }} />
                
                <select value={this.props.filters.sortBy} onChange={(e)=> {
                    if(e.target.value == 'amount')
                    {
                        this.props.dispatch(setSortByAmount());
                    }
                    else
                    {
                        this.props.dispatch(setSortByDate());
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    startDateId="txtStartDateFilter"
                    endDate={this.props.filters.endDate}
                    endDateId="txtEndDateFilter"
                    onDatesChange={this.handleOnDateChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={ (focusedInput) => {this.handleFocusChange(focusedInput )} }
                    showClearDates={true}
                    isOutsideRange={() => false}
                    numberOfMonths={1}

                />

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }
}



export default connect(mapStateToProps)(ExpenseListFilter);