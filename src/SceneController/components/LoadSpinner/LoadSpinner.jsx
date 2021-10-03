import "./LoadSpinner.css";

function LoadSpinner({ color = "black" }) {
    const style = {};
    style["--color"] = color;

    return (
        <div className="LoadSpinner" style={style}>
            <div />
        </div>
    );
}

export default LoadSpinner;
