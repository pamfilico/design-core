"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
/**
 * Sticky mobile app bar (safe-area aware, 68px): logo tile or back arrow, a bold tight-tracked
 * title that truncates, and a right group with an optional status chip and actions.
 */
export function Header45(props) {
    const { title, brand, logo, onBack, backLabel = "Back", status, right } = props;
    return (_jsx(AppBar, { position: "sticky", color: "default", sx: { top: "env(safe-area-inset-top, 0px)" }, children: _jsxs(Toolbar, { sx: { gap: 1.25, minHeight: 68 }, children: [onBack ? (_jsx(IconButton, { onClick: onBack, "aria-label": backLabel, sx: { ml: -1 }, children: _jsx(ArrowBackIcon, {}) })) : (logo), _jsx(Typography, { component: "h1", sx: { fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.02em", flexGrow: 1, minWidth: 0 }, noWrap: true, children: title || brand }), (status || right) && (_jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [status && (_jsx(Chip, { label: status.label, sx: {
                                bgcolor: status.online ? "success.main" : "action.selected",
                                color: status.online ? "success.contrastText" : "text.secondary",
                            } })), right] }))] }) }));
}
export default Header45;
//# sourceMappingURL=Header45.js.map