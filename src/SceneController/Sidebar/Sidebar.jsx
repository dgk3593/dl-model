import { useAppState } from "@/state";
import { Drawer, Box } from "@mui/material";
import { styles } from "./styles";

import { githubIcon, kofi } from "./Header";
import CloseButton from "components/CloseButton";

import SidebarModal from "./SidebarModal";
import Settings from "./Settings";
import ChainMaker from "./ChainMaker";

const PaperProps = { sx: styles.paper };

function Sidebar({ open }) {
    const toggleSidebar = useAppState(state => state.sidebar.toggle);
    const showChainMaker = useAppState(state => state.sidebar.chainMaker);

    const header = (
        <Box sx={styles.sidebarHeader}>
            {githubIcon}
            {kofi}
            <CloseButton
                color="white"
                onClick={toggleSidebar}
                title="Close Sidebar"
            />
        </Box>
    );

    return (
        <Drawer
            className="Sidebar"
            open={open}
            onClose={toggleSidebar}
            variant="persistent"
            sx={styles.sidebar}
            PaperProps={PaperProps}
        >
            {header}
            {showChainMaker ? <ChainMaker /> : <Settings />}

            <SidebarModal />
        </Drawer>
    );
}

export default Sidebar;
