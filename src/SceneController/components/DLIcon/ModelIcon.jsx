/**
 * @param {string} id
 */
export const hasIcon = id =>
    id && ["b", "c", "d", "h", "r", "w"].includes(id[0]);

function ModelIcon({ modelId, ...others }) {
    const iconPath = hasIcon(modelId) ? `img/icon/${modelId}.png` : "";

    return (
        iconPath && (
            <img src={iconPath} alt={modelId} loading="lazy" {...others} />
        )
    );
}

export default ModelIcon;
