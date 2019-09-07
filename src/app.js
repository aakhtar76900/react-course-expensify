import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import AppRouter from './routers/App-Router';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setFilterText} from './actions/filters';
import getVisibleExpenses from './selector/getVisibleExpense';
import {Provider} from 'react-redux';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';

const template = (
    <div>
        Expensify
    </div>
);

const store = configureStore();

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log("Visible expenses : ", visibleExpenses);
console.log(store.getState());


store.subscribe((state) => {
    console.log('From Subscribe :',store.getState());
})

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));

