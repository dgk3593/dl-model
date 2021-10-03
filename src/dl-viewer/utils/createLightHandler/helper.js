import * as THREE from "three";
import { DEFAULT_LIGHT_PARAMS } from "../../defaultParams";

const lightConstructor = {
    directional: THREE.DirectionalLight,
    ambient: THREE.AmbientLight,
    point: THREE.PointLight,
};

const helperContructor = {
    directional: THREE.DirectionalLightHelper,
    point: THREE.PointLightHelper,
};

export const createLight = type => {
    if (!lightConstructor[type]) return null;

    const defaultParams = DEFAULT_LIGHT_PARAMS[type];
    const { color, intensity, ...others } = defaultParams;

    const light = new lightConstructor[type](color, intensity);
    light.name = light.type?.replace?.("Light", "");

    if (helperContructor[type]) {
        light.helper = new helperContructor[type](light);
        Object.defineProperty(light, "showHelper", {
            get() {
                return light.helper.visible;
            },
            set(value) {
                light.helper.visible = !!value;
                light.helper.update();
            },
        });
        light.showHelper = false;
    }

    Object.defineProperty(light, "colorCode", {
        get() {
            return "#" + this.color.getHexString();
        },
        set(code) {
            this.color = new THREE.Color(code);
            this.helper?.update?.();
        },
    });

    Object.entries(others).forEach(([prop, value]) => {
        if (light[prop].isVector3) {
            light[prop].set(...value);
        } else {
            light[prop] = value;
        }
    });

    return light;
};
