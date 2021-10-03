import IconButton from "components/IconButton";
import { hasIcon } from "components/DLIcon";

function AniButton({
    icon,
    user,
    name,
    fullName = name,
    subtitle = "",
    code,
    onClick,
}) {
    const userIconPath = hasIcon(user) ? `img/icon/${user}.png` : "";
    const iconPath = icon ? `img/aniIcon/${icon}.png` : userIconPath;
    const subIconPath = icon && userIconPath;

    return (
        <IconButton
            icon={iconPath}
            subIcon={subIconPath}
            title={name}
            subtitle={subtitle}
            onClick={onClick}
            data-code={code}
            data-name={fullName}
        />
    );
}

export default AniButton;
