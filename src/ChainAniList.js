import ChainAni from "./ChainAni";

function ChainAniList(props) {
    const { chain, playAni, deleteAni, updateAni, openControl } = props;
    const list = chain.map(ani => {
        const key = ani.id;
        return (
            <ChainAni
                openControl={openControl}
                playAni={playAni}
                deleteAni={deleteAni}
                updateAni={updateAni}
                key={key}
                ani={ani}
            />
        );
    });
    return <>{list}</>;
}

export default ChainAniList;
