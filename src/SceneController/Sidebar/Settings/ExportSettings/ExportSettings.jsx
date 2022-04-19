import TargetSetting from "../ModelSettings/TargetSetting";
import ExportGltf from "./ExportGltf";
import RecordControl from "./RecordControl";
import ScreenshotControl from "./ScreenshotControl";
import SpecialCapture from "./SpecialCapture";

function CaptureSettings() {
    return (
        <>
            <TargetSetting />

            <span className="break" />
            <RecordControl />
            <ScreenshotControl />

            <span className="break" />
            <SpecialCapture />

            <span className="break" />
            <ExportGltf />
        </>
    );
}

export default CaptureSettings;
