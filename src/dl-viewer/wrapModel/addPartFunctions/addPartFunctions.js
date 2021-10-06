import { getPartsData } from "@/dl-viewer/utils/data/getPartsData";
import { eyeRegex, mouthRegex } from "../addFaceFunctions/addFaceFunctions";

const partRegex = /mParts([A-Z])/;
const optionRegex = /mParts[A-Z]_([A-Za-z]*)/;

export default function addPartFunctions(container) {
    const { meshes, id } = container;

    /**
     * @type {THREE.Mesh[]}
     */
    const partMeshes = [];
    const otherMeshes = [];
    meshes.forEach(mesh => {
        const { name } = mesh;
        if (!name?.match) return;

        if (name.includes("Effect")) {
            mesh.visible = false;
        }

        if (name.match(/mParts/)) {
            partMeshes.push(mesh);
            return;
        }
        if (!name.match(eyeRegex) && !name.match(mouthRegex))
            otherMeshes.push(mesh);
    });
    if (!partMeshes.length && otherMeshes.length < 2) return container;

    const parts = Object.defineProperties(
        {},
        {
            list: {
                get() {
                    return Object.keys(this);
                },
                enumerable: false,
            },
            reset: {
                value: function () {
                    this.list.forEach(part => this[part].reset());
                },
                enumerable: false,
            },
            others: {
                get() {
                    return otherMeshes;
                },
                enumerable: false,
            },
        }
    );
    container.parts = parts;
    if (!partMeshes.length) return container;

    const partsData = getPartsData(id);
    const partNames = new Set(
        partMeshes.map(({ name }) => partRegex.exec(name)?.[1])
    );
    /**
     * @param {string} partName
     */
    const getPartMeshes = partName =>
        partMeshes
            .filter(({ name }) => name.includes(`mParts${partName}`))
            .sort((a, b) => (a.name > b.name ? 1 : -1));

    partNames.forEach(partName => {
        const partData = partsData?.[partName];
        const label = partData?.name.replace(/ /g, "_") ?? partName;
        const optionNames = partData?.options;
        const partMeshes = getPartMeshes(partName);
        partMeshes.forEach(mesh => (mesh.frustumCulled = false));

        const optionList = partMeshes.map(({ name }) => {
            const subpartCode = optionRegex.exec(name)?.[1] ?? "default";
            return optionNames?.[subpartCode] ?? subpartCode;
        });
        const defaultOption = partData?.default ?? optionList[0];

        parts[label] = {
            _meshes: partMeshes,
            list: optionList,
            default: defaultOption,
        };

        Object.defineProperties(parts[label], {
            current: {
                get() {
                    const visibleCount = partMeshes.filter(
                        ({ visible }) => visible
                    ).length;
                    if (visibleCount === 0) return "None";
                    if (visibleCount !== 1) return "custom";

                    const active = partMeshes.find(({ visible }) => visible);
                    const subpartCode = active.name.match(optionRegex)?.[1];
                    const optionName =
                        optionNames?.[subpartCode ?? "default"] || "default";

                    return optionName;
                },
                /**
                 * @param {string} option
                 */
                set(option) {
                    if (option.toLowerCase() === "none") {
                        this._meshes.forEach((mesh, i) => {
                            mesh.visible = false;
                        });
                        return;
                    }

                    if (!this.list.includes(option)) return;
                    const index = this.list.indexOf(option);

                    this._meshes.forEach((mesh, i) => {
                        mesh.visible = i === index;
                    });
                },
            },
            index: {
                get() {
                    return this.current === "custom"
                        ? NaN
                        : this.list.indexOf(this.current);
                },
                /**
                 * @param {number | string} idx
                 */
                set(index) {
                    this._meshes.forEach((mesh, i) => {
                        mesh.visible = i === Number(index);
                    });
                },
            },
            reset: {
                value: function () {
                    this.current = this.default;
                },
            },
        });
    });

    parts.reset();
    container.parts = parts;

    return container;
}
