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
            name: "Alfonse",
            icon: "advIcons/110327_01_r05.png",
            animations: [
                { name: "Boss Intro", code: "A0060401_090_02>A0060401_090_01" },
                {
                    name: "Rolling Slash",
                    code: "A0060401_100_01>A0060401_100_02>A0060401_100_03",
                },
                {
                    name: "Buff",
                    code: "A0060401_101_01>A0060401_101_02>A0060401_101_03",
                },
                {
                    name: "Sword Slash",
                    code: "A0060401_102_01>A0060401_102_02>A0060401_102_03>A0060401_102_04>A0060401_102_05",
                },
            ],
        },
        {
            name: "Chrom",
            icon: "advIcons/110359_01_r05.png",
            animations: [
                { name: "Boss Intro", code: "A0150001_090_02>A0150001_090_01" },
            ],
        },
        {
            name: "Nino",
            icon: "advIcons/110392_01_r05.png",
            animations: [
                {
                    name: "Dragondrive",
                    code: "CMN_CTD_02_11039201>CMN_CTD_03_11039201",
                },
            ],
        },
        {
            name: "Pecorine",
            icon: "advIcons/110371_01_r05.png",
            animations: [
                {
                    name: "Summon",
                    code: "SMN_CHR_SWD_APPEAR_01_11037101>SMN_CHR_SWD_LOOP_01_11037101",
                },
                { name: "Slow Run", code: "CMN_RUN_01_11037101" },
                { name: "Fast Run", code: "CMN_RUN_02_11037101" },
                {
                    name: "Join Room",
                    code: "SWD_ONT_06_11037101&ts=-0.5>SWD_ONT_04_11037101>SWD_ONT_09_11037101>SWD_ONT_10_11037101>SWD_ONT_23_11037101",
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
                { name: "Boss Intro", code: "A0720001_090_01" },
            ],
        },
        {
            name: "Mona",
            icon: "advIcons/110379_01_r05.png",
            animations: [
                {
                    name: "Summon",
                    code: "SMN_CHR_SWD_APPEAR_01_11037901>SMN_CHR_SWD_LOOP_01_11037901",
                },
                {
                    name: "Eldwater",
                    code: "SMN_CHR_MOON_APPEAR_02_11037901>SMN_CHR_MOON_LOOP_02_11037901",
                },
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
    Blade: [
        {
            name: "Laxi",
            icon: "advIcons/100032_02.png",
            animations: [
                {
                    name: "Boss Intro",
                    code: "A0110001_090_02>A0110001_090_01",
                },
                {
                    name: "Defeated",
                    code: "A0110001_015_01>A0110001_015_02",
                },
                { name: "Buff", code: "A0110001_022_01" },
                {
                    name: "Broken",
                    code: "A0110001_081_01>A0110001_081_02",
                },
                {
                    name: "Two-handed Slash",
                    code: "A0110001_102_01>A0110001_102_02>A0110001_102_03",
                },
                { name: "Quick Draw", code: "A0110001_103_01" },
                { name: "Triple Slash Jump Back", code: "A0110001_104_01" },
                { name: "Triple Slash", code: "A0110001_107_01" },
                { name: "Spinning Slash", code: "A0110001_108_01" },
            ],
        },
        {
            name: "Ieyasu",
            icon: "advIcons/110313_01_r05.png",
            animations: [
                {
                    name: "Boss Intro",
                    code: "a0030101_090_02>a0030101_090_01",
                },
                { name: "Quick Draw", code: "a0030101_100_01" },
                { name: "Triple Slash", code: "a0030101_101_01" },
                { name: "Jump Slash", code: "a0030101_104_01" },
            ],
        },
        {
            name: "Addis",
            icon: "advIcons/110310_01_r04.png",
            animations: [
                { name: "Broken", code: "a0050101_015_01>a0050101_015_02" },
                { name: "Recover from Broken", code: "a0050101_015_03" },
                { name: "Quick Draw", code: "a0050101_100_01" },
                { name: "Jump Slash", code: "a0050101_101_01" },
            ],
        },
    ],
    Dagger: [
        {
            name: "Gala Notte",
            icon: "advIcons/100007_07_r05.png",
            animations: [
                {
                    name: "Summon",
                    code: "SMN_CHR_BOW_APPEAR_01_11036801>SMN_CHR_BOW_LOOP_01_11036801",
                },
                {
                    name: "Eldwater",
                    code: "SMN_CHR_MOON_APPEAR_02_11036801>SMN_CHR_MOON_LOOP_02_11036801",
                },
                { name: "Bob", code: "CMN_MWM_03_11036101" },
                { name: "Stroll", code: "CMN_MWM_21_11036101" },
                {
                    name: "Join Room",
                    code: "BOW_ONT_06_11036801&ts=-0.5>BOW_ONT_04_11036801>BOW_ONT_09_11036801>BOW_ONT_10_11036801>DAG_ONT_23_10000707",
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
                    code: "CMN_BST_01_10000707>CMN_BST_02_10000707>CMN_BST_03_10000707>CMN_BST_04_10000707>CMN_BST_07_10000707",
                },
                { name: "Fall to Ground", code: "CMN_BST_05_10000707" },
                { name: "Stand back up", code: "CMN_BST_06_10000707" },
                {
                    name: "Ukemi",
                    code: "CMN_UKM_01_10000707&ts=0.5>CMN_UKM_02_10000707>CMN_UKM_03_10000707",
                },
                {
                    name: "Ukemi 2",
                    code: "CMN_UKM_11_10000707&ts=0.5>CMN_UKM_02_10000707>CMN_UKM_03_10000707",
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
                    code: "DAG_ONT_06_10003204&ts=-0.5>DAG_ONT_04_10003204>DAG_ONT_09_10003204>DAG_ONT_10_10003204>DAG_ONT_23_10003204",
                },
                { name: "Standby", code: "DAG_ONT_23_10003204" },
                { name: "Dash Attack", code: "DAG_DAS_02_10003204" },
                { name: "Slow Run", code: "CMN_RUN_01_10003204" },
                { name: "Fast Run", code: "CMN_RUN_02_10003204" },
            ],
        },
        {
            name: "Mitsuhide",
            icon: "advIcons/110345_01_r05.png",
            animations: [
                {
                    name: "Boss Intro",
                    code: "A0570001_090_02>A0570001_090_01",
                },
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
                { name: "Defeated", code: "A0740001_011_01" },
                { name: "Broken", code: "A0740001_081_01>A0740001_081_02" },
                { name: "Recover from Broken", code: "A0740001_081_03" },
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
                {
                    name: "Boss Intro",
                    code: "A0740001_090_02>A0740001_110_01",
                },
                {
                    name: "Jump Slash",
                    code: "A0740001_106_01",
                },
                {
                    name: "Small Slash",
                    code: "A0740001_109_01",
                },
                {
                    name: "Side to Side",
                    code: "A0740001_107_01>A0740001_107_02>A0740001_107_03",
                },
            ],
        },
    ],
    Axe: [
        {
            name: "Ranzal",
            icon: "advIcons/100003_01_r04.png",
            animations: [
                { name: "Boss Intro", code: "a0010101_090_02>a0010101_090_01" },
                { name: "Broken", code: "a0010101_015_01>a0010101_015_02" },
                { name: "Recover from Broken", code: "a0010101_015_03" },
                { name: "Smash", code: "a0010101_102_01" },
                {
                    name: "Jump Smash",
                    code: "a0010101_103_01>a0010101_103_02>a0010101_103_03",
                },
            ],
        },
        {
            name: "Valyx",
            icon: "advIcons/100016_01.png",
            animations: [
                { name: "Boss Intro", code: "a0020101_090_02>a0020101_090_01" },
                { name: "Broken", code: "a0020101_015_01>a0020101_015_02" },
                { name: "Recover from Broken", code: "a0020101_015_03" },
                {
                    name: "Roar",
                    code: "a0020101_017_01>a0020101_017_02>a0020101_017_03>a0020101_017_04",
                },
                {
                    name: "Charged Smash",
                    code: "a0020101_102_01>a0020101_102_02>a0020101_102_03",
                },
                {
                    name: "Command",
                    code: "a0020101_103_01>a0020101_103_02>a0020101_103_03>a0020101_103_04>a0020101_103_05",
                },
            ],
        },
        {
            name: "Sazanka",
            icon: "advIcons/110311_01_r04.png",
            animations: [
                { name: "Broken", code: "a0040101_015_01>a0040101_015_02" },
                { name: "Recover from Broken", code: "a0040101_015_03" },
            ],
        },
        {
            name: "Summer Patia",
            icon: "advIcons/110335_02_r05.png",
            animations: [
                { name: "Force Strike Run", code: "AXE_RUN_05_11033502" },
            ],
        },
        {
            name: "Finni",
            icon: "advIcons/110383_01_r05.png",
            animations: [{ name: "Fast Run", code: "CMN_RUN_02_11038301" }],
        },
        {
            name: "Sophie",
            icon: "advIcons/110380_01_r05.png",
            animations: [
                {
                    name: "Join Room",
                    code: "AXE_ONT_06_11038001&ts=-0.5>AXE_ONT_04_11038001>AXE_ONT_09_11038001>AXE_ONT_10_11038001>AXE_ONT_23_11038001",
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
                {
                    name: "Boss Intro",
                    code: "A0750001_090_02>A0750001_090_01",
                },
                {
                    name: "Defeated",
                    code: "A0750001_011_01",
                },
                {
                    name: "Broken",
                    code: "A0750001_081_01>A0750001_081_02",
                },
                {
                    name: "Recover from Broken",
                    code: "A0750001_081_03",
                },
                {
                    name: "Small Hit",
                    code: "A0750001_106_01",
                },
            ],
        },
    ],
    Lance: [
        {
            name: "Nadine",
            icon: "advIcons/110357_01_r05.png",
            animations: [
                {
                    name: "Join Room",
                    code: "LAN_ONT_06_11035701&ts=-0.5>LAN_ONT_04_11035701>LAN_ONT_09_11035701>LAN_ONT_10_11035701>LAN_ONT_23_11035701",
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
            name: "Grimnir",
            icon: "advIcons/110285_01_r05.png",
            animations: [
                { name: "Boss Intro", code: "A0840001_090_02>A0840001_090_01" },
            ],
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
        {
            name: "Volk",
            icon: "advIcons/100033_01.png",
            animations: [
                { name: "Idle", code: "A0080001_000_01" },
                { name: "Run", code: "A0080001_002_01" },
                { name: "Take Damage", code: "A0080001_010_01" },
                { name: "Die", code: "A0080001_011_01" },
                { name: "Frozen", code: "A0080001_013_01" },
                { name: "Stun", code: "A0080001_014_01" },
                { name: "Transform", code: "A0080001_022_01" },
                { name: "Buff", code: "A0080001_050_01" },
                {
                    name: "Throw Projectiles",
                    code: "A0080001_052_01>A0080001_052_02>A0080001_052_03",
                },
                { name: "Boss Intro", code: "A0080001_090_02>A0080001_090_01" },
                {
                    name: "Spin Attack",
                    code: "A0080001_100_01>A0080001_100_02>A0080001_052_03",
                },
                {
                    name: "Thrust",
                    code: "A0080001_101_01>A0080001_101_02>A0080001_101_03",
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
            name: "Isaac",
            icon: "advIcons/110391_01_r05.png",
            animations: [
                { name: "Boss Intro", code: "A0850001_090_02>A0850001_090_01" },
            ],
        },
        {
            name: "Meene",
            icon: "advIcons/110368_01_r05.png",
            animations: [
                {
                    name: "Summon",
                    code: "SMN_CHR_BOW_APPEAR_01_11036801>SMN_CHR_BOW_LOOP_01_11036801",
                },
                {
                    name: "Eldwater",
                    code: "SMN_CHR_MOON_APPEAR_02_11036801>SMN_CHR_MOON_LOOP_02_11036801",
                },
                { name: "Bob", code: "CMN_MWM_03_11036101" },
                { name: "Stroll", code: "CMN_MWM_21_11036101" },
                {
                    name: "Join Room",
                    code: "BOW_ONT_06_11036801&ts=-0.5>BOW_ONT_04_11036801>BOW_ONT_09_11036801>BOW_ONT_10_11036801>BOW_ONT_23_11036801",
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
            name: "Pipple",
            icon: "advIcons/110300_01_r04.png",
            animations: [
                {
                    name: "Summon",
                    code: "SMN_CHR_ROD_APPEAR_01_11030001>SMN_CHR_ROD_LOOP_01_11030001",
                },
                {
                    name: "Eldwater",
                    code: "SMN_CHR_MOON_APPEAR_02_11030001>SMN_CHR_MOON_LOOP_02_11030001",
                },
            ],
        },
        {
            name: "Veronica",
            icon: "advIcons/110333_01_r05.png",
            animations: [
                { name: "Boss Intro", code: "A0070501_090_02>A0070501_090_01" },
                {
                    name: "Attack 1",
                    code: "A0070501_100_01>A0070501_100_02>A0070501_100_03",
                },
                {
                    name: "Attack 2",
                    code: "A0070501_101_01>A0070501_101_02>A0070501_101_03",
                },
                {
                    name: "Buff",
                    code: "A0070501_102_01>A0070501_102_02>A0070501_102_03",
                },
            ],
        },
        {
            name: "Radiant Xuan Zang",
            icon: "advIcons/110299_02_r05.png",
            animations: [
                { name: "Boss Intro", code: "A0690001_090_02>A0690001_090_01" },
                { name: "Swing", code: "A0690001_040_01" },
                { name: "Broken", code: "A0690001_081_01>A0690001_081_02" },
                { name: "Recover from Broken", code: "A0690001_081_03" },
                { name: "Front Attack", code: "A0690001_103_01" },
            ],
        },
        {
            name: "Mega Man",
            icon: "advIcons/110354_01_r05.png",
            animations: [
                {
                    name: "Join Room",
                    code: "ROD_ONT_05_11035401&ts=-0.5>ROD_ONT_02_11035401>ROD_ONT_07_11035401>ROD_ONT_08_11035401>ROD_ONT_21_11035401",
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
                {
                    name: "Summon",
                    code: "SMN_CHR_ROD_APPEAR_01_11036101>SMN_CHR_ROD_LOOP_01_11036101",
                },
                {
                    name: "Eldwater",
                    code: "SMN_CHR_MOON_APPEAR_02_11036101>SMN_CHR_MOON_LOOP_02_11036101",
                },
                { name: "Bob", code: "CMN_MWM_03_11036101" },
                { name: "Stroll", code: "CMN_MWM_21_11036101" },
                { name: "Fly Slow", code: "CMN_RUN_01_11036101" },
                { name: "Fly Fast", code: "CMN_RUN_02_11036101" },
                {
                    name: "Join Room",
                    code: "ROD_ONT_06_11036101&ts=-0.5>ROD_ONT_04_11036101>ROD_ONT_09_11036101>ROD_ONT_10_11036101>ROD_ONT_23_11036101",
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
                { name: "Boss Intro", code: "A0170001_090_02>A0170001_090_01" },
                { name: "Boss Attack", code: "A0170001_100_01" },
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
        {
            name: "Kuzunoha",
            icon: "advIcons/110374_01_r05.png",
            animations: [
                { name: "Boss Intro", code: "A0760001_090_02>A0760001_090_01" },
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
            name: "Summer Mym",
            icon: "advIcons/100010_10_r05.png",
            animations: [
                {
                    name: "Dragondrive",
                    code: "GUN_CTD_01_10001010>GUN_CTD_02_10001010",
                },
            ],
        },
        {
            name: "Lapis",
            icon: "advIcons/110370_01_r05.png",
            animations: [
                { name: "Boss Intro", code: "A0700001_090_02>A0700001_090_01" },
                { name: "Broken", code: "A0700001_081_01>A0700001_081_02" },
                { name: "Recover from Broken", code: "A0700001_081_03" },
                { name: "Throw", code: "A0700001_100_01>A0700001_100_02" },
                { name: "Throw 2", code: "A0700001_107_01" },
                { name: "Swing", code: "A0700001_108_01" },
                { name: "Swing 2", code: "A0700001_109_01" },
                { name: "Backflip", code: "A0700001_110_01" },
                {
                    name: "Jump Spin",
                    code: "A0700001_111_01>A0700001_111_02>A0700001_111_03",
                },
                { name: "Spin Backflip", code: "A0700001_113_01" },
            ],
        },
        {
            name: "Yoshitsune",
            icon: "advIcons/110376_01_r05.png",
            animations: [
                { name: "Boss Intro", code: "A0730001_090_01" },
                { name: "Broken", code: "A0700001_081_01>A0700001_081_02" },
                { name: "Recover from Broken", code: "A0700001_081_03" },
            ],
        },
        {
            name: "Eirene",
            icon: "advIcons/110384_01_r05.png",
            animations: [{ name: "Fast Run", code: "GUN_RUN_02_11038401" }],
        },
        {
            name: "Saiga",
            icon: "advIcons/110389_01_r05.png",
            animations: [
                { name: "Broken", code: "A0700001_081_01>A0700001_081_02" },
                { name: "Recover from Broken", code: "A0700001_081_03" },
                { name: "Boss Intro", code: "A0830001_090_02>A0830001_090_01" },
                { name: "Multiple Shots", code: "A0830001_105_01" },
            ],
        },
    ],
};

export default otherUnique;
