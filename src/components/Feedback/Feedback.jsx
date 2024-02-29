import css from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul className={css.feedbackList}>
      <li className={css.listItem}>Good: {good}</li>
      <li className={css.listItem}>Neutral: {neutral}</li>
      <li className={css.listItem}>Bad: {bad}</li>
      <li className={css.listItem}>Total: {total}</li>
      <li className={css.listItem}>Positive : {!positive ? 0 : positive}%</li>
    </ul>
  );
};
export default Feedback;
