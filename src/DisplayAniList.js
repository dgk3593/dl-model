import React from "react";

import DisplayAni from "./DisplayAni";

function DisplayAniList(props) {
    const { chain, handleChange, singlePlay, deleteSingle } = props;
    const list = chain.map(ani => {
        const key = ani.id;
        return (
            <DisplayAni
                singlePlay={singlePlay}
                handleChange={handleChange}
                deleteSingle={deleteSingle}
                key={key}
                {...ani}
            />
        );
    });
    return <>{list}</>;
}

export default DisplayAniList;
