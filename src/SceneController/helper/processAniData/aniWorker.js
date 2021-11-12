// worker to preprocess animation data to put in database
import { animation as dataList } from "../../../data/dataList";
import {
    processHomeAni,
    processSimpleAni,
    processWeaponAni,
    processGunAni,
    processVictoryAni,
    processFsAni,
    processComboAni,
    processSkill,
    processOtherUnique,
    processExtraAni,
} from "./helper";

const processor = {
    "ani-home": processHomeAni,
    "ani-weapon": processWeaponAni,
    "ani-gun": processGunAni,
    "ani-genericSkill": processWeaponAni,
    "ani-uniqueSkill": processSkill,
    "ani-uniqueVictory": processVictoryAni,
    "ani-uniqueFS": processFsAni,
    "ani-uniqueCombo": processComboAni,
    "ani-uniqueOther": processOtherUnique,
    "ani-extra": processExtraAni,
};

addEventListener("message", ({ data }) => {
    const output = dataList.flatMap(group => {
        const groupData = data[group];
        return processor[group]?.(groupData) ?? processSimpleAni(groupData);
    });

    postMessage(output);
});
