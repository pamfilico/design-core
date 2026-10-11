"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from "@mui/material/AppBar";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
/**
 * Compact sticky mobile app bar (64px): logo tile or a large "‹" back glyph, a bold title and an
 * optional status chip on the right.
 */
export function Header46(props) {
    const { title, brand, logo, onBack, backLabel = "Back", status } = props;
    return (_jsx(AppBar, { position: "sticky", color: "default", children: _jsxs(Toolbar, { sx: { gap: 1.5, minHeight: 64 }, children: [onBack ? (_jsx(IconButton, { onClick: onBack, "aria-label": backLabel, sx: { fontSize: 28, ml: -1 }, children: "‹" })) : (logo), _jsx(Typography, { sx: { fontWeight: 800, fontSize: "1.15rem", letterSpacing: "-0.02em", flexGrow: 1 }, children: title || brand }), status && (_jsx(Chip, { label: status.label, sx: {
                        fontWeight: 700,
                        bgcolor: status.online ? "success.main" : "action.selected",
                        color: status.online ? "success.contrastText" : "text.secondary",
                    } }))] }) }));
}
export default Header46;
//# sourceMappingURL=Header46.js.map