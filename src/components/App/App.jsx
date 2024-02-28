// import Options from './components/Options/Options';
import Description from '../Description/Description';
import './App.css';
import { useEffect, useState } from 'react';
import Notification from '../Notification/Notification';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';

const feedbackObj = {
  good: 0,
  neutral: 0,
  bad: 0,
};
function App() {
  const [values, setValues] = useState(() => {
    const savedCliks = JSON.parse(window.localStorage.getItem('saved-clicks'));
    if (savedCliks !== null) {
      return savedCliks;
    }
    localStorage.removeItem('saved-clicks');

    return feedbackObj;
  });

  // const updateGood = () => {
  //   setValues({
  //     ...values,
  //     good: Number(values.good) + 1,
  //   });
  // };
  // const updateNeutral = () => {
  //   setValues({
  //     ...values,
  //     neutral: Number(values.neutral) + 1,
  //   });
  // };
  // const updateBad = () => {
  //   setValues({
  //     ...values,
  //     bad: Number(values.bad) + 1,
  //   });
  // };
  const updateFeedback = feedbackType => {
    setValues(values => ({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    }));
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveStatistics = Number(
    Math.round(((values.good + values.neutral) / totalFeedback) * 100)
  );
  const resetFeedback = () => {
    setValues(feedbackObj);
  };
  useEffect(() => {
    window.localStorage.setItem('saved-clicks', JSON.stringify(values));
  }, [values]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback <= 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          total={totalFeedback}
          positive={positiveStatistics}
        />
      )}

      {/* <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive : {!positiveStatistics ? 0 : positiveStatistics}%</p> */}
    </>
  );
}

export default App;
