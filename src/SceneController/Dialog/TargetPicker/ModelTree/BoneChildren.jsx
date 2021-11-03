import Accordion from "components/Accordion";
import ModelTree from ".";

function BoneChildren({ list, label, defaultOpen = false, onSelect }) {
    return (
        <Accordion
            disableGutters
            defaultOpen={defaultOpen}
            className="BoneChildren"
        >
            <>{label}</>
            <>
                {list.map(child => (
                    <ModelTree
                        key={child.uniqueId}
                        target={child}
                        onSelect={onSelect}
                    />
                ))}
            </>
        </Accordion>
    );
}

export default BoneChildren;
