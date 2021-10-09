import Setters from "components/Setters";

function PartController({ target, name }) {
    if (!target) return null;

    const options = target.list.map(value => ({ value }));

    options.push({ value: "None" });

    const props = [
        {
            propName: "current",
            label: name.replace(/_/g, " "),
            type: "select",
            options,
        },
    ];
    return <Setters target={target} propList={props} />;
}

export default PartController;
