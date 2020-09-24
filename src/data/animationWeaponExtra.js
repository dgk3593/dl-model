const weaponExtra = {
    Axe: {
        "Force Strike Run": "RUN_WEA+AXE_RUN_05",
    },
    Bow: {
        "Force Strike Run": "RUN_WEA+BOW_RUN_05",
        "Old Force Strike":
            "FS_BOW_OLD+BOW_CHR_A_01>+BOW_CHR_A_02>+BOW_CHR_A_03",
    },
    Staff: {
        "Force Strike Run": "RUN_WEA+CAN_RUN_05",
    },
    Wand: {
        "Force Strike Run": "RUN_WEA+ROD_RUN_05",
    },
    Blade: {
        "Slow Run": "RUN_WEA+KAT_RUN_01",
        "Fast Run": "RUN_WEA+KAT_RUN_02",
        Die: "CMN_KAT+KAT_DIE_02",
        Idle: "CMN_KAT+KAT_INT_01",
        Stun: "CMN_KAT+KAT_SWN_01",
        Frozen: "CMN_KAT+KAT_FRZ_01",
        "Take Damage": "CMN_KAT+KAT_KNB_01",
        "Fall to Ground": "BST_KAT+KAT_BST_05",
        "Knocked Away":
            "BST_KAT+KAT_BST_01>+KAT_BST_02>+KAT_BST_03>+KAT_BST_04&ts=0.5>+KAT_BST_07",
        "Stand Back Up": "BST_KAT+KAT_BST_07&ts=0.1>+KAT_BST_06",
        Ukemi: "UKM_KAT+KAT_UKM_01&ts=0.5>+KAT_UKM_03",
        "Ukemi 2": "UKM_KAT+KAT_UKM_11&ts=0.5>+KAT_UKM_03",
    },
};

export default weaponExtra;
