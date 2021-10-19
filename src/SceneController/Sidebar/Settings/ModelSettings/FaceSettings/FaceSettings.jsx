import { useActiveModel } from "@/state";
import { Mood, Face } from "@mui/icons-material";
import { Button } from "@mui/material";

function FaceSettings({ handleClick }) {
    const { activeModel } = useActiveModel();
    const { face } = activeModel;
    if (!face) return <></>;

    return (
        <>
            <Button
                variant="contained"
                data-mode="face"
                onClick={handleClick}
                startIcon={<Mood />}
            >
                Facial Expression
            </Button>
            {face.type === "uv" && (
                <Button
                    variant="contained"
                    data-mode="faceTexture"
                    onClick={handleClick}
                    startIcon={<Face />}
                >
                    Face Texture
                </Button>
            )}
        </>
    );
}

export default FaceSettings;
