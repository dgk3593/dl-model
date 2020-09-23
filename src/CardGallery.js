import React from "react";
import AdvCard from "./AdvCard";
import "./styles/CardGallery.css";

function CardGallery(props) {
    const { list, handleSelect } = props;
    const cards = list.map(chara => (
        <AdvCard {...chara} key={chara.cid} handleSelect={handleSelect} />
    ));
    return <div className="CardGallery">{cards}</div>;
}

export default CardGallery;
