import { useSettings, useDispatch } from "context/SettingsContext";
import { asciiSet } from "helpers/consts";

import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import ColorButton from "components/ColorButton";

function AsciiParamsSetting({ openModal }) {
    const {
        ascii: { invert, color, bgColor, charSet },
    } = useSettings();
    const dispatch = useDispatch();

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
            <ColorButton
                fullWidth
                color={color}
                value="ascii-color"
                onClick={openModal}
            />

            <div className="AdvancedSettingsGroup-optionName">Background</div>
            <ColorButton
                fullWidth
                color={bgColor}
                value="ascii-bgColor"
                onClick={openModal}
            />
        </>
    );
}

export default AsciiParamsSetting;
