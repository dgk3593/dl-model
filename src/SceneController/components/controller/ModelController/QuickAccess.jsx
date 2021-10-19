import IconTabBar from "components/IconTabBar";
import {
    ThreeSixty,
    OpenInFull,
    PersonOutlined,
    Texture,
    AutoAwesome,
    ControlCamera,
} from "@mui/icons-material";

const tabs = [
    { value: "Position", icon: <ControlCamera /> },
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
