/**
 * @type {{ [id:string]: AnimationList}}
 */
const enemyAni = {
    h0080501: [
        { name: "Idle", code: "H0080501_000_01" },
        { name: "Move Forward", code: "H0080501_000_01" },
        { name: "Defeated", code: "H0080501_011_01" },
        { name: "Idle 2", code: "H0080501_014_01" },
        { name: "Buff", code: "H0080501_030_01" },
        { name: "Look Around", code: "H0080501_070_01>H0080501_070_02" },
        { name: "Broken", code: "H0080501_081_01>H0080501_081_02" },
        { name: "Recover from Broken", code: "H0080501_081_03" },
        {
            name: "Blast Attack",
            code:
                "H0080501_100_01>H0080501_100_02>H0080501_100_03>H0080501_100_04>H0080501_100_05",
        },
        {
            name: "Slap",
            code:
                "H0080501_101_01>H0080501_101_02>H0080501_101_03>H0080501_101_04>H0080501_101_05",
        },
        {
            name: "Weapon Swing",
            code:
                "H0080501_102_01>H0080501_102_02>H0080501_102_03>H0080501_102_04",
        },
        {
            name: "Multiple Swings",
            code: "H0080501_103_01>H0080501_103_02>H0080501_103_03",
        },
        {
            name: "Charge Forward",
            code:
                "H0080501_104_01>H0080501_104_02>H0080501_104_03>H0080501_104_04>H0080501_104_05",
        },
        {
            name: "Hammer Smash",
            code:
                "H0080501_105_01>H0080501_105_02>H0080501_105_03>H0080501_105_04>H0080501_105_05",
        },
        { name: "Boss Appear", code: "H0080501_090_01>H0080501_090_02" },
    ],
};

export default enemyAni;
