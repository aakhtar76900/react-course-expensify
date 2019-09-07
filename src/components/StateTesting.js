import React, { Component } from 'react';

class StateTesting extends Component {

    state = {
        names : ['Item 1' , 'Item 2'],
        count : 0
    }

    handleOnAdd = () => {
        this.setState((prevState) => {
            return {
                names : [...this.state.names , 'New Item'],
                count : prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
            <h1>Test</h1>
                { this.state.names.map((item) => {
                   return <p key={item}>{item}</p> ;
                }) }
                count : {this.state.count}
                <button onClick={this.handleOnAdd}>Add Item</button>
            </div>
        );
    }
}

export default StateTesting;