/**
 * @type {{ [id:string]: ModelMod[] }}
 */
const modelMod = {
    c110281_02: [
        { name: "Unmasked", code: "show mPartsA_A; hide mPartsA_B" },
        { name: "Masked", code: "hide mPartsA_A; show mPartsA_B" },
    ],
    d210144_01: [
        { name: "No Flag", code: "hide mPartsA_B; show mPartsA_A" },
        { name: "With Flag", code: "show mPartsA_A, mPartsA_B" },
        { name: "No Lance", code: "hide mPartsA_A, mPartsA_B" },
    ],
    d210145_01:[
        {name: "0", code: ""}
        {name: "1", code: "hide mPartsA_A"}
        {name: "2", code: "hide mPartsA_B"}
        {name: "3", code: "hide mPartsB_A"}
        {name: "4", code: "hide mPartsB_B"}
    ]
};

export default modelMod;
