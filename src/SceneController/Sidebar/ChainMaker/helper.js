import { ArrayWithEvent } from "@/dl-viewer/utils/ArrayWithEvent";
import { analyzeChainCode } from "@/dl-viewer/wrapModel/addAnimation/helper";
import { nanoid } from "nanoid";

/** convert animation chain code to AnimationChain
 * @param {string} code - animation chain code
 * @param {string} name - animation name
 */
export const chainCodeToList = (code, name = "Unknown") => {
    const aniList = analyzeChainCode(code);
    const { length } = aniList;
    const list = aniList.map((ani, i) => {
        const {
            aniName,
            reps = 1,
            timeScale = 1,
            duration = [0, 100],
            aniAction,
        } = ani;
        const partName = length > 1 ? name + ` #${i + 1}` : name;

        const listItem = {
            id: nanoid(),
            name: partName,
            aniName,
            reps,
            timeScale,
            duration,
            aniAction,
        };
        return listItem;
    });
    return ArrayWithEvent.from(list);
};

const aniModList = {
    ts: { key: "timeScale", defaultValue: 1 },
    r: { key: "reps", defaultValue: 1 },
};

const actionShorthand = {
    "face.eyeIdx": "ei",
    "face.mouthIdx": "mi",
};

export const generateChainCode = chain => {
    const aniCode = chain.map(aniToCode);
    return aniCode.join(">");
};

const aniToCode = ani => {
    const { aniName } = ani;
    const modCode = generateAniModCode(ani);
    const durationCode = generateDurationCode(ani);
    const actionCode = generateActionCode(ani);
    return `${aniName}${modCode}${durationCode}${actionCode}`;
};

const generateAniModCode = ani => {
    const modCodes = [];
    Object.keys(aniModList).forEach(modKey => {
        const { key, defaultValue } = aniModList[modKey];
        if (ani[key] && ani[key] !== defaultValue) {
            modCodes.push(`&${modKey}=${ani[key]}`);
        }
    });
    return modCodes.join("");
};

const generateDurationCode = ani => {
    const { duration = [0, 100] } = ani;
    const [start, end] = duration;

    if (start !== 0) return `&dur=${start}-${end}`;

    return end === 100 ? "" : `&dur=${end}`;
};

const generateActionCode = ani => {
    const { aniAction } = ani;
    if (!aniAction.length) return "";

    const parts = aniAction.map(action => {
        const { time, ...others } = action;
        const subcodes = Object.entries(others).map(
            ([key, value]) => `${actionShorthand[key] ?? key}=${value}`
        );

        return `@${time}=(${subcodes.join("/")})`;
    });
    return "&" + parts.join("&");
};
