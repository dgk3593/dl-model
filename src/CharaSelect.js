import React, { useContext, useMemo, useState } from "react";
import useToggleGroups from "./hooks/useToggleGroups";
import { DispatchContext, SettingsContext } from "./context/SettingsContext";

import { DialogContent, DialogTitle, DialogTop } from "./CustomDialog";
import Filters from "./Filters";
import CardGallery from "./CardGallery";
import SetSelect from "./SetSelect";
import SimpleOptionList from "./SimpleOptionList";

import { FILTERS } from "./consts";
import adv from "./data/adv_list_full";
import allies from "./data/allies";
import enemies from "./data/enemies";
import { spFaceTextures } from "./consts";

import { collectFilter, multiCondFilter } from "./helpers";
import "./styles/CharaSelect.css";

const options = ["Regular Adventurers", "Allies", "Enemies"];

function CharaSelect(props) {
    const {
        model: { id: currentId },
    } = useContext(SettingsContext);
    const { toggleControlOpen, mode } = props;
    const [charaSet, setCharaSet] = useState(0);
    const [groupState, groupToggle, setAll] = useToggleGroups(FILTERS);

    const filters = useMemo(() => collectFilter(groupState), [groupState]);
    const advList = useMemo(() => multiCondFilter(adv, filters), [filters]);

    const dispatch = useContext(DispatchContext);

    const handleToggle = event => {
        const { group, name } = event.currentTarget.dataset;
        groupToggle(group, name);
    };

    const resetFilters = () => {
        setAll(false);
    };

    const handleSelect = event => {
        const cid = event.currentTarget.dataset.value;
        const action =
            mode !== "faceOverride"
                ? {
                      type: "update",
                      key: "model",
                      value: { id: cid, texture: cid, faceTexture: cid },
                  }
                : {
                      type: "update",
                      key: "model",
                      value: {
                          faceTexture:
                              spFaceTextures[cid] && cid !== currentId
                                  ? spFaceTextures[cid]
                                  : cid,
                      },
                  };
        dispatch(action);
        toggleControlOpen();
    };

    return (
        <>
            <DialogTop>
                <DialogTitle onClose={toggleControlOpen}>
                    Select a Character
                    <div className="CharaSelect-CharaSetSelect">
                        <SetSelect
                            options={options}
                            handleSelect={setCharaSet}
                            selectedIndex={charaSet}
                        />
                    </div>
                </DialogTitle>
                {charaSet === 0 && (
                    <Filters
                        filterList={FILTERS}
                        groupState={groupState}
                        handleToggle={handleToggle}
                        resetFilters={resetFilters}
                    />
                )}
            </DialogTop>
            <DialogContent dividers>
                {charaSet === 0 ? (
                    <CardGallery list={advList} handleSelect={handleSelect} />
                ) : (
                    <SimpleOptionList
                        options={charaSet === 1 ? allies : enemies}
                        handleSelect={handleSelect}
                    />
                )}
            </DialogContent>
        </>
    );
}

export default CharaSelect;
