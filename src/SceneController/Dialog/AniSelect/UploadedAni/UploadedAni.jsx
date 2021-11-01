import { useEffect } from "react";
import { useKey } from "@/SceneController/hook";
import UploadButton from "components/UploadButton";
import viewer from "@/viewer";
import { ArrayWithEvent } from "@/dl-viewer/utils/ArrayWithEvent";

function UploadedAni() {
    const { userData } = viewer;
    const [key, update] = useKey();
    useEffect(() => {
        userData.ani ?? (userData.ani = new ArrayWithEvent());

        const listener = userData.ani.addEventListener("change", update);
        return () => userData.ani.removeEventListener("change", listener);
    });

    const handleUpload = files => {
        console.log(files);
    };

    return (
        <div className="UploadedAni">
            Uploaded
            <UploadButton multiple mimeType=".fbx" onChange={handleUpload} />
        </div>
    );
}

export default UploadedAni;
