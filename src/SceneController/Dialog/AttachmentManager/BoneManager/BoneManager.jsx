import AttachmentSetting from "@/SceneController/Sidebar/Settings/ModelSettings/AttachmentSetting";
import { useActiveModel } from "@/state";
import Accordion from "components/Accordion";

import "./BoneManager.css";

function BoneManager({ bone }) {
    const { activeModel } = useActiveModel();
    const attList = activeModel?.attachment[bone] ?? [];

    return (
        <Accordion defaultOpen className="BoneManager" disableGutters>
            <>{bone}</>
            <>
                {attList.map(att => (
                    <AttachmentSetting
                        target={att}
                        label={att?.userData?.name ?? att.id}
                    />
                ))}
            </>
        </Accordion>
    );
}

export default BoneManager;
