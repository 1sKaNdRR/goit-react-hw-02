import css from "./Options.module.css"

export default function Options({updateFeedback, resetFeedback, totalFeedback}) {
    const handleReset = () => {
        resetFeedback();
}
    return (
        <div className={css.btnContainer}>
            <button onClick={() => updateFeedback('good')} className={css.buttons}>Good</button>
            <button onClick={() => updateFeedback('neutral')} className={css.buttons}>Neutral</button>
            <button onClick={() => updateFeedback('bad')} className={css.buttons}>Bad</button>
            {totalFeedback > 0 && (
                <button onClick={handleReset} className={css.buttons}>RESET</button>
        )}
        </div>
    );
}



