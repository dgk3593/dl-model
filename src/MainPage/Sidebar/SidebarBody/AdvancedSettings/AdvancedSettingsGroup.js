import useToggleState from "hooks/useToggleState";

import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import "./styles/AdvancedSettingsGroup.css";

function OutlineSettings({
    children,
    openAtStart = false,
    title,
    titleButton,
}) {
    const [expand, toggleExpand] = useToggleState(openAtStart);

    return (
        <div className="AdvancedSettingsGroup">
            <div
                className="AdvancedSettingsGroup-header"
                onClick={toggleExpand}
            >
                <IconButton size="small">
                    {expand ? (
                        <KeyboardArrowUpIcon />
                    ) : (
                        <KeyboardArrowDownIcon />
                    )}
                </IconButton>
                <div className="AdvancedSettingsGroup-title">{title}</div>
                {titleButton && (
                    <div className="AdvancedSettingsGroup-titleBtn">
                        {titleButton}
                    </div>
                )}
            </div>
            <Collapse in={expand} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </div>
    );
}

export default OutlineSettings;
