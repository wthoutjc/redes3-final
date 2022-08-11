// Interfaces - Types - Enum
import { SideBarData } from "../../../interfaces";

// Icons
import InboxIcon from "@mui/icons-material/Inbox";
import SendIcon from '@mui/icons-material/Send';

const DATA: SideBarData[] = [
  {
    title: "Inbox",
    to: "/inbox",
    Icon: <InboxIcon />,
  },
  {
    title: "Send",
    to: "/send",
    Icon: <SendIcon />,
  },
];

export { DATA };
