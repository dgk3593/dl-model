/**
 * @type {{ [weaponType: string]: AnimationList }}
 */
const uniqueFS = {
    Sword: [
        {
            icon: "advIcons/100003_07_r05.png",
            name: "Gala Ranzal",
            subtitle: "Gale-Clad Sword",
            code: "SWD_CHR_11",
        },
        {
            icon: "advIcons/100018_02_r05.png",
            name: "Gala Leif",
            subtitle: "Shielding Stance",
            code: "SWD_CHR_01_10001802>SWD_CHR_02_10001802>SWD_CHR_03_10001802",
        },
        {
            icon: "advIcons/110315_01_r04.png",
            name: "Ku Hai",
            subtitle: "Apsaras Formation",
            code: "SWD_CHR_10",
        },
        {
            icon: "advIcons/110050_02_r05.png",
            name: "Hunter Berserker",
            code: "SWD_CHR_01_11005002>SWD_CHR_02_11005002>SWD_CHR_03_11005002",
        },
        {
            icon: "advIcons/110371_01_r05.png",
            name: "Pecorine",
            code: "SWD_CHR_01_11037101>SWD_CHR_02_11037101>SWD_CHR_03_11037101",
        },
        {
            icon: "advIcons/110371_01_r05.png",
            name: "Pecorine",
            subtitle: "Enhanced",
            code:
                "SWD_CHR_A_01_11037101>SWD_CHR_A_02_11037101>SWD_CHR_A_03_11037101",
        },
        {
            icon: "advIcons/110379_01_r05.png",
            name: "Mona",
            code: "SWD_CHR_01_11037901>SWD_CHR_02_11037901>SWD_CHR_03_11037901",
        },
    ],
    Blade: [
        {
            icon: "advIcons/110027_01_r03.png",
            name: "Melody",
            subtitle: "Maid's Soul",
            code:
                "KAT_CHR_A_01_11002701>KAT_CHR_A_02_11002701>KAT_CHR_A_03_11002701",
        },
        {
            icon: "advIcons/110271_01_r05.png",
            name: "Linnea",
            subtitle: "Cluster Amaryllis",
            code:
                "KAT_CHR_A_01_11027101>KAT_CHR_A_02_11027101>KAT_CHR_A_03_11027101",
        },
        {
            icon: "advIcons/110296_02_r05.png",
            name: "Forager Mitsuba",
            subtitle: "Plucked Mandradish",
            code:
                "KAT_CHR_A_01_11029602>KAT_CHR_A_02_11029602>KAT_CHR_A_03_11029602",
        },
    ],
    Dagger: [
        {
            icon: "advIcons/100032_04_r05.png",
            name: "Gala Laxi",
            code: "DAG_CHR_01_10003204>DAG_CHR_02_10003204>DAG_CHR_03_10003204",
        },
        {
            icon: "advIcons/110306_01_r05.png",
            name: "Bellina",
            subtitle: "Dragondrive",
            code: "DAG_CHR_01_11030601>DAG_CHR_02_11030601>DAG_CHR_03_11030601",
        },
        {
            icon: "advIcons/110365_01_r05.png",
            name: "Nevin",
            code: "DAG_CHR_01_11036501>DAG_CHR_02_11036501>DAG_CHR_03_11036501",
        },
        {
            icon: "advIcons/110377_01_r05.png",
            name: "Joker",
            code: "DAG_CHR_01_11037701>DAG_CHR_02_11037701>DAG_CHR_03_11037701",
        },
    ],
    Axe: [
        {
            icon: "advIcons/100006_11_r05.png",
            name: "Kimono Luca",
            code: "AXE_CHR_01_10000611>AXE_CHR_02_10000611",
        },
        {
            icon: "advIcons/110322_01_r05.png",
            name: "Zhu Bajie",
            code: "AXE_CHR_01_11032201>AXE_CHR_02_11032201>AXE_CHR_03_11032201",
        },
        {
            icon: "advIcons/110335_02_r05.png",
            name: "Summer Patia",
            code: "AXE_CHR_01_11033502>AXE_CHR_02_11033502>AXE_CHR_03_11033502",
        },
        {
            icon: "advIcons/110307_02_r05.png",
            name: "Dragonyule Victor",
            subtitle: "Merry Mobilizer",
            code: "AXE_CHR_01>AXE_CHR_02>AXE_CHR_A_03_11030702",
        },
        {
            icon: "advIcons/110380_01_r05.png",
            name: "Sophie",
            code: "AXE_CHR_01_11038001>AXE_CHR_02_11038001>AXE_CHR_03_11038001",
        },
    ],
    Lance: [
        {
            icon: "advIcons/110358_01_r05.png",
            name: "Sharena",
            code: "LAN_CHR_01_11035801>LAN_CHR_02_11035801>LAN_CHR_03_11035801",
        },
        {
            icon: "advIcons/110358_01_r05.png",
            name: "Sharena",
            subtitle: "Cancelled",
            code: "LAN_CHR_01_11035801>LAN_CHR_02_11035801>LAN_CHR_04_11035801",
        },
        {
            icon: "advIcons/110357_01_r05.png",
            name: "Nadine",
            code: "LAN_CHR_01_11035701>LAN_CHR_02_11035701>LAN_CHR_03_11035701",
        },
        {
            icon: "advIcons/110364_01_r05.png",
            name: "Catherine",
            code: "LAN_CHR_01_11036401>LAN_CHR_02_11036401>LAN_CHR_03_11036401",
        },
        {
            icon: "advIcons/110007_02_r05.png",
            name: "Hunter Vanessa",
            code: "LAN_CHR_01_11000702>LAN_CHR_02_11000702>LAN_CHR_03_11000702",
        },
        {
            icon: "advIcons/110007_02_r05.png",
            name: "Hunter Vanessa",
            subtitle: "Damaged while Charging",
            code: "LAN_CHR_01_11000702>LAN_CHR_02_11000702>LAN_CHR_04_11000702",
        },
        {
            icon: "advIcons/110378_01_r05.png",
            name: "Panther",
            code: "LAN_CHR_01_11037801>LAN_CHR_02_11037801>LAN_CHR_03_11037801",
        },
        {
            icon: "advIcons/110381_01_r05.png",
            name: "Ryszarda",
            code: "LAN_CHR_01_11038101>LAN_CHR_02_11038101>LAN_CHR_03_11038101",
        },
    ],
    Bow: [
        {
            icon: "advIcons/100029_03_r05.png",
            name: "Hunter Sarisse",
            code: "BOW_CHR_01_10002903>BOW_CHR_02_10002903>BOW_CHR_03_10002903",
        },
        {
            icon: "advIcons/110366_01_r05.png",
            name: "Pinon",
            code: "BOW_CHR_01_11036601>BOW_CHR_02_11036601>BOW_CHR_03_11036601",
        },
        {
            icon: "advIcons/110368_01_r05.png",
            name: "Meene",
            code: "BOW_CHR_01_11036801>BOW_CHR_02_11036801>BOW_CHR_03_11036801",
        },
    ],
    Wand: [
        {
            icon: "advIcons/110354_01_r05.png",
            name: "Mega Man",
            subtitle: "Charged Shot",
            code: "ROD_CHR_01_11035401>ROD_CHR_02_11035401>ROD_CHR_03_11035401",
        },
        {
            icon: "advIcons/110361_01_r05.png",
            name: "Peony",
            code: "ROD_CHR_01_11036101>ROD_CHR_02_11036101>ROD_CHR_03_11036101",
        },
        {
            icon: "advIcons/110375_01_r05.png",
            name: "Seimei",
            subtitle: "Banishing Strike",
            code: "ROD_CHR_01_11037501>ROD_CHR_02_11037501>ROD_CHR_03_11037501",
        },
    ],
    Staff: [
        {
            icon: "advIcons/100009_08_r05.png",
            name: "Gala Zena",
            subtitle: "Twilight Moon",
            code:
                "CAN_CHR_A_01_10000908>CAN_CHR_A_02_10000908>CAN_CHR_A_03_10000908",
        },
        {
            icon: "advIcons/110252_02_r05.png",
            name: "Dragonyule Lily",
            subtitle: "Saint Starfall Lily",
            code:
                "CAN_CHR_A_01_11025202>CAN_CHR_A_02_11025202>CAN_CHR_A_03_11025202",
        },
    ],
    Manacaster: [
        {
            icon: "advIcons/110367_01_r05.png",
            name: "Ilia",
            subtitle: "Alchemic Blast",
            code:
                "GUN_CHR_U_01_11036701>GUN_CHR_U_02_11036701>GUN_CHR_U_03_11036701",
        },
        {
            icon: "advIcons/110382_01_r05.png",
            name: "Faris",
            code:
                "GUN_CHR_A_01_11038201>GUN_CHR_A_02_11038201>GUN_CHR_A_03_11038201",
        },
    ],
};

export default uniqueFS;
