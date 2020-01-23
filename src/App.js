import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            errorMsg: false,
        };
    }

    decrementCounter = () => {
        if (this.state.counter - 1 < 0) {
            this.setState({ counter: 0, errorMsg: true });
        } else {
            this.setState({ counter: this.state.counter - 1, errorMsg: false });
        }
    };

    render() {
        return (
            <div data-test="component-app">
                <h1 data-test="counter-display">
                    The counter is currently {this.state.counter}
                </h1>
                <button
                    data-test="increment-button"
                    onClick={() =>
                        this.setState({
                            counter: this.state.counter + 1,
                            errorMsg: false,
                        })
                    }
                >
                    Increment counter
                </button>
                <button
                    data-test="decrement-button"
                    onClick={this.decrementCounter}
                >
                    Decrement counter
                </button>
                {this.state.errorMsg && (
                    <div data-test="error-message">
                        The counter cannot go below zero
                    </div>
                )}
            </div>
        );
    }
}

export default App;
