import { forwardRef } from "react";
import { useToggleState } from "hook/useToggleState";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import "./Accordion.css";

/**
 * @typedef {object} AccordionProps
 * @property {[summary: JSX.Element, details: JSX.Element]} props.children
 * @property {string} [props.className]
 * @property {boolean} [props.defaultOpen] - default open state
 * @property {boolean} [props.disableGutters] - disable gutters
 */
/**
 * @type {React.FC<AccordionProps>}
 */
const Accordion = forwardRef((props, ref) => {
    const {
        children = [],
        className = "",
        defaultOpen = false,
        disableGutters = false,
        ...others
    } = props;
    const [open, toggleOpen] = useToggleState(defaultOpen);
    const fullClassName = `Accordion ${disableGutters ? "noGutters" : ""} ${
        open ? "open" : ""
    } ${className}`;

    const [summary, details] = children;
    const arrow = open ? <ArrowDropUp /> : <ArrowDropDown />;

    return (
        <div className={fullClassName} {...others} ref={ref}>
            {summary && (
                <div onClick={toggleOpen} className="Accordion-summary">
                    {arrow}
                    {summary}
                </div>
            )}
            {open && details && (
                <div className="Accordion-details">{details}</div>
            )}
        </div>
    );
});

export default Accordion;
