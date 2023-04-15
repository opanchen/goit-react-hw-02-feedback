import { Component } from "react";
import {Section, Statistics, FeedbackOptions, Notification} from "components";

export class App extends Component {
 
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


  handleUpdateState = (prop) => {
    this.setState((prevState) =>  ({[prop]: prevState[prop]+ 1}))
  }
  
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, number) => (total + number), 0)
  }

  countPositiveFeedbackPercentage() {
    const {good} = this.state;
    return (good === 0) ? 0 : Math.round((good / this.countTotalFeedback() * 100))
  }

 
  render() {
    const {good, neutral, bad} = this.state;

    return (
    <>
      <Section title={'Please leave feedback'}>
      <FeedbackOptions
        options={Object.keys(this.state)} 
        onLeaveFeedback={this.handleUpdateState}
        />
      </Section>
      
      <Section title={'Statistics'}>
        {this.countTotalFeedback() === 0
        ? <Notification
            message={'There is no feedback'}  
          />
        : <Statistics
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={this.countTotalFeedback()} 
            positivePercentage={`${this.countPositiveFeedbackPercentage()}%`}
          />
        }
      </Section>
    </>
    ); 
  }};
