/**
 * @type {{ [id:string]: AnimationList}}
 */
const dragonAni = {
    d200008_01: [
        { name: "Idle", code: "D20000801_000_01" },
        {
            name: "Defeated",
            code: "D20000801_011_01>D20000801_011_02",
        },
        {
            name: "Intro",
            code: "D20000801_090_01>D20000801_090_02",
        },
        { name: "Clap", code: "D20000801_100_01" },
    ],
    d200009_01: [
        { name: "Dragon's Roost", code: "DC_d200009_01_90_01" },
        { name: "Receive Gift", code: "DC_d200009_01_90_04" },
        { name: "Idle", code: "D20000901_000_01" },
        { name: "Lean forward", code: "D20000901_001_01" },
        { name: "Walk", code: "D20000901_002_01" },
        { name: "Run", code: "D20000901_003_01" },
        { name: "Brake", code: "D20000901_004_01" },
        { name: "Jump Backward", code: "D20000901_021_01" },
        { name: "Dash", code: "D20000901_020_01" },
        { name: "Transform", code: "D20000901_030_01" },
        {
            name: "Combo",
            code: "D20000901_040_01>D20000901_041_01>D20000901_042_01",
        },
        { name: "Alchemical Hellfire", code: "D20000901_060_01" },
        { name: "Take Damage", code: "D20000901_010_01" },
        { name: "Power Up", code: "D20000901_022_01" },
        { name: "Defeated", code: "D20000901_011_01" },
        { name: "Frozen", code: "D20000901_013_01" },
        { name: "Idle 2", code: "D20000901_014_01" },
        { name: "Weakened", code: "D20000901_015_01>D20000901_015_02" },
        {
            name: "Weakened 2",
            code: "D20000901_081_01>D20000901_081_02>D20000901_081_03",
        },
        {
            name: "Knocked Away",
            code: "D20000901_016_01>D20000901_016_02>D20000901_016_03",
        },
        {
            name: "Broken",
            code:
                "D20000901_082_01>D20000901_082_02>D20000901_082_03>D20000901_082_04",
        },
        {
            name: "Recover from Broken",
            code: "D20000901_082_05",
        },
        { name: "Tail Whip", code: "D20000901_100_01" },
        { name: "Front Attack", code: "D20000901_101_01" },
        {
            name: "Spin Attack",
            code: "D20000901_102_01>D20000901_102_02>D20000901_102_03",
        },
        {
            name: "Attack From Above",
            code: "D20000901_103_01>D20000901_103_02>D20000901_103_03",
        },
        { name: "Buff", code: "D20000901_104_01" },
        {
            name: "Blast",
            code: "D20000901_105_01>D20000901_105_02>D20000901_105_03",
        },
        {
            name: "Roar",
            code: "D20000901_106_01>D20000901_106_02>D20000901_106_03",
        },
        { name: "Fire Breath", code: "D20000901_107_01" },
        {
            name: "Charged Fire Breath",
            code:
                "D20000901_108_01>D20000901_108_02>D20000901_108_03>D20000901_108_04>D20000901_108_05",
        },
        { name: "Double Claw Attack", code: "D20000901_109_01" },
    ],
    d200010_01: [
        { name: "Dragon's Roost", code: "DC_d200010_01_90_01" },
        { name: "Receive Gift", code: "DC_d200010_01_90_04" },
        { name: "Idle", code: "D20001001_000_01" },
        { name: "Walk", code: "D20001001_002_01" },
        { name: "Run", code: "D20001001_003_01" },
        { name: "Brake", code: "D20001001_004_01" },
        { name: "Dash Forward", code: "D20001001_020_01" },
        { name: "Transform", code: "D20001001_030_01" },
        {
            name: "Combo",
            code: "D20001001_040_01>D20001001_041_01>D20001001_042_01",
        },
        {
            name: "Immortal Spirit",
            code: "D20001001_060_01",
        },
    ],
    d200011_01: [
        { name: "Idle", code: "D20001101_000_01" },
        { name: "Walk", code: "D20001101_002_01" },
        { name: "Dash Forward", code: "D20001801_020_01" },
        { name: "Roar", code: "D20001801_022_01" },
        { name: "Take Damage", code: "D20001101_010_01" },
        { name: "Defeated", code: "D20001101_011_01" },
        { name: "Frozen", code: "D20001101_013_01" },
        { name: "Frozen 2", code: "D20001101_014_01" },
        {
            name: "Broken",
            code: "D20001101_081_01>D20001101_081_02",
        },
        {
            name: "Recover from Broken",
            code: "D20001101_081_03",
        },
        {
            name: "Boss Intro",
            code: "D20001101_090_01",
        },
        {
            name: "Stomp",
            code: "D20001101_100_01",
        },
        {
            name: "Tail Slap",
            code: "D20001101_101_01",
        },
        {
            name: "Spit Poison",
            code: "D20001101_102_01>D20001101_102_02>D20001101_102_03",
        },
        {
            name: "Quick Attack",
            code: "D20001101_103_01",
        },
        {
            name: "Charge Up",
            code: "D20001101_104_01>D20001101_104_02>D20001101_104_03",
        },
        {
            name: "Long Roar",
            code: "D20001101_105_01>D20001101_105_02>D20001101_105_03",
        },
        {
            name: "Stab Ground",
            code:
                "D20001101_106_01>D20001101_106_02>D20001101_106_03>D20001101_106_04>D20001101_106_05",
        },
        {
            name: "Crawl",
            code:
                "D20001101_107_01>D20001101_107_02>D20001101_107_03>D20001101_107_04>D20001101_107_05",
        },
    ],
    d200017_01: [
        { name: "Dragon's Roost", code: "DC_d200017_01_90_01" },
        { name: "Receive Gift", code: "DC_d200017_01_90_04" },
        { name: "Idle", code: "D20001701_000_01" },
        { name: "Walk", code: "D20001701_002_01" },
        { name: "Run", code: "D20001701_003_01" },
        { name: "Brake", code: "D20001701_004_01" },
        { name: "Dash Forward", code: "D20001701_020_01" },
        { name: "Transform", code: "D20001701_030_01" },
        {
            name: "Combo",
            code: "D20001701_040_01>D20001701_041_01>D20001701_042_01",
        },
        {
            name: "Elegant Artifice",
            code: "D20001701_060_01",
        },
    ],
    d200018_01: [
        { name: "Dragon's Roost", code: "DC_d200018_01_90_01" },
        { name: "Receive Gift", code: "DC_d200018_01_90_04" },
        { name: "Idle", code: "D20001801_000_01" },
        { name: "Move Forward", code: "D20001801_002_01" },
        { name: "Move Forward (Fast)", code: "D20001801_003_01" },
        { name: "Brake", code: "D20001801_004_01" },
        { name: "Dash Forward", code: "D20001801_020_01" },
        { name: "Transform", code: "D20001801_030_01" },
        {
            name: "Combo",
            code:
                "D20001801_040_01>D20001801_041_01>D20001801_042_01>D20001801_043_01>D20001801_044_01",
        },
        {
            name: "Thor's Hammer",
            code: "D20001801_060_01>D20001801_060_02>D20001801_060_03",
        },
        { name: "Take Damage", code: "D20001801_010_01" },
        { name: "Defeated", code: "D20001801_011_01>D20001801_011_02" },
        { name: "Frozen", code: "D20001801_013_01" },
        { name: "Idle 2", code: "D20001801_014_01" },
        {
            name: "Weakened",
            code: "D20001801_081_01>D20001801_081_02>D20001801_081_03",
        },
        {
            name: "Battle Stance",
            code: "D20001801_090_01>D20001801_090_02",
        },
        {
            name: "Boss Skill",
            code:
                "D20001801_100_01>D20001801_100_02>D20001801_100_03>D20001801_100_04>D20001801_100_05",
        },
        {
            name: "Charge Up",
            code:
                "D20001801_101_01>D20001801_101_02>D20001801_101_03>D20001801_101_04>D20001801_101_05",
        },
        {
            name: "Double Punch",
            code:
                "D20001801_102_01>D20001801_102_02>D20001801_102_03>D20001801_102_04>D20001801_102_05",
        },
        {
            name: "Rapid Punch",
            code:
                "D20001801_103_01>D20001801_103_02>D20001801_103_03>D20001801_103_04",
        },
        {
            name: "Spin Attack",
            code:
                "D20001801_104_01>D20001801_104_02>D20001801_104_03>D20001801_104_04>D20001801_104_05",
        },
        {
            name: "Uppercut",
            code: "D20001801_105_01>D20001801_105_02>D20001801_105_03",
        },
    ],
    d210010_01: [
        { name: "Dragon's Roost", code: "DC_d210010_01_90_01" },
        { name: "Receive Gift", code: "DC_d210010_01_90_04" },
        { name: "Idle", code: "D21001001_000_01" },
        { name: "Move Forward", code: "D21001001_002_01" },
        { name: "Move Forward (Fast)", code: "D21001001_003_01" },
        { name: "Brake", code: "D21001001_004_01" },
        { name: "Dash Forward", code: "D21001001_020_01" },
        { name: "Transform", code: "D21001001_030_01" },
        {
            name: "Combo",
            code: "D21001001_040_01>D21001001_041_01>D21001001_042_01",
        },
        {
            name: "Hurricane Drive",
            code: "D21001001_060_01",
        },
        {
            name: "Howl",
            code: "D21001001_061_01",
        },
    ],
    d210016_01: [
        { name: "Dragon's Roost", code: "DC_d210016_01_90_01" },
        { name: "Receive Gift", code: "DC_d210016_01_90_04" },
        { name: "Idle", code: "D21001601_000_01" },
        { name: "Walk", code: "D21001601_002_01" },
        { name: "Run", code: "D21001601_003_01" },
        { name: "Brake", code: "D21001601_004_01" },
        { name: "Dash Forward", code: "D21001601_020_01" },
        { name: "Transform", code: "D21001601_030_01" },
        {
            name: "Combo",
            code: "D21001601_040_01>D21001601_041_01>D21001601_042_01",
        },
        {
            name: "Rapid Attack",
            code: "D21001601_060_01",
        },
        {
            name: "Devastation",
            code: "D21001601_061_01",
        },
    ],
    d210017_01: [
        { name: "Dragon's Roost", code: "DC_d210017_01_90_01" },
        { name: "Receive Gift", code: "DC_d210017_01_90_04" },
        { name: "Idle", code: "D21001701_000_01" },
        { name: "Move Forward", code: "D21001701_002_01" },
        { name: "Move Forward (Fast)", code: "D21001701_003_01" },
        { name: "Brake", code: "D21001701_004_01" },
        { name: "Dash Forward", code: "D21001701_020_01" },
        { name: "Transform", code: "D21001701_030_01" },
        {
            name: "Combo",
            code: "D21001701_040_01>D21001701_041_01>D21001701_042_01",
        },
        {
            name: "Front Attack",
            code: "D21001701_060_01",
        },
        {
            name: "Tidal Stream",
            code: "D21001701_061_01",
        },
    ],
    d210018_01: [
        { name: "Dragon's Roost", code: "DC_d210018_01_90_01" },
        { name: "Receive Gift", code: "DC_d210018_01_90_04" },
        { name: "Idle", code: "D21001801_000_01" },
        { name: "Move Forward", code: "D21001801_002_01" },
        { name: "Move Forward (Fast)", code: "D21001801_003_01" },
        { name: "Brake", code: "D21001801_004_01" },
        { name: "Dash Forward", code: "D21001801_020_01" },
        { name: "Move Backward", code: "D21001801_021_01" },
        { name: "Transform", code: "D21001801_030_01" },
        {
            name: "Combo",
            code: "D21001801_040_01>D21001801_041_01>D21001801_042_01",
        },
        {
            name: "Flap Wings",
            code: "D21001801_060_01",
        },
        {
            name: "Zephyr's Wrath",
            code: "D21001801_061_01",
        },
    ],
    d210019_01: [
        { name: "Dragon's Roost", code: "DC_d210019_01_90_01" },
        { name: "Receive Gift", code: "DC_d210019_01_90_04" },
        { name: "Idle", code: "D21001901_000_01" },
        { name: "Walk", code: "D21001901_002_01" },
        { name: "Run", code: "D21001901_003_01" },
        { name: "Brake", code: "D21001901_004_01" },
        { name: "Dash Forward", code: "D21001901_020_01" },
        { name: "Transform", code: "D21001901_030_01" },
        {
            name: "Combo",
            code: "D21001901_040_01>D21001901_041_01>D21001901_042_01",
        },
        {
            name: "Stomp",
            code: "D21001901_060_01",
        },
        {
            name: "Total Eclipse",
            code: "D21001901_061_01",
        },
    ],
    d210020_01: [
        { name: "Dragon's Roost", code: "DC_d210020_01_90_01" },
        { name: "Receive Gift", code: "DC_d210020_01_90_04" },
        { name: "Idle", code: "D21002001_000_01" },
        { name: "Move Forward", code: "D21002001_002_01" },
        { name: "Move Forward (Fast)", code: "D21002001_003_01" },
        { name: "Brake", code: "D21002001_004_01" },
        { name: "Dash Forward", code: "D21002001_020_01" },
        { name: "Jump Backward", code: "D21002001_021_01" },
        { name: "Transform", code: "D21002001_030_01" },
        {
            name: "Combo",
            code: "D21002001_040_01>D21002001_041_01>D21002001_042_01",
        },
        {
            name: "Thrust",
            code: "D21002001_060_01",
        },
        {
            name: "Saint's Banner",
            code: "D21002001_061_01",
        },
    ],
    d210024_01: [
        { name: "Dragon's Roost", code: "DC_d210024_01_90_01" },
        { name: "Receive Gift", code: "DC_d210024_01_90_04" },
        { name: "Idle", code: "D21002401_000_01" },
        { name: "Move Forward", code: "D21002401_002_01" },
        { name: "Move Forward (Fast)", code: "D21002401_003_01" },
        { name: "Brake", code: "D21002401_004_01" },
        { name: "Dash Forward", code: "D21002401_020_01" },
        { name: "Transform", code: "D21002401_030_01" },
        {
            name: "Combo",
            code: "D21002401_040_01>D21002401_041_01>D21002401_042_01",
        },
        {
            name: "Unused Skill",
            code: "D21002401_060_01",
        },
        {
            name: "Infernal Damnation",
            code: "D21002401_061_01",
        },
    ],
    d210025_01: [
        { name: "Dragon's Roost", code: "DC_d210025_01_90_01" },
        { name: "Receive Gift", code: "DC_d210025_01_90_04" },
        { name: "Idle", code: "D21002501_000_01" },
        { name: "Move Forward", code: "D21002501_002_01" },
        { name: "Move Forward (Fast)", code: "D21002501_003_01" },
        { name: "Brake", code: "D21002501_004_01" },
        { name: "Dash Forward", code: "D21002501_020_01" },
        { name: "Transform", code: "D21002501_030_01" },
        {
            name: "Combo",
            code: "D21002501_040_01>D21002501_041_01>D21002501_042_01",
        },
        {
            name: "Poseidon's Trident",
            code: "D21002501_060_01>D21002501_060_02>D21002501_060_03",
        },
        {
            name: "Ground Stab",
            code: "D21002501_061_01",
        },
    ],
    d210026_01: [
        { name: "Dragon's Roost", code: "DC_d210026_01_90_01" },
        { name: "Receive Gift", code: "DC_d210026_01_90_04" },
        { name: "Idle", code: "D21002601_000_01" },
        { name: "Move Forward", code: "D21002601_002_01" },
        { name: "Move Forward (Fast)", code: "D21002601_003_01" },
        { name: "Brake", code: "D21002601_004_01" },
        { name: "Dash Forward", code: "D21002601_020_01" },
        { name: "Move Backward", code: "D21002601_021_01" },
        { name: "Transform", code: "D21002601_030_01" },
        {
            name: "Combo",
            code: "D21002601_040_01>D21002601_041_01>D21002601_042_01",
        },
        {
            name: "Catastrophic Winds",
            code: "D21002601_060_01",
        },
    ],
    d210030_01: [
        { name: "Dragon's Roost", code: "DC_d210030_01_90_01" },
        { name: "Receive Gift", code: "DC_d210030_01_90_04" },
        { name: "Idle", code: "D21003001_000_01" },
        { name: "Run", code: "D21003001_002_01" },
        { name: "Run Fast", code: "D21003001_003_01" },
        { name: "Brake", code: "D21003001_004_01" },
        { name: "Dash Forward", code: "D21003001_020_01" },
        { name: "Transform", code: "D21003001_030_01" },
        {
            name: "Combo",
            code: "D21003001_040_01>D21003001_041_01>D21003001_042_01",
        },
        {
            name: "Dragon Drop",
            code: "D21003001_060_01",
        },
    ],
    d210036_01: [
        { name: "Dragon's Roost", code: "DC_d210006_01_90_01" },
        { name: "Receive Gift", code: "DC_d210006_01_90_04" },
        { name: "Idle", code: "D21000601_000_01" },
        { name: "Move Forward", code: "D21000601_002_01" },
        { name: "Move Forward (Fast)", code: "D21000601_003_01" },
        { name: "Brake", code: "D21000601_004_01" },
        { name: "Dash Forward", code: "D21000601_020_01" },
        { name: "Transform", code: "D21000601_030_01" },
        {
            name: "Combo",
            code: "D21000601_040_01>D21000601_041_01>D21000601_042_01",
        },
        {
            name: "Tempestuous Kiss",
            code: "D21000601_060_01",
        },
    ],
    d210038_01: [
        { name: "Dragon's Roost", code: "DC_d210001_01_90_01" },
        { name: "Receive Gift", code: "DC_d210001_01_90_04" },
        { name: "Idle", code: "D21000101_000_01" },
        { name: "Lean Forward", code: "D21000101_001_01" },
        { name: "Walk", code: "D21000101_002_01" },
        { name: "Run", code: "D21000101_003_01" },
        { name: "Brake", code: "D21000101_004_01" },
        { name: "Dash Forward", code: "D21000101_020_01" },
        { name: "Jump Backward", code: "D21000101_021_01>D21000101_021_02" },
        { name: "Transform", code: "D21000101_030_01" },
        {
            name: "Combo",
            code: "D21000101_040_01>D21000101_041_01>D21000101_042_01",
        },
        {
            name: "Grand Tempest",
            code: "D21000101_062_01",
        },
        {
            name: "Take Damage",
            code: "D21000101_010_01",
        },
        {
            name: "Defeated",
            code: "D21000101_011_01>D21000101_011_02",
        },
        {
            name: "Frozen",
            code: "D21000101_013_01",
        },
        {
            name: "Weakened",
            code: "D21000101_015_01>D21000101_015_02",
        },
        {
            name: "Stagger Midair",
            code: "D21000101_017_01>D21000101_017_02>D21000101_017_03",
        },
        {
            name: "Broken",
            code: "D21000101_081_01>D21000101_081_02",
        },
        {
            name: "Recover from Broken",
            code: "D21000101_081_03",
        },
        {
            name: "Broken Midair",
            code:
                "D21000101_082_01>D21000101_082_02>D21000101_082_03>D21000101_082_04>D21000101_082_05",
        },
        {
            name: "Boss Intro",
            code: "D21000101_090_01>D21000101_090_02",
        },
        {
            name: "Quick Attack",
            code: "D21000101_100_01",
        },
        {
            name: "Small Back Jump",
            code: "D21000101_101_01",
        },
        {
            name: "Spin Attack",
            code: "D21000101_102_01>D21000101_102_02>D21000101_102_03",
        },
        {
            name: "Trident Tempest",
            code: "D21000101_103_01>D21000101_103_02>D21000101_103_03",
        },
        {
            name: "Roar",
            code: "D21000101_104_01",
        },
        {
            name: "Summon Help",
            code: "D21000101_108_01",
        },
        {
            name: "Land",
            code: "D21000101_109_01>D21000101_109_02",
        },
        {
            name: "Calamitous Storm",
            code: "D21003801_105_01>D21003801_105_02>D21003801_105_03",
        },
        {
            name: "Tattered Sky",
            code: "D21003801_106_01>D21003801_106_02>D21003801_106_03",
        },
        {
            name: "Storm Chaser",
            code: "D21003801_107_01",
        },
    ],
    d210039_01: [
        { name: "Dragon's Roost", code: "DC_d210002_01_90_01" },
        { name: "Receive Gift", code: "DC_d210002_01_90_04" },
        { name: "Infernal Ray", code: "D21010401_60_01" },
        { name: "Idle", code: "D21000201_000_01" },
        { name: "Lean Forward", code: "D21000201_001_01" },
        { name: "Walk", code: "D21000201_002_01" },
        { name: "Run", code: "D21000201_003_01" },
        { name: "Brake", code: "D21000201_004_01" },
        { name: "Dash Forward", code: "D21000201_020_01" },
        { name: "Jump Backward", code: "D21000201_021_01" },
        { name: "Transform", code: "D21000201_030_01" },
        {
            name: "Combo",
            code: "D21000201_040_01>D21000201_041_01>D21000201_042_01",
        },
        {
            name: "Muspelheim",
            code: "D21000201_060_01",
        },
        {
            name: "Crimson Inferno",
            code: "D21000201_061_01",
        },
        {
            name: "Take Damage",
            code: "D21000201_010_01",
        },
        {
            name: "Defeated",
            code: "D21000201_011_01>D21000201_011_02",
        },
        {
            name: "Frozen",
            code: "D21000201_013_01",
        },
        {
            name: "Weakened",
            code: "D21000201_015_01>D21000201_015_02",
        },
        {
            name: "Weakened 2",
            code: "D21000201_081_01>D21000201_081_02>D21000201_081_03",
        },
        {
            name: "Staggered Midair",
            code: "D21000201_017_01>D21000201_017_02>D21000201_017_03",
        },
        {
            name: "Broken",
            code:
                "D21000201_082_01>D21000201_082_02>D21000201_082_03>D21000201_082_04",
        },
        {
            name: "Recover from Broken",
            code: "D21000201_082_05",
        },
        {
            name: "Boss Intro",
            code: "D21000201_090_01>D21000201_090_02",
        },
        {
            name: "Claw Attack",
            code: "D21000201_100_01",
        },
        {
            name: "Flame Breath",
            code: "D21000201_101_01>D21000201_101_02>D21000201_101_03",
        },
        {
            name: "Take Flight",
            code: "D21000201_102_01",
        },
        {
            name: "Take Flight 2",
            code: "D21000201_104_01>D21000201_104_02>D21000201_104_03",
        },
        {
            name: "Fly Straight",
            code: "D21000201_102_02",
        },
        {
            name: "Fly Up",
            code: "D21000201_102_04",
        },
        {
            name: "Land",
            code: "D21000201_102_03",
        },
        {
            name: "Roar",
            code: "D21000201_107_01",
        },
        {
            name: "Roar 2",
            code: "D21000201_062_01",
        },
        {
            name: "Meteors",
            code: "D21000201_103_01",
        },
        {
            name: "Front Attack",
            code: "D21000201_104_04",
        },
        {
            name: "Scorching Blast",
            code: "D21003901_105_01>D21003901_105_02>D21003901_105_03",
        },
        {
            name: "Before Muspelheim",
            code: "D21003901_106_01>D21003901_106_02",
        },
    ],
    d210040_01: [
        { name: "Dragon's Roost", code: "DC_d210003_01_90_01" },
        { name: "Receive Gift", code: "DC_d210003_01_90_04" },
        { name: "Idle", code: "D21000301_000_01" },
        { name: "Lean Forward", code: "D21000301_001_01" },
        { name: "Walk", code: "D21000301_002_01" },
        { name: "Run", code: "D21000301_003_01" },
        { name: "Brake", code: "D21000301_004_01" },
        { name: "Dash Forward", code: "D21000301_020_01" },
        { name: "Transform", code: "D21000301_030_01" },
        {
            name: "Combo",
            code: "D21000301_040_01>D21000301_041_01>D21000301_042_01",
        },
        {
            name: "Aqua Spiral",
            code: "D21004001_107_01>D21004001_107_02>D21004001_107_03",
        },
        {
            name: "Take Damage",
            code: "D21000301_010_01",
        },
        {
            name: "Defeated",
            code: "D21000301_011_01",
        },
        {
            name: "Frozen",
            code: "D21000301_013_01",
        },
        {
            name: "Weakened",
            code: "D21000301_015_01>D21000301_015_02",
        },
        {
            name: "Broken",
            code: "D21000301_081_01>D21000301_081_02",
        },
        {
            name: "Recover From Broken",
            code: "D21000301_081_03",
        },
        {
            name: "Boss Intro",
            code: "D21000301_090_01>D21000301_090_02",
        },
        {
            name: "Stomp",
            code: "D21000301_100_01",
        },
        {
            name: "Tail Slap",
            code: "D21000301_101_01",
        },
        {
            name: "Water Balls",
            code: "D21000301_102_01>D21000301_102_02>D21000301_102_03",
        },
        {
            name: "Spit Water",
            code: "D21000301_103_01",
        },
        {
            name: "Tidal Call",
            code: "D21000301_104_01>D21000301_104_02>D21000301_104_03",
        },
        {
            name: "Roar",
            code: "D21000301_110_01",
        },
        {
            name: "Launch Forward",
            code: "D21000301_111_01>D21000301_111_02>D21000301_111_03",
        },
        {
            name: "Tidal Explosion",
            code: "D21004001_105_01>D21004001_105_02>D21004001_105_03",
        },
        {
            name: "Waterfall",
            code: "D21004001_106_01>D21004001_106_02>D21004001_106_03",
        },
        {
            name: "Bursting Bubbles",
            code: "D21004001_108_01",
        },
        {
            name: "Homing Bubble",
            code: "D21004001_109_01>D21004001_109_02>D21004001_109_03",
        },
    ],
    d210041_01: [
        { name: "Dragon's Roost", code: "DC_d210004_01_90_01" },
        { name: "Receive Gift", code: "DC_d210004_01_90_04" },
        { name: "Idle", code: "D21000401_000_01" },
        { name: "Run", code: "D21000401_002_01" },
        { name: "Run Fast", code: "D21005001_003_01" },
        { name: "Brake", code: "D21000401_004_01" },
        { name: "Dash Forward", code: "D21000401_020_01" },
        { name: "Transform", code: "D21000401_030_01" },
        {
            name: "Combo",
            code: "D21000401_040_01>D21000401_041_01>D21000401_042_01",
        },
        { name: "Kick the Ground", code: "D21000401_001_01" },
        {
            name: "Launch Forward",
            code: "D21000401_060_01",
        },
        {
            name: "Launch Forward 2",
            code:
                "D21000401_101_01>D21000401_101_02>D21000401_101_03>D21000401_101_04>D21000401_101_05",
        },
        {
            name: "Shocking Spark",
            code: "D21000401_061_01",
        },
        {
            name: "Shocking Spark 2",
            code: "D21000401_102_01>D21000401_102_02>D21000401_102_03",
        },
        {
            name: "Primal Thunder",
            code: "D21000401_062_01",
        },
        {
            name: "Primal Thunder 2",
            code: "D21000401_064_01",
        },
        {
            name: "Primal Thunder 3",
            code: "D21000401_104_01",
        },
        {
            name: "Take Damage",
            code: "D21000401_010_01",
        },
        {
            name: "Defeated",
            code: "D21000401_011_01",
        },
        {
            name: "Frozen",
            code: "D21000401_013_01",
        },
        {
            name: "Weakened",
            code: "D21000401_015_01>D21000401_015_02",
        },
        {
            name: "Weakened 2",
            code: "D21000401_080_01>D21000401_080_02>D21000401_080_03",
        },
        {
            name: "Broken",
            code: "D21000401_081_01>D21000401_081_02",
        },
        {
            name: "Recover from Broken",
            code: "D21000401_081_03",
        },
        {
            name: "Boss Intro",
            code: "D21000401_090_01>D21000401_090_02",
        },
        {
            name: "Peck",
            code: "D21000401_100_01",
        },
        {
            name: "Charge",
            code:
                "D21000401_103_01>D21000401_103_02>D21000401_103_03>D21000401_103_04",
        },
        {
            name: "Supreme Surge",
            code: "D21004101_105_01>D21004101_105_02>D21004101_105_03",
        },
    ],
    d210042_01: [
        { name: "Dragon's Roost", code: "DC_d210005_01_90_01" },
        { name: "Receive Gift", code: "DC_d210005_01_90_04" },
        { name: "Idle", code: "D21000501_000_01" },
        { name: "Howl", code: "D21000501_001_01" },
        { name: "Walk", code: "D21000501_002_01" },
        { name: "Run", code: "D21000501_003_01" },
        { name: "Brake", code: "D21000501_004_01" },
        { name: "Dash Forward", code: "D21000501_020_01" },
        { name: "Transform", code: "D21000501_030_01" },
        {
            name: "Combo",
            code: "D21000501_040_01>D21000501_041_01>D21000501_042_01",
        },
        { name: "Obsidian Ray", code: "D21000501_060_01" },
        { name: "Dash Attack", code: "D21000501_061_01" },
        { name: "Accursed Venom", code: "D21000501_062_01" },
        {
            name: "Take Damage",
            code: "D21000501_010_01",
        },
        {
            name: "Defeated",
            code: "D21000501_011_01",
        },
        {
            name: "Frozen",
            code: "D21000501_013_01",
        },
        {
            name: "Weakened",
            code: "D21000501_015_01>D21000501_015_02",
        },
        {
            name: "Broken",
            code: "D21000501_081_01>D21000501_081_02",
        },
        {
            name: "Recover from Broken",
            code: "D21000501_081_03",
        },
        {
            name: "Boss Intro",
            code: "D21000501_090_01>D21000501_090_02",
        },
        {
            name: "Quick Attack",
            code: "D21000501_100_01",
        },
        {
            name: "Tail Slam",
            code: "D21000501_101_01",
        },
        {
            name: "Roar and Stomp",
            code: "D21000501_102_01>D21000501_102_02>D21000501_102_03",
        },
        {
            name: "Wide Breath",
            code: "D21000501_103_01>D21000501_103_02>D21000501_103_03",
        },
        {
            name: "Dash Forward",
            code: "D21000501_104_01>D21000501_104_02>D21000501_104_03",
        },
        {
            name: "Spit Poison",
            code: "D21000501_105_01",
        },
        {
            name: "Roar",
            code: "D21000501_106_01",
        },
        {
            name: "Cursed Catastrophe",
            code: "D21004201_107_01>D21004201_107_02>D21004201_107_03",
        },
        {
            name: "CW Breath",
            code: "D21004201_108_01>D21004201_108_02",
        },
        {
            name: "CCW Breath",
            code: "D21004201_108_01>D21004201_109_02",
        },
    ],
    d210043_01: [
        { name: "Dragon's Roost", code: "DC_d210014_01_90_01" },
        { name: "Receive Gift", code: "DC_d210014_01_90_04" },
        { name: "Idle", code: "D21001401_000_01" },
        { name: "Walk", code: "D21001401_002_01" },
        { name: "Run", code: "D21001401_003_01" },
        { name: "Brake", code: "D21001401_004_01" },
        { name: "Dash Forward", code: "D21001401_020_01" },
        { name: "Transform", code: "D21001401_030_01" },
        {
            name: "Combo",
            code: "D21001401_040_01>D21001401_041_01>D21001401_042_01",
        },
        {
            name: "Lightning Blitz",
            code: "D21001401_062_01>D21001401_062_02>D21001401_062_03",
        },
    ],
    d210045_01: [
        { name: "Dragon's Roost", code: "DC_d210014_01_90_01" },
        { name: "Receive Gift", code: "DC_d210014_01_90_04" },
        { name: "Idle", code: "D21001401_000_01" },
        { name: "Walk", code: "D21001401_002_01" },
        { name: "Run", code: "D21001401_003_01" },
        { name: "Brake", code: "D21001401_004_01" },
        { name: "Dash Forward", code: "D21001401_020_01" },
        { name: "Transform", code: "D21001401_030_01" },
        {
            name: "Combo",
            code: "D21001401_040_01>D21001401_041_01>D21001401_042_01",
        },
        {
            name: "Thorny Spiral",
            code: "D21001401_060_01",
        },
    ],
    d210046_01: [
        { name: "Dragon's Roost", code: "DC_d210046_01_90_01" },
        { name: "Receive Gift", code: "DC_d210046_01_90_04" },
        { name: "Idle", code: "D21004601_000_01" },
        { name: "Walk", code: "D21004601_002_01" },
        { name: "Run", code: "D21004601_003_01" },
        { name: "Brake", code: "D21004601_004_01" },
        { name: "Dash Forward", code: "D21004601_020_01" },
        { name: "Transform", code: "D21004601_030_01" },
        {
            name: "Combo",
            code: "D21004601_040_01>D21004601_041_01>D21004601_042_01",
        },
        {
            name: "All-Encompassing Darkness",
            code: "D21004601_060_01",
        },
    ],
    d210048_01: [
        { name: "Dragon's Roost", code: "DC_d210048_01_90_01" },
        { name: "Receive Gift", code: "DC_d210048_01_90_04" },
        { name: "Idle", code: "D21004801_000_01" },
        { name: "Move Forward", code: "D21004801_002_01" },
        { name: "Move Forward (Fast)", code: "D21004801_003_01" },
        { name: "Brake", code: "D21004801_004_01" },
        { name: "Dash Forward", code: "D21004801_020_01" },
        { name: "Move Backward", code: "D21004801_021_01" },
        { name: "Transform", code: "D21004801_030_01" },
        {
            name: "Combo",
            code: "D21004801_040_01>D21004801_041_01>D21004801_042_01",
        },
        {
            name: "Subjugating Sword",
            code: "D21004801_060_01",
        },
    ],
    d210049_01: [
        { name: "Dragon's Roost", code: "DC_d210049_01_90_01" },
        { name: "Receive Gift", code: "DC_d210049_01_90_04" },
        { name: "Idle", code: "D21004901_000_01" },
        { name: "Move Forward", code: "D21004901_002_01" },
        { name: "Move Forward (Fast)", code: "D21004901_003_01" },
        { name: "Brake", code: "D21004901_004_01" },
        { name: "Dash Forward", code: "D21004901_020_01" },
        { name: "Transform", code: "D21004901_030_01" },
        {
            name: "Combo",
            code: "D21004901_040_01>D21004901_041_01>D21004901_042_01",
        },
        {
            name: "Lovely Pose",
            code: "D21004901_060_01",
        },
    ],
    d210051_01: [
        { name: "Dragon's Roost", code: "DC_d210051_01_90_01" },
        { name: "Receive Gift", code: "DC_d210051_01_90_04" },
        { name: "Idle", code: "D21000701_000_01" },
        { name: "Walk", code: "D21000701_002_01" },
        { name: "Run", code: "D21000701_003_01" },
        { name: "Brake", code: "D21000701_004_01" },
        { name: "Dash Forward", code: "D21000701_020_01" },
        { name: "Transform", code: "D21000701_030_01" },
        {
            name: "Combo",
            code: "D21000701_040_01>D21000701_041_01>D21000701_042_01",
        },
        {
            name: "Charge",
            code:
                "D21000701_060_01>D21000701_060_02>D21000701_060_03>D21000701_060_04",
        },
        {
            name: "Thunderous Charge",
            code:
                "D21005101_060_01>D21005101_060_02>D21005101_060_03>D21005101_060_02>D21005101_060_03>D21005101_060_02>D21005101_060_04",
        },
    ],
    d210052_01: [
        { name: "Dragon's Roost", code: "DC_d210052_01_90_01" },
        { name: "Receive Gift", code: "DC_d210052_01_90_04" },
        { name: "Idle", code: "D21005201_000_01" },
        { name: "Move Forward", code: "D21005201_002_01" },
        { name: "Move Forward (Fast)", code: "D21005201_003_01" },
        { name: "Brake", code: "D21005201_004_01" },
        { name: "Dash Forward", code: "D21005201_020_01" },
        { name: "Transform", code: "D21005201_030_01" },
        {
            name: "Combo",
            code: "D21005201_040_01>D21005201_041_01>D21005201_042_01",
        },
        {
            name: "Promethean Flame",
            code: "D21005201_060_01",
        },
    ],
    d210053_01: [
        { name: "Dragon's Roost", code: "DC_d210053_01_90_01" },
        { name: "Receive Gift", code: "DC_d210053_01_90_04" },
        { name: "Idle", code: "D21005301_000_01" },
        { name: "Move Forward", code: "D21005301_002_01" },
        { name: "Move Forward (Fast)", code: "D21005301_003_01" },
        { name: "Brake", code: "D21005301_004_01" },
        { name: "Dash Forward", code: "D21005301_020_01" },
        { name: "Transform", code: "D21005301_030_01" },
        {
            name: "Combo",
            code: "D21005301_040_01>D21005301_041_01>D21005301_042_01",
        },
        {
            name: "Pancake Paradise",
            code: "D21005301_060_01",
        },
    ],
    d210054_01: [
        { name: "Dragon's Roost", code: "DC_d210054_01_90_01" },
        { name: "Receive Gift", code: "DC_d210054_01_90_04" },
        { name: "Idle", code: "D21005401_000_01" },
        { name: "Move Forward", code: "D21005401_002_01" },
        { name: "Move Forward (Fast)", code: "D21005401_003_01" },
        { name: "Brake", code: "D21005401_004_01" },
        { name: "Dash Forward", code: "D21005401_020_01" },
        { name: "Transform", code: "D21005401_030_01" },
        {
            name: "Combo",
            code: "D21005401_040_01>D21005401_041_01>D21005401_042_01",
        },
        {
            name: "Aquatic Melody",
            code: "D21005401_060_01",
        },
    ],
    d210055_01: [
        { name: "Dragon's Roost", code: "DC_d210055_01_90_01" },
        { name: "Receive Gift", code: "DC_d210055_01_90_04" },
        { name: "Idle", code: "D21005501_000_01" },
        { name: "Walk", code: "D21005501_002_01" },
        { name: "Run", code: "D21005501_003_01" },
        { name: "Brake", code: "D21005501_004_01" },
        { name: "Dash Forward", code: "D21005501_020_01" },
        { name: "Transform", code: "D21005501_030_01" },
        {
            name: "Combo",
            code: "D21005501_040_01>D21005501_041_01>D21005501_042_01",
        },
        {
            name: "Illuminated Path",
            code: "D21005501_060_01",
        },
    ],
    d210056_01: [
        { name: "Dragon's Roost", code: "DC_d210006_01_90_01" },
        { name: "Receive Gift", code: "DC_d210006_01_90_04" },
        { name: "Idle", code: "D21000601_000_01" },
        { name: "Move Forward", code: "D21000601_002_01" },
        { name: "Move Forward (Fast)", code: "D21000601_003_01" },
        { name: "Brake", code: "D21000601_004_01" },
        { name: "Dash Forward", code: "D21000601_021_01" },
        { name: "Transform", code: "D21000601_030_01" },
        {
            name: "Combo",
            code: "D21000601_040_01>D21000601_041_01>D21000601_042_01",
        },
        {
            name: "Refreshing Flare",
            code: "D21000601_061_01",
        },
    ],
    d210057_01: [
        { name: "Dragon's Roost", code: "DC_d210008_01_90_01" },
        { name: "Receive Gift", code: "DC_d210008_01_90_04" },
        { name: "Idle", code: "D21000801_000_01" },
        { name: "Move Forward", code: "D21000801_002_01" },
        { name: "Move Forward (Fast)", code: "D21000801_003_01" },
        { name: "Brake", code: "D21000801_004_01" },
        { name: "Dash Forward", code: "D21000801_020_01" },
        { name: "Transform", code: "D21000801_030_01" },
        {
            name: "Combo",
            code: "D21000801_040_01>D21000801_041_01>D21000801_042_01",
        },
        {
            name: "Blazing Pillars",
            code: "D21000801_061_01",
        },
    ],
    d210071_01: [
        { name: "Idle", code: "D21004601_000_01" },
        { name: "Walk", code: "D21004601_002_01" },
        { name: "Run", code: "D21004601_003_01" },
        { name: "Brake", code: "D21004601_004_01" },
        { name: "Dash Forward", code: "D21004601_020_01" },
        { name: "Transform", code: "D21004601_030_01" },
        {
            name: "Combo",
            code: "D21004601_040_01>D21004601_041_01>D21004601_042_01",
        },
        {
            name: "All-Encompassing Darkness",
            code: "D21004601_060_01",
        },
    ],
    d210072_01: [
        { name: "Dragon's Roost", code: "DC_d210072_01_90_01" },
        { name: "Receive Gift", code: "DC_d210072_01_90_04" },
        { name: "Idle", code: "D21007201_000_01" },
        { name: "Run", code: "D21007201_002_01" },
        { name: "Run Fast", code: "D21007201_003_01" },
        { name: "Brake", code: "D21007201_004_01" },
        { name: "Dash Forward", code: "D21007201_020_01" },
        { name: "Transform", code: "D21007201_030_01" },
        {
            name: "Combo",
            code: "D21007201_040_01>D21007201_041_01>D21007201_042_01",
        },
        {
            name: "Polar Roller",
            code: "D21007201_060_01>D21007201_060_02>D21007201_060_03",
        },
    ],
    d210074_01: [
        { name: "Dragon's Roost", code: "DC_d210012_01_90_01" },
        { name: "Receive Gift", code: "DC_d210012_01_90_04" },
        { name: "Idle", code: "D21001201_000_01" },
        { name: "Walk", code: "D21001201_002_01" },
        { name: "Run", code: "D21001201_003_01" },
        { name: "Brake", code: "D21001201_004_01" },
        { name: "Dash Forward", code: "D21001201_020_01" },
        { name: "Transform", code: "D21001201_030_01" },
        {
            name: "Combo",
            code: "D21001201_040_01>D21001201_041_01>D21001201_042_01",
        },
        {
            name: "Stand on Hind Legs",
            code: "D21007401_060_01",
        },
        {
            name: "Subjugating Storm",
            code: "D21001201_061_01",
        },
    ],
    d210076_01: [
        { name: "Dragon's Roost", code: "DC_d210076_01_90_01" },
        { name: "Receive Gift", code: "DC_d210076_01_90_04" },
        { name: "Idle", code: "D21007601_000_01" },
        { name: "Move Forward", code: "D21007601_002_01" },
        { name: "Move Forward (Fast)", code: "D21007601_003_01" },
        { name: "Brake", code: "D21007601_004_01" },
        { name: "Dash Forward", code: "D21007601_020_01" },
        { name: "Jump Backward", code: "D21007601_021_01" },
        { name: "Transform", code: "D21007601_030_01" },
        {
            name: "Combo",
            code: "D21007601_040_01>D21007601_041_01>D21007601_042_01",
        },
        {
            name: "Frost Beam",
            code: "D21007601_060_01",
        },
        {
            name: "Ground Stab",
            code: "D21007601_061_01",
        },
    ],
    d210077_01: [
        { name: "Dragon's Roost", code: "DC_d210077_01_90_01" },
        { name: "Receive Gift", code: "DC_d210077_01_90_04" },
        { name: "Idle", code: "D21007701_000_01" },
        { name: "Move Forward", code: "D21007701_002_01" },
        { name: "Move Forward (Fast)", code: "D21007701_003_01" },
        { name: "Brake", code: "D21007701_004_01" },
        { name: "Dash Forward", code: "D21007701_020_01" },
        { name: "Transform", code: "D21007701_030_01" },
        {
            name: "Combo",
            code:
                "D21007701_040_01>D21007701_041_01>D21007701_042_01>D21007701_043_01>D21007701_044_01",
        },
        { name: "Daybreak Flurry", code: "D21007701_060_01" },
    ],
    d210078_01: [
        { name: "Dragon's Roost", code: "DC_d210078_01_90_01" },
        { name: "Receive Gift", code: "DC_d210078_01_90_04" },
        { name: "Idle", code: "D21007801_000_01" },
        { name: "Walk", code: "D21007801_002_01" },
        { name: "Run", code: "D21007801_003_01" },
        { name: "Brake", code: "D21007801_004_01" },
        { name: "Dash Forward", code: "D21007801_020_01" },
        { name: "Transform", code: "D21007801_030_01" },
        {
            name: "Combo",
            code: "D21007801_040_01>D21007801_041_01>D21007801_042_01",
        },
        { name: "Blessed Ritual", code: "D21007801_060_01" },
    ],
    d210079_01: [
        { name: "Dragon's Roost", code: "DC_d210079_01_90_01" },
        { name: "Receive Gift", code: "DC_d210079_01_90_04" },
        { name: "Idle", code: "D21007901_000_01" },
        { name: "Move Forward", code: "D21007901_002_01" },
        { name: "Move Forward (Fast)", code: "D21007901_003_01" },
        { name: "Brake", code: "D21007901_004_01" },
        { name: "Dash Forward", code: "D21007901_020_01" },
        { name: "Transform", code: "D21007901_030_01" },
        {
            name: "Combo",
            code: "D21007901_040_01>D21007901_041_01>D21007901_042_01",
        },
        {
            name: "Swift Stream",
            code: "D21007901_060_01",
        },
    ],
    d210080_01: [
        { name: "Dragon's Roost", code: "DC_d210080_01_90_01" },
        { name: "Receive Gift", code: "DC_d210080_01_90_04" },
        { name: "Idle", code: "D21008001_000_01" },
        { name: "Move Forward", code: "D21008001_002_01" },
        { name: "Move Forward (Fast)", code: "D21008001_003_01" },
        { name: "Brake", code: "D21008001_004_01" },
        { name: "Dash Forward", code: "D21008001_020_01" },
        { name: "Transform", code: "D21008001_030_01" },
        {
            name: "Combo",
            code:
                "D21008001_040_01>D21008001_041_01>D21008001_042_01>D21008001_043_01>D21008001_044_01",
        },
        {
            name: "Howling Burst",
            code: "D21008001_060_01",
        },
    ],
    d210081_01: [
        { name: "Dragon's Roost", code: "DC_d210018_01_90_01" },
        { name: "Receive Gift", code: "DC_d210018_01_90_04" },
        { name: "Idle", code: "D21001801_000_01" },
        { name: "Move Forward", code: "D21001801_002_01" },
        { name: "Move Forward (Fast)", code: "D21001801_003_01" },
        { name: "Brake", code: "D21001801_004_01" },
        { name: "Dash Forward", code: "D21001801_020_01" },
        { name: "Move Backward", code: "D21001801_021_01" },
        { name: "Transform", code: "D21001801_030_01" },
        {
            name: "Combo",
            code: "D21001801_040_01>D21001801_041_01>D21001801_042_01",
        },
        {
            name: "Flap Wings",
            code: "D21001801_060_01",
        },
        {
            name: "Rainbow Bubbles",
            code: "D21008101_060_01",
        },
    ],
    d210082_01: [
        { name: "Dragon's Roost", code: "DC_d210082_01_90_01" },
        { name: "Receive Gift", code: "DC_d210082_01_90_04" },
        { name: "Idle", code: "D21008201_000_01" },
        { name: "Move Forward", code: "D21008201_002_01" },
        { name: "Move Forward (Fast)", code: "D21008201_003_01" },
        { name: "Brake", code: "D21008201_004_01" },
        { name: "Dash Forward", code: "D21008201_020_01" },
        { name: "Transform", code: "D21008201_030_01" },
        {
            name: "Combo",
            code: "D21008201_040_01>D21008201_041_01>D21008201_042_01",
        },
        {
            name: "Deciduous Dance",
            code: "D21008201_060_01",
        },
    ],
    d210083_01: [
        { name: "Dragon's Roost", code: "DC_d210083_01_90_01" },
        { name: "Receive Gift", code: "DC_d210083_01_90_04" },
        { name: "Idle", code: "D21008301_000_01" },
        { name: "Move Forward", code: "D21008301_002_01" },
        { name: "Move Forward (Fast)", code: "D21008301_003_01" },
        { name: "Brake", code: "D21008301_004_01" },
        { name: "Dash Forward", code: "D21008301_020_01" },
        { name: "Transform", code: "D21008301_030_01" },
        {
            name: "Combo",
            code: "D21008301_040_01>D21008301_041_01>D21008301_042_01",
        },
        {
            name: "Ground Shaker",
            code: "D21008301_060_01",
        },
    ],
    d210084_01: [
        { name: "Dragon's Roost", code: "DC_d210084_01_90_01" },
        { name: "Receive Gift", code: "DC_d210084_01_90_04" },
        { name: "Idle", code: "D21008401_000_01" },
        { name: "Move Forward", code: "D21008401_002_01" },
        { name: "Move Forward (Fast)", code: "D21008401_003_01" },
        { name: "Brake", code: "D21008401_004_01" },
        { name: "Dash Forward", code: "D21008401_020_01" },
        { name: "Transform", code: "D21008401_030_01" },
        {
            name: "Combo",
            code: "D21008401_040_01>D21008401_041_01>D21008401_042_01",
        },
        {
            name: "Breath of Life",
            code: "D21008401_060_01",
        },
    ],
    d210085_01: [
        { name: "Dragon's Roost", code: "DC_d210085_01_90_01" },
        { name: "Receive Gift", code: "DC_d210085_01_90_04" },
        { name: "Idle", code: "D21008501_000_01" },
        { name: "Move Forward", code: "D21008501_002_01" },
        { name: "Move Forward (Fast)", code: "D21008501_003_01" },
        { name: "Brake", code: "D21008501_004_01" },
        { name: "Dash Forward", code: "D21008501_020_01" },
        { name: "Transform", code: "D21008501_030_01" },
        {
            name: "Combo",
            code: "D21008501_040_01>D21008501_041_01>D21008501_042_01",
        },
        {
            name: "Energizing Fan",
            code: "D21008501_060_01",
        },
    ],
    d210087_01: [
        { name: "Dragon's Roost", code: "DC_d210087_01_90_01" },
        { name: "Receive Gift", code: "DC_d210087_01_90_04" },
        { name: "Idle", code: "D21004801_000_01" },
        { name: "Move Forward", code: "D21004801_002_01" },
        { name: "Move Forward (Fast)", code: "D21004801_003_01" },
        { name: "Brake", code: "D21004801_004_01" },
        { name: "Dash Forward", code: "D21004801_020_01" },
        { name: "Move Backward", code: "D21004801_021_01" },
        { name: "Transform", code: "D21004801_030_01" },
        {
            name: "Combo",
            code: "D21004801_040_01>D21004801_041_01>D21004801_042_01",
        },
        {
            name: "Shuriken Shower",
            code: "D21008701_060_01",
        },
    ],
    d210088_01: [
        { name: "Idle", code: "D21008801_000_01" },
        { name: "Move Forward", code: "D21008801_002_01" },
        { name: "Move Forward (Fast)", code: "D21001801_003_01" },
        { name: "Brake", code: "D21001801_004_01" },
        { name: "Move Backward", code: "D21001801_021_01" },
        {
            name: "Combo",
            code: "D21008801_040_01>D21008801_041_01>D21001801_042_01",
        },
        {
            name: "Flap Wings",
            code: "D21001801_060_01",
        },
        { name: "Defeated", code: "D21008801_011_01" },
        { name: "Frozen", code: "D21008801_013_01" },
        { name: "Idle 2", code: "D21008801_014_01" },
        {
            name: "Broken",
            code: "D21008801_081_01>D21008801_081_02",
        },
        {
            name: "Recover from Broken",
            code: "D21008801_081_03",
        },
        {
            name: "Boss Intro",
            code: "D21008801_090_01>D21008801_090_02",
        },
        {
            name: "Spin Attack",
            code: "D21008801_100_01",
        },
        {
            name: "Squall",
            code: "D21008801_101_01>D21008801_101_02>D21008801_101_03",
        },
    ],
    d210091_01: [
        { name: "Dragon's Roost", code: "DC_d210022_01_90_01" },
        { name: "Receive Gift", code: "DC_d210022_01_90_04" },
        { name: "Idle", code: "D21002201_000_01" },
        { name: "Move Forward", code: "D21002201_002_01" },
        { name: "Move Forward (Fast)", code: "D21002201_003_01" },
        { name: "Brake", code: "D21002201_004_01" },
        { name: "Dash Forward", code: "D21002201_020_01" },
        { name: "Jump Backward", code: "D21002201_021_01" },
        { name: "Transform", code: "D21002201_030_01" },
        {
            name: "Combo",
            code: "D21002201_040_01>D21002201_041_01>D21002201_042_01",
        },
        {
            name: "Gold Heal",
            code: "D21009101_060_01",
        },
    ],
    d210094_01: [
        { name: "Dragon's Roost", code: "DC_d210094_01_90_01" },
        { name: "Receive Gift", code: "DC_d210094_01_90_04" },
        { name: "Idle", code: "D21005401_000_01" },
        { name: "Move Forward", code: "D21005401_002_01" },
        { name: "Move Forward (Fast)", code: "D21005401_003_01" },
        { name: "Brake", code: "D21005401_004_01" },
        { name: "Dash Forward", code: "D21005401_020_01" },
        { name: "Transform", code: "D21005401_030_01" },
        {
            name: "Combo",
            code: "D21009401_040_01>D21009401_041_01>D21009401_042_01",
        },
        {
            name: "Aquatic Melody",
            code: "D21009401_060_01",
        },
    ],
    d210095_01: [
        { name: "Dragon's Roost", code: "DC_d210005_01_90_01" },
        { name: "Receive Gift", code: "DC_d210005_01_90_04" },
        { name: "Idle", code: "D21000501_000_01" },
        { name: "Howl", code: "D21000501_001_01" },
        { name: "Walk", code: "D21000501_002_01" },
        { name: "Run", code: "D21000501_003_01" },
        { name: "Brake", code: "D21000501_004_01" },
        { name: "Dash Forward", code: "D21000501_020_01" },
        { name: "Transform", code: "D21000501_030_01" },
        {
            name: "Combo",
            code: "D21000501_040_01>D21000501_041_01>D21000501_042_01",
        },
        { name: "Malevolent Venom", code: "D21000501_062_01" },
    ],
    d210096_01: [
        { name: "Idle", code: "D21009601_000_01" },
        { name: "Run", code: "D21009601_002_01" },
        {
            name: "Dash Forward",
            code: "D21009601_020_01>D21009601_020_02>D21009601_020_03",
        },
        { name: "Defeated", code: "D21009601_011_01" },
        { name: "Frozen", code: "D21009601_013_01" },
        { name: "Idle 2", code: "D21009601_014_01" },
        {
            name: "Broken",
            code: "D21009601_081_01>D21009601_081_02",
        },
        {
            name: "Recover from Broken",
            code: "D21009601_081_03",
        },
        {
            name: "Boss Intro",
            code: "D21009601_090_01>D21009601_090_02",
        },
        {
            name: "Claw Attack",
            code: "D21009601_101_01>D21009601_101_02>D21009601_101_03",
        },
        {
            name: "Front Strike",
            code: "D21009601_102_01>D21009601_102_02>D21009601_102_03",
        },
        {
            name: "Roar",
            code: "D21009601_103_01>D21009601_103_02>D21009601_103_03",
        },
        {
            name: "Devastation",
            code:
                "D21009601_104_01>D21009601_104_02>D21009601_104_03>D21009601_104_04>D21009601_104_05",
        },
        {
            name: "Spit Fire",
            code: "D21009601_105_01",
        },
        {
            name: "Devastation (3 hits)",
            code:
                "D21009601_106_01>D21009601_106_02>D21009601_106_03>D21009601_106_04>D21009601_106_05>D21009601_106_06>D21009601_106_07",
        },
    ],
    d210097_01: [
        { name: "Dragon's Roost", code: "DC_d210072_01_90_01" },
        { name: "Receive Gift", code: "DC_d210072_01_90_04" },
        { name: "Idle", code: "D21007201_000_01" },
        { name: "Run", code: "D21009701_002_01" },
        { name: "Run Fast", code: "D21009701_003_01" },
        { name: "Brake", code: "D21007201_004_01" },
        { name: "Dash Forward", code: "D21007201_020_01" },
        { name: "Transform", code: "D21007201_030_01" },
        {
            name: "Combo",
            code: "D21007201_040_01>D21007201_041_01>D21007201_042_01",
        },
        {
            name: "Hocus Pocus!",
            code: "D21009701_060_01",
        },
    ],
    d210098_01: [
        { name: "Dragon's Roost", code: "DC_d210098_01_90_01" },
        { name: "Receive Gift", code: "DC_d210098_01_90_04" },
        { name: "Idle", code: "D21001601_000_01" },
        { name: "Walk", code: "D21001601_002_01" },
        { name: "Run", code: "D21001601_003_01" },
        { name: "Brake", code: "D21001601_004_01" },
        { name: "Dash Forward", code: "D21001601_020_01" },
        { name: "Transform", code: "D21001601_030_01" },
        {
            name: "Combo",
            code: "D21001601_040_01>D21001601_041_01>D21001601_042_01",
        },
        {
            name: "Rapid Attack",
            code: "D21001601_060_01",
        },
        {
            name: "Purusha Prana",
            code: "D21009801_060_01",
        },
    ],
    d210101_01: [
        { name: "Idle", code: "D21010101_000_01" },
        { name: "Move Forward", code: "D21010101_002_01" },
        { name: "Defeated", code: "D21010101_011_01" },
        {
            name: "Broken",
            code: "D21010101_081_01>D21010101_081_02",
        },
        {
            name: "Recover from Broken",
            code: "D21010101_081_03",
        },
        {
            name: "Boss Intro",
            code: "D21010101_090_01>D21010101_090_02",
        },
        {
            name: "Dash Forward",
            code: "D21010101_100_01",
        },
        {
            name: "Stab",
            code: "D21010101_101_01",
        },
        {
            name: "Claw Attack",
            code: "D21010101_102_01",
        },
        {
            name: "Double Hit",
            code: "D21010101_103_01",
        },
        {
            name: "Stab Ground",
            code: "D21010101_104_01>D21010101_104_02>D21010101_104_03",
        },
        {
            name: "Throw Water",
            code: "D21010101_105_01>D21010101_105_02>D21010101_105_03",
        },
        {
            name: "Buff",
            code: "D21010101_106_01>D21010101_106_02>D21010101_106_03",
        },
        {
            name: "Trident Attack",
            code: "D21010101_107_01",
        },
    ],
    d210102_01: [
        { name: "Idle", code: "D21010201_000_01" },
        { name: "Move Forward", code: "D21010201_002_01" },
        { name: "Defeated", code: "D21010201_011_01>D21010201_011_02" },
        {
            name: "Broken",
            code: "D21010201_081_01>D21010201_081_02",
        },
        {
            name: "Recover from Broken",
            code: "D21010201_081_03",
        },
        {
            name: "Boss Intro",
            code: "D21010201_090_01>D21010201_090_02",
        },
        {
            name: "Stab",
            code: "D21010201_100_01",
        },
        {
            name: "Double Swing",
            code: "D21010201_101_01",
        },
        {
            name: "Fly",
            code:
                "D21010201_102_01>D21010201_102_02>D21010201_102_03>D21010201_102_04>D21010201_102_05",
        },
        {
            name: "Stab Ground",
            code: "D21010201_103_01",
        },
        {
            name: "Buff",
            code: "D21010201_105_01",
        },
        {
            name: "Thrust",
            code: "D21010201_106_01",
        },
        {
            name: "Long Thrust",
            code: "D21010201_107_01>D21010201_107_02>D21010201_107_03",
        },
    ],
    d210103_01: [
        { name: "Dragon's Roost", code: "DC_d210103_01_90_01" },
        { name: "Receive Gift", code: "DC_d210103_01_90_04" },
        { name: "Idle", code: "D21010301_000_01" },
        { name: "Move Forward", code: "D21010301_002_01" },
        { name: "Move Forward (Fast)", code: "D21010301_003_01" },
        { name: "Brake", code: "D21010301_004_01" },
        { name: "Dash Forward", code: "D21010301_020_01" },
        { name: "Transform", code: "D21010301_030_01" },
        {
            name: "Combo",
            code: "D21010301_040_01>D21010301_041_01>D21010301_042_01",
        },
        {
            name: "Arrow of Glory",
            code: "D21010301_060_01",
        },
    ],
    d210113_01: [
        { name: "Idle", code: "D21000201_000_01" },
        { name: "Walk", code: "D21000201_002_01" },
        { name: "Run", code: "D21000201_003_01" },
        { name: "Brake", code: "D21000201_004_01" },
        { name: "Dash Forward", code: "D21000201_020_01" },
        { name: "Jump Backward", code: "D21000201_021_01" },
        { name: "Transform", code: "D21000201_030_01" },
        {
            name: "Combo",
            code: "D21000201_040_01>D21000201_041_01>D21000201_042_01",
        },
        {
            name: "Muspelheim",
            code: "D21000201_060_01",
        },
    ],
    d210105_01: [
        { name: "Dragon's Roost", code: "DC_d210025_01_90_01" },
        { name: "Receive Gift", code: "DC_d210025_01_90_04" },
        { name: "Idle", code: "D21002501_000_01" },
        { name: "Move Forward", code: "D21002501_002_01" },
        { name: "Move Forward (Fast)", code: "D21002501_003_01" },
        { name: "Brake", code: "D21002501_004_01" },
        { name: "Dash Forward", code: "D21002501_020_01" },
        { name: "Transform", code: "D21002501_030_01" },
        {
            name: "Combo",
            code: "D21002501_040_01>D21002501_041_01>D21002501_042_01",
        },
        {
            name: "Void Volley",
            code: "D21010501_060_01",
        },
        {
            name: "Ground Stab",
            code: "D21002501_061_01",
        },
    ],
    d210106_01: [
        { name: "Idle", code: "D21010601_000_01" },
        { name: "Idle 2", code: "D21010601_014_01" },
        { name: "Walk", code: "D21010601_002_01" },
        { name: "Run", code: "D21010601_003_01" },
        { name: "Dash Forward", code: "D21010601_020_01" },
        { name: "Stomp", code: "D21010601_022_01" },
        { name: "Defeated", code: "D21010601_011_01" },
        {
            name: "Broken",
            code: "D21010601_081_01>D21010601_081_02",
        },
        {
            name: "Recover from Broken",
            code: "D21010601_081_03",
        },
        {
            name: "Boss Intro",
            code: "D21010601_090_01>D21010601_090_02",
        },
        {
            name: "Attack from Above",
            code: "D21010601_100_01",
        },
        {
            name: "Spit",
            code:
                "D21010601_101_01>D21010601_101_02>D21010601_101_03>D21010601_101_04>D21010601_101_05>D21010601_101_06>D21010601_101_07",
        },
        {
            name: "Roar",
            code: "D21010601_102_01>D21010601_102_02>D21010601_102_03",
        },
        {
            name: "Charge",
            code: "D21010601_103_01>D21010601_103_02>D21010601_103_03",
        },
        {
            name: "Quick Attack",
            code: "D21010601_105_01",
        },
        {
            name: "Quick Stomp",
            code: "D21010601_106_01",
        },
        {
            name: "Quick Spit",
            code: "D21010601_107_01",
        },
    ],
    d210107_01: [
        { name: "Dragon's Roost", code: "DC_d210019_01_90_01" },
        { name: "Receive Gift", code: "DC_d210019_01_90_04" },
        { name: "Idle", code: "D21001901_000_01" },
        { name: "Walk", code: "D21001901_002_01" },
        { name: "Run", code: "D21001901_003_01" },
        { name: "Brake", code: "D21001901_004_01" },
        { name: "Dash Forward", code: "D21001901_020_01" },
        { name: "Transform", code: "D21001901_030_01" },
        {
            name: "Combo",
            code: "D21001901_040_01>D21001901_041_01>D21001901_042_01",
        },
        {
            name: "Stomp",
            code: "D21001901_060_01",
        },
        {
            name: "Coruscating Flames",
            code: "D21010701_060_01",
        },
    ],
    d210109_01: [
        { name: "Dragon's Roost", code: "DC_d210109_01_90_01" },
        { name: "Receive Gift", code: "DC_d210109_01_90_04" },
        { name: "Idle", code: "D21010901_000_01" },
        { name: "Walk", code: "D21010901_002_01" },
        { name: "Run", code: "D21010901_003_01" },
        { name: "Brake", code: "D21010901_004_01" },
        { name: "Dash Forward", code: "D21010901_020_01" },
        { name: "Transform", code: "D21010901_030_01" },
        {
            name: "Combo",
            code: "D21010901_040_01>D21010901_041_01>D21010901_042_01",
        },
        {
            name: "White Land",
            code: "D21010901_060_01",
        },
        {
            name: "Defeated",
            code: "D21010901_011_01",
        },
        {
            name: "Broken",
            code: "D21010901_081_01>D21010901_081_02",
        },
        {
            name: "Recover from Broken",
            code: "D21010901_081_03",
        },
        {
            name: "Boss Intro",
            code: "D21010901_090_02>D21010901_090_01",
        },
    ],
    d210110_01: [
        { name: "Dragon's Roost", code: "DC_d210110_01_90_01" },
        { name: "Receive Gift", code: "DC_d210110_01_90_04" },
        { name: "Idle", code: "D21011001_000_01" },
        { name: "Idle 2", code: "D21011001_014_01" },
        { name: "Move Forward", code: "D21011001_002_01" },
        { name: "Move Forward (Fast)", code: "D21011001_003_01" },
        { name: "Brake", code: "D21011001_004_01" },
        { name: "Dash Forward", code: "D21011001_020_01" },
        { name: "Transform", code: "D21011001_030_01" },
        {
            name: "Combo",
            code: "D21011001_040_01>D21011001_041_01>D21011001_042_01",
        },
        {
            name: "Lucky Mallet",
            code: "D21011001_060_01",
        },
        {
            name: "Broken",
            code: "D21011001_081_01>D21011001_081_02",
        },
        { name: "Recover from Broken", code: "D21011001_081_03" },
    ],
    d210111_01: [
        { name: "Dragon's Roost", code: "DC_d210111_01_90_01" },
        { name: "Receive Gift", code: "DC_d210111_01_90_04" },
        { name: "Idle", code: "D21011101_000_01" },
        { name: "Walk", code: "D21011101_002_01" },
        { name: "Run", code: "D21011101_003_01" },
        { name: "Brake", code: "D21011101_004_01" },
        { name: "Dash Forward", code: "D21011101_020_01" },
        { name: "Transform", code: "D21011101_030_01" },
        {
            name: "Combo",
            code: "D21011101_040_01>D21011101_041_01>D21011101_042_01",
        },
        {
            name: "Celebratory Storm",
            code: "D21011101_060_01",
        },
    ],
    d210112_01: [
        { name: "Dragon's Roost", code: "DC_d210112_01_90_01" },
        { name: "Receive Gift", code: "DC_d210112_01_90_04" },
        { name: "Idle", code: "D21005201_000_01" },
        { name: "Move Forward", code: "D21005201_002_01" },
        { name: "Move Forward (Fast)", code: "D21005201_003_01" },
        { name: "Brake", code: "D21005201_004_01" },
        { name: "Dash Forward", code: "D21005201_020_01" },
        { name: "Transform", code: "D21005201_030_01" },
        {
            name: "Combo",
            code: "D21005201_040_01>D21005201_041_01>D21005201_042_01",
        },
        {
            name: "Toxic Solitude",
            code: "D21011201_060_01",
        },
    ],
    d210114_01: [
        { name: "Dragon's Roost", code: "DC_d210114_01_90_01" },
        { name: "Receive Gift", code: "DC_d210114_01_90_04" },
        { name: "Idle", code: "D21011401_000_01" },
        { name: "Run", code: "D21011401_002_01" },
        { name: "Run Fast", code: "D21011401_003_01" },
        { name: "Brake", code: "D21011401_004_01" },
        { name: "Dash Forward", code: "D21011401_020_01" },
        { name: "Transform", code: "D21011401_030_01" },
        {
            name: "Combo",
            code: "D21011401_040_01>D21011401_041_01>D21011401_042_01",
        },
        {
            name: "Taiyaki Time",
            code: "D21011401_060_01",
        },
    ],
    d210115_01: [
        { name: "Dragon's Roost", code: "DC_d210115_01_90_01" },
        { name: "Receive Gift", code: "DC_d210115_01_90_04" },
        { name: "Idle", code: "D21011501_000_01" },
        { name: "Move Forward", code: "D21011501_002_01" },
        { name: "Move Forward (Fast)", code: "D21011501_003_01" },
        { name: "Brake", code: "D21011501_004_01" },
        { name: "Dash Forward", code: "D21011501_020_01" },
        { name: "Transform", code: "D21011501_030_01" },
        {
            name: "Combo",
            code: "D21011501_040_01>D21011501_041_01>D21011501_042_01",
        },
        {
            name: "Unblessed Bonds",
            code: "D21011501_060_01",
        },
    ],
    d210116_01: [
        { name: "Dragon's Roost", code: "DC_d210116_01_90_01" },
        { name: "Receive Gift", code: "DC_d210116_01_90_04" },
        { name: "Idle", code: "D21011601_000_01" },
        { name: "Move Forward", code: "D21011601_002_01" },
        { name: "Move Forward (Fast)", code: "D21011601_003_01" },
        { name: "Brake", code: "D21011601_004_01" },
        { name: "Dash Forward", code: "D21011601_020_01" },
        { name: "Transform", code: "D21011601_030_01" },
        {
            name: "Combo",
            code: "D21011601_040_01>D21011601_041_01>D21011601_042_01",
        },
        {
            name: "Cyclone Kick",
            code: "D21011601_060_01",
        },
    ],
    d210117_01: [
        { name: "Dragon's Roost", code: "DC_d210117_01_90_01" },
        { name: "Receive Gift", code: "DC_d210117_01_90_04" },
        { name: "Idle", code: "D21011701_000_01" },
        { name: "Move Forward", code: "D21011701_002_01" },
        { name: "Move Forward (Fast)", code: "D21011701_003_01" },
        { name: "Brake", code: "D21011701_004_01" },
        { name: "Dash Forward", code: "D21011701_020_01" },
        { name: "Transform", code: "D21011701_030_01" },
        {
            name: "Combo",
            code: "D21011701_040_01>D21011701_041_01>D21011701_042_01",
        },
        {
            name: "Shredding Storm",
            code: "D21011701_060_01",
        },
    ],
    d210118_01: [
        { name: "Idle", code: "D21011801_000_01" },
        { name: "Move Forward", code: "D21011801_002_01" },
        { name: "Move Forward (Fast)", code: "D21011801_003_01" },
        { name: "Brake", code: "D21011801_004_01" },
        { name: "Dash", code: "D21011801_020_01" },
        { name: "Jump on Rush", code: "D21011801_030_01" },
        {
            name: "Combo",
            code: "D21011801_040_01>D21011801_041_01>D21011801_042_01",
        },
        {
            name: "Rush Buster",
            code: "D21011801_060_01>D21011801_060_02>D21011801_060_03",
        },
    ],
    d210120_01: [
        { name: "Dragon's Roost", code: "DC_d210120_01_90_01" },
        { name: "Receive Gift", code: "DC_d210120_01_90_04" },
        { name: "Idle", code: "D21012001_000_01" },
        { name: "Move Forward", code: "D21012001_002_01" },
        { name: "Move Forward (Fast)", code: "D21012001_003_01" },
        { name: "Brake", code: "D21012001_004_01" },
        { name: "Dash Forward", code: "D21012001_020_01" },
        { name: "Transform", code: "D21012001_030_01" },
        {
            name: "Combo",
            code: "D21012001_040_01>D21012001_041_01>D21012001_042_01",
        },
        {
            name: "Dazzling Dancefloor",
            code: "D21012001_060_01",
        },
    ],
    d210121_01: [
        { name: "Dragon's Roost", code: "DC_d210121_01_90_01" },
        { name: "Receive Gift", code: "DC_d210121_01_90_04" },
        { name: "Idle", code: "D21012101_000_01" },
        { name: "Move Forward", code: "D21012101_002_01" },
        { name: "Move Forward (Fast)", code: "D21012101_003_01" },
        { name: "Brake", code: "D21012101_004_01" },
        { name: "Dash Forward", code: "D21012101_020_01" },
        { name: "Transform", code: "D21012101_030_01" },
        {
            name: "Combo",
            code: "D21012101_040_01>D21012101_041_01>D21012101_042_01",
        },
        {
            name: "Firestorm",
            code: "D21012101_060_01",
        },
    ],
    d210122_01: [
        { name: "Dragon's Roost", code: "DC_d210122_01_90_01" },
        { name: "Receive Gift", code: "DC_d210122_01_90_04" },
        { name: "Idle", code: "D21012101_000_01" },
        { name: "Move Forward", code: "D21012101_002_01" },
        { name: "Move Forward (Fast)", code: "D21012101_003_01" },
        { name: "Brake", code: "D21012101_004_01" },
        { name: "Dash Forward", code: "D21012101_020_01" },
        { name: "Transform", code: "D21012101_030_01" },
        {
            name: "Combo",
            code: "D21012101_040_01>D21012101_041_01>D21012101_042_01",
        },
        {
            name: "Ignition Breath",
            code: "D21012201_060_01",
        },
    ],
    d210123_01: [
        { name: "Dragon's Roost", code: "DC_d210123_01_90_01" },
        { name: "Receive Gift", code: "DC_d210123_01_90_04" },
        { name: "Idle", code: "D21012301_000_01" },
        { name: "Move Forward", code: "D21012301_002_01" },
        { name: "Move Forward (Fast)", code: "D21012301_003_01" },
        { name: "Brake", code: "D21012301_004_01" },
        { name: "Dash Forward", code: "D21012301_020_01" },
        { name: "Transform", code: "D21012301_030_01" },
        {
            name: "Combo",
            code: "D21012301_040_01>D21012301_041_01>D21012301_042_01",
        },
        {
            name: "Dust Explosion",
            code: "D21012301_060_01",
        },
    ],
    d210124_01: [
        { name: "Dragon's Roost", code: "DC_d210124_01_90_01" },
        { name: "Receive Gift", code: "DC_d210124_01_90_04" },
        { name: "Idle", code: "D21012401_000_01" },
        { name: "Move Forward", code: "D21012401_002_01" },
        { name: "Move Forward (Fast)", code: "D21012401_003_01" },
        { name: "Brake", code: "D21012401_004_01" },
        { name: "Dash Forward", code: "D21012401_020_01" },
        { name: "Transform", code: "D21012401_030_01" },
        {
            name: "Combo",
            code: "D21012401_040_01>D21012401_041_01>D21012401_042_01",
        },
        {
            name: "Eye of Horus",
            code: "D21012401_060_01",
        },
    ],
    d210125_01: [
        { name: "Dragon's Roost", code: "DC_d210125_01_90_01" },
        { name: "Receive Gift", code: "DC_d210125_01_90_04" },
        { name: "Idle", code: "D21012501_000_01" },
        { name: "Move Forward", code: "D21012501_002_01" },
        { name: "Move Forward (Fast)", code: "D21012501_003_01" },
        { name: "Brake", code: "D21012501_004_01" },
        { name: "Dash Forward", code: "D21012501_020_01" },
        { name: "Transform", code: "D21012501_030_01" },
        {
            name: "Combo",
            code: "D21012501_040_01>D21012501_041_01>D21012501_042_01",
        },
        {
            name: "Seashore Dance",
            code: "D21012501_060_01",
        },
    ],
    d210126_01: [
        { name: "Dragon's Roost", code: "DC_d210126_01_90_01" },
        { name: "Receive Gift", code: "DC_d210126_01_90_04" },
        { name: "Idle", code: "D21012601_000_01" },
        { name: "Move Forward", code: "D21012601_002_01" },
        { name: "Move Forward (Fast)", code: "D21012601_003_01" },
        { name: "Brake", code: "D21012601_004_01" },
        { name: "Dash Forward", code: "D21012601_020_01" },
        { name: "Transform", code: "D21012601_030_01" },
        {
            name: "Combo",
            code: "D21012601_040_01>D21012601_041_01>D21012601_042_01",
        },
        {
            name: "Merciless Doom",
            code: "D21012601_060_01",
        },
    ],
    d210127_01: [
        { name: "Dragon's Roost", code: "DC_d210127_01_90_01" },
        { name: "Receive Gift", code: "DC_d210127_01_90_04" },
        { name: "Idle", code: "D21012701_000_01" },
        { name: "Move Forward", code: "D21012701_002_01" },
        { name: "Move Forward (Fast)", code: "D21012701_003_01" },
        { name: "Brake", code: "D21012701_004_01" },
        { name: "Dash Forward", code: "D21012701_020_01" },
        { name: "Transform", code: "D21012701_030_01" },
        {
            name: "Combo",
            code: "D21012701_040_01>D21012701_041_01>D21012701_042_01",
        },
        {
            name: "Jubilant Catastrophe",
            code: "D21012701_060_01",
        },
    ],
    d210128_01: [
        { name: "Dragon's Roost", code: "DC_d210128_01_90_01" },
        { name: "Receive Gift", code: "DC_d210128_01_90_04" },
        { name: "Scratch", code: "DC_d210128_01_90_03" },
        { name: "Sit", code: "CMN_MWM_06_21012801" },
        { name: "Idle", code: "CMN_INT_01_21012801" },
        { name: "Roll", code: "CMN_050_99_21012801" },
        { name: "Walk", code: "CMN_MWM_01_21012801" },
        { name: "Walk Fast", code: "CMN_RUN_01_21012801" },
        { name: "Run", code: "CMN_RUN_02_21012801" },
        { name: "Jump Forward", code: "CMN_ROL_01_21012801" },
        { name: "Bark", code: "CMN_040_01_21012801" },
        { name: "Pick Things", code: "CMN_052_98_21012801" },
        { name: "Inspect", code: "CMN_052_99_21012801" },
        { name: "Lie Down", code: "CMN_052_97_01_21012801" },
        { name: "Lying on Side", code: "CMN_052_97_02_21012801" },
        { name: "Stand Up", code: "CMN_052_97_03_21012801" },
        {
            name: "Victory",
            code: "CMN_WIN_01_21012801>CMN_WIN_02_21012801>CMN_WIN_03_21012801",
        },
    ],
    d210130_01: [
        { name: "Dragon's Roost", code: "DC_d210130_01_90_01" },
        { name: "Receive Gift", code: "DC_d210130_01_90_04" },
        { name: "Idle", code: "D21013001_000_01" },
        { name: "Move Forward", code: "D21013001_002_01" },
        { name: "Move Forward (Fast)", code: "D21013001_003_01" },
        { name: "Brake", code: "D21013001_004_01" },
        { name: "Dash Forward", code: "D21013001_020_01" },
        { name: "Transform", code: "D21013001_030_01" },
        {
            name: "Combo",
            code: "D21013001_040_01>D21013001_041_01>D21013001_042_01",
        },
        {
            name: "Frigid Blast",
            code: "D21013001_060_01",
        },
    ],
    d210131_01: [
        { name: "Dragon's Roost", code: "DC_d210131_01_90_01" },
        { name: "Receive Gift", code: "DC_d210131_01_90_04" },
        { name: "Idle", code: "D21013101_000_01" },
        { name: "Move Forward", code: "D21013101_002_01" },
        { name: "Move Forward (Fast)", code: "D21013101_003_01" },
        { name: "Brake", code: "D21013101_004_01" },
        { name: "Dash Forward", code: "D21013101_020_01" },
        { name: "Transform", code: "D21013101_030_01" },
        {
            name: "Combo",
            code: "D21013101_040_01>D21013101_041_01>D21013101_042_01",
        },
        {
            name: "Primal Tempest",
            code: "D21013101_060_01>D21013101_060_02>D21013101_060_03",
        },
    ],
    d210132_01: [
        { name: "Dragon's Roost", code: "DC_d210132_01_90_01" },
        { name: "Receive Gift", code: "DC_d210132_01_90_04" },
        { name: "Idle", code: "D21013201_000_01" },
        { name: "Move Forward", code: "D21013201_002_01" },
        { name: "Move Forward (Fast)", code: "D21013201_003_01" },
        { name: "Brake", code: "D21013201_004_01" },
        { name: "Dash Forward", code: "D21013201_020_01" },
        { name: "Transform", code: "D21013201_030_01" },
        {
            name: "Combo",
            code: "D21013201_040_01>D21013201_041_01>D21013201_042_01",
        },
        {
            name: "Angelic Declaration",
            code: "D21013201_060_01",
        },
    ],
    d210132_02: [
        { name: "Idle", code: "D21013201_000_01" },
        { name: "Move Forward", code: "D21013201_002_01" },
        { name: "Move Forward (Fast)", code: "D21013201_003_01" },
        { name: "Brake", code: "D21013201_004_01" },
        { name: "Dash Forward", code: "D21013201_020_01" },
    ],
    d210132_03: [
        { name: "Idle", code: "D21013201_000_01" },
        { name: "Move Forward", code: "D21013201_002_01" },
        { name: "Move Forward (Fast)", code: "D21013201_003_01" },
        { name: "Brake", code: "D21013201_004_01" },
        { name: "Dash Forward", code: "D21013201_020_01" },
    ],
    d210133_01: [
        { name: "Dragon's Roost", code: "DC_d210133_01_90_01" },
        { name: "Receive Gift", code: "DC_d210133_01_90_04" },
        { name: "Idle", code: "D21013301_000_01" },
        { name: "Run", code: "D21013301_002_01" },
        { name: "Run Fast", code: "D21013301_003_01" },
        { name: "Brake", code: "D21013301_004_01" },
        { name: "Dash Forward", code: "D21013301_020_01" },
        { name: "Transform", code: "D21013301_030_01" },
        {
            name: "Combo",
            code: "D21013301_040_01>D21013301_041_01>D21013301_042_01",
        },
        {
            name: "Celebratory Blast",
            code: "D21013301_060_01",
        },
    ],
    d210134_01: [
        { name: "Dragon's Roost", code: "DC_d210134_01_90_01" },
        { name: "Receive Gift", code: "DC_d210134_01_90_04" },
        { name: "Idle", code: "D21013401_000_01" },
        { name: "Move Forward", code: "D21013401_002_01" },
        { name: "Move Forward (Fast)", code: "D21013401_003_01" },
        { name: "Brake", code: "D21013401_004_01" },
        { name: "Dash Forward", code: "D21013401_020_01" },
        { name: "Transform", code: "D21013401_030_01" },
        {
            name: "Combo",
            code: "D21013401_040_01>D21013401_041_01>D21013401_042_01",
        },
        {
            name: "Atlantean Flood",
            code: "D21013401_060_01",
        },
    ],
    d210135_01: [
        { name: "Dragon's Roost", code: "DC_d210135_01_90_01" },
        { name: "Receive Gift", code: "DC_d210135_01_90_04" },
        { name: "Idle", code: "D21013501_000_01" },
        { name: "Move Forward", code: "D21013501_002_01" },
        { name: "Move Forward (Fast)", code: "D21013501_003_01" },
        { name: "Brake", code: "D21013501_004_01" },
        { name: "Dash Forward", code: "D21013501_020_01" },
        { name: "Transform", code: "D21013501_030_01" },
        {
            name: "Combo",
            code:
                "D21013501_040_01>D21013501_041_01>D21013501_042_01>D21013501_042_02>D21013501_042_03",
        },
        {
            name: "Grand Concerto",
            code: "D21013501_060_01>D21013501_060_02>D21013501_060_03",
        },
    ],
    d210142_01: [
        { name: "Dragon's Roost", code: "DC_d210142_01_90_01" },
        { name: "Receive Gift", code: "DC_d210142_01_90_04" },
        { name: "Idle", code: "D21014201_000_01" },
        { name: "Move Forward", code: "D21014201_002_01" },
        { name: "Move Forward (Fast)", code: "D21014201_003_01" },
        { name: "Brake", code: "D21014201_004_01" },
        { name: "Dash Forward", code: "D21014201_020_01" },
        { name: "Transform", code: "D21014201_030_01" },
        {
            name: "Combo",
            code: "D21014201_040_01>D21014201_041_01>D21014201_042_01",
        },
        {
            name: "Burst of Happiness",
            code: "D21014201_060_01",
        },
    ],
    d210143_01: [
        { name: "Dragon's Roost", code: "DC_d210143_01_90_01" },
        { name: "Receive Gift", code: "DC_d210143_01_90_04" },
        { name: "Idle", code: "D21014301_000_01" },
        { name: "Move Forward", code: "D21014301_002_01" },
        { name: "Move Forward (Fast)", code: "D21014301_003_01" },
        { name: "Brake", code: "D21014301_004_01" },
        { name: "Dash Forward", code: "D21014301_020_01" },
        { name: "Transform", code: "D21014301_030_01" },
        {
            name: "Combo",
            code:
                "D21014301_040_01>D21014301_040_02>D21014301_040_03>D21014301_041_01>D21014301_042_01",
        },
        { name: "Howling Fury", code: "D21014301_060_01>D21014301_060_02" },
    ],
    d210136_01: [
        { name: "Dragon's Roost", code: "DC_d210136_01_90_01" },
        { name: "Receive Gift", code: "DC_d210136_01_90_04" },
        { name: "Idle", code: "D21013601_000_01" },
        { name: "Walk", code: "D21013601_002_01" },
        { name: "Run", code: "D21013601_003_01" },
        { name: "Brake", code: "D21013601_004_01" },
        { name: "Dash Forward", code: "D21013601_020_01" },
        { name: "Transform", code: "D21013601_030_01" },
        {
            name: "Combo",
            code: "D21013601_040_01>D21013601_041_01>D21013601_042_01",
        },
        {
            name: "Infernal Charge",
            code: "D21013601_060_01>D21013601_060_02>D21013601_060_03",
        },
    ],
    d210001_01: [
        { name: "Dragon's Roost", code: "DC_d210001_01_90_01" },
        { name: "Receive Gift", code: "DC_d210001_01_90_04" },
        { name: "Idle", code: "D21000101_000_01" },
        { name: "Lean Forward", code: "D21000101_001_01" },
        { name: "Walk", code: "D21000101_002_01" },
        { name: "Run", code: "D21000101_003_01" },
        { name: "Brake", code: "D21000101_004_01" },
        { name: "Dash Forward", code: "D21000101_020_01" },
        { name: "Jump Backward", code: "D21000101_021_01>D21000101_021_02" },
        { name: "Transform", code: "D21000101_030_01" },
        {
            name: "Combo",
            code: "D21000101_040_01>D21000101_041_01>D21000101_042_01",
        },
        {
            name: "Tornado Tail",
            code: "D21000101_061_01",
        },
        {
            name: "Take Damage",
            code: "D21000101_010_01",
        },
        {
            name: "Defeated",
            code: "D21000101_011_01>D21000101_011_02",
        },
        {
            name: "Frozen",
            code: "D21000101_013_01",
        },
        {
            name: "Weakened",
            code: "D21000101_015_01>D21000101_015_02",
        },
        {
            name: "Stagger Midair",
            code: "D21000101_017_01>D21000101_017_02>D21000101_017_03",
        },
        {
            name: "Broken",
            code: "D21000101_081_01>D21000101_081_02",
        },
        {
            name: "Recover from Broken",
            code: "D21000101_081_03",
        },
        {
            name: "Broken Midair",
            code:
                "D21000101_082_01>D21000101_082_02>D21000101_082_03>D21000101_082_04>D21000101_082_05",
        },
        {
            name: "Boss Intro",
            code: "D21000101_090_01>D21000101_090_02",
        },
        {
            name: "Quick Attack",
            code: "D21000101_100_01",
        },
        {
            name: "Small Back Jump",
            code: "D21000101_101_01",
        },
        {
            name: "Spin Attack",
            code: "D21000101_102_01>D21000101_102_02>D21000101_102_03",
        },
        {
            name: "Trident Tempest",
            code: "D21000101_103_01>D21000101_103_02>D21000101_103_03",
        },
        {
            name: "Roar",
            code: "D21000101_104_01",
        },
        {
            name: "Summon Help",
            code: "D21000101_108_01",
        },
        {
            name: "Land",
            code: "D21000101_109_01>D21000101_109_02",
        },
    ],
    d210104_01: [
        { name: "Dragon's Roost", code: "DC_d210002_01_90_01" },
        { name: "Receive Gift", code: "DC_d210002_01_90_04" },
        { name: "Infernal Ray", code: "D21010401_60_01" },
    ],
    d210002_01: [
        { name: "Dragon's Roost", code: "DC_d210002_01_90_01" },
        { name: "Receive Gift", code: "DC_d210002_01_90_04" },
        { name: "Infernal Ray", code: "D21010401_60_01" },
        { name: "Idle", code: "D21000201_000_01" },
        { name: "Lean Forward", code: "D21000201_001_01" },
        { name: "Walk", code: "D21000201_002_01" },
        { name: "Run", code: "D21000201_003_01" },
        { name: "Brake", code: "D21000201_004_01" },
        { name: "Dash Forward", code: "D21000201_020_01" },
        { name: "Jump Backward", code: "D21000201_021_01" },
        { name: "Transform", code: "D21000201_030_01" },
        {
            name: "Combo",
            code: "D21000201_040_01>D21000201_041_01>D21000201_042_01",
        },
        {
            name: "Muspelheim",
            code: "D21000201_060_01",
        },
        {
            name: "Crimson Inferno",
            code: "D21000201_061_01",
        },
        {
            name: "Summon Help",
            code: "D21000201_062_01",
        },
        {
            name: "Take Damage",
            code: "D21000201_010_01",
        },
        {
            name: "Defeated",
            code: "D21000201_011_01>D21000201_011_02",
        },
        {
            name: "Frozen",
            code: "D21000201_013_01",
        },
        {
            name: "Weakened",
            code: "D21000201_015_01>D21000201_015_02",
        },
        {
            name: "Weakened 2",
            code: "D21000201_081_01>D21000201_081_02>D21000201_081_03",
        },
        {
            name: "Stagger Midair",
            code: "D21000201_017_01>D21000201_017_02>D21000201_017_03",
        },
        {
            name: "Broken",
            code:
                "D21000201_082_01>D21000201_082_02>D21000201_082_03>D21000201_082_04",
        },
        {
            name: "Recover from Broken",
            code: "D21000201_082_05",
        },
        {
            name: "Boss Intro",
            code: "D21000201_090_01>D21000201_090_02",
        },
        {
            name: "Claw Attack",
            code: "D21000201_100_01",
        },
        {
            name: "Flame Breath",
            code: "D21000201_101_01>D21000201_101_02>D21000201_101_03",
        },
        {
            name: "Take Flight",
            code: "D21000201_102_01",
        },
        {
            name: "Take Flight 2",
            code: "D21000201_104_01>D21000201_104_02>D21000201_104_03",
        },
        {
            name: "Fly Straight",
            code: "D21000201_102_02",
        },
        {
            name: "Fly Up",
            code: "D21000201_102_04",
        },
        {
            name: "Land",
            code: "D21000201_102_03",
        },
        {
            name: "Roar",
            code: "D21000201_107_01",
        },
        {
            name: "Meteor Attack",
            code: "D21000201_103_01",
        },
        {
            name: "Front Attack",
            code: "D21000201_104_04",
        },
    ],
    d210003_01: [
        { name: "Dragon's Roost", code: "DC_d210003_01_90_01" },
        { name: "Receive Gift", code: "DC_d210003_01_90_04" },
        { name: "Idle", code: "D21000301_000_01" },
        { name: "Lean Forward", code: "D21000301_001_01" },
        { name: "Walk", code: "D21000301_002_01" },
        { name: "Run", code: "D21000301_003_01" },
        { name: "Brake", code: "D21000301_004_01" },
        { name: "Dash Forward", code: "D21000301_020_01" },
        { name: "Transform", code: "D21000301_030_01" },
        {
            name: "Combo",
            code: "D21000301_040_01>D21000301_041_01>D21000301_042_01",
        },
        {
            name: "Hydrocannon",
            code:
                "D21000301_060_01>D21000301_061_01>D21000301_062_01>D21000301_063_01",
        },
        {
            name: "Take Damage",
            code: "D21000301_010_01",
        },
        {
            name: "Defeated",
            code: "D21000301_011_01",
        },
        {
            name: "Frozen",
            code: "D21000301_013_01",
        },
        {
            name: "Weakened",
            code: "D21000301_015_01>D21000301_015_02",
        },
        {
            name: "Broken",
            code: "D21000301_081_01>D21000301_081_02",
        },
        {
            name: "Recover From Broken",
            code: "D21000301_081_03",
        },
        {
            name: "Boss Intro",
            code: "D21000301_090_01>D21000301_090_02",
        },
        {
            name: "Stomp",
            code: "D21000301_100_01",
        },
        {
            name: "Tail Slap",
            code: "D21000301_101_01",
        },
        {
            name: "Water Balls",
            code: "D21000301_102_01>D21000301_102_02>D21000301_102_03",
        },
        {
            name: "Spit Water",
            code: "D21000301_103_01",
        },
        {
            name: "Tidal Call",
            code: "D21000301_104_01>D21000301_104_02>D21000301_104_03",
        },
        {
            name: "Roar",
            code: "D21000301_110_01",
        },
        {
            name: "Launch Forward",
            code: "D21000301_111_01>D21000301_111_02>D21000301_111_03",
        },
    ],
    d210004_01: [
        { name: "Dragon's Roost", code: "DC_d210004_01_90_01" },
        { name: "Receive Gift", code: "DC_d210004_01_90_04" },
        { name: "Idle", code: "D21000401_000_01" },
        { name: "Run", code: "D21000401_002_01" },
        { name: "Run Fast", code: "D21000401_003_01" },
        { name: "Brake", code: "D21000401_004_01" },
        { name: "Dash Forward", code: "D21000401_020_01" },
        { name: "Transform", code: "D21000401_030_01" },
        {
            name: "Combo",
            code: "D21000401_040_01>D21000401_041_01>D21000401_042_01",
        },
        { name: "Kick the Ground", code: "D21000401_001_01" },
        {
            name: "Launch Forward",
            code: "D21000401_060_01",
        },
        {
            name: "Launch Forward 2",
            code:
                "D21000401_101_01>D21000401_101_02>D21000401_101_03>D21000401_101_04>D21000401_101_05",
        },
        {
            name: "Lightning Rood",
            code: "D21000401_061_01",
        },
        {
            name: "Lightning Rood 2",
            code: "D21000401_102_01>D21000401_102_02>D21000401_102_03",
        },
        {
            name: "Primal Thunder",
            code: "D21000401_062_01",
        },
        {
            name: "Primal Thunder 2",
            code: "D21000401_064_01",
        },
        {
            name: "Primal Thunder 3",
            code: "D21000401_104_01",
        },
        {
            name: "Take Damage",
            code: "D21000401_010_01",
        },
        {
            name: "Defeated",
            code: "D21000401_011_01",
        },
        {
            name: "Frozen",
            code: "D21000401_013_01",
        },
        {
            name: "Weakened",
            code: "D21000401_015_01>D21000401_015_02",
        },
        {
            name: "Weakened 2",
            code: "D21000401_080_01>D21000401_080_02>D21000401_080_03",
        },
        {
            name: "Broken",
            code: "D21000401_081_01>D21000401_081_02",
        },
        {
            name: "Recover from Broken",
            code: "D21000401_081_03",
        },
        {
            name: "Boss Intro",
            code: "D21000401_090_01>D21000401_090_02",
        },
        {
            name: "Peck",
            code: "D21000401_100_01",
        },
        {
            name: "Charge",
            code:
                "D21000401_103_01>D21000401_103_02>D21000401_103_03>D21000401_103_04",
        },
    ],
    d210005_01: [
        { name: "Dragon's Roost", code: "DC_d210005_01_90_01" },
        { name: "Receive Gift", code: "DC_d210005_01_90_04" },
        { name: "Idle", code: "D21000501_000_01" },
        { name: "Howl", code: "D21000501_001_01" },
        { name: "Walk", code: "D21000501_002_01" },
        { name: "Run", code: "D21000501_003_01" },
        { name: "Brake", code: "D21000501_004_01" },
        { name: "Dash Forward", code: "D21000501_020_01" },
        { name: "Transform", code: "D21000501_030_01" },
        {
            name: "Combo",
            code: "D21000501_040_01>D21000501_041_01>D21000501_042_01",
        },
        { name: "Breath", code: "D21000501_060_01" },
        { name: "Dash Attack", code: "D21000501_061_01" },
        { name: "Accursed Venom", code: "D21000501_062_01" },
        {
            name: "Take Damage",
            code: "D21000501_010_01",
        },
        {
            name: "Defeated",
            code: "D21000501_011_01",
        },
        {
            name: "Frozen",
            code: "D21000501_013_01",
        },
        {
            name: "Weakened",
            code: "D21000501_015_01>D21000501_015_02",
        },
        {
            name: "Broken",
            code: "D21000501_081_01>D21000501_081_02",
        },
        {
            name: "Recover from Broken",
            code: "D21000501_081_03",
        },
        {
            name: "Boss Intro",
            code: "D21000501_090_01>D21000501_090_02",
        },
        {
            name: "Quick Attack",
            code: "D21000501_100_01",
        },
        {
            name: "Tail Slam",
            code: "D21000501_101_01",
        },
        {
            name: "Roar and Stomp",
            code: "D21000501_102_01>D21000501_102_02>D21000501_102_03",
        },
        {
            name: "Wide Breath",
            code: "D21000501_103_01>D21000501_103_02>D21000501_103_03",
        },
        {
            name: "Dash Forward",
            code: "D21000501_104_01>D21000501_104_02>D21000501_104_03",
        },
        {
            name: "Spit Poison",
            code: "D21000501_105_01",
        },
        {
            name: "Roar",
            code: "D21000501_106_01",
        },
    ],
    d210006_01: [
        { name: "Dragon's Roost", code: "DC_d210006_01_90_01" },
        { name: "Receive Gift", code: "DC_d210006_01_90_04" },
        { name: "Idle", code: "D21000601_000_01" },
        { name: "Move Forward", code: "D21000601_002_01" },
        { name: "Move Forward (Fast)", code: "D21000601_003_01" },
        { name: "Brake", code: "D21000601_004_01" },
        { name: "Dash Forward", code: "D21000601_020_01" },
        { name: "Transform", code: "D21000601_030_01" },
        {
            name: "Combo",
            code: "D21000601_040_01>D21000601_041_01>D21000601_042_01",
        },
        {
            name: "Regeneration Flame",
            code: "D21000601_060_01",
        },
    ],
    d210007_01: [
        { name: "Dragon's Roost", code: "DC_d210007_01_90_01" },
        { name: "Receive Gift", code: "DC_d210007_01_90_04" },
        { name: "Idle", code: "D21000701_000_01" },
        { name: "Walk", code: "D21000701_002_01" },
        { name: "Run", code: "D21000701_003_01" },
        { name: "Brake", code: "D21000701_004_01" },
        { name: "Dash Forward", code: "D21000701_020_01" },
        { name: "Transform", code: "D21000701_030_01" },
        {
            name: "Combo",
            code: "D21000701_040_01>D21000701_041_01>D21000701_042_01",
        },
        {
            name: "Charge",
            code:
                "D21000701_060_01>D21000701_060_02>D21000701_060_03>D21000701_060_04",
        },
        {
            name: "Lava Cascade",
            code: "D21000701_061_01",
        },
    ],
    d210008_01: [
        { name: "Dragon's Roost", code: "DC_d210008_01_90_01" },
        { name: "Receive Gift", code: "DC_d210008_01_90_04" },
        { name: "Idle", code: "D21000801_000_01" },
        { name: "Move Forward", code: "D21000801_002_01" },
        { name: "Move Forward (Fast)", code: "D21000801_003_01" },
        { name: "Brake", code: "D21000801_004_01" },
        { name: "Dash Forward", code: "D21000801_020_01" },
        { name: "Transform", code: "D21000801_030_01" },
        {
            name: "Combo",
            code: "D21000801_040_01>D21000801_041_01>D21000801_042_01",
        },
        {
            name: "Lilinoe's Mist",
            code: "D21000801_060_01",
        },
    ],
    d210011_01: [
        { name: "Dragon's Roost", code: "DC_d210011_01_90_01" },
        { name: "Receive Gift", code: "DC_d210011_01_90_04" },
        { name: "Idle", code: "D21001101_000_01" },
        { name: "Move Forward", code: "D21001101_002_01" },
        { name: "Move Forward (Fast)", code: "D21001101_003_01" },
        { name: "Brake", code: "D21001101_004_01" },
        { name: "Dash Forward", code: "D21001101_020_01" },
        { name: "Jump Backward", code: "D21001101_021_01" },
        { name: "Transform", code: "D21001101_030_01" },
        {
            name: "Combo",
            code: "D21001101_040_01>D21001101_041_01>D21001101_042_01",
        },
        {
            name: "Body Slam",
            code: "D21001101_061_01",
        },
        {
            name: "Test of Integrity",
            code: "D21001101_062_01",
        },
    ],
    d210012_01: [
        { name: "Dragon's Roost", code: "DC_d210012_01_90_01" },
        { name: "Receive Gift", code: "DC_d210012_01_90_04" },
        { name: "Idle", code: "D21001201_000_01" },
        { name: "Walk", code: "D21001201_002_01" },
        { name: "Run", code: "D21001201_003_01" },
        { name: "Brake", code: "D21001201_004_01" },
        { name: "Dash Forward", code: "D21001201_020_01" },
        { name: "Transform", code: "D21001201_030_01" },
        {
            name: "Combo",
            code: "D21001201_040_01>D21001201_041_01>D21001201_042_01",
        },
        {
            name: "Horn Charge",
            code: "D21001201_060_01",
        },
        {
            name: "Immaculate Light",
            code: "D21001201_062_01",
        },
    ],
    d210013_01: [
        { name: "Dragon's Roost", code: "DC_d210013_01_90_01" },
        { name: "Receive Gift", code: "DC_d210013_01_90_04" },
        { name: "Idle", code: "D21001301_000_01" },
        { name: "Walk", code: "D21001301_002_01" },
        { name: "Run", code: "D21001301_003_01" },
        { name: "Brake", code: "D21001301_004_01" },
        { name: "Dash Forward", code: "D21001301_020_01" },
        { name: "Transform", code: "D21001301_030_01" },
        {
            name: "Combo",
            code: "D21001301_040_01>D21001301_041_01>D21001301_042_01",
        },
        {
            name: "Tackle",
            code: "D21001301_060_01",
        },
        {
            name: "Ethereal Gleam",
            code: "D21001301_061_01",
        },
    ],
    d210014_01: [
        { name: "Dragon's Roost", code: "DC_d210014_01_90_01" },
        { name: "Receive Gift", code: "DC_d210014_01_90_04" },
        { name: "Idle", code: "D21001401_000_01" },
        { name: "Walk", code: "D21001401_002_01" },
        { name: "Run", code: "D21001401_003_01" },
        { name: "Brake", code: "D21001401_004_01" },
        { name: "Dash Forward", code: "D21001401_020_01" },
        { name: "Transform", code: "D21001401_030_01" },
        {
            name: "Combo",
            code: "D21001401_040_01>D21001401_041_01>D21001401_042_01",
        },
        {
            name: "Shadow Carnage",
            code: "D21001401_061_01",
        },
    ],
    d210015_01: [
        { name: "Dragon's Roost", code: "DC_d210015_01_90_01" },
        { name: "Receive Gift", code: "DC_d210015_01_90_04" },
        { name: "Idle", code: "D21001501_000_01" },
        { name: "Move Forward", code: "D21001501_002_01" },
        { name: "Move Forward (Fast)", code: "D21001501_003_01" },
        { name: "Brake", code: "D21001501_004_01" },
        { name: "Dash Forward", code: "D21001501_020_01" },
        { name: "Jump Backward", code: "D21001501_021_01" },
        { name: "Transform", code: "D21001501_030_01" },
        {
            name: "Combo",
            code: "D21001501_040_01>D21001501_041_01>D21001501_042_01",
        },
        {
            name: "Throw Upward",
            code: "D21001501_060_01",
        },
        {
            name: "Terror Sphere",
            code: "D21001501_061_01",
        },
    ],
    d210021_01: [
        { name: "Dragon's Roost", code: "DC_d210021_01_90_01" },
        { name: "Receive Gift", code: "DC_d210021_01_90_04" },
        { name: "Idle", code: "D21002101_000_01" },
        { name: "Move Forward", code: "D21002101_002_01" },
        { name: "Move Forward (Fast)", code: "D21002101_003_01" },
        { name: "Brake", code: "D21002101_004_01" },
        { name: "Dash Forward", code: "D21002101_020_01" },
        { name: "Jump Backward", code: "D21002101_021_01" },
        { name: "Transform", code: "D21002101_030_01" },
        {
            name: "Combo",
            code: "D21002101_040_01>D21002101_041_01>D21002101_042_01",
        },
        {
            name: "Fire Breath",
            code: "D21002101_061_01",
        },
    ],
    d210022_01: [
        { name: "Dragon's Roost", code: "DC_d210022_01_90_01" },
        { name: "Receive Gift", code: "DC_d210022_01_90_04" },
        { name: "Idle", code: "D21002201_000_01" },
        { name: "Move Forward", code: "D21002201_002_01" },
        { name: "Move Forward (Fast)", code: "D21002201_003_01" },
        { name: "Brake", code: "D21002201_004_01" },
        { name: "Dash Forward", code: "D21002201_020_01" },
        { name: "Jump Backward", code: "D21002201_021_01" },
        { name: "Transform", code: "D21002201_030_01" },
        {
            name: "Combo",
            code: "D21002201_040_01>D21002201_041_01>D21002201_042_01",
        },
        {
            name: "Cinderball",
            code: "D21002201_061_01",
        },
    ],
    d210023_01: [
        { name: "Dragon's Roost", code: "DC_d210023_01_90_01" },
        { name: "Receive Gift", code: "DC_d210023_01_90_04" },
        { name: "Idle", code: "D21002301_000_01" },
        { name: "Move Forward", code: "D21002301_002_01" },
        { name: "Move Forward (Fast)", code: "D21002301_003_01" },
        { name: "Brake", code: "D21002301_004_01" },
        { name: "Dash Forward", code: "D21002301_020_01" },
        { name: "Jump Backward", code: "D21002301_021_01" },
        { name: "Transform", code: "D21002301_030_01" },
        {
            name: "Combo",
            code: "D21002301_040_01>D21002301_041_01>D21002301_042_01",
        },
        {
            name: "Ember Toss",
            code: "D21002301_061_01",
        },
    ],
    d210050_01: [
        { name: "Dragon's Roost", code: "DC_d210050_01_90_01" },
        { name: "Receive Gift", code: "DC_d210050_01_90_04" },
        { name: "Idle", code: "D21005001_000_01" },
        { name: "Walk", code: "D21005001_002_01" },
        { name: "Run", code: "D21005001_003_01" },
        { name: "Brake", code: "D21005001_004_01" },
        { name: "Dash Forward", code: "D21005001_020_01" },
        { name: "Transform", code: "D21005001_030_01" },
        {
            name: "Combo",
            code: "D21005001_040_01>D21005001_041_01>D21005001_042_01",
        },
        { name: "Kick the Ground", code: "D21005001_001_01" },
        {
            name: "Tactical Vortex",
            code: "D21005001_062_01",
        },
        {
            name: "Unused Skill 1",
            code: "D21005001_061_01",
        },
        {
            name: "Unused Skill 2",
            code: "D21005001_102_01>D21005001_102_02>D21005001_102_03",
        },
        {
            name: "Unused Skill 3",
            code: "D21005001_064_01",
        },
        {
            name: "Unused Skill 4",
            code:
                "D21005001_103_01>D21005001_103_02>D21005001_103_03>D21005001_103_04",
        },
        {
            name: "Take Damage",
            code: "D21005001_010_01",
        },
        {
            name: "Defeated",
            code: "D21005001_011_01",
        },
        {
            name: "Frozen",
            code: "D21005001_013_01",
        },
        {
            name: "Weakened",
            code: "D21005001_080_01>D21005001_080_02>D21005001_080_03",
        },
        {
            name: "Broken",
            code: "D21005001_081_01>D21005001_081_02",
        },
        {
            name: "Recover from Broken",
            code: "D21005001_081_03",
        },
        {
            name: "Peck",
            code: "D21005001_100_01",
        },
        {
            name: "Launch Forward",
            code:
                "D21005001_101_01>D21005001_101_02>D21005001_101_03>D21005001_101_04>D21005001_101_05",
        },
    ],
    d210075_01: [
        { name: "Dragon's Roost", code: "DC_d210075_01_90_01" },
        { name: "Receive Gift", code: "DC_d210075_01_90_04" },
        { name: "Idle", code: "D21007501_000_01" },
        { name: "Move Forward", code: "D21007501_002_01" },
        { name: "Move Forward (Fast)", code: "D21007501_003_01" },
        { name: "Brake", code: "D21007501_004_01" },
        { name: "Dash Forward", code: "D21007501_020_01" },
        { name: "Jump Backward", code: "D21007501_021_01" },
        { name: "Transform", code: "D21007501_030_01" },
        {
            name: "Combo",
            code: "D21007501_040_01>D21007501_041_01>D21007501_042_01",
        },
        {
            name: "Pumpkin Prank",
            code: "D21007501_060_01",
        },
        {
            name: "Throw Downward",
            code: "D21007501_061_01",
        },
    ],
    d210089_01: [
        { name: "Dragon's Roost", code: "DC_d210022_01_90_01" },
        { name: "Receive Gift", code: "DC_d210022_01_90_04" },
        { name: "Idle", code: "D21002201_000_01" },
        { name: "Move Forward", code: "D21002201_002_01" },
        { name: "Move Forward (Fast)", code: "D21002201_003_01" },
        { name: "Brake", code: "D21002201_004_01" },
        { name: "Dash Forward", code: "D21002201_020_01" },
        { name: "Jump Backward", code: "D21002201_021_01" },
        { name: "Transform", code: "D21002201_030_01" },
        {
            name: "Combo",
            code: "D21002201_040_01>D21002201_041_01>D21002201_042_01",
        },
        {
            name: "Bronze Strength",
            code: "D21008901_060_01",
        },
    ],
    d210090_01: [
        { name: "Dragon's Roost", code: "DC_d210022_01_90_01" },
        { name: "Receive Gift", code: "DC_d210022_01_90_04" },
        { name: "Idle", code: "D21002201_000_01" },
        { name: "Move Forward", code: "D21002201_002_01" },
        { name: "Move Forward (Fast)", code: "D21002201_003_01" },
        { name: "Brake", code: "D21002201_004_01" },
        { name: "Dash Forward", code: "D21002201_020_01" },
        { name: "Jump Backward", code: "D21002201_021_01" },
        { name: "Transform", code: "D21002201_030_01" },
        {
            name: "Combo",
            code: "D21002201_040_01>D21002201_041_01>D21002201_042_01",
        },
        {
            name: "Silver Defense",
            code: "D21008901_060_01",
        },
    ],
    d210093_01: [
        { name: "Idle", code: "D21009301_000_01" },
        { name: "Move Forward", code: "D21009301_002_01" },
        { name: "Move Forward (Fast)", code: "D21009301_003_01" },
        { name: "Brake", code: "D21009301_004_01" },
        { name: "Dash Forward", code: "D21009301_020_01" },
        { name: "Transform", code: "D21009301_030_01" },
        {
            name: "Combo",
            code: "D21009301_040_01>D21009301_041_01>D21009301_042_01",
        },
        { name: "Breath of Fog", code: "D21009301_060_01" },
        { name: "Divine Dragon Blow", code: "D21009301_061_01" },
        { name: "Defeated", code: "D21009301_011_01" },
        {
            name: "Broken",
            code: "D21009301_081_01>D21009301_081_02",
        },
        {
            name: "Recover from Broken",
            code: "D21009301_081_03",
        },
        {
            name: "Claw Attack",
            code: "D21009301_100_01",
        },
        {
            name: "Jump Back",
            code: "D21009301_101_01",
        },
        {
            name: "Breath",
            code: "D21009301_102_01>D21009301_102_02>D21009301_102_03",
        },
        {
            name: "Dive Attack",
            code: "D21009301_103_01",
        },
    ],
    d210058_01: [
        { name: "Dragon's Roost", code: "DC_d210011_01_90_01" },
        { name: "Receive Gift", code: "DC_d210011_01_90_04" },
        { name: "Idle", code: "D21001101_000_01" },
        { name: "Move Forward", code: "D21001101_002_01" },
        { name: "Move Forward (Fast)", code: "D21001101_003_01" },
        { name: "Brake", code: "D21001101_004_01" },
        { name: "Dash Forward", code: "D21001101_020_01" },
        { name: "Jump Backward", code: "D21001101_021_01" },
        { name: "Transform", code: "D21001101_030_01" },
        {
            name: "Combo",
            code: "D21001101_040_01>D21001101_041_01>D21001101_042_01",
        },
        {
            name: "Relentless Torrent",
            code: "D21001101_060_01",
        },
        {
            name: "Body Slam",
            code: "D21001101_061_01",
        },
    ],
    d210059_01: [
        { name: "Dragon's Roost", code: "DC_d210021_01_90_01" },
        { name: "Receive Gift", code: "DC_d210021_01_90_04" },
        { name: "Idle", code: "D21002101_000_01" },
        { name: "Move Forward", code: "D21002101_002_01" },
        { name: "Move Forward (Fast)", code: "D21002101_003_01" },
        { name: "Brake", code: "D21002101_004_01" },
        { name: "Dash Forward", code: "D21002101_020_01" },
        { name: "Jump Backward", code: "D21002101_021_01" },
        { name: "Transform", code: "D21002101_030_01" },
        {
            name: "Combo",
            code: "D21002101_040_01>D21002101_041_01>D21002101_042_01",
        },
        {
            name: "Freezing Breath",
            code: "D21002101_061_01",
        },
    ],
    d210060_01: [
        { name: "Dragon's Roost", code: "DC_d210021_01_90_01" },
        { name: "Receive Gift", code: "DC_d210021_01_90_04" },
        { name: "Idle", code: "D21002101_000_01" },
        { name: "Move Forward", code: "D21002101_002_01" },
        { name: "Move Forward (Fast)", code: "D21002101_003_01" },
        { name: "Brake", code: "D21002101_004_01" },
        { name: "Dash Forward", code: "D21002101_020_01" },
        { name: "Jump Backward", code: "D21002101_021_01" },
        { name: "Transform", code: "D21002101_030_01" },
        {
            name: "Combo",
            code: "D21002101_040_01>D21002101_041_01>D21002101_042_01",
        },
        {
            name: "Air Tackle",
            code: "D21002101_060_01",
        },
    ],
    d210061_01: [
        { name: "Dragon's Roost", code: "DC_d210021_01_90_01" },
        { name: "Receive Gift", code: "DC_d210021_01_90_04" },
        { name: "Idle", code: "D21002101_000_01" },
        { name: "Move Forward", code: "D21002101_002_01" },
        { name: "Move Forward (Fast)", code: "D21002101_003_01" },
        { name: "Brake", code: "D21002101_004_01" },
        { name: "Dash Forward", code: "D21002101_020_01" },
        { name: "Jump Backward", code: "D21002101_021_01" },
        { name: "Transform", code: "D21002101_030_01" },
        {
            name: "Combo",
            code: "D21002101_040_01>D21002101_041_01>D21002101_042_01",
        },
        {
            name: "Shining Breath",
            code: "D21002101_061_01",
        },
    ],
    d210062_01: [
        { name: "Dragon's Roost", code: "DC_d210021_01_90_01" },
        { name: "Receive Gift", code: "DC_d210021_01_90_04" },
        { name: "Idle", code: "D21002101_000_01" },
        { name: "Move Forward", code: "D21002101_002_01" },
        { name: "Move Forward (Fast)", code: "D21002101_003_01" },
        { name: "Brake", code: "D21002101_004_01" },
        { name: "Dash Forward", code: "D21002101_020_01" },
        { name: "Jump Backward", code: "D21002101_021_01" },
        { name: "Transform", code: "D21002101_030_01" },
        {
            name: "Combo",
            code: "D21002101_040_01>D21002101_041_01>D21002101_042_01",
        },
        {
            name: "Gloom Tackle",
            code: "D21002101_060_01",
        },
    ],
    d210063_01: [
        { name: "Dragon's Roost", code: "DC_d210022_01_90_01" },
        { name: "Receive Gift", code: "DC_d210022_01_90_04" },
        { name: "Idle", code: "D21002201_000_01" },
        { name: "Move Forward", code: "D21002201_002_01" },
        { name: "Move Forward (Fast)", code: "D21002201_003_01" },
        { name: "Brake", code: "D21002201_004_01" },
        { name: "Dash Forward", code: "D21002201_020_01" },
        { name: "Jump Backward", code: "D21002201_021_01" },
        { name: "Transform", code: "D21002201_030_01" },
        {
            name: "Combo",
            code: "D21002201_040_01>D21002201_041_01>D21002201_042_01",
        },
        {
            name: "Snow Drop",
            code: "D21002201_060_01",
        },
    ],
    d210064_01: [
        { name: "Dragon's Roost", code: "DC_d210022_01_90_01" },
        { name: "Receive Gift", code: "DC_d210022_01_90_04" },
        { name: "Idle", code: "D21002201_000_01" },
        { name: "Move Forward", code: "D21002201_002_01" },
        { name: "Move Forward (Fast)", code: "D21002201_003_01" },
        { name: "Brake", code: "D21002201_004_01" },
        { name: "Dash Forward", code: "D21002201_020_01" },
        { name: "Jump Backward", code: "D21002201_021_01" },
        { name: "Transform", code: "D21002201_030_01" },
        {
            name: "Combo",
            code: "D21002201_040_01>D21002201_041_01>D21002201_042_01",
        },
        {
            name: "Gust Drop",
            code: "D21002201_060_01",
        },
    ],
    d210065_01: [
        { name: "Dragon's Roost", code: "DC_d210022_01_90_01" },
        { name: "Receive Gift", code: "DC_d210022_01_90_04" },
        { name: "Idle", code: "D21002201_000_01" },
        { name: "Move Forward", code: "D21002201_002_01" },
        { name: "Move Forward (Fast)", code: "D21002201_003_01" },
        { name: "Brake", code: "D21002201_004_01" },
        { name: "Dash Forward", code: "D21002201_020_01" },
        { name: "Jump Backward", code: "D21002201_021_01" },
        { name: "Transform", code: "D21002201_030_01" },
        {
            name: "Combo",
            code: "D21002201_040_01>D21002201_041_01>D21002201_042_01",
        },
        {
            name: "Moon Drop",
            code: "D21002201_060_01",
        },
    ],
    d210066_01: [
        { name: "Dragon's Roost", code: "DC_d210022_01_90_01" },
        { name: "Receive Gift", code: "DC_d210022_01_90_04" },
        { name: "Idle", code: "D21002201_000_01" },
        { name: "Move Forward", code: "D21002201_002_01" },
        { name: "Move Forward (Fast)", code: "D21002201_003_01" },
        { name: "Brake", code: "D21002201_004_01" },
        { name: "Dash Forward", code: "D21002201_020_01" },
        { name: "Jump Backward", code: "D21002201_021_01" },
        { name: "Transform", code: "D21002201_030_01" },
        {
            name: "Combo",
            code: "D21002201_040_01>D21002201_041_01>D21002201_042_01",
        },
        {
            name: "Black Hole",
            code: "D21002201_061_01",
        },
    ],
    d210067_01: [
        { name: "Dragon's Roost", code: "DC_d210023_01_90_01" },
        { name: "Receive Gift", code: "DC_d210023_01_90_04" },
        { name: "Idle", code: "D21002301_000_01" },
        { name: "Move Forward", code: "D21002301_002_01" },
        { name: "Move Forward (Fast)", code: "D21002301_003_01" },
        { name: "Brake", code: "D21002301_004_01" },
        { name: "Dash Forward", code: "D21002301_020_01" },
        { name: "Jump Backward", code: "D21002301_021_01" },
        { name: "Transform", code: "D21002301_030_01" },
        {
            name: "Combo",
            code: "D21002301_040_01>D21002301_041_01>D21002301_042_01",
        },
        {
            name: "Noble Dance",
            code: "D21002301_060_01",
        },
    ],
    d210068_01: [
        { name: "Dragon's Roost", code: "DC_d210023_01_90_01" },
        { name: "Receive Gift", code: "DC_d210023_01_90_04" },
        { name: "Idle", code: "D21002301_000_01" },
        { name: "Move Forward", code: "D21002301_002_01" },
        { name: "Move Forward (Fast)", code: "D21002301_003_01" },
        { name: "Brake", code: "D21002301_004_01" },
        { name: "Dash Forward", code: "D21002301_020_01" },
        { name: "Jump Backward", code: "D21002301_021_01" },
        { name: "Transform", code: "D21002301_030_01" },
        {
            name: "Combo",
            code: "D21002301_040_01>D21002301_041_01>D21002301_042_01",
        },
        {
            name: "Affinity Dance",
            code: "D21002301_060_01",
        },
    ],
    d210069_01: [
        { name: "Dragon's Roost", code: "DC_d210023_01_90_01" },
        { name: "Receive Gift", code: "DC_d210023_01_90_04" },
        { name: "Idle", code: "D21002301_000_01" },
        { name: "Move Forward", code: "D21002301_002_01" },
        { name: "Move Forward (Fast)", code: "D21002301_003_01" },
        { name: "Brake", code: "D21002301_004_01" },
        { name: "Dash Forward", code: "D21002301_020_01" },
        { name: "Jump Backward", code: "D21002301_021_01" },
        { name: "Transform", code: "D21002301_030_01" },
        {
            name: "Combo",
            code: "D21002301_040_01>D21002301_041_01>D21002301_042_01",
        },
        {
            name: "Wisdom Dance",
            code: "D21002301_060_01",
        },
    ],
    d210070_01: [
        { name: "Dragon's Roost", code: "DC_d210023_01_90_01" },
        { name: "Receive Gift", code: "DC_d210023_01_90_04" },
        { name: "Idle", code: "D21002301_000_01" },
        { name: "Move Forward", code: "D21002301_002_01" },
        { name: "Move Forward (Fast)", code: "D21002301_003_01" },
        { name: "Brake", code: "D21002301_004_01" },
        { name: "Dash Forward", code: "D21002301_020_01" },
        { name: "Jump Backward", code: "D21002301_021_01" },
        { name: "Transform", code: "D21002301_030_01" },
        {
            name: "Combo",
            code: "D21002301_040_01>D21002301_041_01>D21002301_042_01",
        },
        {
            name: "Grave Tidings",
            code: "D21002301_061_01",
        },
    ],
    d210138_01: [
        { name: "Idle", code: "D21013801_000_01" },
        { name: "Move Forward", code: "D21013801_002_01" },
        { name: "Move Forward (Fast)", code: "D21013801_003_01" },
        { name: "Brake", code: "D21013801_004_01" },
        { name: "Dash Forward", code: "D21013801_020_01" },
        { name: "Transform", code: "D21013801_030_01" },
        {
            name: "Combo",
            code:
                "D21013801_040_01>D21013801_041_01>D21013801_042_01>D21013801_043_01>D21013801_044_01",
        },
        {
            name: "Maeiga",
            code: "D21013801_060_01>D21013801_061_01>D21013801_062_01",
        },
    ],
    d210150_01: [
        { name: "Idle", code: "D21015001_000_01" },
        { name: "Move Forward", code: "D21015001_002_01" },
        { name: "Move Forward (Fast)", code: "D21015001_003_01" },
        {
            name: "Skill 1",
            code: "D21015001_060_01",
        },
        {
            name: "Skill 2",
            code: "D21015001_061_01",
        },
    ],
    d210149_01: [
        { name: "Idle", code: "D21014901_000_01" },
        { name: "Move Forward", code: "D21014901_002_01" },
        { name: "Move Forward (Fast)", code: "D21014901_003_01" },
        {
            name: "Skill 1",
            code: "D21014901_060_01",
        },
        {
            name: "Skill 2",
            code: "D21014901_061_01",
        },
    ],
    d210151_01: [
        { name: "Idle", code: "D21015101_000_01" },
        {
            name: "Skill 1",
            code: "D21015101_060_01",
        },
        {
            name: "Skill 2",
            code: "D21015101_061_01",
        },
    ],
    d210137_01: [
        { name: "Dragon's Roost", code: "DC_d210137_01_90_01" },
        { name: "Receive Gift", code: "DC_d210137_01_90_04" },
        { name: "Idle", code: "D21013701_000_01" },
        { name: "Move Forward", code: "D21013701_002_01" },
        { name: "Move Forward (Fast)", code: "D21013701_003_01" },
        { name: "Brake", code: "D21013701_004_01" },
        { name: "Dash Forward", code: "D21013701_020_01" },
        { name: "Transform", code: "D21013701_030_01" },
        {
            name: "Combo",
            code: "D21013701_040_01>D21013701_041_01>D21013701_042_01",
        },
        {
            name: "Menoetius's Devastation",
            code: "D21013701_060_01",
        },
    ],
    d210144_01: [
        { name: "Dragon's Roost", code: "DC_d210144_01_90_01" },
        { name: "Receive Gift", code: "DC_d210144_01_90_04" },
        { name: "Idle", code: "D21014401_000_01" },
        { name: "Move Forward", code: "D21014401_002_01" },
        { name: "Move Forward (Fast)", code: "D21014401_003_01" },
        { name: "Brake", code: "D21014401_004_01" },
        { name: "Dash Forward", code: "D21014401_020_01" },
        { name: "Transform", code: "D21014401_030_01" },
        {
            name: "Combo",
            code: "D21014401_040_01>D21014401_041_01>D21014401_042_01",
        },
        {
            name: "Holy Crusade",
            code: "D21014401_060_01",
        },
    ],
    d210145_01: [
        { name: "Dragon's Roost", code: "DC_d210145_01_90_01" },
        { name: "Receive Gift", code: "DC_d210145_01_90_04" },
        { name: "Idle", code: "D21014501_000_01" },
        { name: "Move Forward", code: "D21014501_002_01" },
        { name: "Move Forward (Fast)", code: "D21014501_003_01" },
        { name: "Brake", code: "D21014501_004_01" },
        { name: "Dash Forward", code: "D21014501_020_01" },
        { name: "Transform", code: "D21014501_030_01" },
        {
            name: "Combo",
            code: "D21014501_040_01>D21014501_041_01>D21014501_042_01",
        },
        {
            name: "Angelic Devotion",
            code: "D21014501_060_01",
        },
    ],
    d210145_02: [
        { name: "Idle", code: "D21014502_000_01" },
        { name: "Move Forward", code: "D21014502_002_01" },
        { name: "Idle 2", code: "D21014502_014_01" },
        { name: "Dash Forward", code: "D21014502_102_01" },
        {
            name: "Broken",
            code: "D21014502_081_01>D21014502_081_02",
        },
        {
            name: "Recover from Broken",
            code: "D21014502_081_03",
        },
        {
            name: "Boss Intro",
            code: "D21014502_090_01>D21014502_090_02",
        },
        { name: "Skill", code: "D21014502_022_01" },
        {
            name: "Skill 2",
            code:
                "D21014502_100_01>D21014502_100_02>D21014502_100_03>D21014502_100_04>D21014502_100_05",
        },
        {
            name: "Skill 3",
            code:
                "D21014502_101_01>D21014502_101_02>D21014502_101_03>D21014502_101_04>D21014502_101_05",
        },
        {
            name: "Skill 4",
            code:
                "D21014502_103_01>D21014502_103_02>D21014502_103_03>D21014502_103_04>D21014502_103_05",
        },
    ],
    d210146_01: [
        { name: "Dragon's Roost", code: "DC_d210146_01_90_01" },
        { name: "Receive Gift", code: "DC_d210146_01_90_04" },
        { name: "Idle", code: "D21014601_000_01" },
        { name: "Run", code: "D21014601_002_01" },
        { name: "Run Fast", code: "D21014601_003_01" },
        { name: "Brake", code: "D21014601_004_01" },
        { name: "Dash Forward", code: "D21014601_020_01" },
        { name: "Transform", code: "D21014601_030_01" },
        {
            name: "Combo",
            code: "D21014601_040_01>D21014601_041_01>D21014601_042_01",
        },
        {
            name: "Tidal Jubilation",
            code: "D21014601_060_01",
        },
    ],
    d210148_01: [
        { name: "Dragon's Roost", code: "DC_d210148_01_90_01" },
        { name: "Receive Gift", code: "DC_d210148_01_90_04" },
        { name: "Idle", code: "D21014801_000_01" },
        { name: "Walk", code: "D21014801_002_01" },
        { name: "Run", code: "D21014801_003_01" },
        { name: "Brake", code: "D21014801_004_01" },
        { name: "Dash Forward", code: "D21014801_020_01" },
        { name: "Transform", code: "D21014801_030_01" },
        {
            name: "Combo",
            code: "D21014801_040_01>D21014801_041_01>D21014801_042_01",
        },
        {
            name: "Netherblast",
            code: "D21014801_060_01",
        },
    ],
    d210153_01: [
        { name: "Idle", code: "D21015301_000_01" },
        { name: "Fly", code: "D21015301_002_01" },
        { name: "Fly Fast", code: "D21015301_003_01" },
        { name: "Brake", code: "D21015301_004_01" },
        { name: "Dash Forward", code: "D21015301_020_01" },
        { name: "Transform", code: "D21015301_030_01" },
        {
            name: "Combo",
            code: "D21015301_040_01>D21015301_041_01>D21015301_042_01",
        },
        {
            name: "Faerie Circlet",
            code: "D21015301_060_01",
        },
        {
            name: "Faerie Glory ",
            code: "D21015301_061_01",
        },
    ],
};

export default dragonAni;
