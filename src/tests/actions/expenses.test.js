import {removeExpense,editExpense, addExpense} from '../../actions/expenses';

test('should setup removeExpense action generator' , () => {
    const result = removeExpense('123');
    const expectedResult = {
        type: 'REMOVE_EXPENSE',
        id: '123'
    }
    expect(result).toEqual(expectedResult);
});

test('should setup edit expense action generator' , () => {
    const result = (editExpense('123' , {description : 'test'}))
    const expectedResult = {
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            description : 'test'
        }
    }

    expect(result).toEqual(expectedResult);
})

test('should setup add expense action generator' , () => {
    const result = addExpense({ description : 'test', note : 'test', amount: 100, createdAt : 200 });
    const expectedResult = {
        type: 'ADD_EXPENSE',
        expense : { description : 'test', note : 'test', amount: 100, createdAt : 200 , id : expect.any(String)}
    }

    expect(result).toEqual(expectedResult);
})

test('should setup add expense action generator for default' , () => {
    const result = addExpense();
    const expectedResult = {
        type: 'ADD_EXPENSE',
        expense : { description : '', note : '', amount: 0, createdAt : 0 , id : expect.any(String)}
    }

    expect(result).toEqual(expectedResult);
})