import viewer from "@/viewer";
import { useActiveModel } from "@/state";

/**
 * !!TODO time scale = 0 case
 */
export const quickRecord = () => {
    const {
        activeModel: { animation },
    } = useActiveModel.getState();
    const { record } = viewer;

    animation.stop();
    animation.addCountedEventListener("ChainFinished", () => record.stop());
    animation.play();
    record.start();
};
