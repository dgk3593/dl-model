import CharaCard from "./CharaCard";
import "./styles/CardGallery.css";

function CardGallery(props) {
    const { list, onSelect, portraitDir } = props;

    const onCardClick = event => {
        const { value } = event.currentTarget.dataset;
        onSelect(value);
    };

    const cards = list.map(chara => (
        <CharaCard
            {...chara}
            key={chara.cid}
            onClick={onCardClick}
            portraitDir={portraitDir}
        />
    ));

    return <div className="CardGallery">{cards}</div>;
}

export default CardGallery;
