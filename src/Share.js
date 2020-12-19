import { useState } from "react";

import { DialogContent, DialogTitle, DialogTop } from "components/CustomDialog";
import ShareContent from "./ShareContent";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function Share({ toggleControlOpen }) {
    const [method, setMethod] = useState(0);

    const handleChange = (_, newValue) => {
        setMethod(newValue);
    };

    return (
        <>
            <DialogTop>
                <DialogTitle onClose={toggleControlOpen}>Share</DialogTitle>
                <AppBar position="static">
                    <Tabs centered value={method} onChange={handleChange}>
                        <Tab label="Link" />
                        <Tab label="QR" />
                        <Tab label="Embed" />
                    </Tabs>
                </AppBar>
            </DialogTop>
            <DialogContent dividers className="Share-content">
                <ShareContent method={method} />
            </DialogContent>
        </>
    );
}

export default Share;
