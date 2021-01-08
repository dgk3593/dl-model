const dragonAni = {
    d200008_01: [
        { name: "Idle", code: "D20000801_000_01" },
        {
            name: "Defeated",
            code: "D20000801_011_01>D20000801_011_02",
        },
        {
            name: "Appear",
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
        { name: "Move Backward", code: "D20000901_004_01" },
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
    ],
    d200017_01: [
        { name: "Dragon's Roost", code: "DC_d200017_01_90_01" },
        { name: "Receive Gift", code: "DC_d200017_01_90_04" },
        { name: "Idle", code: "D20001701_000_01" },
        { name: "Walk", code: "D20001701_002_01" },
        { name: "Run", code: "D20001701_003_01" },
        { name: "Move Backward", code: "D20001701_004_01" },
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
        { name: "Move Backward", code: "D20001801_004_01" },
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
    ],
    d210016_01: [
        { name: "Dragon's Roost", code: "DC_d210016_01_90_01" },
        { name: "Receive Gift", code: "DC_d210016_01_90_04" },
        { name: "Idle", code: "D21001601_000_01" },
        { name: "Move Forward", code: "D21001601_002_01" },
        { name: "Move Forward (Fast)", code: "D21001601_003_01" },
        { name: "Move Backward", code: "D21001601_004_01" },
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
    ],
    d210018_01: [
        { name: "Dragon's Roost", code: "DC_d210018_01_90_01" },
        { name: "Receive Gift", code: "DC_d210018_01_90_04" },
    ],
    d210019_01: [
        { name: "Dragon's Roost", code: "DC_d210019_01_90_01" },
        { name: "Receive Gift", code: "DC_d210019_01_90_04" },
    ],
    d210020_01: [
        { name: "Dragon's Roost", code: "DC_d210020_01_90_01" },
        { name: "Receive Gift", code: "DC_d210020_01_90_04" },
    ],
    d210024_01: [
        { name: "Dragon's Roost", code: "DC_d210024_01_90_01" },
        { name: "Receive Gift", code: "DC_d210024_01_90_04" },
    ],
    d210025_01: [
        { name: "Dragon's Roost", code: "DC_d210025_01_90_01" },
        { name: "Receive Gift", code: "DC_d210025_01_90_04" },
    ],
    d210026_01: [
        { name: "Dragon's Roost", code: "DC_d210026_01_90_01" },
        { name: "Receive Gift", code: "DC_d210026_01_90_04" },
    ],
    d210030_01: [
        { name: "Dragon's Roost", code: "DC_d210030_01_90_01" },
        { name: "Receive Gift", code: "DC_d210030_01_90_04" },
    ],
    d210036_01: [
        { name: "Dragon's Roost", code: "DC_d210006_01_90_01" },
        { name: "Receive Gift", code: "DC_d210006_01_90_04" },
    ],
    d210038_01: [
        { name: "Dragon's Roost", code: "DC_d210001_01_90_01" },
        { name: "Receive Gift", code: "DC_d210001_01_90_04" },
    ],
    d210039_01: [
        { name: "Dragon's Roost", code: "DC_d210002_01_90_01" },
        { name: "Receive Gift", code: "DC_d210002_01_90_04" },
        { name: "Infernal Ray", code: "D21010401_60_01" },
    ],
    d210040_01: [
        { name: "Dragon's Roost", code: "DC_d210003_01_90_01" },
        { name: "Receive Gift", code: "DC_d210003_01_90_04" },
    ],
    d210041_01: [
        { name: "Dragon's Roost", code: "DC_d210004_01_90_01" },
        { name: "Receive Gift", code: "DC_d210004_01_90_04" },
    ],
    d210042_01: [
        { name: "Dragon's Roost", code: "DC_d210005_01_90_01" },
        { name: "Receive Gift", code: "DC_d210005_01_90_04" },
    ],
    d210043_01: [
        { name: "Dragon's Roost", code: "DC_d210014_01_90_01" },
        { name: "Receive Gift", code: "DC_d210014_01_90_04" },
    ],
    d210045_01: [
        { name: "Dragon's Roost", code: "DC_d210014_01_90_01" },
        { name: "Receive Gift", code: "DC_d210014_01_90_04" },
    ],
    d210046_01: [
        { name: "Dragon's Roost", code: "DC_d210046_01_90_01" },
        { name: "Receive Gift", code: "DC_d210046_01_90_04" },
    ],
    d210048_01: [
        { name: "Dragon's Roost", code: "DC_d210048_01_90_01" },
        { name: "Receive Gift", code: "DC_d210048_01_90_04" },
    ],
    d210049_01: [
        { name: "Dragon's Roost", code: "DC_d210049_01_90_01" },
        { name: "Receive Gift", code: "DC_d210049_01_90_04" },
    ],
    d210051_01: [
        { name: "Dragon's Roost", code: "DC_d210051_01_90_01" },
        { name: "Receive Gift", code: "DC_d210051_01_90_04" },
    ],
    d210052_01: [
        { name: "Dragon's Roost", code: "DC_d210052_01_90_01" },
        { name: "Receive Gift", code: "DC_d210052_01_90_04" },
        { name: "Idle", code: "D21005201_000_01" },
        { name: "Move Forward", code: "D21005201_002_01" },
        { name: "Move Forward (Fast)", code: "D21005201_003_01" },
        { name: "Move Backward", code: "D21005201_004_01" },
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
        { name: "Move Backward", code: "D21005301_004_01" },
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
    ],
    d210055_01: [
        { name: "Dragon's Roost", code: "DC_d210055_01_90_01" },
        { name: "Receive Gift", code: "DC_d210055_01_90_04" },
    ],
    d210056_01: [
        { name: "Dragon's Roost", code: "DC_d210006_01_90_01" },
        { name: "Receive Gift", code: "DC_d210006_01_90_04" },
        { name: "Idle", code: "D21000601_000_01" },
        { name: "Move Forward", code: "D21000601_002_01" },
        { name: "Move Forward (Fast)", code: "D21000601_003_01" },
        { name: "Move Backward", code: "D21000601_004_01" },
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
    ],
    d210071_01: [
        { name: "Dragon's Roost", code: "DC_d210046_01_90_01" },
        { name: "Receive Gift", code: "DC_d210046_01_90_04" },
    ],
    d210072_01: [
        { name: "Dragon's Roost", code: "DC_d210072_01_90_01" },
        { name: "Receive Gift", code: "DC_d210072_01_90_04" },
    ],
    d210074_01: [
        { name: "Dragon's Roost", code: "DC_d210012_01_90_01" },
        { name: "Receive Gift", code: "DC_d210012_01_90_04" },
    ],
    d210076_01: [
        { name: "Dragon's Roost", code: "DC_d210076_01_90_01" },
        { name: "Receive Gift", code: "DC_d210076_01_90_04" },
    ],
    d210077_01: [
        { name: "Dragon's Roost", code: "DC_d210077_01_90_01" },
        { name: "Receive Gift", code: "DC_d210077_01_90_04" },
    ],
    d210078_01: [
        { name: "Dragon's Roost", code: "DC_d210078_01_90_01" },
        { name: "Receive Gift", code: "DC_d210078_01_90_04" },
    ],
    d210079_01: [
        { name: "Dragon's Roost", code: "DC_d210079_01_90_01" },
        { name: "Receive Gift", code: "DC_d210079_01_90_04" },
    ],
    d210080_01: [
        { name: "Dragon's Roost", code: "DC_d210080_01_90_01" },
        { name: "Receive Gift", code: "DC_d210080_01_90_04" },
    ],
    d210081_01: [
        { name: "Dragon's Roost", code: "DC_d210018_01_90_01" },
        { name: "Receive Gift", code: "DC_d210018_01_90_04" },
    ],
    d210082_01: [
        { name: "Dragon's Roost", code: "DC_d210082_01_90_01" },
        { name: "Receive Gift", code: "DC_d210082_01_90_04" },
    ],
    d210083_01: [
        { name: "Dragon's Roost", code: "DC_d210083_01_90_01" },
        { name: "Receive Gift", code: "DC_d210083_01_90_04" },
        { name: "Idle", code: "D21008301_000_01" },
        { name: "Move Forward", code: "D21008301_002_01" },
        { name: "Move Forward (Fast)", code: "D21008301_003_01" },
        { name: "Move Backward", code: "D21008301_004_01" },
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
    ],
    d210085_01: [
        { name: "Dragon's Roost", code: "DC_d210085_01_90_01" },
        { name: "Receive Gift", code: "DC_d210085_01_90_04" },
        { name: "Idle", code: "D21008501_000_01" },
        { name: "Move Forward", code: "D21008501_002_01" },
        { name: "Move Forward (Fast)", code: "D21008501_003_01" },
        { name: "Move Backward", code: "D21008501_004_01" },
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
    ],
    d210088_01: [
        { name: "Dragon's Roost", code: "DC_d210018_01_90_01" },
        { name: "Receive Gift", code: "DC_d210018_01_90_04" },
    ],
    d210091_01: [
        { name: "Dragon's Roost", code: "DC_d210022_01_90_01" },
        { name: "Receive Gift", code: "DC_d210022_01_90_04" },
    ],
    d210094_01: [
        { name: "Dragon's Roost", code: "DC_d210094_01_90_01" },
        { name: "Receive Gift", code: "DC_d210094_01_90_04" },
    ],
    d210095_01: [
        { name: "Dragon's Roost", code: "DC_d210005_01_90_01" },
        { name: "Receive Gift", code: "DC_d210005_01_90_04" },
    ],
    d210096_01: [
        { name: "Dragon's Roost", code: "DC_d210016_01_90_01" },
        { name: "Receive Gift", code: "DC_d210016_01_90_04" },
    ],
    d210097_01: [
        { name: "Dragon's Roost", code: "DC_d210072_01_90_01" },
        { name: "Receive Gift", code: "DC_d210072_01_90_04" },
    ],
    d210098_01: [
        { name: "Dragon's Roost", code: "DC_d210098_01_90_01" },
        { name: "Receive Gift", code: "DC_d210098_01_90_04" },
    ],
    d210101_01: [
        { name: "Dragon's Roost", code: "DC_d210025_01_90_01" },
        { name: "Receive Gift", code: "DC_d210025_01_90_04" },
    ],
    d210102_01: [
        { name: "Dragon's Roost", code: "DC_d210020_01_90_01" },
        { name: "Receive Gift", code: "DC_d210020_01_90_04" },
    ],
    d210103_01: [
        { name: "Dragon's Roost", code: "DC_d210103_01_90_01" },
        { name: "Receive Gift", code: "DC_d210103_01_90_04" },
    ],
    d210113_01: [
        { name: "Dragon's Roost", code: "DC_d210002_01_90_01" },
        { name: "Receive Gift", code: "DC_d210002_01_90_04" },
    ],
    d210105_01: [
        { name: "Dragon's Roost", code: "DC_d210025_01_90_01" },
        { name: "Receive Gift", code: "DC_d210025_01_90_04" },
    ],
    d210106_01: [
        { name: "Dragon's Roost", code: "DC_d210019_01_90_01" },
        { name: "Receive Gift", code: "DC_d210019_01_90_04" },
    ],
    d210107_01: [
        { name: "Dragon's Roost", code: "DC_d210019_01_90_01" },
        { name: "Receive Gift", code: "DC_d210019_01_90_04" },
    ],
    d210109_01: [
        { name: "Dragon's Roost", code: "DC_d210109_01_90_01" },
        { name: "Receive Gift", code: "DC_d210109_01_90_04" },
    ],
    d210110_01: [
        { name: "Dragon's Roost", code: "DC_d210110_01_90_01" },
        { name: "Receive Gift", code: "DC_d210110_01_90_04" },
    ],
    d210111_01: [
        { name: "Dragon's Roost", code: "DC_d210111_01_90_01" },
        { name: "Receive Gift", code: "DC_d210111_01_90_04" },
    ],
    d210112_01: [
        { name: "Dragon's Roost", code: "DC_d210112_01_90_01" },
        { name: "Receive Gift", code: "DC_d210112_01_90_04" },
        { name: "Idle", code: "D21005201_000_01" },
        { name: "Move Forward", code: "D21005201_002_01" },
        { name: "Move Forward (Fast)", code: "D21005201_003_01" },
        { name: "Move Backward", code: "D21005201_004_01" },
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
    ],
    d210115_01: [
        { name: "Dragon's Roost", code: "DC_d210115_01_90_01" },
        { name: "Receive Gift", code: "DC_d210115_01_90_04" },
        { name: "Idle", code: "D21011501_000_01" },
        { name: "Move Forward", code: "D21011501_002_01" },
        { name: "Move Forward (Fast)", code: "D21011501_003_01" },
        { name: "Move Backward", code: "D21011501_004_01" },
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
        { name: "Move Backward", code: "D21011601_004_01" },
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
    ],
    d210118_01: [
        { name: "Idle", code: "D21011801_000_01" },
        { name: "Move Forward", code: "D21011801_002_01" },
        { name: "Move Forward (Fast)", code: "D21011801_003_01" },
        { name: "Move Backward", code: "D21011801_004_01" },
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
        { name: "Move Backward", code: "D21012001_004_01" },
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
        { name: "Move Backward", code: "D21012101_004_01" },
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
        { name: "Move Backward", code: "D21012101_004_01" },
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
        { name: "Move Backward", code: "D21012301_004_01" },
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
        { name: "Move Backward", code: "D21012401_004_01" },
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
        { name: "Move Backward", code: "D21012501_004_01" },
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
        { name: "Move Backward", code: "D21012601_004_01" },
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
        { name: "Move Backward", code: "D21012701_004_01" },
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
        { name: "Give Back Gifts", code: "DC_d210128_01_90_03" },
        { name: "Receive Gift", code: "DC_d210128_01_90_04" },
        { name: "Home Screen", code: "CMN_MWM_06_21012801" },
    ],
    d210130_01: [
        { name: "Dragon's Roost", code: "DC_d210130_01_90_01" },
        { name: "Receive Gift", code: "DC_d210130_01_90_04" },
        { name: "Idle", code: "D21013001_000_01" },
        { name: "Move Forward", code: "D21013001_002_01" },
        { name: "Move Forward (Fast)", code: "D21013001_003_01" },
        { name: "Move Backward", code: "D21013001_004_01" },
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
        { name: "Move Backward", code: "D21013101_004_01" },
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
        { name: "Move Backward", code: "D21013201_004_01" },
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
        { name: "Dragon's Roost", code: "DC_d210132_01_90_01" },
        { name: "Receive Gift", code: "DC_d210132_01_90_04" },
    ],
    d210133_01: [
        { name: "Dragon's Roost", code: "DC_d210133_01_90_01" },
        { name: "Receive Gift", code: "DC_d210133_01_90_04" },
        { name: "Idle", code: "D21013301_000_01" },
        { name: "Run", code: "D21013301_002_01" },
        { name: "Run Fast", code: "D21013301_003_01" },
        { name: "Move Backward", code: "D21013301_004_01" },
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
        { name: "Move Backward", code: "D21013401_004_01" },
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
        { name: "Move Backward", code: "D21013501_004_01" },
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
        { name: "Move Backward", code: "D21014201_004_01" },
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
        { name: "Move Backward", code: "D21014301_004_01" },
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
        { name: "Move Backward", code: "D21013601_004_01" },
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
        { name: "Move Forward", code: "D21000201_002_01" },
        { name: "Move Forward (Fast)", code: "D21000201_003_01" },
        { name: "Move Backward", code: "D21000201_004_01" },
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
            name: "Boss Appear",
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
    ],
    d210004_01: [
        { name: "Dragon's Roost", code: "DC_d210004_01_90_01" },
        { name: "Receive Gift", code: "DC_d210004_01_90_04" },
    ],
    d210005_01: [
        { name: "Dragon's Roost", code: "DC_d210005_01_90_01" },
        { name: "Receive Gift", code: "DC_d210005_01_90_04" },
    ],
    d210006_01: [
        { name: "Dragon's Roost", code: "DC_d210006_01_90_01" },
        { name: "Receive Gift", code: "DC_d210006_01_90_04" },
        { name: "Idle", code: "D21000601_000_01" },
        { name: "Move Forward", code: "D21000601_002_01" },
        { name: "Move Forward (Fast)", code: "D21000601_003_01" },
        { name: "Move Backward", code: "D21000601_004_01" },
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
        { name: "Move Forward", code: "D21000701_002_01" },
        { name: "Move Forward (Fast)", code: "D21000701_003_01" },
        { name: "Move Backward", code: "D21000701_004_01" },
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
    ],
    d210011_01: [
        { name: "Dragon's Roost", code: "DC_d210011_01_90_01" },
        { name: "Receive Gift", code: "DC_d210011_01_90_04" },
    ],
    d210012_01: [
        { name: "Dragon's Roost", code: "DC_d210012_01_90_01" },
        { name: "Receive Gift", code: "DC_d210012_01_90_04" },
    ],
    d210013_01: [
        { name: "Dragon's Roost", code: "DC_d210013_01_90_01" },
        { name: "Receive Gift", code: "DC_d210013_01_90_04" },
    ],
    d210014_01: [
        { name: "Dragon's Roost", code: "DC_d210014_01_90_01" },
        { name: "Receive Gift", code: "DC_d210014_01_90_04" },
    ],
    d210015_01: [
        { name: "Dragon's Roost", code: "DC_d210015_01_90_01" },
        { name: "Receive Gift", code: "DC_d210015_01_90_04" },
    ],
    d210021_01: [
        { name: "Dragon's Roost", code: "DC_d210021_01_90_01" },
        { name: "Receive Gift", code: "DC_d210021_01_90_04" },
    ],
    d210022_01: [
        { name: "Dragon's Roost", code: "DC_d210022_01_90_01" },
        { name: "Receive Gift", code: "DC_d210022_01_90_04" },
    ],
    d210023_01: [
        { name: "Dragon's Roost", code: "DC_d210023_01_90_01" },
        { name: "Receive Gift", code: "DC_d210023_01_90_04" },
    ],
    d210050_01: [
        { name: "Dragon's Roost", code: "DC_d210050_01_90_01" },
        { name: "Receive Gift", code: "DC_d210050_01_90_04" },
    ],
    d210075_01: [
        { name: "Dragon's Roost", code: "DC_d210075_01_90_01" },
        { name: "Receive Gift", code: "DC_d210075_01_90_04" },
    ],
    d210089_01: [
        { name: "Dragon's Roost", code: "DC_d210022_01_90_01" },
        { name: "Receive Gift", code: "DC_d210022_01_90_04" },
    ],
    d210090_01: [
        { name: "Dragon's Roost", code: "DC_d210022_01_90_01" },
        { name: "Receive Gift", code: "DC_d210022_01_90_04" },
    ],
    d210058_01: [
        { name: "Dragon's Roost", code: "DC_d210011_01_90_01" },
        { name: "Receive Gift", code: "DC_d210011_01_90_04" },
    ],
    d210059_01: [
        { name: "Dragon's Roost", code: "DC_d210021_01_90_01" },
        { name: "Receive Gift", code: "DC_d210021_01_90_04" },
    ],
    d210060_01: [
        { name: "Dragon's Roost", code: "DC_d210021_01_90_01" },
        { name: "Receive Gift", code: "DC_d210021_01_90_04" },
    ],
    d210061_01: [
        { name: "Dragon's Roost", code: "DC_d210021_01_90_01" },
        { name: "Receive Gift", code: "DC_d210021_01_90_04" },
    ],
    d210062_01: [
        { name: "Dragon's Roost", code: "DC_d210021_01_90_01" },
        { name: "Receive Gift", code: "DC_d210021_01_90_04" },
    ],
    d210063_01: [
        { name: "Dragon's Roost", code: "DC_d210022_01_90_01" },
        { name: "Receive Gift", code: "DC_d210022_01_90_04" },
    ],
    d210064_01: [
        { name: "Dragon's Roost", code: "DC_d210022_01_90_01" },
        { name: "Receive Gift", code: "DC_d210022_01_90_04" },
    ],
    d210065_01: [
        { name: "Dragon's Roost", code: "DC_d210022_01_90_01" },
        { name: "Receive Gift", code: "DC_d210022_01_90_04" },
    ],
    d210066_01: [
        { name: "Dragon's Roost", code: "DC_d210022_01_90_01" },
        { name: "Receive Gift", code: "DC_d210022_01_90_04" },
    ],
    d210067_01: [
        { name: "Dragon's Roost", code: "DC_d210023_01_90_01" },
        { name: "Receive Gift", code: "DC_d210023_01_90_04" },
    ],
    d210068_01: [
        { name: "Dragon's Roost", code: "DC_d210023_01_90_01" },
        { name: "Receive Gift", code: "DC_d210023_01_90_04" },
    ],
    d210069_01: [
        { name: "Dragon's Roost", code: "DC_d210023_01_90_01" },
        { name: "Receive Gift", code: "DC_d210023_01_90_04" },
    ],
    d210070_01: [
        { name: "Dragon's Roost", code: "DC_d210023_01_90_01" },
        { name: "Receive Gift", code: "DC_d210023_01_90_04" },
    ],
};

export default dragonAni;
