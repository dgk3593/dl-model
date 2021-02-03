/**
 * @type { AnimationList }
 */
const aniQuest = [
    { name: "Slow Weapon Run", code: "CMN_RUN_01" },
    { name: "Fast Weapon Run", code: "CMN_RUN_02" },
    { name: "Idle", code: "CMN_INT_01" },
    { name: "Stun", code: "CMN_SWN_01" },
    { name: "Frozen", code: "CMN_FRZ_01" },
    { name: "Take Damage", code: "CMN_KNB_01" },
    { name: "Landing", code: "CMN_LND_01" },
    { name: "Ukemi", code: "CMN_UKM_01&ts=0.5>CMN_UKM_03" },
    { name: "Ukemi 2", code: "CMN_UKM_11&ts=0.5>CMN_UKM_03" },
    { name: "Die", code: "CMN_DIE_02" },
    { name: "Fall to Ground", code: "CMN_BST_05" },
    {
        name: "Knocked Away",
        code: "CMN_BST_01>CMN_BST_02>CMN_BST_03>CMN_BST_04&ts=0.5>CMN_BST_07",
    },
    { name: "Stand Back Up", code: "CMN_BST_07>CMN_BST_06" },
    { name: "Transform", code: "CMN_CTD_01>CMN_CTD_02" },
    { name: "Offense Buff", code: "CMN_050_99" },
    { name: "Support Skill", code: "CMN_051_99" },
    { name: "Defense Buff", code: "CMN_052_99" },
    { name: "Heal", code: "CMN_053_99" },
    { name: "Quick Turn", code: "CMN_QTN_01" },
    { name: "Throw Item", code: "CMN_055_01_01" },
];
export default aniQuest;
