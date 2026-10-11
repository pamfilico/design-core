import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

export interface Header03Props {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

/**
 * Static three-slot page bar: left slot, a centred slot that takes the free space,
 * and a right slot with a small gap between its children.
 */
export function Header03({ left, center, right }: Header03Props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", minWidth: 0 }}>{left}</Box>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center", mx: 2, minWidth: 0 }}>
          {center}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, minWidth: 0 }}>{right}</Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header03;
