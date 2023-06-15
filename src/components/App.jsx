import React, { Component } from 'react';
import Statistics from './statistics/Statistics';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleGoodClick = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleBadClick = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  handleNeutralClick = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = ({ good }) => {
    const goodPercentage = (good / this.countTotalFeedback(this.state)) * 100;
    console.log(goodPercentage);
    return goodPercentage;
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div
          style={{
            display: 'flex ',
            flexDirection: 'column',
          }}
        >
          <p>Please leave feedback</p>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
            }}
          >
            <li style={{ marginRight: '10px' }}>
              <button onClick={this.handleGoodClick}>good</button>
            </li>
            <li style={{ marginRight: '10px' }}>
              <button onClick={this.handleNeutralClick}>neutral</button>
            </li>
            <li>
              <button onClick={this.handleBadClick}>bad</button>
            </li>
          </ul>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          />
        </div>
      </div>
    );
  }
}
