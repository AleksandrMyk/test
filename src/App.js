import React, { Component } from 'react';

class App extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerStart: new Date() - this.state.timerTime,
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: new Date() - this.state.timerStart,
      });
    }, 1000);
  };

  stopTimer = () => {
    this.setState({ timerOn: false, timerStart: 0, timerTime: 0 });
    clearInterval(this.timer);
  };

  waitTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerOn: true,
      timerStart: 0,
      timerTime: 0,
    });
    clearInterval(this.timer);
    this.startTimer();
  };

  render() {
    const { timerTime } = this.state;
    let seconds = ('0' + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ('0' + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ('0' + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div>
        <div>
          {hours} : {minutes} : {seconds}
        </div>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.waitTimer}>Wait</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default App;
