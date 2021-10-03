import "./ModelButton.css";

function ModelButton({ id, name, noIcon = false, onClick }) {
    const path = `img/icon/${id}.png`;

    const weaponIcon = !noIcon && (
        <img src={path} alt={id} className="ModelButton-icon" />
    );

    return (
        <div
            className="ModelButton"
            data-value={id}
            data-name={name}
            onClick={onClick}
        >
            {weaponIcon}
            <div className="ModelButton-name">{name}</div>
        </div>
    );
}

export default ModelButton;
