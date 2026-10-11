"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
/**
 * Slim signed-in top bar of a rail + content shell: paper background with a bottom divider,
 * offset by the side rail width on desktop, a hamburger below `md`, and the current page title.
 */
export function Header33(props) {
    const { title, onMenuClick, menuLabel = "Open navigation", railWidth = 240, position = "fixed" } = props;
    return (_jsx(AppBar, { position: position, color: "default", elevation: 0, sx: {
            backgroundColor: "background.paper",
            borderBottom: 1,
            borderColor: "divider",
            width: { md: `calc(100% - ${railWidth}px)` },
            ml: { md: `${railWidth}px` },
        }, children: _jsxs(Toolbar, { children: [_jsx(IconButton, { edge: "start", onClick: onMenuClick, sx: { mr: 2, display: { md: "none" } }, "aria-label": menuLabel, children: _jsx(MenuIcon, {}) }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 700 }, children: title })] }) }));
}
export default Header33;
//# sourceMappingURL=Header33.js.map