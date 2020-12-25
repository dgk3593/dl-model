import { lazy, Suspense, useContext, useMemo, useState } from "react";
import useFilterGroups from "hooks/useFilterGroups";
import { DispatchContext, SettingsContext } from "context/SettingsContext";

import { DialogContent, DialogTitle, DialogTop } from "components/CustomDialog";

import { ADV_FILTERS } from "helpers/consts";
import adv from "data/adv_list";
import allies from "data/allies";
import enemies from "data/enemies";
import { spFaceTextures } from "helpers/consts";

import { collectFilter, multiCondFilter } from "helpers/helpers";
import "./styles/CharaSelect.css";

const SetSelect = lazy(() => import("components/SetSelect"));
const Filters = lazy(() => import("components/Filters"));
const CardGallery = lazy(() => import("components/CardGallery"));
const SimpleOptionList = lazy(() => import("components/SimpleOptionList"));
const FacePartSelector = lazy(() =>
    import("components/selectors/FacePartSelector")
);

const options = ["Adventurers", "Allies", "Enemies"];

function CharaSelect({ closeModal, mode }) {
    const {
        model: { id: currentId },
    } = useContext(SettingsContext);
    const dispatch = useContext(DispatchContext);

    const title = mode === "model" ? "Select a Model" : "Override Texture";

    const [charaSet, setCharaSet] = useState(0);
    const [facePart, setFacePart] = useState("both");
    const [filterState, toggleFilter, resetFilter] = useFilterGroups(
        ADV_FILTERS
    );

    const filters = useMemo(() => collectFilter(filterState), [filterState]);
    const advList = useMemo(() => multiCondFilter(adv, filters), [filters]);

    const handleToggle = event => {
        const { group, name } = event.currentTarget.dataset;
        toggleFilter(group, name);
    };

    const changeFacePart = event => {
        const mode = event.currentTarget.dataset.value;
        setFacePart(mode);
    };

    const handleSelect = event => {
        const cid = event.currentTarget.dataset.value;
        const action = { type: "update", key: "model" };
        switch (mode) {
            case "model":
                action.value = {
                    id: cid,
                    texture: cid,
                    eyeTexture: cid,
                    mouthTexture: cid,
                };
                dispatch(action);
                break;
            case "texture":
                const outputTexture =
                    spFaceTextures[cid] && cid !== currentId
                        ? spFaceTextures[cid]
                        : cid;

                if (["eye", "both"].includes(facePart)) {
                    action.value = { eyeTexture: outputTexture };
                    dispatch(action);
                }

                if (["mouth", "both"].includes(facePart)) {
                    action.value = { mouthTexture: outputTexture };
                    dispatch(action);
                }
                break;
            default:
        }
        closeModal();
    };

    return (
        <>
            <DialogTop>
                <DialogTitle onClose={closeModal}>
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
                            resetFilters={resetFilter}
                        />
                    </Suspense>
                )}
            </DialogTop>

            <DialogContent dividers>
                {mode === "texture" && (
                    <Suspense fallback={null}>
                        <FacePartSelector
                            value={facePart}
                            handleClick={changeFacePart}
                        />
                    </Suspense>
                )}
                <Suspense fallback={<div>Loading</div>}>
                    {charaSet === 0 ? (
                        <CardGallery
                            list={advList}
                            handleSelect={handleSelect}
                        />
                    ) : (
                        <SimpleOptionList
                            options={charaSet === 1 ? allies : enemies}
                            handleSelect={handleSelect}
                        />
                    )}
                </Suspense>
            </DialogContent>
        </>
    );
}

export default CharaSelect;
