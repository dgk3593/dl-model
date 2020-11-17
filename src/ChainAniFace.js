import ChainAniFaceDetails from "./ChainAniFaceDetails";

import Add from "@material-ui/icons/Add";

function ChainAniFace(props) {
    const {
        faceChanges,
        deleteFaceChange,
        updateFaceChanges,
        addFaceChange,
    } = props;

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
                {faceChanges?.length > 0 && (
                    <>
                        <div></div>
                        <div>Time (%)</div>
                        <div>Eye</div>
                        <div>Mouth</div>
                        {details}
                    </>
                )}
                <div className="ChainAniFace-delete" onClick={addFaceChange}>
                    <Add />
                </div>
            </div>
        </>
    );
}

export default ChainAniFace;
