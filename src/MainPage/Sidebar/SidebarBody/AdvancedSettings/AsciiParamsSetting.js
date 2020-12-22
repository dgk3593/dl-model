import { useContext } from "react";
import { asciiSet } from "helpers/consts";

import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { DispatchContext, SettingsContext } from "context/SettingsContext";
import { getTextColor } from "helpers/helpers";

function AsciiParamsSetting(props) {
    const { openControl } = props;

    const {
        ascii: { invert, color, bgColor, charSet },
    } = useContext(SettingsContext);
    const dispatch = useContext(DispatchContext);

    const currentSet = asciiSet.findIndex(set => set === charSet);

    const toggleInvert = () => {
        const action = {
            type: "toggle",
            key: "ascii",
            value: ["invert"],
        };
        dispatch(action);
    };

    const handleChange = event => {
        const { value: setNumber } = event.target;
        const action = {
            type: "update",
            key: "ascii",
            value: { charSet: asciiSet[setNumber] },
        };
        dispatch(action);
    };

    const handleColorBtnClick = e => {
        openControl(e.currentTarget.dataset.value);
    };

    const options = asciiSet.map((_, i) => (
        <MenuItem value={i} key={i}>
            {`Set ${i}`}
        </MenuItem>
    ));

    return (
        <>
            <div className="AdvancedSettingsGroup-optionName">Invert</div>
            <Button fullWidth variant="contained" onClick={toggleInvert}>
                {invert ? "ON" : "OFF"}
            </Button>
            <div className="AdvancedSettingsGroup-optionName">
                Character Set
            </div>
            <div>
                <Select fullWidth onChange={handleChange} value={currentSet}>
                    {options}
                </Select>
            </div>
            <div className="AdvancedSettingsGroup-optionName">Color</div>
            <Button
                fullWidth
                style={{
                    backgroundColor: color,
                    color: getTextColor(color),
                }}
                data-value="ascii-color"
                onClick={handleColorBtnClick}
            >
                {color}
            </Button>
            <div className="AdvancedSettingsGroup-optionName">Background</div>
            <Button
                fullWidth
                style={{
                    backgroundColor: bgColor,
                    color: getTextColor(bgColor),
                }}
                data-value="ascii-bgColor"
                onClick={handleColorBtnClick}
            >
                {bgColor}
            </Button>
        </>
    );
}

export default AsciiParamsSetting;
