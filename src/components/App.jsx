import React from "react";
import PropTypes from "prop-types";
import Statistics  from "./FeedbackOptions/Statistics";
import FeedbackOptions  from "./FeedbackOptions/FeedbackOptions";


  class App extends React.Component {
    static propTypes = {
        state: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    }
    
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  
    handleFeedback = () => {
      this.setState({
        good: this.state.good + 1,
        neutral: this.state.neutral + 1,
        bad: this.state.bad + 1,        
      })
      
    };
    
    countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      
      this.setState(prevState => {
        return { total: prevState.value + good + neutral + bad };
      });
    };
    
    // countPositiveFeedbackPercentage = () => {
    //   this.setState({
    //     positiveFeedback: +Math.round((
    //       this.handleFeedback.good /
    //       this.countTotalFeedback.total) * 100)
    //   });
    // };

    render() {
      // const { good, neutral, bad } = this.state;
      // const total = good + neutral + bad;
      // const positiveFeedback = +Math.round((good / total) * 100);      
    
      return (
        <>
          <section >
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleFeedback}
            />
          </section>
          
          {/* <Section title="Statistics">
            {good === 0 && bad === 0 && neutral === 0 ?
              (<Notification message="There is no feedback" />) :
              (<Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />)
            }
          </Section> */}

          <section > 
            <Statistics 
              good = {this.state.good}
              neutral = {this.state.neutral}
              bad = {this.state.bad}
              // total = {total}
              // positivePercentage={positiveFeedback}
              total = {this.countTotalFeedback}
              // positivePercentage={this.countPositiveFeedbackPercentage()}              
            />
          </section>
        </>
      );
    }
  };


export default App;
