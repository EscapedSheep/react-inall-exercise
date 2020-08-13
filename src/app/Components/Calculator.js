import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    state = {
        preValue: '',
        currValue: '',
        operation: '',
        display: ''
    }

    clearInput = () => {
        this.setState({
            preValue: '',
            currValue: '',
            operation: '',
            display: ''
        })
    }

    updateDisplay = () => {
        this.setState({
            display: this.state.preValue + " " + this.state.operation + " " + this.state.currValue
        })
    }

    handleNumClick = (event) => {
        if (!this.state.operation) {
            this.setState({ preValue: this.state.preValue + event.target.value }, () => this.updateDisplay())
        } else {
            this.setState({ currValue: this.state.currValue + event.target.value }, () => this.updateDisplay())
        }
    }

    handleOperationClick = (event) => {
        if (!this.state.preValue || !!this.state.currValue || !!this.state.operation) {
            this.setState(this.clearInput(), () => this.updateDisplay());
        } else {
            this.setState({ operation: event.target.value }, () => this.updateDisplay())
        }
    }

    operate = (symbol) => {
        switch (symbol) {
            case '+': 
                return Number(this.state.preValue) + Number(this.state.currValue);
            case '-':
                return Number(this.state.preValue) - Number(this.state.currValue);
            case 'x':
                return Number(this.state.preValue) * Number(this.state.currValue);
        }
    }

    handleEqualOperation = () => {
        if (!this.state.preValue || !this.state.operation || !this.state.currValue) {
            this.setState(this.clearInput(), () => this.updateDisplay());
        } else {
            const result = this.operate(this.state.operation);
            this.setState({
                preValue: '',
                currValue: '',
                operation: '',
                display: result
            })
        }
    }

    NumButton = (props) => (
        <input className="numBtn calBtn" type="button" value={props.value} onClick={this.handleNumClick}></input>
    )

    operationButton = (props) => (
        <input className="operaBtn calBtn" type="button" value={props.value} onClick={this.handleOperationClick}></input>
    )

    render() {
        return (
            <div className="calPage">
                <h1>在线计算器</h1>
                <div className="cal">
                    <input id="displayBtn" type="text" readOnly={true} value={this.state.display}></input>
                    <div className="operateBoard">
                        <this.operationButton value="+"></this.operationButton>
                        <this.operationButton value="-"></this.operationButton>
                        <this.operationButton value="x"></this.operationButton>
                        <this.NumButton value="7"></this.NumButton>
                        <this.NumButton value="8"></this.NumButton>
                        <this.NumButton value="9"></this.NumButton>
                        <this.NumButton value="4"></this.NumButton>
                        <this.NumButton value="5"></this.NumButton>
                        <this.NumButton value="6"></this.NumButton>
                        <this.NumButton value="1"></this.NumButton>
                        <this.NumButton value="2"></this.NumButton>
                        <this.NumButton value="3"></this.NumButton>
                        <this.NumButton value="0"></this.NumButton>
                        <input className="clearBtn calBtn" type="button" value="Clear" onClick={this.clearInput}></input>
                        <input className="eqBtn calBtn"type="button" value="=" onClick={this.handleEqualOperation}></input>
                    </div>
                </div>
            </div>
        )
    }

    
}

export default Calculator;
