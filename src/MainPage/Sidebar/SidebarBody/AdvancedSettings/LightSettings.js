import { useContext, lazy, Suspense } from "react";
import { DispatchContext, SettingsContext } from "context/SettingsContext";

import Button from "@material-ui/core/Button";

import { defaultLights } from "helpers/consts";

import SettingsGroup from "./AdvancedSettingsGroup";
const LightParamsSetting = lazy(() => import("./LightParamsSetting"));

function LightSettings({ openModal, openAtStart = false }) {
    const { lights: currentLights } = useContext(SettingsContext);

    const dispatch = useContext(DispatchContext);

    const resetSettings = event => {
        event.stopPropagation();
        overwriteLights(defaultLights);
    };

    const overwriteLights = newLights => {
        const action = {
            type: "overwrite",
            key: "lights",
            value: newLights,
        };
        dispatch(action);
    };

    const updateIntensity = id => (_, value) => {
        const newLights = currentLights.map(light =>
            light.id === id ? { ...light, intensity: value } : light
        );
        overwriteLights(newLights);
    };

    const updatePosition = id => position => {
        const newLights = currentLights.map(light =>
            light.id === id ? { ...light, position } : light
        );
        overwriteLights(newLights);
    };

    const toggleLight = event => {
        const { id: targetId } = event.currentTarget.dataset;
        const targetLight = currentLights.find(({ id }) => id === targetId);
        const currentState = targetLight.enable;
        const newLights = currentLights.map(light =>
            light.id === targetId ? { ...light, enable: !currentState } : light
        );
        overwriteLights(newLights);
    };

    const colorBtnClick = id => {
        const mode = `Lights-${id}`;
        const handleSelect = color => {
            const newLights = currentLights.map(light =>
                light.id === id ? { ...light, color } : light
            );
            overwriteLights(newLights);
        };
        openModal(mode, handleSelect);
    };

    const titleButton = (
        <Button variant="contained" onClick={resetSettings}>
            Reset
        </Button>
    );

    return (
        <SettingsGroup
            title="Lights"
            titleButton={titleButton}
            openAtStart={openAtStart}
        >
            {currentLights.map(({ id, ...params }) => (
                <Suspense key={id} fallback={<div>Loading</div>}>
                    <LightParamsSetting
                        id={id}
                        toggleLight={toggleLight}
                        colorBtnClick={colorBtnClick}
                        updatePosition={updatePosition(id)}
                        updateIntensity={updateIntensity(id)}
                        {...params}
                    />
                </Suspense>
            ))}
        </SettingsGroup>
    );
}
export default LightSettings;
