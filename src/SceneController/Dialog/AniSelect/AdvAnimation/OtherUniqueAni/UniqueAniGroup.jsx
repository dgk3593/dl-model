import SimpleAniGallery from "../../components/SimpleAniGallery";
import { ModelIcon } from "components/DLIcon";

function UniqueAniGroup({
    expanded,
    user,
    name,
    animations,
    onClick,
    onSelect,
}) {
    return (
        <>
            <div
                className={`UniqueAniGroup ${expanded ? "selected" : ""}`}
                data-user={user}
                onClick={onClick}
            >
                <ModelIcon modelId={user} alt={name} />
                <h3>{name}</h3>
            </div>
            {expanded && (
                <div className="UniqueAniGroup-details">
                    <SimpleAniGallery list={animations} onClick={onSelect} />
                </div>
            )}
        </>
    );
}

export default UniqueAniGroup;
