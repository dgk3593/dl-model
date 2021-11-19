import { useAppData } from "@/data";
import { Fragment } from "react";
import { SetVector, SetNumber } from "components/Setters";
import { MaterialController, OutlineController } from "..";
import BodyPartsController from "../BodyPartsController";
import ParticleController from "../ParticleController";
import FaceController from "../FaceController";
import AnimationController from "../AnimationController";
import AttachmentController from "../AttachmentController";
import TextureController from "../TextureController";

import {
    ThreeSixty,
    OpenInFull,
    PersonOutlined,
    Texture,
    AutoAwesome,
    ControlCamera,
    Extension,
    Face,
    DirectionsRun,
    CropOriginal,
    Attachment,
} from "@mui/icons-material";

/**
 * Check if the model has choices of texture
 * @param {string} id
 */
const hasTexture = id => {
    return !!useAppData.getState()?.["model-texture"]?.[id];
};

/**
 * controller options common to all models
 */
export const defaultOptions = [
    "Position",
    "Rotation",
    "Scale",
    "Outline",
    "Material",
    "Particles",
    "Animation",
    "Attachment",
];

/**
 * icon for controller
 */
const icons = {
    Position: ControlCamera,
    Rotation: ThreeSixty,
    Scale: OpenInFull,
    Outline: PersonOutlined,
    Material: Texture,
    Particles: AutoAwesome,
    Animation: DirectionsRun,
    Attachment: Attachment,
    "Body Parts": Extension,
    Face: Face,
    Texture: CropOriginal,
};

/**
 * @param {{ target: DLModel, type: string, [key: string]: * }} props
 */
export const Controller = ({ target, type, ...others }) => {
    switch (type) {
        case "Position":
            return (
                <SetVector
                    key="position"
                    target={target.position}
                    step={0.005}
                    {...others}
                />
            );

        case "Rotation":
            return (
                <SetVector
                    key="rotation"
                    target={target.rotation}
                    min={-1}
                    max={1}
                    step={0.05}
                    scale={Math.PI * 2}
                    {...others}
                />
            );

        case "Scale":
            return (
                <SetNumber
                    target={target}
                    propName="scale"
                    label="Scale"
                    step={0.05}
                    {...others}
                />
            );

        case "Outline":
            return <OutlineController target={target} />;

        case "Material":
            return <MaterialController target={target} />;

        case "Particles":
            return <ParticleController target={target} />;

        case "Animation":
            return <AnimationController target={target} />;

        case "Attachment":
            return <AttachmentController target={target} />;

        case "Face":
            return <FaceController target={target} />;

        case "Body Parts":
            return <BodyPartsController target={target} />;

        case "Texture":
            return <TextureController target={target} />;

        default:
            return <></>;
    }
};

/**
 * get the controller options for a DL model
 * @param {DLModel} target
 * @return {string[]}
 */
export const getControlList = target => {
    const options = [...defaultOptions];
    if (target.face) options.push("Face");
    if (target.parts) options.push("Body Parts");
    if (hasTexture(target.id)) options.push("Texture");

    return options;
};

/**
 * convert a list of control options to list of SelectBox options
 * @param {string[]} list
 * @return {import("components/SelectBox/SelectBox").SelectBoxOption[]}
 */
export const getSelectOptions = list => list.map(value => ({ value }));

/**
 * convert a list of control options to list of tabs for IconTabBar
 * @param {string[]} list
 * @return {import("components/IconTabBar/IconTabBar").IconTabDetail[]}
 */
export const getTabs = list =>
    list.map(value => {
        const Icon = icons[value] ?? Fragment;
        return { value, icon: <Icon /> };
    });
