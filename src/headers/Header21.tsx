import * as React from "react";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

export interface Header21Props {
  start?: React.ReactNode;
  center?: React.ReactNode;
  end?: React.ReactNode;
  sx?: SxProps<Theme>;
}

/**
 * Three-column grid bar (`1fr auto 1fr`) whose centre slot stays truly centred
 * whatever the widths of the start and end slots.
 */
export function Header21({ start, center, end, sx }: Header21Props) {
  return (
    <Box sx={[{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 1 }, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Box sx={{ justifySelf: "start" }}>{start ?? null}</Box>
      <Box sx={{ justifySelf: "center", minWidth: 0, maxWidth: "100%" }}>{center ?? null}</Box>
      <Box sx={{ justifySelf: "end" }}>{end ?? null}</Box>
    </Box>
  );
}

export default Header21;
