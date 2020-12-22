import ChainAni from "./ChainAni";

function ChainAniList(props) {
    const { chain, playAni, deleteAni, updateAni, openModal } = props;
    const list = chain.map(ani => (
        <ChainAni
            openModal={openModal}
            playAni={playAni}
            deleteAni={deleteAni}
            updateAni={updateAni}
            key={ani.id}
            ani={ani}
        />
    ));
    return <>{list}</>;
}

export default ChainAniList;
