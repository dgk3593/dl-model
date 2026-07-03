import { useAppState, useChainMakerState } from "@/state";
import { Drawer, Box } from "@mui/material";
import { styles } from "./styles";

import { githubIcon, kofi } from "./Header";
import CloseButton from "components/CloseButton";

import SidebarModal from "./SidebarModal";
import Settings from "./Settings";
import ChainMaker from "./ChainMaker";

function Sidebar({ open }) {
  const toggleSidebar = useAppState(state => state.sidebar.toggle);
  const showChainMaker = useChainMakerState(state => state.open);

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
      slotProps={{
        paper: {
          sx: styles.paper,
        },
      }}
    >
      {header}
      {showChainMaker ? <ChainMaker /> : <Settings />}

      <SidebarModal />
    </Drawer>
  );
}

export default Sidebar;
