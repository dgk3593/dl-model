export const homeAnimation = {
    common: {
        Run: "MWM_CMN+CMN_MWM_02",
        Bob: "MWM_CMN+CMN_MWM_03",
        "Quick Bob": "MWM_CMN+CMN_MWM_04",
        Wave: "MWM_CMN+CMN_MWM_14",
        "Wave and Jump": "MWM_CMN+CMN_MWM_05",
        Cheer: "MWM_CMN+CMN_MWM_09",
        "Sit and Cheer": "MWM_CMN+CMN_MWM_08",
        "Halidom Talk": "TWN_ONT_23+",
        "Turn Around": "MWM_CMN+CMN_MWM_13",
    },
    Male: {
        Walk: "MWM_M+CMN_MWM_01",
        Stroll: "MWM_M+CMN_MWM_21",
        Sit: "MWM_M+CMN_MWM_06",
        "Sit and Talk": "MWM_M+CMN_MWM_07",
        "Sit and Talk 2": "MWM_M+CMN_MWM_11",
        "Sit and Drink": "MWM_M+CMN_MWM_16",
        "Sit on Bed": "MWM_M+CMN_MWM_20",
    },
    Female: {
        Walk: "MWM_F+CMN_MWM_19",
        Stroll: "MWM_F+CMN_MWM_22",
        Sit: "MWM_F+CMN_MWM_10",
        "Sit and Talk": "MWM_F+CMN_MWM_17",
        "Sit and Talk 2": "MWM_F+CMN_MWM_12",
        "Sit and Drink": "MWM_F+CMN_MWM_15",
        "Sit on Bed": "MWM_F+CMN_MWM_18",
    },
};

export const questAnimation = {
    "Slow Weapon Run": "RUN+CMN_RUN_01",
    "Fast Weapon Run": "RUN+CMN_RUN_02",
    Idle: "CMN+CMN_INT_01",
    Stun: "CMN+CMN_SWN_01",
    Frozen: "CMN+CMN_FRZ_01",
    "Take Damage": "CMN+CMN_KNB_01",
    Landing: "CMN+CMN_LND_01",
    Ukemi: "UKM+CMN_UKM_01&ts=0.5>+CMN_UKM_03",
    "Ukemi 2": "UKM+CMN_UKM_11&ts=0.5>+CMN_UKM_03",
    Die: "CMN+CMN_DIE_02",
    "Fall to Ground": "BST+CMN_BST_05",
    "Knocked Away":
        "BST+CMN_BST_01>+CMN_BST_02>+CMN_BST_03>+CMN_BST_04&ts=0.5>+CMN_BST_07",
    "Stand Back Up": "BST+CMN_BST_07>+CMN_BST_06",
    Transform: "CTD+CMN_CTD_01>+CMN_CTD_02",
    "Offense Buff": "CMN_05x+CMN_050_99",
    "Support Skill": "CMN_05x+CMN_051_99",
    "Defense Buff": "CMN_05x+CMN_052_99",
    Heal: "CMN_05x+CMN_053_99",
    "Quick Turn": "CMN+CMN_QTN_01",
};

