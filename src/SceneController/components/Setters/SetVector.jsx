import SetNumbers from "./SetNumbers";

const axes = ["x", "y", "z", "w"];

/**
 * @param {object} props
 * @param {object} props.target
 * @param {2 | 3 | 4} [props.dimension]
 * @param {number} [props.scale]
 * @param {number} [props.min]
 * @param {number} [props.max]
 * @param {number} [props.step]
 * @param {(values: number[]) => void} [props.onBeforeChange]
 * @param {(values: number[]) => void} [props.onChange]
 */
function SetVector({
    target,
    dimension = 3,
    scale = 1,
    min,
    max,
    step,
    ...others
}) {
    const keyList = axes.slice(0, dimension);
    const inputProps = { min, max, step };

    return (
        <SetNumbers
            target={target}
            keyList={keyList}
            scale={scale}
            inputProps={inputProps}
            className="SetVector SetNumbers"
            data-dimension={dimension}
            {...others}
        />
    );
}

export default SetVector;
