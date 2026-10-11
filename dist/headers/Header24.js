import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
/**
 * Date toolbar card on the paper colour: a date field (160px from `md`) and a row of
 * small quick-pick buttons. Stacks and spans the width on mobile; centred and
 * shrink-wrapped from `md`.
 */
export function Header24({ datePicker, quickPicks }) {
    return (_jsx(Box, { sx: {
            backgroundColor: "background.paper",
            borderRadius: 1,
            boxShadow: 1,
            p: { xs: 1.5, sm: 2 },
            mb: 3,
            mt: 3,
            width: { xs: "100%", md: "fit-content" },
            mx: { md: "auto" },
        }, children: _jsxs(Box, { sx: { display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 1, alignItems: { md: "center" } }, children: [_jsx(Box, { sx: { width: { xs: "100%", md: 160 }, flexShrink: 0 }, children: datePicker }), _jsx(Box, { sx: { display: "flex", gap: 0.5, justifyContent: { xs: "center", md: "flex-start" } }, children: quickPicks.map((q, i) => (_jsx(Button, { variant: q.selected ? "contained" : "outlined", size: "small", onClick: q.onClick, sx: { minWidth: "auto", px: 1 }, children: q.label }, i))) })] }) }));
}
export default Header24;
//# sourceMappingURL=Header24.js.map