"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
/**
 * Floating section navigation for phones, as a horizontal row: each small FAB is fixed at
 * 12% from the top and spaced 56px apart from 10% of the width, so the row stays put while
 * the page scrolls (usually rendered inside a header bar). Tapping one jumps to its section;
 * the active one uses the secondary colour. Hidden from `md` up.
 */
export function Sidebar11({ sections, activeId, onSelect, ariaLabel = "scroll" }) {
    return (_jsx(Box, { sx: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }, children: sections.map((section, index) => {
            const isActive = activeId === section.id;
            return (_jsx(Tooltip, { title: section.label, arrow: true, children: _jsx(Fab, { color: isActive ? "secondary" : "primary", "aria-label": ariaLabel, size: "small", sx: {
                        position: "fixed",
                        top: "12%",
                        left: `calc(10% + ${index * 56}px)`,
                        transform: "translateX(-50%)",
                        mt: 0,
                        display: { xs: "flex", md: "none" },
                        backgroundColor: isActive ? "secondary.main" : "primary.main",
                        "&:hover": { backgroundColor: isActive ? "secondary.dark" : "primary.dark" },
                    }, onClick: () => onSelect(section.id), children: section.icon }) }, section.id));
        }) }));
}
export default Sidebar11;
//# sourceMappingURL=Sidebar11.js.map