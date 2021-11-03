import { lazy } from "react";

const BackgroundPicker = lazy(() => import("./BackgroundPicker"));
const ModelCatalog = lazy(() => import("./ModelCatalog"));
const AniSelect = lazy(() => import("./AniSelect"));
const AddWeapon = lazy(() => import("./AddWeapon"));
const ColorSelect = lazy(() => import("./ColorSelect"));
const FaceSelect = lazy(() => import("./FaceSelect"));
const FaceTexture = lazy(() => import("./FaceTexture"));
const AttachmentManager = lazy(() => import("./AttachmentManager"));
const PartialFaceSelect = lazy(() => import("./FaceSelect/PartialFaceSelect"));
const TargetPicker = lazy(() => import("./TargetPicker"));

export const dialogBody = {
    background: BackgroundPicker,
    model: ModelCatalog,
    animation: AniSelect,
    weapon: AddWeapon,
    color: ColorSelect,
    face: FaceSelect,
    faceTexture: FaceTexture,
    attachment: AttachmentManager,
    target: TargetPicker,
    eye: ({ onSelect }) => <PartialFaceSelect part="eye" onSelect={onSelect} />,
    mouth: ({ onSelect }) => (
        <PartialFaceSelect part="mouth" onSelect={onSelect} />
    ),
};
