import PersonalAniSource from "./PersonalAniSource";
import PersonalAniGallery from "./PersonalAniGallery";

import "./PersonalAnimation.css";

function PersonalAnimation({ onSelect }) {
    return (
        <div className="PersonalAnimation">
            <PersonalAniSource />

            <PersonalAniGallery onSelect={onSelect} />
        </div>
    );
}

export default PersonalAnimation;
