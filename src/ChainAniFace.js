import ChainAniFaceDetails from "./ChainAniFaceDetails";

function ChainAniFace(props) {
    const { faceChanges, deleteFaceChange, updateFaceChanges } = props;
    const handleParamsChange = event => {
        const {
            value,
            dataset: { id, name },
        } = event.currentTarget;
        const changeToUpdate = faceChanges.find(change => change.id === id);
        const newChange = { ...changeToUpdate, [name]: value };
        updateFaceChanges(id, newChange);
    };

    const details = faceChanges?.map(change => (
        <ChainAniFaceDetails
            key={change.id}
            change={change}
            deleteFaceChange={deleteFaceChange}
            handleChange={handleParamsChange}
        />
    ));

    return (
        <>
            <div className="ChainAniFace-title">Facial Expression</div>
            <div className="ChainAniFace-list">
                <div></div>
                <div>Time (%)</div>
                <div>Eye</div>
                <div>Mouth</div>
                {details}
            </div>
        </>
    );
}

export default ChainAniFace;
