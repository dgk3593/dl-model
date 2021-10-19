import IconTabBar from "components/IconTabBar";
import { Position } from "./icons";
import {
    ThreeSixty,
    OpenInFull,
    PersonOutlined,
    Texture,
    AutoAwesome,
} from "@mui/icons-material";

const tabs = [
    { value: "Position", icon: <Position /> },
    { value: "Rotation", icon: <ThreeSixty /> },
    { value: "Scale", icon: <OpenInFull /> },
    { value: "Outline", icon: <PersonOutlined /> },
    { value: "Material", icon: <Texture /> },
    { value: "Particles", icon: <AutoAwesome /> },
];

function QuickAccess({ value, onChange }) {
    return (
        <div>
            <IconTabBar
                className="QuickAccess"
                value={value}
                onChange={onChange}
                tabs={tabs}
            />
        </div>
    );
}

export default QuickAccess;
