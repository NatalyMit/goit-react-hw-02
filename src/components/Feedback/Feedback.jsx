const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive : {!positive ? 0 : positive}%</li>
    </ul>
  );
};
export default Feedback;
