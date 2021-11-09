import React, { useEffect } from "react";
import { useKey } from "@/SceneController/hook";

import Accordion from "components/Accordion";
import MenuButton from "components/MenuButton";
import LightController, {
    lightTypes,
} from "components/controller/LightController";
import { Add, LightMode } from "@mui/icons-material";

import viewer from "@/viewer";
import "../../SettingGroup.css";

function LightControl() {
    const [key, updateKey] = useKey();
    const list = viewer.light.list;

    useEffect(() => {
        const listener = list.addEventListener("change", updateKey);

        return () => list.removeEventListener("change", listener);
    }, []);

    /**
     * @type { (type: string) => void }
     */
    const addLight = type => viewer.light.add(type);

    return (
        <Accordion
            disableGutters
            className="LightControl SettingGroup with-subgroup"
        >
            <>
                <div className="title">
                    <LightMode />
                    Light
                </div>
                <MenuButton
                    title="Add Light"
                    onClick={addLight}
                    options={lightTypes}
                >
                    <Add />
                </MenuButton>
            </>

            <React.Fragment key={key}>
                {list.length
                    ? list.map((light, i) => (
                          <LightController key={`${key + i}`} target={light} />
                      ))
                    : "Click + to add light"}
            </React.Fragment>
        </Accordion>
    );
}

export default LightControl;
