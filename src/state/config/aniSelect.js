export const aniSelectConfig = set => ({
    category: "Adv",
    setCategory: category =>
        set(state => {
            state.category = category;
        }),

    advAni: {
        category: "home",
        setCategory: newCategory =>
            set(state => {
                state.advAni.category = newCategory;
            }),

        home: {
            gender: "Male",
            setGender: gender =>
                set(state => {
                    state.advAni.home.gender = gender;
                }),
        },
        weapon: {
            type: "Sword",
            setType: newType =>
                set(state => {
                    state.advAni.weapon.type = newType;
                }),
            gunMode: "Long",
            setGunMode: mode =>
                set(state => {
                    state.advAni.weapon.gunMode = mode;
                }),
        },
        genericSkill: {
            type: "Sword",
            setType: newType =>
                set(state => {
                    state.advAni.genericSkill.type = newType;
                }),
        },
        // for unique skill, combo, force strike, and victory
        groupByWeapon: {
            setGroupWeaponType: (group, type) =>
                set(state => {
                    state.advAni.groupByWeapon[group] = type;
                }),
        },
        uniqueOther: {
            type: "Sword",
            setType: newType =>
                set(state => {
                    state.advAni.uniqueOther.type = newType;
                }),
            selected: "",
            setSelected: id =>
                set(state => {
                    state.advAni.uniqueOther.selected = id;
                }),
        },
    },

    extraAni: {
        category: "Dance",
        setCategory: newCategory =>
            set(state => {
                state.extraAni.category = newCategory;
            }),
    },

    personalAni: {
        source: "",
        setSource: source =>
            set(state => {
                state.personalAni.source = source;
            }),
        sourceName: "",
        setSourceName: name =>
            set(state => {
                state.personalAni.sourceName = name;
            }),
    },
});
