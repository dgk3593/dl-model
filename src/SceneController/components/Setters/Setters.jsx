import { setterMap, SetVector } from ".";
import "./Setters.css";
import SetWithSlider from "./SetWithSlider";

/**
 * @typedef {{
 *      propName: string,
 *      label?: string,
 *      title?: string,
 *      type: 'string' | 'number' | 'boolean' | 'slider' | 'color' | 'select' | 'vector',
 *      onBeforeChange?: (newValue: *) => void,
 *      onChange?: (newValue: *) => void,
 *      [key: string]: *
 * }} PropDetails
 */
/**
 * @param {object} props
 * @param {object} props.target
 * @param {PropDetails[]} props.propList
 */
function Setters({ target, propList }) {
    const setters = propList.map(prop => {
        const { propName, label = propName, title, type, ...others } = prop;
        const Setter = setterMap[type];

        switch (type) {
            case "slider":
                return (
                    <SetWithSlider
                        target={target}
                        propName={propName}
                        label={label}
                        title={title}
                        {...others}
                    />
                );
            case "vector":
                return (
                    <>
                        <div className="Setters-label vector" {...{ title }}>
                            {label}
                        </div>
                        <SetVector target={target[propName]} {...others} />
                    </>
                );

            default:
                return (
                    <>
                        <div className="Setters-label" {...{ title }}>
                            {label}
                        </div>
                        <Setter
                            target={target}
                            propName={propName}
                            {...others}
                        />
                    </>
                );
        }
    });
    return <div className="Setters">{setters}</div>;
}

export default Setters;
