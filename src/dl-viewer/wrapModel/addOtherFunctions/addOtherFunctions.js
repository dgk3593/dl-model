import { disposeContainerObject, vec3ToStr } from "./helper";

const defaultVec = {
    position: ",,",
    rotation: ",,",
    scale: "1,1,1",
};

const shortKey = {
    position: "pos",
    rotation: "rot",
    scale: "scl",
};

export default function addOtherFunctions(container) {
    return Object.assign(container, {
        ...(container.isDLModel && {
            toString() {
                const { id, animation, outline, material } = this;

                const vectors = Object.entries(defaultVec).map(
                    ([key, defaultVal]) => {
                        const str = vec3ToStr(this[key]);

                        return str === defaultVal
                            ? ""
                            : `${shortKey[key]}=${str}`;
                    }
                );

                return [`id=${id}`, ...vectors, animation, outline, material]
                    .filter(str => `${str}`)
                    .join("/");
            },
        }),

        dispose() {
            const { attachment, parent, parentBone } = this;
            attachment.list.forEach(att => att.dispose());
            parent?.remove(this, parentBone);

            this.dispatchEvent({ type: "dispose" });
            disposeContainerObject(this);
        },
    });
}
