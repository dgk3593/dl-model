import "./styles/Selector.css";

function Selector({ value, options, onClick, texts }) {
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
