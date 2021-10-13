import { forwardRef } from "react";
import { useToggleState } from "hook/useToggleState";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import "./Accordion.css";

/**
 * @typedef {object} AccordionProps
 * @property {[summary: JSX.Element, details: JSX.Element]} props.children
 * @property {string} [props.className]
 * @property {boolean} [props.defaultOpen]
 * @property {boolean} [props.disableGutters]
 */
/**
 * @type {React.FC<AccordionProps>}
 */
const Accordion = forwardRef((props, ref) => {
    const {
        children,
        className = "",
        defaultOpen = false,
        disableGutters = false,
        ...others
    } = props;
    const [open, toggleOpen] = useToggleState(defaultOpen);
    const fullClassName = `Accordion ${disableGutters ? "noGutters" : ""} ${
        open ? "open" : ""
    } ${className}`;

    const arrow = open ? <ArrowDropUp /> : <ArrowDropDown />;

    return (
        <div className={fullClassName} {...others} ref={ref}>
            {children[0] && (
                <div onClick={toggleOpen} className="Accordion-summary">
                    {arrow}
                    {children[0]}
                </div>
            )}
            {open && children[1] && (
                <div className="Accordion-details">{children[1]}</div>
            )}
        </div>
    );
});

export default Accordion;
