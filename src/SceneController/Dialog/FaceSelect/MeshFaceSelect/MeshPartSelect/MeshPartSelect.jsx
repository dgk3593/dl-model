import { getUvRange } from "./helper";
import MeshFaceButton from "../MeshFaceButton";
import "./MeshPartSelect.css";

/**
 * @param {string} input
 * @return {string}
 */
const capitalize = ([first, ...rest]) =>
    `${first.toUpperCase()}${rest.join("")}`;
/**
 * @param {object} props
 * @param {DLModel} props.target
 * @param {(index: number, part: string) => null} props.onSelect
 * @param {'eye' | 'mouth'} props.part
 */
function MeshPartSelect({ target, onSelect, part }) {
    const list = target?.face?.[`${part}List`];
    if (!list) return null;

    const uvRange = target.userData[`${part}Uv`] ?? getUvRange(list);
    target.userData[`${part}Uv`] = uvRange;

    const handleClick = event => {
        const { index, part } = event.currentTarget.dataset;
        onSelect(parseInt(index), part);
    };

    return (
        list && (
            <div className="MeshPartSelect">
                <h3>Select {capitalize(part)}</h3>
                <MeshFaceButton
                    id={target.id}
                    uvList={uvRange}
                    onClick={handleClick}
                    part={part}
                />
            </div>
        )
    );
}

export default MeshPartSelect;
