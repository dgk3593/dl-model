import { useEffect } from "react";
import { useKey } from "@/SceneController/hook";

import UploadButton from "components/UploadButton";
import AnimationList from "@/SceneController/components/AnimationList";

import { loadModel } from "@/utils/loadModel";
import { file2DataURL } from "@/SceneController/helper/file2dataURL";

import viewer from "@/viewer";
import "./UploadedAni.css";

function UploadedAni({ onSelect }) {
    const { userData } = viewer;
    const [key, update] = useKey();
    useEffect(() => {
        const listener = userData.ani.addEventListener("change", update);
        return () => userData.ani.removeEventListener("change", listener);
    });

    /**
     * @param {FileList} files
     */
    const handleUpload = async files => {
        const list = Array.from(files);
        const urls = await Promise.all(list.map(file2DataURL));
        const models = await Promise.all(urls.map(loadModel));
        const newAni = models.flatMap(model => model.animations);
        userData.ani.push(...newAni);
    };

    return (
        <div className="UploadedAni">
            <UploadButton multiple mimeType=".fbx" onChange={handleUpload} />
            <AnimationList key={key} list={userData.ani} onSelect={onSelect} />
        </div>
    );
}

export default UploadedAni;
