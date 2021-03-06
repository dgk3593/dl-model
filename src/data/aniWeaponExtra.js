/**
 * @type {{ [weaponType: string]: AnimationList}}
 */
const aniWeaponExtra = {
    Axe: [
        {
            name: "Force Strike Run",
            code: "AXE_RUN_05",
        },
        {
            name: "Summon",
            code: "SMN_CHR_AXE_APPEAR_01>SMN_CHR_AXE_LOOP_01",
        },
        {
            name: "Summon Special",
            code: "SMN_CHR_AXE_WEAPON_APPEAR_01>SMN_CHR_AXE_WEAPON_LOOP_01",
        },
    ],
    Bow: [
        {
            name: "Force Strike Run",
            code: "BOW_RUN_05",
        },
        {
            name: "Old Force Strike",
            code: "BOW_CHR_A_01>BOW_CHR_A_02>BOW_CHR_A_03",
        },
        {
            name: "Summon",
            code: "SMN_CHR_BOW_APPEAR_01>SMN_CHR_BOW_LOOP_01",
        },
        {
            name: "Summon Special",
            code: "SMN_CHR_BOW_WEAPON_APPEAR_01>SMN_CHR_BOW_WEAPON_LOOP_01",
        },
    ],
    Dagger: [
        {
            name: "Summon",
            code: "SMN_CHR_DAG_APPEAR_01>SMN_CHR_DAG_LOOP_01",
        },
        {
            name: "Summon Special",
            code: "SMN_CHR_DAG_WEAPON_APPEAR_01>SMN_CHR_DAG_WEAPON_LOOP_01",
        },
    ],
    Lance: [
        {
            name: "Summon",
            code: "SMN_CHR_LAN_APPEAR_01>SMN_CHR_LAN_LOOP_01",
        },
        {
            name: "Summon Special",
            code: "SMN_CHR_LAN_WEAPON_APPEAR_01>SMN_CHR_LAN_WEAPON_LOOP_01",
        },
    ],
    Staff: [
        {
            name: "Force Strike Run",
            code: "CAN_RUN_05",
        },
        {
            name: "Summon",
            code: "SMN_CHR_CAN_APPEAR_01>SMN_CHR_CAN_LOOP_01",
        },
        {
            name: "Summon Special",
            code: "SMN_CHR_CAN_WEAPON_APPEAR_01>SMN_CHR_CAN_WEAPON_LOOP_01",
        },
    ],
    Wand: [
        {
            name: "Force Strike Run",
            code: "ROD_RUN_05",
        },
        {
            name: "Summon",
            code: "SMN_CHR_ROD_APPEAR_01>SMN_CHR_ROD_LOOP_01",
        },
        {
            name: "Summon Special",
            code: "SMN_CHR_ROD_WEAPON_APPEAR_01>SMN_CHR_ROD_WEAPON_LOOP_01",
        },
    ],
    Sword: [
        {
            name: "Summon",
            code: "SMN_CHR_SWD_APPEAR_01>SMN_CHR_SWD_LOOP_01",
        },
        {
            name: "Summon Special",
            code: "SMN_CHR_SWD_WEAPON_APPEAR_01>SMN_CHR_SWD_WEAPON_LOOP_01",
        },
    ],
    Blade: [
        {
            name: "Summon",
            code: "SMN_CHR_KAT_APPEAR_01>SMN_CHR_KAT_LOOP_01",
        },
        {
            name: "Summon Special",
            code: "SMN_CHR_KAT_WEAPON_APPEAR_01>SMN_CHR_KAT_WEAPON_LOOP_01",
        },
        {
            name: "Slow Run",
            code: "KAT_RUN_01",
        },
        {
            name: "Fast Run",
            code: "KAT_RUN_02",
        },
        {
            name: "Die",
            code: "KAT_DIE_02",
        },
        {
            name: "Idle",
            code: "KAT_INT_01",
        },
        {
            name: "Stun",
            code: "KAT_SWN_01",
        },
        {
            name: "Frozen",
            code: "KAT_FRZ_01",
        },
        {
            name: "Take Damage",
            code: "KAT_KNB_01",
        },
        {
            name: "Fall to Ground",
            code: "KAT_BST_05",
        },
        {
            name: "Knocked Away",
            code: "KAT_BST_01>KAT_BST_02>KAT_BST_03>KAT_BST_04&ts=0.5>KAT_BST_07",
        },
        {
            name: "Stand Back Up",
            code: "KAT_BST_07&ts=0.1>KAT_BST_06",
        },
        {
            name: "Ukemi",
            code: "KAT_UKM_01&ts=0.5>KAT_UKM_03",
        },
        {
            name: "Ukemi 2",
            code: "KAT_UKM_11&ts=0.5>KAT_UKM_03",
        },
        {
            name: "Buff",
            code: "KAT_050_99",
        },
        {
            name: "Throw Item",
            code: "KAT_055_01_01",
        },
        {
            name: "Mega Man Weapon Force Strike",
            code: "KAT_054_01_01",
        },
    ],
    Manacaster: [
        {
            name: "Summon",
            code: "SMN_CHR_GUN_APPEAR_01>SMN_CHR_GUN_LOOP_01",
        },
        {
            name: "Die",
            code: "GUN_DIE_02",
        },
        {
            name: "Idle",
            code: "GUN_INT_01",
        },
        {
            name: "Stun",
            code: "GUN_SWN_01",
        },
        {
            name: "Frozen",
            code: "GUN_FRZ_01",
        },
        {
            name: "Quick Turn",
            code: "GUN_QTN_01",
        },
        {
            name: "Take Damage",
            code: "GUN_KNB_01",
        },
        {
            name: "Slow Run",
            code: "GUN_RUN_01",
        },
        {
            name: "Fast Run",
            code: "GUN_RUN_02",
        },
        {
            name: "Knocked Away",
            code: "GUN_BST_01>GUN_BST_02>GUN_BST_03>GUN_BST_04&ts=0.5>GUN_BST_07",
        },
        {
            name: "Stand Back Up",
            code: "GUN_BST_07&ts=0.5>GUN_BST_06",
        },
        {
            name: "Ukemi",
            code: "GUN_UKM_01&ts=0.5>GUN_UKM_03",
        },
        {
            name: "Ukemi 2",
            code: "GUN_UKM_11&ts=0.5>GUN_UKM_03",
        },
    ],
};

/**
 * @type {{ [gunMode: string]: AnimationList}}
 */
export const gunModeExtra = {
    "Long Range": [
        { name: "Combo", code: "GUN_CMB_A_01" },
        {
            name: "Force Strike",
            code: "GUN_CHR_A_01>GUN_CHR_A_02>GUN_CHR_A_03",
        },
    ],
    "Short Range": [
        { name: "Combo", code: "GUN_CMB_B_01" },
        {
            name: "Force Strike",
            code: "GUN_CHR_B_01>GUN_CHR_B_02>GUN_CHR_B_03",
        },
    ],
    "Rapid-Fire": [
        { name: "Combo", code: "GUN_CMB_C_01>GUN_CMB_C_02>GUN_CMB_C_03" },
        {
            name: "Force Strike",
            code: "GUN_CHR_C_01>GUN_CHR_C_02>GUN_CHR_C_03",
        },
    ],
};

export default aniWeaponExtra;
