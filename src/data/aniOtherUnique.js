/**
 * @type {{ [weaponType: string]: AdvAniData[] }}
 */
const otherUnique = {
    Sword: [
        {
            name: "Gala Leif",
            icon: "advIcons/100018_02_r05.png",
            animations: [
                { name: "Shielding Stance Idle", code: "CMN_INT_01_10001802" },
            ],
        },
        {
            name: "Pecorine",
            icon: "advIcons/110371_01_r05.png",
            animations: [
                { name: "Slow Run", code: "CMN_RUN_01_11037101" },
                { name: "Fast Run", code: "CMN_RUN_02_11037101" },
                {
                    name: "Join Room",
                    code:
                        "SWD_ONT_06_11037101&ts=-0.5>SWD_ONT_04_11037101>SWD_ONT_09_11037101>SWD_ONT_10_11037101>SWD_ONT_23_11037101",
                },
                { name: "Standby", code: "SWD_ONT_23_11037101" },
                { name: "Idle", code: "CMN_INT_01_11037101" },
                { name: "Roll", code: "SWD_ROL_01_11037101" },
                { name: "Dash Attack", code: "SWD_DAS_02_11037101" },
                { name: "Quick Turn", code: "CMN_QTN_01_11037101&ts=0.5" },
                {
                    name: "Knocked Away",
                    code: "CMN_BST_01_11037101>CMN_BST_04_11037101",
                },
                { name: "Fall to Ground", code: "CMN_BST_05_11037101" },
                { name: "Stand back up", code: "CMN_BST_06_11037101" },
                {
                    name: "Ukemi",
                    code: "CMN_UKM_01_11037101&ts=0.5>CMN_UKM_03_11037101",
                },
                {
                    name: "Ukemi 2",
                    code: "CMN_UKM_11_11037101&ts=0.5>CMN_UKM_03_11037101",
                },
                { name: "Landing", code: "CMN_LND_01_11037101&ts=0.5" },
                { name: "Stun", code: "CMN_SWN_01_11037101" },
                { name: "Frozen", code: "CMN_FRZ_01_11037101" },
                { name: "Take Damage", code: "CMN_KNB_01_11037101" },
                { name: "Die", code: "CMN_DIE_02_11037101" },
                { name: "Transform", code: "CMN_CTD_01_11037101" },
            ],
        },
        {
            name: "Mona",
            icon: "advIcons/110379_01_r05.png",
            animations: [
                { name: "Idle", code: "CMN_INT_01_11037901" },
                { name: "Backflip", code: "SWD_BAC_01_11037901" },
                { name: "Dash Forward", code: "SWD_ROL_01_11037901" },
                { name: "Slow Run", code: "CMN_RUN_01_11037901" },
                { name: "Fast Run", code: "CMN_RUN_02_11037901" },
                { name: "Quick Turn", code: "CMN_QTN_01_11037901" },
                { name: "Dash Attack", code: "SWD_DAS_02_11037901" },
                {
                    name: "Summon Zorro",
                    code: "CMN_CTD_01_11037901>CMN_CTD_02_11037901",
                },
                {
                    name: "After All-Out Attack",
                    code: "R002_002_c11037901_a_01>R002_002_c11037901_a_02",
                },
                {
                    name: "After All-Out Attack 2",
                    code: "R002_002_c11037901_b_02>R002_002_c11037901_b_03",
                },
            ],
        },
    ],
    Dagger: [
        {
            name: "Gala Notte",
            icon: "advIcons/100007_07_r05.png",
            animations: [
                {
                    name: "Join Room",
                    code:
                        "BOW_ONT_06_11036801&ts=-0.5>BOW_ONT_04_11036801>BOW_ONT_09_11036801>BOW_ONT_10_11036801>DAG_ONT_23_10000707",
                },
                { name: "Standby", code: "DAG_ONT_03_10000707" },
                { name: "Fly Slow", code: "CMN_RUN_01_10000707" },
                { name: "Fly Fast", code: "CMN_RUN_02_10000707" },
                { name: "Idle", code: "CMN_INT_01_10000707" },
                { name: "Dash", code: "DAG_ROL_01_10000707" },
                { name: "Dash Attack", code: "DAG_DAS_02_10000707" },
                { name: "Quick Turn", code: "CMN_QTN_01_10000707" },
                {
                    name: "Knocked Away",
                    code:
                        "CMN_BST_01_10000707>CMN_BST_02_10000707>CMN_BST_03_10000707>CMN_BST_04_10000707>CMN_BST_07_10000707",
                },
                { name: "Fall to Ground", code: "CMN_BST_05_10000707" },
                { name: "Stand back up", code: "CMN_BST_06_10000707" },
                {
                    name: "Ukemi",
                    code:
                        "CMN_UKM_01_10000707&ts=0.5>CMN_UKM_02_10000707>CMN_UKM_03_10000707",
                },
                {
                    name: "Ukemi 2",
                    code:
                        "CMN_UKM_11_10000707&ts=0.5>CMN_UKM_02_10000707>CMN_UKM_03_10000707",
                },
                { name: "Stun", code: "CMN_SWN_01_10000707" },
                { name: "Frozen", code: "CMN_FRZ_01_10000707" },
                { name: "Take Damage", code: "CMN_KNB_01_10000707" },
                { name: "Die", code: "CMN_DIE_02_10000707" },
                {
                    name: "Transform",
                    code: "CMN_CTD_01_10000707>CMN_CTD_02_10000707",
                },
            ],
        },
        {
            name: "Gala Laxi",
            icon: "advIcons/100032_04_r05.png",
            animations: [
                {
                    name: "Join Room",
                    code:
                        "DAG_ONT_06_10003204&ts=-0.5>DAG_ONT_04_10003204>DAG_ONT_09_10003204>DAG_ONT_10_10003204>DAG_ONT_23_10003204",
                },
                { name: "Standby", code: "DAG_ONT_23_10003204" },
                { name: "Dash Attack", code: "DAG_DAS_02_10003204" },
                { name: "Slow Run", code: "CMN_RUN_01_10003204" },
                { name: "Fast Run", code: "CMN_RUN_02_10003204" },
            ],
        },
        {
            name: "Bellina",
            icon: "advIcons/110306_01_r05.png",
            animations: [
                {
                    name: "Dragondrive",
                    code: "CMN_CTD_01_11030601>CMN_CTD_02_11030601",
                },
            ],
        },
        {
            name: "Tiki",
            icon: "advIcons/110360_01_r05.png",
            animations: [
                {
                    name: "Transform",
                    code: "CMN_CTD_01_11036001>CMN_CTD_02_11036001",
                },
            ],
        },
        {
            name: "Joker",
            icon: "advIcons/110377_01_r05.png",
            animations: [
                { name: "Idle", code: "CMN_INT_01_11037701" },
                { name: "Backflip", code: "DAG_BAC_01_11037701" },
                { name: "Dash Forward", code: "DAG_ROL_01_11037701" },
                { name: "Slow Run", code: "CMN_RUN_01_11037701" },
                { name: "Fast Run", code: "CMN_RUN_02_11037701" },
                { name: "Quick Turn", code: "DAG_QTN_01_11037701" },
                { name: "Dash Attack", code: "DAG_DAS_02_11037701" },
                {
                    name: "Summon Arsène",
                    code: "CMN_CTD_01_11037701>CMN_CTD_02_11037701",
                },
                {
                    name: "After All-Out Attack",
                    code: "R002_002_c11037701_a_01>R002_002_c11037701_a_02",
                },
                {
                    name: "Hit by All-Out Attack",
                    code: "c11037701_090_01>c11037701_090_02",
                },
            ],
        },
    ],
    Axe: [
        {
            name: "Summer Patia",
            icon: "advIcons/110335_02_r05.png",
            animations: [
                { name: "Force Strike Run", code: "AXE_RUN_05_11033502" },
            ],
        },
        {
            name: "Sophie",
            icon: "advIcons/110380_01_r05.png",
            animations: [
                {
                    name: "Join Room",
                    code:
                        "AXE_ONT_06_11038001&ts=-0.5>AXE_ONT_04_11038001>AXE_ONT_09_11038001>AXE_ONT_10_11038001>AXE_ONT_23_11038001",
                },
                { name: "Standby", code: "AXE_ONT_03_11038001" },
                { name: "Idle", code: "CMN_INT_01_11038001" },
                { name: "Backflip", code: "AXE_BAC_01_11038001" },
                { name: "Dash Forward", code: "AXE_ROL_01_11038001" },
                { name: "Slow Run", code: "CMN_RUN_01_11038001" },
                { name: "Fast Run", code: "CMN_RUN_02_11038001" },
                { name: "Quick Turn", code: "CMN_QTN_01_11038001" },
                { name: "Dash Attack", code: "AXE_DAS_02_11038001" },
                {
                    name: "Summon Pithos",
                    code: "CMN_CTD_01_11038001>CMN_CTD_02_11038001",
                },
                {
                    name: "After All-Out Attack",
                    code: "R002_002_c11038001_a_01>R002_002_c11038001_a_02",
                },
            ],
        },
        {
            name: "Finni",
            icon: "advIcons/110383_01_r05.png",
            animations: [{ name: "Fast Run", code: "CMN_RUN_02_11038301" }],
        },
    ],
    Lance: [
        {
            name: "Nadine",
            icon: "advIcons/110357_01_r05.png",
            animations: [
                {
                    name: "Join Room",
                    code:
                        "LAN_ONT_06_11035701&ts=-0.5>LAN_ONT_04_11035701>LAN_ONT_09_11035701>LAN_ONT_10_11035701>LAN_ONT_23_11035701",
                },
                { name: "Standby", code: "LAN_ONT_23_11035701" },
            ],
        },
        {
            name: "Catherine",
            icon: "advIcons/110364_01_r05.png",
            animations: [{ name: "Dash Attack", code: "LAN_DAS_02_11036401" }],
        },
        {
            name: "Panther",
            icon: "advIcons/110378_01_r05.png",
            animations: [
                { name: "Idle", code: "CMN_INT_01_11037801" },
                { name: "Back Jump", code: "LAN_BAC_01_11037801" },
                { name: "Dash Forward", code: "LAN_ROL_01_11037801" },
                { name: "Slow Run", code: "CMN_RUN_01_11037801" },
                { name: "Fast Run", code: "CMN_RUN_02_11037801" },
                { name: "Quick Turn", code: "CMN_QTN_01_11037801" },
                { name: "Dash Attack", code: "LAN_DAS_02_11037801" },
                {
                    name: "Summon Carmen",
                    code: "CMN_CTD_01_11037801>CMN_CTD_02_11037801",
                },
                {
                    name: "After All-Out Attack",
                    code: "R002_002_c11037801_a_01>R002_002_c11037801_a_02",
                },
            ],
        },
    ],
    Bow: [
        {
            name: "Pinon",
            icon: "advIcons/110366_01_r05.png",
            animations: [
                { name: "Force Strike Run", code: "BOW_RUN_05_11036601" },
            ],
        },
        {
            name: "Hunter Sarisse",
            icon: "advIcons/100029_03_r05.png",
            animations: [
                { name: "Force Strike Run", code: "BOW_RUN_05_10002903" },
            ],
        },
        {
            name: "Meene",
            icon: "advIcons/110368_01_r05.png",
            animations: [
                {
                    name: "Join Room",
                    code:
                        "BOW_ONT_06_11036801&ts=-0.5>BOW_ONT_04_11036801>BOW_ONT_09_11036801>BOW_ONT_10_11036801>BOW_ONT_23_11036801",
                },
                { name: "Standby", code: "BOW_ONT_23_11036801" },
                { name: "Idle", code: "CMN_INT_01_11036801" },
                { name: "Fly Slow", code: "CMN_RUN_01_11036801" },
                { name: "Fly Fast", code: "CMN_RUN_02_11036801" },
                { name: "Roll", code: "BOW_ROL_01_11036801" },
                { name: "Dash Attack", code: "BOW_DAS_02_11036801" },
                { name: "Force Strike Run", code: "BOW_RUN_05_11036801" },
                { name: "Quick Turn", code: "CMN_QTN_01_11036801&ts=0.5" },
                {
                    name: "Knocked Away",
                    code: "CMN_BST_01_11036801>CMN_BST_04_11036801",
                },
                { name: "Fall to Ground", code: "CMN_BST_05_11036801" },
                { name: "Stand back up", code: "CMN_BST_06_11036801" },
                {
                    name: "Ukemi",
                    code: "CMN_UKM_01_11036801&ts=0.5>CMN_UKM_03_11036801",
                },
                {
                    name: "Ukemi 2",
                    code: "CMN_UKM_11_11036801&ts=0.5>CMN_UKM_03_11036801",
                },
                { name: "Stun", code: "CMN_SWN_01_11036801" },
                { name: "Frozen", code: "CMN_FRZ_01_11036801" },
                { name: "Take Damage", code: "CMN_KNB_01_11036801" },
                { name: "Die", code: "CMN_DIE_02_11036801" },
                { name: "Transform", code: "CMN_CTD_01_11036801" },
            ],
        },
    ],
    Wand: [
        {
            name: "Yurius",
            icon: "advIcons/110362_01_r05.png",
            animations: [
                {
                    name: "Dragondrive",
                    code: "CMN_CTD_01_11036201>CMN_CTD_02_11036201",
                },
            ],
        },
        {
            name: "Mega Man",
            icon: "advIcons/110354_01_r05.png",
            animations: [
                {
                    name: "Join Room",
                    code:
                        "ROD_ONT_05_11035401&ts=-0.5>ROD_ONT_02_11035401>ROD_ONT_07_11035401>ROD_ONT_08_11035401>ROD_ONT_21_11035401",
                },
                { name: "Standby", code: "ROD_ONT_21_11035401" },
                { name: "Idle", code: "CMN_INT_01_11035401" },
                { name: "Slow Run", code: "CMN_RUN_01_11035401" },
                { name: "Fast Run", code: "CMN_RUN_02_11035401" },
                { name: "Force Strike Run", code: "ROD_RUN_05_11035401" },
                { name: "Slide", code: "ROD_ROL_01_11035401" },
                { name: "Stun", code: "CMN_SWN_01_11035401" },
                {
                    name: "Damaged / Afflicted / Die",
                    code: "CMN_BST_01_11035401",
                },
                {
                    name: "Jump on Rush",
                    code: "CMN_CTD_01_11035401>CMN_CTD_02_11035401",
                },
            ],
        },
        {
            name: "Peony",
            icon: "advIcons/110361_01_r05.png",
            animations: [
                { name: "Bob", code: "CMN_MWM_03_11036101" },
                { name: "Stroll", code: "CMN_MWM_21_11036101" },
                { name: "Fly Slow", code: "CMN_RUN_01_11036101" },
                { name: "Fly Fast", code: "CMN_RUN_02_11036101" },
                {
                    name: "Join Room",
                    code:
                        "ROD_ONT_06_11036101&ts=-0.5>ROD_ONT_04_11036101>ROD_ONT_09_11036101>ROD_ONT_10_11036101>ROD_ONT_23_11036101",
                },
                { name: "Standby", code: "ROD_ONT_23_11036101" },
                { name: "Idle", code: "CMN_INT_01_11036101" },
                { name: "Roll", code: "ROD_ROL_01_11036101" },
                { name: "Dash Attack", code: "ROD_DAS_02_11036101" },
                { name: "Force Strike Run", code: "ROD_RUN_05_11036101" },
                { name: "Quick Turn", code: "CMN_QTN_01_11036101&ts=0.5" },
                {
                    name: "Knocked Away",
                    code: "CMN_BST_01_11036101>CMN_BST_04_11036101",
                },
                { name: "Fall to Ground", code: "CMN_BST_05_11036101" },
                { name: "Stand back up", code: "CMN_BST_06_11036101" },
                {
                    name: "Ukemi",
                    code: "CMN_UKM_01_11036101&ts=0.5>CMN_UKM_03_11036101",
                },
                {
                    name: "Ukemi 2",
                    code: "CMN_UKM_11_11036101&ts=0.5>CMN_UKM_03_11036101",
                },
                { name: "Stun", code: "CMN_SWN_01_11036101" },
                { name: "Frozen", code: "CMN_FRZ_01_11036101" },
                { name: "Take Damage", code: "CMN_KNB_01_11036101" },
                { name: "Die", code: "CMN_DIE_02_11036101" },
                { name: "Transform", code: "CMN_CTD_01_11036101" },
            ],
        },
    ],
    Staff: [
        {
            name: "Zethia",
            icon: "advIcons/100009_01_r05.png",
            animations: [
                { name: "Slow Run", code: "CMN_RUN_03" },
                { name: "Fast Run", code: "CMN_RUN_04" },
            ],
        },
        {
            name: "Gala Zena",
            icon: "advIcons/100009_08_r05.png",
            animations: [
                { name: "Force Strike Run", code: "CAN_RUN_A_05_10000908" },
            ],
        },
        {
            name: "Dragonyule Lily",
            icon: "advIcons/110252_02_r05.png",
            animations: [
                { name: "Force Strike Run", code: "CAN_RUN_A_05_11025202" },
            ],
        },
    ],
    Manacaster: [
        {
            name: "Ilia",
            icon: "advIcons/110367_01_r05.png",
            animations: [{ name: "Roll", code: "GUN_ROL_01_11036701" }],
        },
        {
            name: "Eirene",
            icon: "advIcons/110384_01_r05.png",
            animations: [{ name: "Fast Run", code: "GUN_RUN_02_11038401" }],
        },
    ],
};

export default otherUnique;
