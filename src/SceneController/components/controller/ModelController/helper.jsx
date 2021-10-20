import { Fragment } from "react";
import { SetVector, SetNumber } from "components/Setters";
import { MaterialController, OutlineController } from "..";
import BodyPartsController from "../BodyPartsController";
import ParticleController from "../ParticleController";

import {
    ThreeSixty,
    OpenInFull,
    PersonOutlined,
    Texture,
    AutoAwesome,
    ControlCamera,
    Extension,
} from "@mui/icons-material";

export const defaultOptions = [
    "Position",
    "Rotation",
    "Scale",
    "Outline",
    "Material",
    "Particles",
];

const icons = {
    Position: ControlCamera,
    Rotation: ThreeSixty,
    Scale: OpenInFull,
    Outline: PersonOutlined,
    Material: Texture,
    Particles: AutoAwesome,
    "Body Parts": Extension,
};

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

        case "Body Parts":
            return <BodyPartsController target={target} />;

        default:
            return <></>;
    }
};

export const getSelectOptions = optionList =>
    optionList.map(value => ({ value }));

export const getTabs = list =>
    list.map(value => {
        const Icon = icons[value] ?? Fragment;
        return { value, icon: <Icon /> };
    });
