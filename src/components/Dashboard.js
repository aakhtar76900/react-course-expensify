import React from 'react';
import {Link} from 'react-router-dom';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilter from '../components/ExpenseListFilter';

const Dashboard = () => {
    return (
        <div>
            <h3>Expenses Dashboard</h3>
            {/* <Link to="/edit/1"> Item 1 </Link> */}
            <ExpenseListFilter />
            <h4>List of Expenses</h4>
            <ExpenseList />
        </div>
    )
}

export default Dashboard;