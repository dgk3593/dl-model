import { lazy, Suspense, useContext, useState, useEffect } from "react";
import useFilterGroups from "hooks/useFilterGroups";
import { DispatchContext } from "context/SettingsContext";

import { DialogContent, DialogTitle, DialogTop } from "components/CustomDialog";

import { DRAGON_FILTERS } from "helpers/filterDef";
// import dragons from "data/dragon_list";
// import otherDragons from "data/dragon_list_extra";

import { collectFilter, multiCondFilter } from "helpers/helpers";
import "./styles/DragonSelect.css";

const SetSelect = lazy(() => import("components/SetSelect"));
const Filters = lazy(() => import("components/Filters"));
const CardGallery = lazy(() => import("components/CardGallery"));

const options = ["Dragons", "Others"];

function DragonSelect({ close, handleSelect, docked, moveToDock }) {
    const dispatch = useContext(DispatchContext);

    const title = "Select a Model";

    const [dragonSet, setDragonSet] = useState(0);
    const [dragons, setDragons] = useState([]);
    const [otherDragons, setOtherDragons] = useState([]);
    const [filterState, toggleFilter, resetFilters] = useFilterGroups(
        DRAGON_FILTERS
    );

    const list = { 0: dragons, 1: otherDragons };

    const rawList = list[dragonSet];
    const filters = collectFilter(filterState);
    const dragonList = multiCondFilter(rawList, filters);

    const handleToggle = event => {
        const { group, name } = event.currentTarget.dataset;
        toggleFilter(group, name);
    };

    const updateSetings = key => value =>
        dispatch({ type: "update", key, value });

    const setNewModel = id =>
        updateSetings("model")({ id, texture: "", eyeIdx: 1, mouthIdx: 1 });

    const handler = handleSelect || setNewModel;

    const onSelect = id => {
        const cid = id === "smith" ? id : `d${id}`;
        handler(cid);

        !docked && close();
    };

    useEffect(() => {
        const fetchDragons = async () => {
            const { default: data } = await import("data/dragon_list");
            setDragons(data);
        };
        const fetchOthers = async () => {
            const { default: data } = await import("data/dragon_list_extra");
            setOtherDragons(data);
        };

        Promise.all([fetchDragons(), fetchOthers()]);
    }, []);

    return (
        <>
            <DialogTop>
                <DialogTitle
                    showDockBtn={moveToDock && !docked}
                    onDock={moveToDock}
                    onClose={close}
                >
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
