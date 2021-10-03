import { nanoid } from "nanoid";
import { passData } from ".";

export function createPassController(pass) {
    const { name, type } = pass;
    /**
     * @type {string[]}
     */
    const propList = passData[type].propList ?? [];

    const params = {};
    propList.forEach(prop => {
        Object.defineProperty(params, prop, {
            get() {
                return pass[prop];
            },
            set(value) {
                pass[prop] = value;
            },
            enumerable: true,
        });
    });

    const controller = {
        target: pass,
        name,
        type,
        params,
        id: nanoid(),
    };
    return controller;
}
