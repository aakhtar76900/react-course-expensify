console.log("Hello from Redux");

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
/*
const sampleData = {
    expenses : [{
        id : 1,
        description : 'Test',
        note : 'Test Note',
        amount : 1000,
        createdAt : 0
    }],

    filters : {
        text : 'rent',
        sortBy : 'amount',  //amount or date
        startDate : undefined,
        endDate : undefined
    }
}
*/

const expensesInitialState = [];

const filtersInitialState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

//ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 }) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description: description,
            note: note,
            amount: amount,
            createdAt: createdAt

        }
    };
};
//EDIT_EXPENSE

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    }
};
//REMOVE_EXPENSE

const removeExpense = (id) => {
    return {
        type: 'REMOVE_EXPENSE',
        id: id
    }
};

const setFilterText = (text) => {
    return {
        type: 'SET_FILTER_TEXT',
        text: text
    }
};

const setSortByAmount = () => {
    return {
        type: 'SET_SORT_BY_AMOUNT'
    }
};

const setSortByDate = () => {
    return {
        type: 'SET_SORT_BY_DATE'
    }
};

const setStartDate = (date) => {
    return {
        type: 'SET_START_DATE',
        date: date
    }
};

const setEndDate = (date) => {
    return {
        type: 'SET_END_DATE',
        date: date
    }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const textMatch = !(text) || expense.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = typeof startDate != 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate != 'number' || expense.createdAt <= endDate;
        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if (sortBy == 'amount') {
            return a.amount > b.amount ? -1 : 1;
        }
        else {
            return a.createdAt > b.createdAt ? 1 : -1;
        }
    });

}


const expensesReducer = (state = expensesInitialState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id == action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else {
                    return expense;
                }

            });
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id != action.id;
            });
        default:
            return state;
    }
}

const filtersReducer = (state = filtersInitialState, action) => {
    switch (action.type) {
        case 'SET_FILTER_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SET_SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            };
        default:
            return state;
    }
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

store.subscribe(() => {

    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    console.log("state : ", store.getState());
    console.log("Visible Expenses : ", visibleExpenses);

});

console.log('dispatch add expense');

const expenseOne = store.dispatch(addExpense({ description: 'Hair Wax', amount: 38, note: 'Gravity paste doesnt work', createdAt: 5 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Grocerries', amount: 20, note: 'Daily Supplies', createdAt: 10 }));

console.log("expenseOne", expenseOne);

store.dispatch(editExpense(expenseOne.expense.id, { description: 'New Hair Wax' }));

store.dispatch(setFilterText(''));
store.dispatch(setSortByAmount());
store.dispatch(setStartDate());
store.dispatch(setEndDate(10));




//store.dispatch(removeExpense(expenseOne.expense.id));


