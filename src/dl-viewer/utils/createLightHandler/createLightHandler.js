import { ArrayWithEvent } from "../ArrayWithEvent";
import { createLight } from "./helper";

/**
 * @param {import('@/dl-viewer/DLViewer').DLViewer} viewer
 */
export function createLightHandler(viewer) {
    const lightHandler = {
        list: new ArrayWithEvent(),

        add: type => {
            const newLight = createLight(type);
            if (!newLight) return;

            viewer.scene.add(newLight);
            if (newLight.helper) {
                viewer.scene.add(newLight.helper);
                newLight.helper.update();
            }
            lightHandler.list.push(newLight);

            newLight.remove = () => {
                lightHandler.list.remove(newLight);
                if (newLight.helper) {
                    newLight.parent?.remove(newLight.helper);
                    newLight.helper.dispose?.();
                }
                newLight.parent?.remove(newLight);
                newLight.dispose?.();
            };

            return newLight;
        },
    };
    return lightHandler;
}
