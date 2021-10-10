import { FBX_SOURCE } from "@/dl-viewer/path";
import { getDefaultTexture } from "@/dl-viewer/wrapModel/addTextureFunctions";

export const getTexturePath = id =>
    `${FBX_SOURCE}/${id}/${getDefaultTexture(id)}.png`;
