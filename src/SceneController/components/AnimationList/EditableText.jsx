import { useState, useEffect } from "react";
import { useToggleState } from "hook/useToggleState";
import { Button } from "@mui/material";
import { Check, Edit } from "@mui/icons-material";

function EditableText({ initText, onChange = value => void 0, ...others }) {
    const [text, setText] = useState(initText);
    const [edit, toggleEdit] = useToggleState();

    const handleChange = event => {
        const { value } = event.target;
        setText(value);
        onChange(event);
    };

    const handleKeyUp = event => {
        event.keyCode === 13 && toggleEdit();
    };

    useEffect(() => {
        setText(initText);
    }, [initText]);

    return edit ? (
        <>
            <Button title="Save" onClick={toggleEdit}>
                <Check />
            </Button>
            <input
                value={text}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                {...others}
            />
        </>
    ) : (
        <>
            <Button title="Edit" onClick={toggleEdit}>
                <Edit />
            </Button>
            <div {...others}>{text}</div>
        </>
    );
}

export default EditableText;
