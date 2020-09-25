import React from "react";

import DisplayAni from "./DisplayAni";

function DisplayAniList(props) {
    const { chain, handleChange, singlePlay } = props;
    const list = chain.map(ani => {
        const key = ani.id;
        return (
            <DisplayAni
                singlePlay={singlePlay}
                handleChange={handleChange}
                key={key}
                {...ani}
            />
        );
    });
    return <>{list}</>;
}

export default DisplayAniList;
