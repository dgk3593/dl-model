import TargetSetting from "../ModelSettings/TargetSetting";
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

            <SpecialCapture />
        </>
    );
}

export default CaptureSettings;
