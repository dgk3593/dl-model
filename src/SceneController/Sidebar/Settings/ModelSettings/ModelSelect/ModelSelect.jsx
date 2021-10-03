import { Button } from "@mui/material";
import { useAppState, useModelCatalogState } from "@/state";
import { useActiveModel } from "@/state";
import { simpleHandler } from "../../simpleHandler";
import Accordion from "components/Accordion";

import { categories } from "@/SceneController/Dialog/ModelCatalog/categories";
import "./ModelSelect.css";

const label = {
    change: "Change Model",
    select: "Select Model",
};

function ModelSelect() {
    const { activeModel } = useActiveModel();
    const openModal = useAppState(state => state.sidebar.modal.open);
    const { setIndex } = useModelCatalogState();

    const handleClick = event => {
        event.stopPropagation();
        const { index } = event.currentTarget.dataset;
        if (index !== undefined) {
            setIndex(0, index);
        }
        openModal("model", simpleHandler.model);
    };

    const groupButtons = categories.map((cat, index) => {
        const { label, icon } = cat;
        return (
            <Button title={label} data-index={index} onClick={handleClick}>
                <img src={icon} alt={label} />
            </Button>
        );
    });

    return (
        <Accordion className="ModelSelect" defaultOpen disableGutters>
            <Button variant="contained" onClick={handleClick}>
                {activeModel ? label.change : label.select}
            </Button>

            <div className="ModelSelect-groups">{groupButtons}</div>
        </Accordion>
    );
}

export default ModelSelect;
