import moment from 'moment';
import getVisibleExpenses from '../../selector/getVisibleExpense';

const expenses = [
    {
        description : 'Rent',
        amount : 1900,
        note : 'test note',
        createdAt : moment(0).valueOf()
    },
    {
        description : 'Tickets',
        amount : 500,
        note : 'test note',
        createdAt : moment(0).subtract(4 , 'days').valueOf()
    },
    {
        description : 'Macbook',
        amount : 2200,
        note : 'test note',
        createdAt : moment(0).add(4 , 'days').valueOf()
    }
]

test('test description filter' , () => {
    const filter = {
        text : 'e',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    }

    const result = getVisibleExpenses(expenses,filter);
    const expectedResult = [expenses[0] , expenses[1]];
    expect(result).toEqual(expectedResult);

});

test('test start Date filter' , () => {
    const filter = {
        text : '',
        sortBy : 'date',
        startDate : moment(0),
        endDate : undefined
    }

    const result = getVisibleExpenses(expenses,filter);
    const expectedResult = [expenses[2] , expenses[0]];
    expect(result).toEqual(expectedResult);

});

