import { useActiveModel } from "@/state";
import { DialogTitle, DialogContent } from "@mui/material";
import UvFaceSelect from "./UvFaceSelect";
import MeshFaceSelect from "./MeshFaceSelect";

const selector = {
    uv: UvFaceSelect,
    meshes: MeshFaceSelect,
};

const unavailableStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    fontSize: "large",
};

function FaceSelect({ target, onSelect, onAfterSelect }) {
    const { activeModel } = useActiveModel();
    target ??= activeModel;
    const type = target?.face?.type;

    const Selector = selector[type] ?? (() => <></>);
    const handleSelect = (...args) => {
        onSelect(...args);
        onAfterSelect?.();
    };

    return target?.face ? (
        <div className="FaceSelect">
            <DialogTitle sx={{ textAlign: "center" }}>Face Select</DialogTitle>
            <DialogContent sx={{ padding: "1rem" }}>
                <Selector target={target} onSelect={handleSelect} />
            </DialogContent>
        </div>
    ) : (
        <>
            <DialogTitle sx={{ textAlign: "center" }}>Face Select</DialogTitle>
            <div style={unavailableStyle}>Not available</div>
        </>
    );
}

export default FaceSelect;
