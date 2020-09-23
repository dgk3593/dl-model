import React, { useState, useMemo } from "react";
import useToggleGroups from "./hooks/useToggleGroups";

import { DialogContent, DialogTitle, DialogTop } from "./CustomDialog";
import WeaponBtn from "./WeaponBtn";
import SetSelect from "./SetSelect";
import Filters from "./Filters";

import weapon_list from "./data/weapon_list";
import specialWeaponList from "./data/specialWeaponList";
import extraWeaponList from "./data/extraWeaponList";
import { collectFilter, multiCondFilter } from "./helpers";
import "./styles/WeaponSelect.css";

import { WEAPON_FILTERS } from "./consts";
const options = ["Regular Weapons", "Unobtainable Weapons", "Extra Weapons"];

function WeaponSelect(props) {
    const { toggleControlOpen } = props;
    const [weaponSet, setWeaponSet] = useState(0);
    const [groupState, groupToggle, setAll] = useToggleGroups(WEAPON_FILTERS);

    const filters = useMemo(() => collectFilter(groupState), [groupState]);
    const weaponList = useMemo(() => multiCondFilter(weapon_list, filters), [
        filters,
    ]);

    let list;
    switch (weaponSet) {
        case 0:
            list = weaponList;
            break;
        case 1:
            list = specialWeaponList;
            break;
        case 2:
            list = extraWeaponList;
            break;
        default:
    }

    const buttons = list.map(weapon => (
        <WeaponBtn key={weapon.iconName || weapon.wid} {...weapon} />
    ));

    const handleToggle = event => {
        const { group, name } = event.currentTarget.dataset;
        groupToggle(group, name);
    };

    const resetFilters = () => {
        setAll(false);
    };

    return (
        <>
            <DialogTop>
                <DialogTitle onClose={toggleControlOpen}>
                    Select a Weapon
                    <div className="WeaponSelect-WeaponSetSelect">
                        <SetSelect
                            options={options}
                            handleSelect={setWeaponSet}
                            selectedIndex={weaponSet}
                        />
                    </div>
                </DialogTitle>
                {weaponSet === 0 && (
                    <Filters
                        filterList={WEAPON_FILTERS}
                        groupState={groupState}
                        handleToggle={handleToggle}
                        resetFilters={resetFilters}
                    />
                )}
            </DialogTop>
            <DialogContent dividers className="WeaponSelect">
                {buttons}
                {/* <CardGallery list={content} handleSelect={handleSelect} /> */}
            </DialogContent>
        </>
    );
}

export default WeaponSelect;
