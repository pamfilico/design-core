"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
/**
 * Floating section navigation for phones: a vertical stack of small FABs fixed at the
 * bottom-left corner (16px / 12px) that stays on screen while the page scrolls. Tapping
 * one jumps to its section; the active one uses the secondary colour. Hidden from `md` up.
 */
export function Sidebar10({ sections, activeId, onSelect, ariaLabel = "scroll" }) {
    return (_jsx(Box, { sx: {
            position: "fixed",
            bottom: 16,
            left: 12,
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            gap: 1.5,
            zIndex: (theme) => theme.zIndex.tooltip,
        }, children: sections.map((section) => {
            const isActive = activeId === section.id;
            return (_jsx(Tooltip, { title: section.label, arrow: true, children: _jsx(Fab, { color: isActive ? "secondary" : "primary", "aria-label": ariaLabel, size: "small", sx: {
                        display: { xs: "flex", md: "none" },
                        backgroundColor: isActive ? "secondary.main" : "primary.main",
                        "&:hover": { backgroundColor: isActive ? "secondary.dark" : "primary.dark" },
                    }, onClick: () => onSelect(section.id), children: section.icon }) }, section.id));
        }) }));
}
export default Sidebar10;
//# sourceMappingURL=Sidebar10.js.map