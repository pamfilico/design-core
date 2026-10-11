import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface Header62Props {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Actions aligned to the bottom-right (buttons, filters…). */
  actions?: React.ReactNode;
}

/**
 * Plain page header: an h4 title with an optional secondary subtitle, and actions aligned to the
 * baseline on the right; wraps on narrow screens.
 */
export function Header44(props: Header62Props) {
  const { title, subtitle, actions } = props;
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end", gap: 2, mb: 3, flexWrap: "wrap" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="h1">
          {title}
        </Typography>
        {subtitle && <Typography color="text.secondary">{subtitle}</Typography>}
      </Box>
      {actions}
    </Box>
  );
}

export default Header44;
