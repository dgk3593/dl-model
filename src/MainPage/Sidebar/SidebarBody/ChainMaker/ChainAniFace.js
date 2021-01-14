import { lazy, Suspense, useContext } from "react";

import { SettingsContext } from "context/SettingsContext";

import Add from "@material-ui/icons/Add";

import { capitalize } from "helpers/helpers";

const AdvFaceDetails = lazy(() => import("./ChainAniFaceDetails"));
const DragonFaceDetails = lazy(() => import("./ChainAniDragonFaceDetails"));

const faceDetails = { adv: AdvFaceDetails, dragon: DragonFaceDetails };

function ChainAniFace(props) {
    const {
        faceChanges,
        deleteFaceChange,
        updateFaceChange,
        addFaceChange,
        openModal,
    } = props;

    const {
        app: { viewerType },
    } = useContext(SettingsContext);

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

        const modalName =
            viewerType === "dragon" ? `dragon${capitalize(target)}` : target;
        openModal(modalName, handler);
    };

    const FaceDetails = faceDetails[viewerType];

    const details = faceChanges?.map(change => (
        <Suspense fallback={null} key={change.id}>
            <FaceDetails
                change={change}
                handleClick={handleClick}
                deleteFaceChange={deleteFaceChange}
                handleChange={handleParamsChange}
            />
        </Suspense>
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
