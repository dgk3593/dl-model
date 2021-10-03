import { useActiveModel } from "@/state";
import { EyeBox, MouthBox } from "../UvFaceSelect/FaceBox";
import { MeshEyeSelect, MeshMouthSelect } from "../MeshFaceSelect";
import { Button } from "@mui/material";

const indices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const uvComponent = {
    eye: EyeBox,
    mouth: MouthBox,
};

const meshComponent = {
    eye: MeshEyeSelect,
    mouth: MeshMouthSelect,
};

function PartialFaceSelectBody({ part, onSelect }) {
    const { activeModel } = useActiveModel();
    const type = activeModel?.face?.type;

    const handleSelect = event => {
        const index = parseInt(event.currentTarget.dataset.index);
        onSelect(index, part);
    };

    switch (type) {
        case "uv":
            const UvComponent = uvComponent[part];
            const texture = activeModel.face[`${part}Texture`];
            return (
                <div className="PartialFaceSelect-body">
                    {indices.map(index => (
                        <UvComponent
                            index={index}
                            texture={texture}
                            key={index}
                            data-index={index}
                            onClick={handleSelect}
                        />
                    ))}
                    <Button data-index="0" onClick={handleSelect}>
                        Remove
                    </Button>
                </div>
            );
        case "meshes":
            const MeshComponent = meshComponent[part];
            return (
                <div className="PartialFaceSelect-body">
                    <MeshComponent target={activeModel} onSelect={onSelect} />
                </div>
            );
        default:
            return <>Not Available</>;
    }
}

export default PartialFaceSelectBody;
