import CharaCard from "./CharaCard";

import "./styles/CardGallery.css";

/**
 * @callback onSelectCallback - called when a card is clicked, with the card's ID as argument
 * @param {string} id
 */
/** create a card gallery
 * @param {Object} props
 * @param {ModelData[]} props.list - list of gallery cards
 * @param {onSelectCallback} props.onSelect - called when a card is clicked, with the card's ID as argument
 * @param {string} props.portraitDir - directory of the cards' portraits
 */
function CardGallery(props) {
    const { list, onSelect, portraitDir } = props;

    /** @param {React.MouseEvent<HTMLElement>} event */
    const onCardClick = event => {
        const { value } = event.currentTarget.dataset;
        onSelect(value);
    };

    const cards = list.map(chara => (
        <CharaCard
            {...chara}
            key={chara.id}
            onClick={onCardClick}
            portraitDir={portraitDir}
        />
    ));

    return <div className="CardGallery">{cards}</div>;
}

export default CardGallery;
