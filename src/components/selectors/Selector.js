import "./styles/Selector.css";

/**
 * @param {Object} params
 * @param {string} params.value - currently selected value
 * @param {string[]} params.options - options to select
 * @param {function} params.onClick - called when an option is clicked
 * @param {string[]} [params.texts] - display texts for the options
 */
function Selector({ value, options, onClick, texts = null }) {
    /**
     * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} event
     */
    const handleClick = event => {
        event.stopPropagation();
        const { value } = event.currentTarget.dataset;
        onClick(value);
    };

    const selectors = options.map((option, i) => (
        <div
            data-value={option}
            key={option}
            onClick={handleClick}
            className={`Selector-Item ${value === option ? "selected" : ""}`}
        >
            {texts ? texts[i] : option}
        </div>
    ));
    return <div className="Selector">{selectors}</div>;
}

export default Selector;
