import css from "./App.module.css"
import { useState, useEffect } from "react";
import Description from '../Description/Description'
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification"




export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });
  
  useEffect(() => {
    const savedFeedback = localStorage.getItem('feedback');

    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  },
    []);
  
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
    [feedback]
  });

    const updateFeedback = (feedbackType) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1,
        }));
    };
  
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div className={css.container}>
      <Description />
      <Options updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback}
          totalFeedback={totalFeedback}
        positiveFeedbackPercentage= {positiveFeedbackPercentage}
        />
      ) : (
          <Notification message="No feedback yet"/> 
      ) }

      
    </div>
  )
}
