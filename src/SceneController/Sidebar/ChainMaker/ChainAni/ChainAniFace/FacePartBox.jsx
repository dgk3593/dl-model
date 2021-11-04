import MouthBox from "@/SceneController/Dialog/FaceSelect/UvFaceSelect/FaceBox/MouthBox";
import EyeBox from "@/SceneController/Dialog/FaceSelect/UvFaceSelect/FaceBox/EyeBox";
import { useChainMakerState } from "@/state";
import MeshFaceBox from "./MeshFaceBox";

const UvPart = ({ part, ...others }) =>
    part === "eye" ? <EyeBox {...others} /> : <MouthBox {...others} />;

function FacePartBox({ part, index, ...others }) {
    const { target } = useChainMakerState();
    const face = target?.face;

    switch (face?.type) {
        case "uv":
            return (
                <div {...others} data-part={part}>
                    {index ? (
                        <UvPart
                            part={part}
                            texture={face[`${part}Texture`]}
                            index={index}
                        />
                    ) : (
                        <>Set</>
                    )}
                </div>
            );
        case "meshes":
            const isAvailable = !!face?.[`${part}List`]?.length;
            if (!isAvailable)
                return <div style={{ cursor: "default" }}>N/A</div>;

            return (
                <div {...others} data-part={part}>
                    {index ? (
                        <MeshFaceBox part={part} index={index} />
                    ) : (
                        <>Set</>
                    )}
                </div>
            );
        default:
            return <></>;
    }
}

export default FacePartBox;
