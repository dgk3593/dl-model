import PartialFaceSelect from ".";

export { default } from "./PartialFaceSelect";

export const EyeSelect = props => <PartialFaceSelect part="eye" {...props} />;
export const MouthSelect = props => (
    <PartialFaceSelect part="mouth" {...props} />
);
