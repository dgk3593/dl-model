import ChainAni from "./ChainAni";

function ChainAniList(props) {
    const { chain, playAni, deleteAni, updateAni } = props;
    const list = chain.map(ani => {
        const key = ani.id;
        return (
            <ChainAni
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
