import viewer from "@/viewer";
import { Box, DialogContent, DialogTitle } from "@mui/material";
import ModelTree from "./ModelTree";
import { styles } from "./styles";

/**
 * @param {object} props
 * @param {(model: DLModel) => void} props.onSelect
 * @param {() => void} [props.onAfterSelect]
 */
function TargetPicker({ onSelect = console.log, onAfterSelect }) {
    const list = viewer.model;
    const handleSelect = model => {
        onSelect(model);
        onAfterSelect?.();
    };

    return (
        <Box sx={styles.root} className="TargetPicker">
            <DialogTitle sx={styles.title}>Select Target</DialogTitle>

            <DialogContent sx={styles.content}>
                {list.length
                    ? list.map(model => (
                          <ModelTree
                              key={model.uniqueId}
                              target={model}
                              onSelect={handleSelect}
                          />
                      ))
                    : "No model"}
            </DialogContent>
        </Box>
    );
}

export default TargetPicker;
