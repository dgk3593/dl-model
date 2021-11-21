import Setters from "components/Setters";

/**
 * @param {{ target: object, name: string }} props
 */
function PartController({ target, name }) {
    if (!target) return null;

    /**
     * @type { Array<{value: string}> }
     */
    const options = target.list.map(value => ({ value }));
    options.push({ value: "None" });

    /**
     * @type {import("components/Setters").PropDetails[]}
     */
    const props = [
        {
            propName: "current",
            label: name.replaceAll("_", " "),
            type: "select",
            options,
        },
    ];
    return <Setters target={target} propList={props} />;
}

export default PartController;
