import RecordControl from "./RecordControl";
import ScreenshotControl from "./ScreenshotControl";
import SpecialCapture from "./SpecialCapture";

function CaptureSettings() {
    return (
        <>
            <RecordControl />
            <ScreenshotControl />

            <SpecialCapture />
        </>
    );
}

export default CaptureSettings;
