import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import { AnimationClip } from "three";
import "./AnimationList.css";
import EditableText from "./EditableText";

/**
 * @param {object} props
 * @param {AnimationClip[]} props.list
 * @param {(AnimationClip) => void} props.onSelect
 */
function AnimationList({ list, onSelect }) {
    const handleChange = event => {
        const { value } = event.target;
        const { uuid } = event.target.dataset;
        const clip = list.find(cl => cl.uuid === uuid);
        clip.name = value;
    };

    const handleDelete = event => {
        const { uuid } = event.target.dataset;
        const index = list.findIndex(cl => cl.uuid === uuid);
        index !== -1 && list.splice(index, 1);
    };

    return (
        <div className="AnimationList">
            {list?.map(item => (
                <>
                    <EditableText
                        initText={item.name}
                        onChange={handleChange}
                        className="AnimationList-aniName"
                        data-uuid={item.uuid}
                    />
                    <Button
                        data-code={`ex:${item.uuid}`}
                        data-name={item.name}
                        onClick={onSelect}
                        variant="contained"
                        title="Select this animation"
                    >
                        Select
                    </Button>
                    <Button
                        data-uuid={item.uuid}
                        onClick={handleDelete}
                        variant="contained"
                        title="Delete this animation"
                    >
                        <Delete />
                    </Button>
                </>
            ))}
        </div>
    );
}

export default AnimationList;
