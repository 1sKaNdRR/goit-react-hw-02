import css from "./Feedback.module.css"
// eslint-disable-next-line react/prop-types
export default function Feedback({feedback, totalFeedback, positiveFeedbackPercentage}) {
    return (
        <div className={css.feedbacklist}>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad} </p>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {positiveFeedbackPercentage}% </p>
        </div>
    );
}


