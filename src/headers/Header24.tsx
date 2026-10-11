import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export interface Header24Quick {
  label: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

export interface Header24Props {
  /** Date field (any picker, e.g. a small outlined date input). */
  datePicker: React.ReactNode;
  /** Quick-pick buttons (e.g. yesterday / today / tomorrow); the selected one is contained. */
  quickPicks: Header24Quick[];
}

/**
 * Date toolbar card on the paper colour: a date field (160px from `md`) and a row of
 * small quick-pick buttons. Stacks and spans the width on mobile; centred and
 * shrink-wrapped from `md`.
 */
export function Header24({ datePicker, quickPicks }: Header24Props) {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        borderRadius: 1,
        boxShadow: 1,
        p: { xs: 1.5, sm: 2 },
        mb: 3,
        mt: 3,
        width: { xs: "100%", md: "fit-content" },
        mx: { md: "auto" },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 1, alignItems: { md: "center" } }}>
        <Box sx={{ width: { xs: "100%", md: 160 }, flexShrink: 0 }}>{datePicker}</Box>
        <Box sx={{ display: "flex", gap: 0.5, justifyContent: { xs: "center", md: "flex-start" } }}>
          {quickPicks.map((q, i) => (
            <Button key={i} variant={q.selected ? "contained" : "outlined"} size="small" onClick={q.onClick} sx={{ minWidth: "auto", px: 1 }}>
              {q.label}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Header24;
