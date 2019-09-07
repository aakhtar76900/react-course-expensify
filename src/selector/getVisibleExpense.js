import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const textMatch = !(text) || expense.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = !startDate ? true : startDate.isSameOrBefore(moment(expense.createdAt))  ;
        const endDateMatch = !endDate ? true : endDate.isSameOrAfter(moment(expense.createdAt))  ;
        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if (sortBy == 'amount') {
            return a.amount > b.amount ? -1 : 1;
        }
        else {
            return a.createdAt > b.createdAt ? -1 : 1;
        }
    });

}

export default getVisibleExpenses;