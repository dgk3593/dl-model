import MeshEyeSelect from "./MeshEyeSelect";
import MeshMouthSelect from "./MeshMouthSelect";

function MeshFaceSelect({ target, onSelect }) {
    const face = target?.face;

    return (
        face?.type === "meshes" && (
            <div className="MeshFaceSelect">
                {face?.eyeList?.length > 0 && (
                    <MeshEyeSelect target={target} onSelect={onSelect} />
                )}

                {face?.mouthList?.length > 0 && (
                    <MeshMouthSelect target={target} onSelect={onSelect} />
                )}
            </div>
        )
    );
}

export default MeshFaceSelect;
