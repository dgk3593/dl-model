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
    const Light = lightConstructor[type];
    if (!Light) return null;

    const defaultParams = DEFAULT_LIGHT_PARAMS[type];
    const { color, intensity, ...otherParams } = defaultParams;

    const light = new Light(color, intensity);
    light.name = light.type?.replace?.("Light", "");

    const Helper = helperContructor[type];
    if (Helper) {
        light.helper = new Helper(light);
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

    Object.entries(otherParams).forEach(([prop, value]) => {
        if (light[prop].isVector3) {
            light[prop].set(...value);
        } else {
            light[prop] = value;
        }
    });

    return light;
};
