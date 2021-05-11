/**
 * @type {{ [id:string]: ModelMod[] }}
 */
const modelMod = {
    // Finni
    c110383_01: [
        {
            name: "Wheel Up",
            code: "show mPartsB_A, mPartsA_A, mPartsC_A; hide mPartsB_B",
        },
        {
            name: "Wheel Down",
            code: "hide mPartsB_A; show mPartsB_B, mPartsA_A, mPartsC_A",
        },
        {
            name: "Wheel Up No Booster",
            code: "show mPartsB_A; hide mPartsB_B, mPartsA_A, mPartsC_A",
        },
        {
            name: "Wheel Down No Booster",
            code: "hide mPartsB_A, mPartsA_A, mPartsC_A; show mPartsB_B",
        },
    ],
    // Yukata Curran
    c110281_02: [
        { name: "Unmasked", code: "show mPartsA_A; hide mPartsA_B" },
        { name: "Masked", code: "hide mPartsA_A; show mPartsA_B" },
    ],
    // Ryszarda
    c110381_01: [
        { name: "Locked Sigil", code: "show mPartsA_A; hide mPartsA_B" },
        { name: "Sigil Released", code: "hide mPartsA_A; show mPartsA_B" },
    ],
    // Joker
    c110377_01: [
        { name: "Normal", code: "show mPartsA_A; hide mPartsA_B" },
        { name: "Arsène Summoned", code: "hide mPartsA_A; show mPartsA_B" },
    ],
    // Panther
    c110378_01: [
        {
            name: "Normal No Whip",
            code: "show mPartsA_A; hide mPartsA_B, mPartsB_B",
        },
        {
            name: "Carmen Summoned No Whip",
            code: "hide mPartsA_A, mPartsB_B; show mPartsA_B",
        },
        {
            name: "With Whip",
            code: "show mPartsA_A, mPartsB_B; hide mPartsA_B",
        },
        {
            name: "Carmen Summoned With Whip",
            code: "hide mPartsA_A; show mPartsA_B, mPartsB_B",
        },
    ],
    // Mona
    c110379_01: [
        {
            name: "Normal",
            code: "hide mPartsA_B; show mParts A_A, mPartsB_A, mBodyAll",
        },
        {
            name: "Car",
            code: "show mPartsA_B; hide mParts A_A, mPartsB_A, mBodyAll",
        },
    ],
    // Sophie
    c110380_01: [
        { name: "Lobby", code: "show mPartsA_B; hide mPartsA_A, mPartsA_C" },
        { name: "In Quest", code: "show mPartsA_A; hide mPartsA_B, mPartsA_C" },
        {
            name: "Pithos Summoned",
            code: "show mPartsA_C; hide mPartsA_A, mPartsA_B",
        },
    ],
    // Mega Man
    c110354_01: [
        {
            name: "No Buster",
            code: "show mPartsA_A; hide mPartsA_B",
        },
        { name: "Buster", code: "show mPartsA_B; hide mPartsA_A" },
    ],
    // Vania
    c110388_01: [
        { name: "Clenched Fist", code: "show mPartsA_A; hide mPartsA_B" },
        { name: "Claw Hand", code: "show mPartsA_B; hide mPartsA_A" },
    ],
    // Saiga
    c110389_01: [
        { name: "With Scarf", code: "show mPartsA_B; hide mPartsA_A" },
        { name: "No Scarf", code: "hide mPartsA_B, mPartsA_A" },
    ],
    // Gala Reborn Jeanne
    d210144_01: [
        { name: "No Flag", code: "hide mPartsA_B; show mPartsA_A" },
        { name: "With Flag", code: "show mPartsA_A, mPartsA_B" },
        { name: "No Lance", code: "hide mPartsA_A, mPartsA_B" },
    ],
    // Gabriel
    d210145_01: [
        { name: "Wings Plushie", code: "show mPartsA_B, mPartsB_A" },
        { name: "No Wings", code: "hide mPartsA_B; show mPartsB_A" },
        { name: "No Plushie", code: "show mPartsA_B; hide mPartsB_A" },
        { name: "No Wings No Plushie", code: "hide mPartsA_B, mPartsB_A" },
    ],
    // Otherworld Gabriel
    d210145_02: [
        { name: "Normal", code: "show mPartsA_A" },
        { name: "No Book", code: "hide mPartsA_A" },
    ],
    // Fallen Gabriel
    d210145_03: [
        { name: "Normal", code: "show mPartsA_A" },
        { name: "No Book", code: "hide mPartsA_A" },
    ],
    // Ramiel
    d210132_01: [
        { name: "With Wings", code: "show mPartsA_B" },
        { name: "No Wings", code: "hide mPartsA_B" },
    ],
    // Fallen Ramiel
    d210132_03: [
        { name: "Halo and Wings", code: "show mPartsA_B; hide mPartsA_A" },
        { name: "No Wings", code: "hide mPartsA_B; show mPartsA_A" },
        { name: "No Halo No Wings", code: "hide mPartsA_B, mPartsA_A" },
    ],
    // Rush
    d210118_01: [
        { name: "No Buster", code: "show mPartsA_A; hide mPartsA_B" },
        { name: "Buster", code: "hide mPartsA_A; show mPartsA_B" },
    ],
    // Garland
    d210117_01: [
        { name: "Normal", code: "show mSpear" },
        { name: "No Weapon", code: "hide mSpear" },
    ],
    // Void Jeanne
    d210102_01: [
        { name: "Normal", code: "show mSpear" },
        { name: "No Weapon", code: "hide mSpear" },
    ],
    // Poseidon
    d210025_01: [
        { name: "Normal", code: "show mWeapon" },
        { name: "No Weapon", code: "hide mWeapon" },
    ],
    // Void Poseidon
    d210101_01: [
        { name: "Normal", code: "show mWeapon" },
        { name: "No Weapon", code: "hide mWeapon" },
    ],
    // Arsène
    d210138_01: [
        { name: "Normal", code: "show mBody_scroll" },
        { name: "No Face", code: "hide mBody_scroll" },
    ],
    // Daikokuten
    d210110_01: [
        { name: "Normal", code: "show mWeapon" },
        { name: "No Weapon", code: "hide mWeapon" },
    ],
    // Dragonyule Jeanne
    d210076_01: [
        { name: "Normal", code: "show mSpear" },
        { name: "No Weapon", code: "hide mSpear" },
    ],
    // Ebisu
    d210114_01: [
        { name: "Normal", code: "show mWeapon" },
        { name: "No Rod", code: "hide mWeapon" },
    ],
    // Freyja
    d210084_01: [
        { name: "Normal", code: "show mWepon" },
        { name: "No Staff", code: "hide mWepon" },
    ],
    // Gala Poseidon
    d210134_01: [
        { name: "Normal", code: "show mSpear" },
        { name: "No Trident", code: "hide mSpear" },
    ],
    // Jeanne
    d210020_01: [
        { name: "Normal", code: "show mSpear" },
        { name: "No Weapon", code: "hide mSpear" },
    ],
    // Pandora
    d210142_01: [
        { name: "With Box", code: "show mPartsA_B" },
        { name: "No Box", code: "hide mPartsA_B" },
    ],
    // Marishiten
    d210077_01: [
        { name: "Normal", code: "show mSword" },
        { name: "No Weapon", code: "hide mSword" },
    ],
    // Gala Notte
    d210153_01: [
        { name: "Normal", code: "show mSword" },
        { name: "No Weapon", code: "hide mSword" },
    ],
    // Summer Sakuya
    d210125_01: [
        { name: "Normal", code: "show mUribou" },
        { name: "No Uribou", code: "hide mUribou" },
    ],
    // Dragonyule Jeanne
    d210085_01: [
        { name: "Normal", code: "show mWeapon" },
        { name: "No Fan", code: "hide mWeapon" },
    ],
    // Roy III
    d200008_01: [
        { name: "Normal", code: "show mbox_01" },
        { name: "No Box", code: "hide mbox_01" },
    ],
    d210147_01: [
        {
            name: "Large Wings",
            code: "show mPartsA_B; hide mPartsA_A, mPartsB_A, mPartsB_B",
        },
        {
            name: "Small Wings",
            code: "show mPartsA_A; hide mPartsA_B, mPartsB_A, mPartsB_B",
        },
    ],
    h0080501: [
        {
            name: "Normal",
            code: "hide mPartsA_BR, mPartsB_BR; show mPartsA, mPartsB, mCandy",
        },
        {
            name: "No Candy",
            code: "hide mPartsA_BR, mPartsB_BR, mCandy; show mPartsA, mPartsB",
        },
        {
            name: "Broken Right Wing",
            code: "hide mPartsA, mPartsB_BR; show mPartsA_BR, mPartsB, mCandy",
        },
        {
            name: "Broken Left Wing",
            code: "hide mPartsA_BR, mPartsB; show mPartsA, mPartsB_BR, mCandy",
        },
        {
            name: "Wings Broken",
            code: "hide mPartsA, mPartsB; show mPartsA_BR, mPartsB_BR, mCandy",
        },
    ],
    h0090501: [
        {
            name: "Normal",
            code: "hide mPartsA_BR, mPartsB_BR; show mPartsA, mPartsB",
        },
        {
            name: "Broken Right Wing",
            code: "hide mPartsA, mPartsB_BR; show mPartsA_BR, mPartsB, mCandy",
        },
        {
            name: "Broken Left Wing",
            code: "hide mPartsA_BR, mPartsB; show mPartsA, mPartsB_BR, mCandy",
        },
        {
            name: "Wings Broken",
            code: "hide mPartsA, mPartsB; show mPartsA_BR, mPartsB_BR, mCandy",
        },
    ],
    h0100301: [
        { name: "Normal", code: "show mPartsA; hide mPartsA_BR" },
        { name: "Broken Tome", code: "hide mPartsA; show mPartsA_BR" },
    ],
    r0130001: [
        {
            name: "Normal",
            code: "hide mPartsA_BR, mPartsB_BR; show mPartsA, mPartsB",
        },
        {
            name: "Broken Wings",
            code: "hide mPartsA_BR, mPartsB; show mPartsA, mPartsB_BR",
        },
        {
            name: "Broken Blue Soul",
            code: "hide mPartsA, mPartsB_BR; show mPartsA_BR, mPartsB",
        },
        {
            name: "Broken",
            code: "hide mPartsA, mPartsB; show mPartsA_BR, mPartsB_BR",
        },
    ],
};

export default modelMod;
