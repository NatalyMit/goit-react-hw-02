import css from './Options.module.css';
const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={css.btnConteiner}>
      <button className={css.btnCounter} onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button
        className={css.btnCounter}
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button className={css.btnCounter} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.btnCounter} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
