import { useEffect } from "react";
import { useAniSelectState, useModalState } from "@/state";

import { Button } from "@mui/material";
import { getModelById } from "data/dbFunction";

function PersonalAniSource() {
    const { source, setSource, sourceName, setSourceName } = useAniSelectState(
        state => state.personalAni
    );
    const { inputModel } = useModalState();

    const updateSource = (id, name) => {
        setSourceName(name);
        setSource(id);
    };

    const changeSource = async () => {
        const selection = await inputModel();
        selection && updateSource(...selection);
    };

    useEffect(() => {
        if (sourceName) return;

        setTimeout(async () => {
            const model = await getModelById(source);
            model?.id && setSourceName(model.name);
        });
    }, [source]);

    const imagePath = ["b", "w", "e"].includes(source?.[0])
        ? `img/icon/${source}.png`
        : `img/portrait/${source}.png`;

    return (
        <div className="PersonalAni-source">
            {source && <img key={source} src={imagePath} alt={source} />}

            <div>
                <h3>{sourceName}</h3>
                <Button variant="outlined" onClick={changeSource}>
                    Change Source
                </Button>
            </div>
        </div>
    );
}

export default PersonalAniSource;
