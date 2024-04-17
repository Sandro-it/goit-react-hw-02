import css from "./Feedback.module.css";

const Feedback = ({ feedbackCounts, totalFeedback, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li className={css.feedbackItem}>Good: {feedbackCounts.good}</li>
        <li className={css.feedbackItem}>Neutral: {feedbackCounts.neutral}</li>
        <li className={css.feedbackItem}>Bad: {feedbackCounts.bad}</li>
        <li className={css.feedbackItem}>Total: {totalFeedback}</li>
        <li className={css.feedbackItem}>Positive: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
