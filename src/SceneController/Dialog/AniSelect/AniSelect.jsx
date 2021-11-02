import { useState } from "react";
import { useDebounce } from "hook/useDebounce";
import { Box, DialogTitle, DialogContent } from "@mui/material";
import Stretcher from "components/Stretcher";
import Searchbox from "components/Searchbox";
import TabBar from "components/TabBar";
import { Upload } from "@mui/icons-material";

import AniSearchResult from "./AniSearchResult";
import AdvAnimation from "./AdvAnimation";
import PersonalAnimation from "./PersonalAnimation";
import ExtraAnimation from "./ExtraAnimation";
import UploadedAni from "./UploadedAni";

import { styles } from "./styles";
import "./AniSelect.css";
import { useAniSelectState } from "@/state";

/**
 * @type {{ name: string, icon?: JSX.Element, label?: string}[] }}
 */
const types = [
    { name: "Adv" },
    { name: "Personal" },
    { name: "Extra" },
    { name: "Upload", icon: <Upload />, label: "" },
];

const components = {
    Adv: AdvAnimation,
    Personal: PersonalAnimation,
    Extra: ExtraAnimation,
    Upload: UploadedAni,
};

/**
 * @param {object} props
 * @param {(code: string, name: string) => void} props.onSelect
 * @param {() => void} [props.onAfterSelect]
 */
function AniSelect({ onSelect = () => void 0, onAfterSelect }) {
    const { category, setCategory } = useAniSelectState();
    const idbAvailable = !!indexedDB;

    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 500);

    const handleTypeChange = (_, newType) => setCategory(newType);
    const handleSelect = event => {
        const { code, name } = event.currentTarget.dataset;
        console.log(code, name);
        onSelect(code, name);
        onAfterSelect?.();
    };

    const Component = components[category] ?? Stretcher;

    return (
        <Box className="AniSelect" sx={styles.root}>
            <Box sx={styles.title}>
                <DialogTitle>Select an Animation</DialogTitle>
                {idbAvailable && (
                    <Searchbox
                        placeholder="Search"
                        query={query}
                        onChange={setQuery}
                    />
                )}
            </Box>

            {query ? (
                <AniSearchResult
                    query={debouncedQuery}
                    onSelect={handleSelect}
                />
            ) : (
                <>
                    <TabBar
                        value={category}
                        onChange={handleTypeChange}
                        tabs={types}
                    />
                    <DialogContent sx={styles.content}>
                        <Stretcher />
                        <Component onSelect={handleSelect} />
                    </DialogContent>
                </>
            )}
        </Box>
    );
}

export default AniSelect;
