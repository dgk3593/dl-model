import { useToggleState } from "hook/useToggleState";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import "./Accordion.css";

/**
 * @param {object} props
 * @param {[summary: JSX.Element, details: JSX.Element]} props.children
 * @param {string} [props.className]
 * @param {boolean} [props.defaultOpen]
 * @param {boolean} [props.disableGutters]
 */
function Accordion({
    children,
    className = "",
    defaultOpen = false,
    disableGutters = false,
    ...others
}) {
    const [open, toggleOpen] = useToggleState(defaultOpen);
    const fullClassName = `Accordion ${disableGutters ? "noGutters" : ""} ${
        open ? "open" : ""
    } ${className}`;

    const arrow = open ? <ArrowDropUp /> : <ArrowDropDown />;

    return (
        <div className={fullClassName} {...others}>
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
}

export default Accordion;
