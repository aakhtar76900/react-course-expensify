import moment from 'moment';
import { setStartDate, setEndDate, setSortByAmount,setSortByDate, setFilterText } from '../../actions/filters';

test('should set setStarDate action generator' , () => {
    const result = setStartDate(moment(0));
    const expectedResult = {
        type: 'SET_START_DATE',
        date: moment(0)
    };
    expect(result).toEqual(expectedResult);
});

test('should set setEndDate action generator' , () => {
    const result = setEndDate(moment(0));
    const expectedResult = {
        type: 'SET_END_DATE',
        date: moment(0)
    };
    expect(result).toEqual(expectedResult);
});

test('should set setSortByAmount action generator' , () => {
    const result = setSortByAmount();
    const expectedResult = {
        type: 'SET_SORT_BY_AMOUNT'
    };
    expect(result).toEqual(expectedResult);
});

test('should set setSortByDate action generator' , () => {
    const result = setSortByDate();
    const expectedResult = {
        type: 'SET_SORT_BY_DATE'
    };
    expect(result).toEqual(expectedResult);
});

test('should set setFilterText action generator' , () => {
    const result = setFilterText('test');
    const expectedResult = {
        type: 'SET_FILTER_TEXT',
        text: 'test'
    };
    expect(result).toEqual(expectedResult);
});

test('should set setFilterText action generator with default parameter' , () => {
    const result = setFilterText();
    const expectedResult = {
        type: 'SET_FILTER_TEXT',
        text: ''
    };
    expect(result).toEqual(expectedResult);
});