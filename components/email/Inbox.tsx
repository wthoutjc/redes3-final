import { Box } from "@mui/material";
import { CTable } from "../ui/table";

// Redux
import { useAppSelector } from "../../hooks";

const Inbox = () => {
  const { emails } = useAppSelector((state) => state.emails);

  return (
    <Box>
      <CTable data={emails} />
    </Box>
  );
};

export { Inbox };
