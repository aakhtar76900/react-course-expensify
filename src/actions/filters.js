

export const setFilterText = (text = '') => {
    return {
        type: 'SET_FILTER_TEXT',
        text: text
    }
};

export const setSortByAmount = () => {
    return {
        type: 'SET_SORT_BY_AMOUNT'
    }
};

export const setSortByDate = () => {
    return {
        type: 'SET_SORT_BY_DATE'
    }
};

export const setStartDate = (date) => {
    return {
        type: 'SET_START_DATE',
        date: date
    }
};

export const setEndDate = (date) => {
    return {
        type: 'SET_END_DATE',
        date: date
    }
};