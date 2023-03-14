import React from "react";
import Statistics  from "./Stratistics/Statistics";
import FeedbackOptions  from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification  from "./Notafication/Notification";

  class App extends React.Component {
        
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  
    handleFeedback = name => {
      this.setState(lastState => {
        return {
          [name]: lastState[name] + 1,
        };
      });    
    };
    
    countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
      // const total = Object.values(this.state)      
      //   total.reduce((prevValue, value) => {
      //   return prevValue + value;
      // })
    };
    
    countPositiveFeedbackPercentage = () => {
      const total = this.countTotalFeedback();
      const { good } = this.state;
      return Math.round((good/total) * 100) 
    };

    render() {   
      const { good, neutral, bad } = this.state
      const total = good+ neutral+ bad
      
      return (
        <>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys (this.state)}
              onLeaveFeedback={this.handleFeedback}
            />
          </Section>
          
          <Section title="Statistics">
            {total === 0 ? (<Notification message="There is no feedback" />) :
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            }
          </Section>             
        </>
      );
    }
  };

export default App;
