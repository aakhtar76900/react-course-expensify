import React from 'react';
import ExpenseForm from '../../components/ExpenseForm';
import {shallow} from 'enzyme';

test('should render expense form' , () => {
    const wrapper = shallow(<ExpenseForm expense={{}} />);
    expect(wrapper).toMatchSnapshot();
})

