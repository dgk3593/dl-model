import { ArrayWithEvent } from "../utils/ArrayWithEvent";
import eventDispatcher from "../utils/eventDispatcher";

export default function addAttachFunction(container) {
    const { model, bones, uniqueId } = container;
    /**
     * @type { {[boneName: string]: *[]} | EventDispatcher }
     */
    const attachment = {};
    Object.defineProperty(attachment, "list", {
        get() {
            return Object.values(this).flat();
        },
    });
    Object.defineProperty(attachment, "traverse", {
        value: function (callback) {
            this.list.forEach(att => {
                callback(att);
                att.attachment?.traverse?.(callback);
            });
        },
    });

    const attach = (object, boneName = "root") => {
        attachment[boneName] = attachment[boneName] ?? new ArrayWithEvent();

        // bone name changed to avoid collision when attaching something with identical bone name
        const target =
            boneName === "root"
                ? model
                : bones.find(({ name }) => name === `${uniqueId}|${boneName}`);

        if (!target?.add) return;

        object.detach();
        target.add(object.model);
        attachment[boneName].push(object);

        object.parent = container;
        object.parentBone = boneName;

        container.dispatchEvent({ type: "AttachmentChanged" });
    };

    const remove = (object, boneName = "") => {
        const bone =
            boneName ||
            Object.keys(attachment).find(
                key => attachment[key].indexOf(object) !== -1
            );
        if (!bone) return;

        attachment[bone].remove?.(object);
        object.model.parent?.remove(object.model);

        container.dispatchEvent({ type: "AttachmentChanged" });
    };

    const detach = () => {
        model.parent?.remove(model);
        const { parent, parentBone } = container;

        if (!parent) return;
        parent.remove(container, parentBone);

        container.parent = container.parentBone = null;
    };

    const attachTo = (target, boneName = "root") => {
        container.detach();
        target?.attach?.(container, boneName);
    };

    const source = {
        attachment,
        parent: null,
        parentBone: "",
        attach,
        remove,
        detach,
        attachTo,
    };

    return Object.assign(container, source);
}
