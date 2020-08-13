import React from 'react';
import './home.less';
import { Link } from 'react-router-dom';
import calculatorImg from '../images/calculator.png';
import timerImg from '../images/timer.png';

const Home = () => {
  return (
    <div className="home">
      <div className="homeUpper">
        <h1>在线实用工具</h1>
      </div>
      <div className="homeDown">
        <div className="homeImgLink">
          <Link to='/calculator'>
            <img src={calculatorImg} alt="calculator"></img>
            <br></br>
            计算器
          </Link>
        </div>
        <div className="homeImgLink">
          <Link to='/timer'>
            <img src={timerImg} alt="timer"></img>
            <br></br>
            倒计时器
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;