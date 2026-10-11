import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export interface Header23Props {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Right-aligned slot. */
  end?: React.ReactNode;
  onBack?: () => void;
  backLabel?: string;
  mb?: number;
}

/**
 * Inline "go back" row: a back-arrow icon button, a stacked title / subtitle, and an
 * end slot on the right.
 */
export function Header23({ title, subtitle, end, onBack, backLabel = "Back", mb = 2 }: Header23Props) {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" mb={mb} flex={1}>
      <Box display="flex" alignItems="center" gap={1}>
        <IconButton onClick={onBack} sx={{ mr: 0.5 }} aria-label={backLabel}>
          <ArrowBackIcon />
        </IconButton>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          {title}
          {subtitle && <Box sx={{ mt: 0.25 }}>{subtitle}</Box>}
        </Box>
      </Box>
      {end}
    </Box>
  );
}

export default Header23;
