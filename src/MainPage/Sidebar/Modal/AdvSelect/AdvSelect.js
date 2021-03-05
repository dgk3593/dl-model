import { lazy, Suspense, useContext, useMemo, useState } from "react";
import useFilterGroups from "hooks/useFilterGroups";
import { DispatchContext, SettingsContext } from "context/SettingsContext";

import { DialogContent, DialogTitle, DialogTop } from "components/CustomDialog";

import { ADV_FILTERS } from "helpers/filterDef";
import adv from "data/adv_list";
import allies from "data/allies";
import enemies from "data/enemies";
import { spFaceTextures } from "helpers/consts";

import { collectFilter, multiCondFilter } from "helpers/helpers";

import "./styles/AdvSelect.css";

const SetSelect = lazy(() => import("components/SetSelect"));
const Filters = lazy(() => import("components/Filters"));
const CardGallery = lazy(() => import("components/CardGallery"));
const SimpleOptionList = lazy(() => import("components/SimpleOptionList"));
const FacePartSelector = lazy(() =>
    import("components/selectors/FacePartSelector")
);

const options = ["Adventurers", "Allies", "Enemies"];

function AdvSelect({ close, mode, handleSelect, docked, moveToDock }) {
    const {
        model: { id: currentId },
    } = useContext(SettingsContext);
    const dispatch = useContext(DispatchContext);

    const title = mode === "adv" ? "Select a Model" : "Override Texture";

    const [charaSet, setCharaSet] = useState(0);
    const [facePart, setFacePart] = useState("both");
    const [filterState, toggleFilter, resetFilters] = useFilterGroups(
        ADV_FILTERS
    );

    const filters = useMemo(() => collectFilter(filterState), [filterState]);
    const advList = useMemo(() => multiCondFilter(adv, filters), [filters]);

    const handleToggle = event => {
        const { group, name } = event.currentTarget.dataset;
        toggleFilter(group, name);
    };

    const updateSettings = key => value =>
        dispatch({ type: "update", key, value });

    const updateModel = updateSettings("model");

    const setNewModel = id =>
        updateModel({
            id: id,
            texture: "",
            eyeTexture: id,
            mouthTexture: id,
        });

    const setTexture = id => {
        const value = {};
        const outputTexture =
            spFaceTextures[id] && id !== currentId ? spFaceTextures[id] : id;

        if (["eye", "both"].includes(facePart)) {
            value["eyeTexture"] = outputTexture;
        }

        if (["mouth", "both"].includes(facePart)) {
            value["mouthTexture"] = outputTexture;
        }

        updateModel(value);
    };

    const defaultHandler = mode === "adv" ? setNewModel : setTexture;

    const handler = handleSelect || defaultHandler;

    const onSelect = id => {
        const cid = `c${id}`;
        handler(cid);

        !docked && close();
    };

    return (
        <>
            <DialogTop>
                <DialogTitle
                    showDockBtn={!docked}
                    onDock={moveToDock}
                    onClose={close}
                >
                    {title}
                    <div className="CharaSelect-CharaSetSelect">
                        <Suspense fallback={null}>
                            <SetSelect
                                options={options}
                                handleSelect={setCharaSet}
                                selectedIndex={charaSet}
                            />
                        </Suspense>
                    </div>
                </DialogTitle>
                {charaSet === 0 && (
                    <Suspense fallback={null}>
                        <Filters
                            filterList={ADV_FILTERS}
                            groupState={filterState}
                            handleToggle={handleToggle}
                            resetFilters={resetFilters}
                        />
                    </Suspense>
                )}
            </DialogTop>

            <DialogContent dividers>
                {mode === "texture" && (
                    <Suspense fallback={null}>
                        <FacePartSelector
                            value={facePart}
                            onClick={setFacePart}
                        />
                    </Suspense>
                )}
                <Suspense fallback={<div>Loading</div>}>
                    {charaSet === 0 ? (
                        <CardGallery
                            list={advList}
                            onSelect={onSelect}
                            portraitDir="advPortraits"
                        />
                    ) : (
                        <SimpleOptionList
                            options={charaSet === 1 ? allies : enemies}
                            onSelect={onSelect}
                        />
                    )}
                </Suspense>
            </DialogContent>
        </>
    );
}

export default AdvSelect;
