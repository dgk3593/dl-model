import { useActiveModel } from "@/state";
import { getUvRange } from "@/SceneController/Dialog/FaceSelect/MeshFaceSelect/MeshPartSelect/helper";
import { getTexturePath } from "@/SceneController/Dialog/FaceSelect/getTexturePath";

import { Box } from "@mui/material";

const TEXTURE_SIZE = 1024;
const BUTTON_WIDTH = 64;

function MeshFaceBox({ index, part }) {
    const { activeModel } = useActiveModel();
    const list = activeModel?.face?.[`${part}List`];
    if (!list) return <>N/A</>;

    const uvList = activeModel.userData[`${part}Uv`] ?? getUvRange(list);
    activeModel.userData[`${part}Uv`] = uvList;
    if (!uvList[index - 1]) return <>N/A</>;

    const texturePath = getTexturePath(activeModel.id);

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
        <div style={containerStyle}>
            <Box sx={getStyle(uvList[index - 1])} />
        </div>
    );
}

export default MeshFaceBox;
