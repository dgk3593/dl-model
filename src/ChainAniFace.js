import ChainAniFaceDetails from "./ChainAniFaceDetails";

import Add from "@material-ui/icons/Add";

function ChainAniFace(props) {
    const {
        faceChanges,
        deleteFaceChange,
        updateFaceChange,
        addFaceChange,
        openControl,
    } = props;

    const handleParamsChange = event => {
        const {
            value,
            dataset: { id, name },
        } = event.currentTarget;
        const changeToUpdate = faceChanges.find(change => change.id === id);
        const newChange = { ...changeToUpdate, [name]: value };
        updateFaceChange(id, newChange);
    };

    const handleClick = event => {
        const { id, target } = event.currentTarget.dataset;
        const key = `${target}Idx`;
        const handler = idx => {
            const changeToUpdate = faceChanges.find(change => change.id === id);
            const newChange = { ...changeToUpdate, [key]: idx };
            updateFaceChange(id, newChange);
        };
        openControl(target, handler);
    };

    const details = faceChanges?.map(change => (
        <ChainAniFaceDetails
            key={change.id}
            change={change}
            handleClick={handleClick}
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
