import { useContext, lazy, Suspense } from "react";
import { DispatchContext, SettingsContext } from "./context/SettingsContext";

import Button from "@material-ui/core/Button";

import SettingsGroup from "./AdvancedSettingsGroup";
const LightParamsSettings = lazy(() => import("./LightParamsSettings"));

function LightSettings({ openControl }) {
    const {
        scene: { lights: currentLights },
    } = useContext(SettingsContext);

    const dispatch = useContext(DispatchContext);

    const resetSettings = event => {
        event.stopPropagation();
        const action = {
            type: "reset",
            key: "scene",
            value: ["lights"],
        };
        dispatch(action);
    };

    const updateIntensity = id => (_, value) => {
        const newLights = currentLights.map(light => {
            if (light.lightId === id) {
                return { ...light, intensity: value };
            }
            return light;
        });
        const action = {
            type: "update",
            key: "scene",
            value: { lights: newLights },
        };
        dispatch(action);
    };

    const updatePosition = id => position => {
        const newLights = currentLights.map(light =>
            light.lightId === id ? { ...light, position } : light
        );
        const action = {
            type: "update",
            key: "scene",
            value: { lights: newLights },
        };
        dispatch(action);
    };

    const toggleLight = event => {
        const { id } = event.currentTarget.dataset;
        const targetLight = currentLights.find(({ lightId }) => lightId === id);
        const currentState = targetLight.enable;
        const newLights = currentLights.map(light => {
            if (light.lightId === id) {
                return { ...light, enable: !currentState };
            }
            return light;
        });

        const action = {
            type: "update",
            key: "scene",
            value: { lights: newLights },
        };
        dispatch(action);
    };

    const colorBtnClick = event => {
        const { value: mode } = event.currentTarget.dataset;
        openControl(mode);
    };

    const titleButton = (
        <Button variant="contained" onClick={resetSettings}>
            Reset
        </Button>
    );

    return (
        <SettingsGroup title="Lights" titleButton={titleButton}>
            {currentLights.map(({ lightId: id, ...params }) => {
                return (
                    <Suspense key={id} fallback={<div>Loading</div>}>
                        <LightParamsSettings
                            id={id}
                            toggleLight={toggleLight}
                            colorBtnClick={colorBtnClick}
                            updatePosition={
                                params.type !== "Ambient"
                                    ? updatePosition(id)
                                    : null
                            }
                            updateIntensity={updateIntensity(id)}
                            {...params}
                        />
                    </Suspense>
                );
            })}
        </SettingsGroup>
    );
}
export default LightSettings;
