const weaponExtra = {
    Axe: {
        "Force Strike Run": "AXE_RUN_05",
    },
    Bow: {
        "Force Strike Run": "BOW_RUN_05",
        "Old Force Strike": "BOW_CHR_A_01>BOW_CHR_A_02>BOW_CHR_A_03",
    },
    Staff: {
        "Force Strike Run": "CAN_RUN_05",
    },
    Wand: {
        "Force Strike Run": "ROD_RUN_05",
    },
    Blade: {
        "Slow Run": "KAT_RUN_01",
        "Fast Run": "KAT_RUN_02",
        Die: "KAT_DIE_02",
        Idle: "KAT_INT_01",
        Stun: "KAT_SWN_01",
        Frozen: "KAT_FRZ_01",
        "Take Damage": "KAT_KNB_01",
        "Fall to Ground": "KAT_BST_05",
        "Knocked Away":
            "KAT_BST_01>KAT_BST_02>KAT_BST_03>KAT_BST_04&ts=0.5>KAT_BST_07",
        "Stand Back Up": "KAT_BST_07&ts=0.1>KAT_BST_06",
        Ukemi: "KAT_UKM_01&ts=0.5>KAT_UKM_03",
        "Ukemi 2": "KAT_UKM_11&ts=0.5>KAT_UKM_03",
        Buff: "KAT_050_99",
    },
    Manacaster: {
        Die: "GUN_DIE_02",
        Idle: "GUN_INT_01",
        Stun: "GUN_SWN_01",
        Frozen: "GUN_FRZ_01",
        "Quick Turn": "GUN_QTN_01",
        "Take Damage": "GUN_KNB_01",
        "Slow Run": "GUN_RUN_01",
        "Fast Run": "GUN_RUN_02",
        "Knocked Away":
            "GUN_BST_01>GUN_BST_02>GUN_BST_03>GUN_BST_04&ts=0.5>GUN_BST_07",
        "Stand Back Up": "GUN_BST_07&ts=0.5>GUN_BST_06",
        Ukemi: "GUN_UKM_01&ts=0.5>GUN_UKM_03",
        "Ukemi 2": "GUN_UKM_11&ts=0.5>GUN_UKM_03",
    },
};

export const gunModeExtra = {
    "Long Range": {
        Combo: "GUN_CMB_A_01",
        "Force Strike": "GUN_CHR_A_01>GUN_CHR_A_02>GUN_CHR_A_03",
    },
    "Short Range": {
        Combo: "GUN_CMB_B_01",
        "Force Strike": "GUN_CHR_B_01>GUN_CHR_B_02>GUN_CHR_B_03",
    },
    "Rapid-Fire": {
        Combo: "GUN_CMB_C_01>GUN_CMB_C_02>GUN_CMB_C_03",
        "Force Strike": "GUN_CHR_C_01>GUN_CHR_C_02>GUN_CHR_C_03",
    },
};

export default weaponExtra;