export const weaponExtra = {
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

export const uniqueFS = {
    Sword: [
        {
            icon: "img/advIcons/100003_07_r05.png",
            name: "Gala Ranzal",
            subtitle: "Gale-Clad Sword",
            value: "FS_SWD_SP+SWD_CHR_11",
        },
        {
            icon: "img/advIcons/110315_01_r04.png",
            name: "Ku Hai",
            subtitle: "Apsaras Formation",
            value: "FS_SWD_SP+SWD_CHR_10",
        },
        {
            icon: "img/advIcons/110050_02_r05.png",
            name: "Hunter Berserker",
            value:
                "FS_110050_02+SWD_CHR_01_11005002>+SWD_CHR_02_11005002>+SWD_CHR_03_11005002",
        },
    ],
    Blade: [
        {
            icon: "img/advIcons/110027_01_r03.png",
            name: "Melody",
            subtitle: "Maid's Soul",
            value:
                "FS_110027_01+KAT_CHR_A_01_11002701>+KAT_CHR_A_02_11002701>+KAT_CHR_A_03_11002701",
        },
        {
            icon: "img/advIcons/110271_01_r05.png",
            name: "Linnea",
            subtitle: "Cluster Amaryllis",
            value:
                "FS_110271_01+KAT_CHR_A_01_11027101>+KAT_CHR_A_02_11027101>+KAT_CHR_A_03_11027101",
        },
    ],
    Dagger: [
        {
            icon: "img/advIcons/100032_04_r05.png",
            name: "Gala Laxi",
            value:
                "FS_100032_04+DAG_CHR_01_10003204>+DAG_CHR_02_10003204>+DAG_CHR_03_10003204",
        },
        {
            icon: "img/advIcons/110306_01_r05.png",
            name: "Bellina",
            subtitle: "Dragondrive",
            value:
                "FS_110306_01+DAG_CHR_01_11030601>+DAG_CHR_02_11030601>+DAG_CHR_03_11030601",
        },
        {
            icon: "img/advIcons/110365_01_r05.png",
            name: "Nevin",
            value:
                "FS_110365_01+DAG_CHR_01_11036501>+DAG_CHR_02_11036501>+DAG_CHR_03_11036501",
        },
    ],
    Axe: [
        {
            icon: "img/advIcons/110322_01_r05.png",
            name: "Zhu Bajie",
            value:
                "FS_110322_01+AXE_CHR_01_11032201>+AXE_CHR_02_11032201>+AXE_CHR_03_11032201",
        },
        {
            icon: "img/advIcons/110335_02_r05.png",
            name: "Summer Patia",
            value:
                "FS_110335_02+AXE_CHR_01_11033502>+AXE_CHR_02_11033502>+AXE_CHR_03_11033502",
        },
    ],
    Lance: [
        {
            icon: "img/advIcons/110358_01_r05.png",
            name: "Sharena",
            value:
                "FS_110358_01+LAN_CHR_01_11035801>+LAN_CHR_02_11035801>+LAN_CHR_03_11035801",
        },
        {
            icon: "img/advIcons/110358_01_r05.png",
            name: "Sharena",
            subtitle: "Cancelled",
            value:
                "FS_110358_01+LAN_CHR_01_11035801>+LAN_CHR_02_11035801>+LAN_CHR_04_11035801",
        },
        {
            icon: "img/advIcons/110357_01_r05.png",
            name: "Nadine",
            value:
                "FS_110357_01+LAN_CHR_01_11035701>+LAN_CHR_02_11035701>+LAN_CHR_03_11035701",
        },
        {
            icon: "img/advIcons/110364_01_r05.png",
            name: "Catherine",
            value:
                "FS_110364_01+LAN_CHR_01_11036401>+LAN_CHR_02_11036401>+LAN_CHR_03_11036401",
        },
        {
            icon: "img/advIcons/110007_02_r05.png",
            name: "Hunter Vanessa",
            value:
                "FS_110007_02+LAN_CHR_01_11000702>+LAN_CHR_02_11000702>+LAN_CHR_03_11000702",
        },
        {
            icon: "img/advIcons/110007_02_r05.png",
            name: "Hunter Vanessa",
            subtitle: "Damaged while Charging",
            value:
                "FS_110007_02+LAN_CHR_01_11000702>+LAN_CHR_02_11000702>+LAN_CHR_04_11000702",
        },
    ],
    Bow: [
        {
            icon: "img/advIcons/100029_03_r05.png",
            name: "Hunter Sarisse",
            value:
                "FS_100029_03+BOW_CHR_01_10002903>+BOW_CHR_02_10002903>+BOW_CHR_03_10002903",
        },
        {
            icon: "img/advIcons/110366_01_r05.png",
            name: "Pinon",
            value:
                "FS_110366_01+BOW_CHR_01_11036601>+BOW_CHR_02_11036601>+BOW_CHR_03_11036601",
        },
    ],

    Wand: [
        {
            icon: "img/advIcons/110354_01_r05.png",
            name: "Mega Man",
            subtitle: "Charged Shot",
            value:
                "FS_110354_01+ROD_CHR_01_11035401>+ROD_CHR_02_11035401>+ROD_CHR_03_11035401",
        },
        {
            icon: "img/advIcons/110361_01_r05.png",
            name: "Peony",
            value:
                "FS_110361_01+ROD_CHR_01_11036101>+ROD_CHR_02_11036101>+ROD_CHR_03_11036101",
        },
    ],
};

export const skills = {
    Blade: [
        {
            icon: "img/skillIcons/Icon_Skill_925.png",
            name: "Ravishing Rainbow",
            subtitle: "Beautician Zardin",
            value: "SKL_110015_02+",
        },
        {
            icon: "img/skillIcons/Icon_Skill_013.png",
            name: "Surf's Up",
            subtitle: "Summer Ranzal",
            value: "SKL_100003_02+KAT_SKL_01_01_10000302",
        },
        {
            icon: "img/skillIcons/Icon_Skill_029.png",
            name: "Barbecue Bonanza",
            subtitle: "Summer Ranzal",
            value: "SKL_100003_02+KAT_SKL_02_01_10000302",
        },
    ],
    Axe: [
        {
            icon: "img/skillIcons/Icon_Skill_066.png",
            name: "Tempering Fancy",
            subtitle: "Haloween Mym",
            value: "SKL_100010_07+",
        },
    ],
    Lance: [
        {
            icon: "img/skillIcons/Icon_Skill_030.png",
            name: "Pom Pom Pump",
            subtitle: "Emma",
            value: "SKL_110260_01+LAN_SKL_01_01_11026001",
        },
        {
            icon: "img/skillIcons/Icon_Skill_031.png",
            name: "Rigorous Defense",
            subtitle: "Emma",
            value: "SKL_110260_01+LAN_SKL_02_01_11026001",
        },
        {
            icon: "img/skillIcons/Icon_Skill_113.png",
            name: "Dragonbrood Demonspear",
            subtitle: "Forte",
            value: "SKL_110272_01+LAN_SKL_01_01_11027201&ts=0.5",
        },
        {
            icon: "img/skillIcons/Icon_Skill_114.png",
            name: "Flawless Formation",
            subtitle: "Forte",
            value:
                "SKL_110272_01+LAN_SKL_02_01_11027201>+LAN_SKL_02_02_11027201>+LAN_SKL_02_03_11027201",
        },
    ],
    Wand: [
        {
            icon: "img/skillIcons/Icon_Skill_154.png",
            name: "Girls' Night Out",
            subtitle: "Incognito Nefaria",
            value: "SKL_110053_03+ROD_SKL_01_01_11005303",
        },
        {
            icon: "img/skillIcons/Icon_Skill_155.png",
            name: "Ancient Incandescence",
            subtitle: "Incognito Nefaria",
            value:
                "SKL_110053_03+ROD_SKL_02_01_11005303>+ROD_SKL_02_02_11005303>+ROD_SKL_02_03_11005303",
        },
    ],
};

export const otherUnique = {
    Wand: {
        Yurius: {
            icon: "img/advIcons/110362_01_r05.png",
            animations: [
                {
                    name: "Dragondrive",
                    value:
                        "CTD_110362_01+CMN_CTD_01_11036201>+CMN_CTD_02_11036201",
                },
            ],
        },
        "Mega Man": {
            icon: "img/advIcons/110354_01_r05.png",
            animations: [
                {
                    name: "Join Room",
                    value:
                        "LOB_110354_01+ROD_ONT_05_11035401&ts=-0.5>+ROD_ONT_02_11035401>+ROD_ONT_07_11035401>+ROD_ONT_08_11035401>+ROD_ONT_21_11035401",
                },
                {
                    name: "Standby",
                    value: "LOB_110354_01+ROD_ONT_21_11035401",
                },
                {
                    name: "Idle",
                    value: "INT_110354_01+",
                },
                {
                    name: "Slow Run",
                    value: "RUN_110354_01+CMN_RUN_01_11035401",
                },
                {
                    name: "Fast Run",
                    value: "RUN_110354_01+CMN_RUN_02_11035401",
                },
                {
                    name: "Force Strike Run",
                    value: "RUN_110354_01+ROD_RUN_05_11035401",
                },
                {
                    name: "Slide",
                    value: "CMN_110354_01+ROD_ROL_01_11035401",
                },
                {
                    name: "Stun",
                    value: "CMN_110354_01+CMN_SWN_01_11035401",
                },
                {
                    name: "Damaged / Afflicted / Die",
                    value: "BST_110354_01+",
                },
                {
                    name: "Jump on Rush",
                    value:
                        "CTD_110354_01+CMN_CTD_01_11035401>+CMN_CTD_02_11035401",
                },
            ],
        },
        Peony: {
            icon: "img/advIcons/110361_01_r05.png",
            animations: [
                {
                    name: "Bob",
                    value: "MWM_110361_01+CMN_MWM_03_11036101",
                },
                {
                    name: "Stroll",
                    value: "MWM_110361_01+CMN_MWM_21_11036101",
                },
                {
                    name: "Fly Slow",
                    value: "RUN_110361_01+CMN_RUN_01_11036101",
                },
                {
                    name: "Fly Fast",
                    value: "RUN_110361_01+CMN_RUN_02_11036101",
                },
                {
                    name: "Join Room",
                    value:
                        "LOB_110361_01+ROD_ONT_06_11036101&ts=-0.5>+ROD_ONT_04_11036101>+ROD_ONT_09_11036101>+ROD_ONT_10_11036101>+ROD_ONT_23_11036101",
                },
                {
                    name: "Standby",
                    value: "LOB_110361_01+ROD_ONT_23_11036101",
                },
                {
                    name: "Idle",
                    value: "INT_110361_01+",
                },
                {
                    name: "Combo",
                    value:
                        "CMB_110361_01+ROD_CMB_01_11036101>+ROD_CMB_02_11036101>+ROD_CMB_03_11036101>+ROD_CMB_04_11036101>+ROD_CMB_05_11036101",
                },
                {
                    name: "Roll",
                    value: "CMN_110361_01+ROD_ROL_01_11036101",
                },
                {
                    name: "Dash Attack",
                    value: "CMN_110361_01+ROD_DAS_02_11036101",
                },
                {
                    name: "Force Strike Run",
                    value: "CMN_110361_01+ROD_RUN_05_11036101",
                },
                {
                    name: "Quick Turn",
                    value: "CMN_110361_01+CMN_QTN_01_11036101&ts=0.5",
                },
                {
                    name: "Knocked Away",
                    value:
                        "BST_110361_01+CMN_BST_01_11036101>+CMN_BST_04_11036101",
                },
                {
                    name: "Fall to Ground",
                    value: "BST_110361_01+CMN_BST_05_11036101",
                },
                {
                    name: "Stand back up",
                    value: "BST_110361_01+CMN_BST_07_11036101",
                },
                {
                    name: "Ukemi",
                    value:
                        "UKM_110361_01+CMN_UKM_01_11036101&ts=0.5>+CMN_UKM_03_11036101",
                },
                {
                    name: "Ukemi 2",
                    value:
                        "UKM_110361_01+CMN_UKM_11_11036101&ts=0.5>+CMN_UKM_03_11036101",
                },
                {
                    name: "Stun",
                    value: "CMN_110361_01+CMN_SWN_01_11036101",
                },
                {
                    name: "Frozen",
                    value: "CMN_110361_01+CMN_FRZ_01_11036101",
                },
                {
                    name: "Take Damage",
                    value: "CMN_110361_01+CMN_KNB_01_11036101",
                },
                {
                    name: "Die",
                    value: "CMN_110361_01+CMN_DIE_02_11036101",
                },
                {
                    name: "Transform",
                    value: "CTD_110361_01+",
                },
            ],
        },
    },
    Lance: {
        Nadine: {
            icon: "img/advIcons/110357_01_r05.png",
            animations: [
                {
                    name: "Join Room",
                    value:
                        "LOB_110357_01+LAN_ONT_06_11035701&ts=-0.5>+LAN_ONT_04_11035701>+LAN_ONT_09_11035701>+LAN_ONT_10_11035701>+LAN_ONT_23_11035701",
                },
                {
                    name: "Standby",
                    value: "LOB_110357_01+LAN_ONT_23_11035701",
                },
            ],
        },
        Catherine: {
            icon: "img/advIcons/110364_01_r05.png",
            animations: [{ name: "Dash Attack", value: "DAS_110364_01+" }],
        },
    },
    Dagger: {
        "Gala Laxi": {
            icon: "img/advIcons/100032_04_r05.png",
            animations: [
                {
                    name: "Join Room",
                    value:
                        "LOB_100032_04+DAG_ONT_06_10003204&ts=-0.5>+DAG_ONT_04_10003204>+DAG_ONT_09_10003204>+DAG_ONT_10_10003204>+DAG_ONT_23_10003204",
                },
                {
                    name: "Standby",
                    value: "LOB_100032_04+DAG_ONT_23_10003204",
                },
                {
                    name: "Dash Attack",
                    value: "DAS_100032_04+DAG_DAS_02_10003204",
                },
                {
                    name: "Slow Run",
                    value: "RUN_100032_04+CMN_RUN_01_10003204",
                },
                {
                    name: "Fast Run",
                    value: "RUN_100032_04+CMN_RUN_02_10003204",
                },
            ],
        },
        Bellina: {
            icon: "img/advIcons/110306_01_r05.png",
            animations: [
                {
                    name: "Dragondrive",
                    value:
                        "CTD_110306_01+CMN_CTD_01_11030601>+CMN_CTD_02_11030601",
                },
            ],
        },
        Tiki: {
            icon: "img/advIcons/110360_01_r05.png",
            animations: [
                {
                    name: "Transform",
                    value:
                        "CTD_110360_01+CMN_CTD_01_11036001>+CMN_CTD_02_11036001",
                },
            ],
        },
    },
    Bow: {
        Pinon: {
            icon: "img/advIcons/110366_01_r05.png",
            animations: [
                {
                    name: "Force Strike Run",
                    value: "RUN_110366_01+BOW_RUN_05_11036601",
                },
            ],
        },
    },
    Staff: {
        Zethia: {
            icon: "img/advIcons/100009_01_r05.png",
            animations: [
                {
                    name: "Slow Run",
                    value: "RUN_100009_01+CMN_RUN_03",
                },
                {
                    name: "Fast Run",
                    value: "RUN_100009_01+CMN_RUN_04",
                },
            ],
        },
    },
};

export const unidentified = {
    "Lift and Throw": "BAT+CMN_BAT_01>+CMN_BAT_02>+CMN_BAT_06>+CMN_BAT_03",
    "Tantrum?": "BAT+CMN_BAT_05",
    Sideroll: "BAT+CMN_BAT_08",
};

export const uniqueVictory = {
    Sword: [
        {
            icon: "img/advIcons/100003_07_r05.png",
            name: "Gala Ranzal",
            value: "WIN_100003_07+SWD_WIN_01_10000307>+SWD_WIN_02_10000307",
        },
        {
            icon: "img/advIcons/100001_08_r05.png",
            name: "Gala Prince",
            value: "WIN_100001_08+SWD_WIN_01_10000108>+SWD_WIN_02_10000108",
        },
        {
            icon: "img/advIcons/100005_02_r05.png",
            name: "Gala Alex",
            value: "WIN_100005_02+SWD_WIN_01_10000502>+SWD_WIN_02_10000502",
        },
        {
            icon: "img/advIcons/100018_02_r05.png",
            name: "Gala Leif",
            value: "WIN_100018_02+SWD_WIN_01_10001802>+SWD_WIN_02_10001802",
        },
        {
            icon: "img/advIcons/110327_01_r05.png",
            name: "Alfonse",
            value: "WIN_110327_01+SWD_WIN_01_11032701>+SWD_WIN_02_11032701",
        },
        {
            icon: "img/advIcons/110291_01_r05.png",
            name: "Marth",
            value: "WIN_110291_01+SWD_WIN_01_11029101>+SWD_WIN_02_11029101",
        },
        {
            icon: "img/advIcons/110359_01_r05.png",
            name: "Chrom",
            value: "WIN_110359_01+SWD_WIN_01_11035901>+SWD_WIN_02_11035901",
        },
        {
            icon: "img/advIcons/110050_02_r05.png",
            name: "Hunter Berserker",
            value:
                "WIN_110050_02+SWD_WIN_03_11005002>+SWD_WIN_01_11005002>+SWD_WIN_02_11005002",
        },
    ],
    Blade: [
        {
            icon: "img/advIcons/100006_09_r05.png",
            name: "Gala Luca",
            value: "WIN_100006_09+KAT_WIN_01_10000609>+KAT_WIN_02_10000609",
        },
    ],
    Dagger: [
        {
            icon: "img/advIcons/110360_01_r05.png",
            name: "Tiki",
            value: "WIN_110360_01+DAG_WIN_01_11036001>+DAG_WIN_02_11036001",
        },
        {
            icon: "img/advIcons/100032_04_r05.png",
            name: "Gala Laxi",
            value: "WIN_100032_04+DAG_WIN_01_10003204>+DAG_WIN_02_10003204",
        },
    ],
    Axe: [
        {
            icon: "img/advIcons/100002_13_r05.png",
            name: "Gala Elisanne",
            value: "WIN_100002_13+AXE_WIN_01_10000213>+AXE_WIN_02_10000213",
        },
    ],
    Lance: [
        {
            icon: "img/advIcons/100010_04_r05.png",
            name: "Gala Mym",
            value: "WIN_100010_04+LAN_WIN_01_10001004>+LAN_WIN_02_10001004",
        },
        {
            icon: "img/advIcons/110007_02_r05.png",
            name: "Hunter Vanessa",
            value:
                "WIN_110007_02+LAN_WIN_03_11000702>+LAN_WIN_01_11000702>+LAN_WIN_02_11000702",
        },
        {
            icon: "img/advIcons/110328_01_r05.png",
            name: "Fjorm",
            value: "WIN_110328_01+LAN_WIN_01_11032801>+LAN_WIN_02_11032801",
        },
        {
            icon: "img/advIcons/110358_01_r05.png",
            name: "Sharena",
            value: "WIN_110358_01+LAN_WIN_01_11035801>+LAN_WIN_02_11035801",
        },
    ],
    Bow: [
        {
            icon: "img/advIcons/100029_02_r05.png",
            name: "Gala Sarisse",
            value: "WIN_100029_02+BOW_WIN_01_10002902>+BOW_WIN_02_10002902",
        },
        {
            icon: "img/advIcons/100029_03_r05.png",
            name: "Hunter Vanessa",
            value:
                "WIN_100029_03+BOW_WIN_03_10002903>+BOW_WIN_01_10002903>+BOW_WIN_02_10002903",
        },
    ],
    Wand: [
        {
            icon: "img/advIcons/100004_10_r05.png",
            name: "Gala Cleo",
            value: "WIN_100004_10+ROD_WIN_01_10000410>+ROD_WIN_02_10000410",
        },
        {
            icon: "img/advIcons/110354_01_r05.png",
            name: "Mega Man",
            value: "WIN_110354_01+ROD_WIN_01_11035401>+ROD_WIN_02_11035401",
        },
        {
            icon: "img/advIcons/110333_01_r05.png",
            name: "Veronica",
            value: "WIN_110333_01+ROD_WIN_01_11033301>+ROD_WIN_02_11033301",
        },
        {
            icon: "img/advIcons/110361_01_r05.png",
            name: "Peony",
            value: "WIN_110361_01+ROD_WIN_01_11036101>+ROD_WIN_02_11036101",
        },
    ],
};

export const uniqueCombo = {
    Sword: [
        {
            icon: "img/advIcons/100018_02_r05.png",
            name: "Gala Leif",
            subtitle: "Striking Stance",
            value:
                "CMB_100018_02+SWD_CMB_A_01_10001802>+SWD_CMB_A_02_10001802>+SWD_CMB_A_03_10001802",
        },
        {
            icon: "img/advIcons/100018_02_r05.png",
            name: "Gala Leif",
            subtitle: "Shielding Stance",
            value:
                "CMB_100018_02+SWD_CMB_B_01_10001802>+SWD_CMB_B_02_10001802>+SWD_CMB_B_03_10001802",
        },
        {
            icon: "img/advIcons/100005_02_r05.png",
            name: "Gala Alex",
            value:
                "CMB_100005_02+SWD_CMB_01_10000502>+SWD_CMB_02_10000502>+SWD_CMB_03_10000502>+SWD_CMB_04_10000502>+SWD_CMB_05_10000502",
        },
    ],
    Bow: [
        {
            icon: "img/advIcons/110366_01_r05.png",
            name: "Pinon",
            subtitle: "Sigil Released",
            value: "CMB_110366_01+BOW_CMB_06_11036601",
        },
    ],
    Dagger: [
        {
            icon: "img/advIcons/100032_04_r05.png",
            name: "Gala Laxi",
            value:
                "CMB_100032_04+DAG_CMB_A_01_10003204>+DAG_CMB_A_02_10003204>+DAG_CMB_A_03_10003204>+DAG_CMB_A_04_10003204",
        },
        {
            icon: "img/advIcons/100032_04_r05.png",
            name: "Gala Laxi",
            subtitle: "Delayed",
            value: "CMB_100032_04+DAG_CMB_B_04_10003204",
        },
        {
            icon: "img/advIcons/110296_01_r05.png",
            name: "Mitsuba",
            subtitle: "Sashimi Stance",
            value:
                "CMB_110296_01+DAG_CMB_A_01_11029601>+DAG_CMB_A_02_11029601>+DAG_CMB_A_03_11029601",
        },
        {
            icon: "img/advIcons/110296_01_r05.png",
            name: "Mitsuba",
            subtitle: "Tempura Stance",
            value:
                "CMB_110296_01+DAG_CMB_B_01_11029601>+DAG_CMB_B_02_11029601>+DAG_CMB_B_03_11029601",
        },
        {
            icon: "img/advIcons/110306_01_r05.png",
            name: "Bellina",
            subtitle: "Dragondrive",
            value:
                "CMB_110306_01+DAG_CMB_A_01_11030601>+DAG_CMB_A_02_11030601>+DAG_CMB_A_03_11030601",
        },
        {
            icon: "img/advIcons/110360_01_r05.png",
            name: "Tiki",
            value:
                "CMB_110360_01+DAG_CMB_A_01_11036001>+DAG_CMB_A_02_11036001>+DAG_CMB_A_03_11036001>+DAG_CMB_A_04_11036001>+DAG_CMB_A_05_11036001",
        },
        {
            icon: "img/advIcons/110365_01_r05.png",
            name: "Nevin",
            subtitle: "Revelation Sword",
            value: "CMB_110365_01+DAG_CMB_06_11036501",
        },
    ],
    Blade: [
        {
            icon: "img/advIcons/110295_01_r05.png",
            name: "Valerio",
            subtitle: "Appetizer Stance",
            value:
                "CMB_110295_01+KAT_CMB_A_01_11029501>+KAT_CMB_A_02_11029501>+KAT_CMB_A_03_11029501",
        },
        {
            icon: "img/advIcons/110295_01_r05.png",
            name: "Valerio",
            subtitle: "Entrée Stance",
            value:
                "CMB_110295_01+KAT_CMB_B_01_11029501>+KAT_CMB_B_02_11029501>+KAT_CMB_B_03_11029501",
        },
        {
            icon: "img/advIcons/110295_01_r05.png",
            name: "Valerio",
            subtitle: "Dessert Stance",
            value:
                "CMB_110295_01+KAT_CMB_C_01_11029501>+KAT_CMB_C_02_11029501>+KAT_CMB_C_03_11029501",
        },
        {
            icon: "img/advIcons/110352_01_r05.png",
            name: "Tobias",
            subtitle: "Sacred Blade",
            value:
                "CMB_110352_01+KAT_CMB_A_01_11035201>+KAT_CMB_A_02_11035201>+KAT_CMB_A_03_11035201",
        },
    ],
    Lance: [
        {
            icon: "img/advIcons/110357_01_r05.png",
            name: "Nadine",
            value:
                "CMB_110357_01+LAN_CMB_A_01_11035701>+LAN_CMB_A_02_11035701>+LAN_CMB_A_03_11035701>+LAN_CMB_A_04_11035701>+LAN_CMB_A_05_11035701",
        },
        {
            icon: "img/advIcons/110364_01_r05.png",
            name: "Catherine",
            value:
                "CMB_110364_01+LAN_CMB_A_01_11036401>+LAN_CMB_A_02_11036401>+LAN_CMB_A_03_11036401",
        },
    ],
    Wand: [
        {
            icon: "img/advIcons/110354_01_r05.png",
            name: "Mega Man",
            value:
                "CMB_110354_01+ROD_CMB_01_01_11035401>+ROD_CMB_01_02_11035401>+ROD_CMB_01_03_11035401",
        },
    ],
};

export const extraAnimation = {
    Dance: {
        "Slide Step": "SlideStep+",
        Rumba: "Rumba+",
        Flair: "Flair+",
        Catwalk: "FemaleWalk+",
        "Raise The Roof": "RaiseTheRoof+",
    },
    Acrobatics: {
        "Kip Up": "KipUp+",
        "Butterfly Twirl": "ButterflyTwirl+",
        Backflip: "Backflip+",
        "Forward Flip": "ForwardFlip+",
    },
    Guns: {
        "Handgun Shoot": "HandgunShoot+",
    },
    Combat: {
        "Hurricane Kick": "HurricaneKick+",
        "Flying Kick": "FlyingKick+",
        "Roundhouse Kick": "RoundhouseKick+",
        "Left Jab": "LeftJab+",
        "Punching Bag": "PunchingBag+",
        "Hook Punch": "HookPunch+",
    },
};
