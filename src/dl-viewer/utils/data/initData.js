import { initFaceOffset, initCameraData, initControlData } from ".";
import { initPartsData } from "./getPartsData";

export const initViewerData = () =>
    Promise.all([
        initFaceOffset(),
        initCameraData(),
        initControlData(),
        initPartsData(),
    ]);
