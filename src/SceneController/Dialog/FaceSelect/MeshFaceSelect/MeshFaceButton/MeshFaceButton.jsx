import { Box, Button } from "@mui/material";
import "./MeshFaceButton.css";

import { getTexturePath } from "../../getTexturePath";

const TEXTURE_SIZE = 1024;
const BUTTON_WIDTH = 160;

/**
 * @typedef {object} UvSpec
 * @property {[uMin: number, uMax: number]} u
 * @property {[vMin: number, vMax: number]} v
 */
/**
 * @param {object} props
 * @param {string} props.id
 * @param {Array} props.uvList
 * @param {string} props.part
 * @param {React.MouseEventHandler} props.onClick
 */
function MeshFaceButton({ id, uvList, onClick, part }) {
    const texturePath = getTexturePath(id);

    const [u0Min, u0Max] = uvList[0].u;
    const [v0Min, v0Max] = uvList[0].v;

    const du = u0Max - u0Min;
    const dv = v0Max - v0Min;

    const width = du * TEXTURE_SIZE;
    const height = dv * TEXTURE_SIZE;

    const ratio = width / BUTTON_WIDTH;
    const size = TEXTURE_SIZE / ratio;
    const buttonHeight = height / ratio;

    const containerStyle = {
        width: BUTTON_WIDTH,
        height: buttonHeight,
        position: "relative",
        borderRadius: "0.5rem",
        overflow: "hidden",
    };

    const base = {
        content: '""',
        position: "absolute",
        backgroundImage: `url(${texturePath})`,
        backgroundSize: `${size}px ${size}px`,
        width: BUTTON_WIDTH,
        height: buttonHeight,
    };

    const getStyle = ({ u, v }) => {
        const rotated = u[1] - u[0] !== du;
        const uMin = u[0];
        const vMin = v[0];

        const left = uMin * size;
        const bottom = vMin * size;
        const translate = rotated ? (BUTTON_WIDTH - buttonHeight) / 2 : 0;

        return rotated
            ? {
                  width: buttonHeight,
                  height: BUTTON_WIDTH,
                  "&::after": {
                      ...base,
                      width: buttonHeight,
                      height: BUTTON_WIDTH,
                      backgroundPosition: `left -${left}px bottom -${bottom}px`,
                      transform: `rotate(90deg) translate(-${translate}px, -${translate}px)`,
                      position: "absolute",
                  },
              }
            : {
                  width: BUTTON_WIDTH,
                  height: buttonHeight,
                  position: "relative",
                  "&::after": {
                      ...base,
                      backgroundPosition: `left -${left}px bottom -${bottom}px`,
                  },
              };
    };

    return (
        <div className="MeshFaceButton">
            {uvList.map((uv, i) => (
                <div
                    style={containerStyle}
                    onClick={onClick}
                    data-index={i + 1}
                    data-part={part}
                >
                    <Box sx={getStyle(uv)} />
                </div>
            ))}
            <Button
                data-part={part}
                data-index="0"
                onClick={onClick}
                variant="outlined"
            >
                Remove
            </Button>
        </div>
    );
}

export default MeshFaceButton;
