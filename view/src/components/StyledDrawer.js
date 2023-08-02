import { Drawer } from "@mui/material";
import styled from "@emotion/styled";

export const StyledDrawer = styled(Drawer)({
  width: "20%",
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: "20%",
    boxSizing: "border-box",
  },
});
