import React, { Component } from 'react';
import './Timer.css';
import { Link } from 'react-router-dom';

class Timer extends Component {
    state = {
        time: '',
        curr: 'Start',
        interval: undefined,
        isSetted: false
    }

    setTime = (event) => {
        this.setState({
            time: event.target.value,
            curr: event.target.value
        })
    }

    timer = () => {
        if (Number(this.state.curr) > 0) {
            this.setState({ curr: Number(this.state.curr) - 1})
        } else {
            clearInterval(this.state.interval)
            this.setState({ 
                curr: 'End',
                isSetted: false
        })
        }
    }

    ticker = () => {
        this.setState({
            interval: setInterval(this.timer, 1000),
            isSetted: true
        })
    }

    render() {
        return (
            <div className="timerPage">
                <div>
                    <h1>在线倒计时器</h1>
                </div>
                <div className="timerGrid">
                    <div className="timerLeft">
                        <label htmlFor="time">
                            设置时间
                            <input name="time" value={this.state.time} onChange={this.setTime}></input>
                        </label>
                        <button 
                            onClick={this.ticker}
                            disabled={this.state.isSetted === true}>
                            Start
                        </button>
                        <Link className="link" to='/'>回到主页</Link>
                    </div>
                    <div className="timerRight">
                        <input readOnly={true} value={`${this.state.curr} ${this.state.isSetted ? 'Seconds' : ''}`}></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer;