/**
 * @type {{ [weaponType: string]: AnimationList }}
 */
const uniqueCombo = {
    Sword: [
        {
            icon: "advIcons/100018_02_r05.png",
            name: "Gala Leif",
            subtitle: "Striking Stance",
            code:
                "SWD_CMB_A_01_10001802>SWD_CMB_A_02_10001802>SWD_CMB_A_03_10001802",
        },
        {
            icon: "advIcons/100018_02_r05.png",
            name: "Gala Leif",
            subtitle: "Shielding Stance",
            code:
                "SWD_CMB_B_01_10001802>SWD_CMB_B_02_10001802>SWD_CMB_B_03_10001802",
        },
        {
            icon: "advIcons/100005_02_r05.png",
            name: "Gala Alex",
            code:
                "SWD_CMB_01_10000502>SWD_CMB_02_10000502>SWD_CMB_03_10000502>SWD_CMB_04_10000502>SWD_CMB_05_10000502",
        },
        {
            icon: "advIcons/110371_01_r05.png",
            name: "Pecorine",
            code:
                "SWD_CMB_01_11037101>SWD_CMB_02_11037101>SWD_CMB_03_11037101>SWD_CMB_04_11037101>SWD_CMB_05_11037101",
        },
        {
            icon: "advIcons/110379_01_r05.png",
            name: "Mona",
            code:
                "SWD_CMB_01_11037901>SWD_CMB_02_11037901>SWD_CMB_03_11037901>SWD_CMB_04_11037901>SWD_CMB_05_11037901>SWD_CMB_06_11037901>SWD_CMB_07_11037901",
        },
    ],
    Bow: [
        {
            icon: "advIcons/110366_01_r05.png",
            name: "Pinon",
            subtitle: "Sigil Released",
            code: "BOW_CMB_06_11036601",
        },
        {
            icon: "advIcons/110368_01_r05.png",
            name: "Meene",
            code:
                "BOW_CMB_A_01_11036801>BOW_CMB_A_02_11036801>BOW_CMB_A_03_11036801",
        },
    ],
    Dagger: [
        {
            icon: "advIcons/100032_04_r05.png",
            name: "Gala Laxi",
            code:
                "DAG_CMB_A_01_10003204>DAG_CMB_A_02_10003204>DAG_CMB_A_03_10003204>DAG_CMB_A_04_10003204",
        },
        {
            icon: "advIcons/100032_04_r05.png",
            name: "Gala Laxi",
            subtitle: "Delayed",
            code: "DAG_CMB_B_04_10003204",
        },
        {
            icon: "advIcons/110296_01_r05.png",
            name: "Mitsuba",
            subtitle: "Sashimi Stance",
            code:
                "DAG_CMB_A_01_11029601>DAG_CMB_A_02_11029601>DAG_CMB_A_03_11029601",
        },
        {
            icon: "advIcons/110296_01_r05.png",
            name: "Mitsuba",
            subtitle: "Tempura Stance",
            code:
                "DAG_CMB_B_01_11029601>DAG_CMB_B_02_11029601>DAG_CMB_B_03_11029601",
        },
        {
            icon: "advIcons/110306_01_r05.png",
            name: "Bellina",
            subtitle: "Dragondrive",
            code:
                "DAG_CMB_A_01_11030601>DAG_CMB_A_02_11030601>DAG_CMB_A_03_11030601",
        },
        {
            icon: "advIcons/110360_01_r05.png",
            name: "Tiki",
            code:
                "DAG_CMB_A_01_11036001>DAG_CMB_A_02_11036001>DAG_CMB_A_03_11036001>DAG_CMB_A_04_11036001>DAG_CMB_A_05_11036001",
        },
        {
            icon: "advIcons/110365_01_r05.png",
            name: "Nevin",
            subtitle: "Revelation Sword",
            code: "DAG_CMB_06_11036501",
        },
        {
            icon: "advIcons/110377_01_r05.png",
            name: "Joker",
            code:
                "DAG_CMB_01_11037701>DAG_CMB_02_11037701>DAG_CMB_03_11037701>DAG_CMB_04_11037701>DAG_CMB_05_11037701>DAG_CMB_06_11037701",
        },
    ],
    Blade: [
        {
            icon: "advIcons/110295_01_r05.png",
            name: "Valerio",
            subtitle: "Appetizer Stance",
            code:
                "KAT_CMB_A_01_11029501>KAT_CMB_A_02_11029501>KAT_CMB_A_03_11029501",
        },
        {
            icon: "advIcons/110295_01_r05.png",
            name: "Valerio",
            subtitle: "Entrée Stance",
            code:
                "KAT_CMB_B_01_11029501>KAT_CMB_B_02_11029501>KAT_CMB_B_03_11029501",
        },
        {
            icon: "advIcons/110295_01_r05.png",
            name: "Valerio",
            subtitle: "Dessert Stance",
            code:
                "KAT_CMB_C_01_11029501>KAT_CMB_C_02_11029501>KAT_CMB_C_03_11029501",
        },
        {
            icon: "advIcons/110352_01_r05.png",
            name: "Tobias",
            subtitle: "Sacred Blade",
            code:
                "KAT_CMB_A_01_11035201>KAT_CMB_A_02_11035201>KAT_CMB_A_03_11035201",
        },
    ],
    Axe: [
        {
            icon: "advIcons/110380_01_r05.png",
            name: "Sophie",
            code:
                "AXE_CMB_01_11038001>AXE_CMB_02_11038001>AXE_CMB_03_11038001>AXE_CMB_04_11038001>AXE_CMB_05_11038001>AXE_CMB_06_11038001",
        },
    ],
    Lance: [
        {
            icon: "advIcons/110357_01_r05.png",
            name: "Nadine",
            code:
                "LAN_CMB_A_01_11035701>LAN_CMB_A_02_11035701>LAN_CMB_A_03_11035701>LAN_CMB_A_04_11035701>LAN_CMB_A_05_11035701",
        },
        {
            icon: "advIcons/110364_01_r05.png",
            name: "Catherine",
            code:
                "LAN_CMB_A_01_11036401>LAN_CMB_A_02_11036401>LAN_CMB_A_03_11036401",
        },
        {
            icon: "advIcons/110378_01_r05.png",
            name: "Panther",
            code:
                "LAN_CMB_01_11037801>LAN_CMB_02_11037801>LAN_CMB_03_11037801>LAN_CMB_04_11037801>LAN_CMB_05_11037801",
        },
        {
            icon: "advIcons/110381_01_r05.png",
            name: "Ryszarda",
            subtitle: "Sigil Unlocked",
            code:
                "LAN_CMB_06_01_11038101>LAN_CMB_06_02_11038101>LAN_CMB_06_03_11038101",
        },
    ],
    Wand: [
        {
            icon: "advIcons/110354_01_r05.png",
            name: "Mega Man",
            code:
                "ROD_CMB_01_01_11035401>ROD_CMB_01_02_11035401>ROD_CMB_01_03_11035401",
        },
        {
            icon: "advIcons/110361_01_r05.png",
            name: "Peony",
            code:
                "ROD_CMB_01_11036101>ROD_CMB_02_11036101>ROD_CMB_03_11036101>ROD_CMB_04_11036101>ROD_CMB_05_11036101",
        },
    ],
};

export default uniqueCombo;
