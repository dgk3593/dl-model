import { lazy, Suspense, useContext, useMemo, useState } from "react";
import useFilterGroups from "hooks/useFilterGroups";
import { DispatchContext } from "context/SettingsContext";

import { DialogContent, DialogTitle, DialogTop } from "components/CustomDialog";

import { DRAGON_FILTERS } from "helpers/consts";
import dragons from "data/dragon_list";
import otherDragons from "data/dragon_list_extra";

import { collectFilter, multiCondFilter, getDefaultAni } from "helpers/helpers";
import "./styles/DragonSelect.css";

const SetSelect = lazy(() => import("components/SetSelect"));
const Filters = lazy(() => import("components/Filters"));
const CardGallery = lazy(() => import("components/CardGallery"));

const options = ["Dragons", "Others"];

function DragonSelect({ close, handleSelect, docked }) {
    const dispatch = useContext(DispatchContext);

    const title = "Select a Model";

    const [dragonSet, setDragonSet] = useState(0);
    const [filterState, toggleFilter, resetFilters] = useFilterGroups(
        DRAGON_FILTERS
    );

    const list = { 0: dragons, 1: otherDragons };

    const rawList = list[dragonSet];
    const filters = useMemo(() => collectFilter(filterState), [filterState]);
    const dragonList = useMemo(() => multiCondFilter(rawList, filters), [
        rawList,
        filters,
    ]);

    const handleToggle = event => {
        const { group, name } = event.currentTarget.dataset;
        toggleFilter(group, name);
    };

    const updateSetings = key => value =>
        dispatch({ type: "update", key, value });

    const setNewModel = id => {
        updateSetings("model")({ id, eyeIdx: "1", mouthIdx: "1" });
        updateSetings("animation")({ code: getDefaultAni(id) });
        updateSetings("app")({ viewerType: "dragon" });
    };

    const handler = handleSelect || setNewModel;

    const onSelect = id => {
        const cid = `d${id}`;
        handler(cid);

        !docked && close();
    };

    return (
        <>
            <DialogTop>
                <DialogTitle onClose={close}>
                    {title}
                    <div className="DragonSelect-DragonSetSelect">
                        <Suspense fallback={null}>
                            <SetSelect
                                options={options}
                                handleSelect={setDragonSet}
                                selectedIndex={dragonSet}
                            />
                        </Suspense>
                    </div>
                </DialogTitle>
                {dragonSet === 0 && (
                    <Suspense fallback={null}>
                        <Filters
                            filterList={DRAGON_FILTERS}
                            groupState={filterState}
                            handleToggle={handleToggle}
                            resetFilters={resetFilters}
                        />
                    </Suspense>
                )}
            </DialogTop>

            <DialogContent dividers>
                <Suspense fallback={<div>Loading</div>}>
                    <CardGallery
                        list={dragonList}
                        onSelect={onSelect}
                        portraitDir="dragonPortraits"
                    />
                </Suspense>
            </DialogContent>
        </>
    );
}

export default DragonSelect;
