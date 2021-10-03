import "./styles.css";

function ElementIcon({ element, ...others }) {
    const path = `img/appIcon/element_${element}.png`;

    return element ? (
        <img
            src={path}
            alt={element}
            className="DLIcon ElementIcon"
            {...others}
        />
    ) : (
        <></>
    );
}

export default ElementIcon;
