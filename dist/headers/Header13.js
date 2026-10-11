import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
/**
 * Static app bar: hamburger when signed in, a brand link that grows (optionally
 * swapped for a page title from `sm` up), then a status chip and a theme toggle when
 * signed in, or a sign-in text button when signed out.
 */
export function Header13({ brand, brandHref = "/", pageTitle, linkComponent = "a", signedIn = false, onMenuClick, menuLabel = "open drawer", statusChip, themeMode = "light", onToggleTheme, toDarkLabel = "Switch to dark mode", toLightLabel = "Switch to light mode", signInLabel = "Sign In", signInHref, onSignIn, }) {
    var _a;
    return (_jsx(AppBar, { position: "static", children: _jsxs(Toolbar, { children: [signedIn && (_jsx(IconButton, { color: "inherit", "aria-label": menuLabel, edge: "start", onClick: onMenuClick, sx: { mr: 2 }, children: _jsx(MenuIcon, {}) })), _jsx(Typography, { variant: "h6", component: "div", sx: { flexGrow: 1 }, children: _jsx(Link, { component: linkComponent, href: brandHref, color: "inherit", underline: "none", children: pageTitle ? (_jsxs(_Fragment, { children: [_jsx(Box, { component: "span", sx: { display: { xs: "none", sm: "inline" } }, children: pageTitle }), _jsx(Box, { component: "span", sx: { display: { xs: "inline", sm: "none" } }, children: brand })] })) : (brand) }) }), _jsxs(Box, { sx: { display: "flex", gap: 1, alignItems: "center" }, children: [signedIn && (_jsxs(_Fragment, { children: [statusChip && (_jsx(Chip, { label: statusChip.label, color: (_a = statusChip.color) !== null && _a !== void 0 ? _a : "primary", onClick: statusChip.onClick, sx: { cursor: "pointer" }, size: "small" })), onToggleTheme && (_jsx(Tooltip, { title: themeMode === "light" ? toDarkLabel : toLightLabel, children: _jsx(IconButton, { onClick: onToggleTheme, color: "inherit", "aria-label": themeMode === "light" ? toDarkLabel : toLightLabel, children: themeMode === "light" ? _jsx(DarkModeIcon, {}) : _jsx(LightModeIcon, {}) }) }))] })), !signedIn && (_jsx(Button, Object.assign({ color: "inherit" }, (signInHref ? { component: linkComponent, href: signInHref } : { onClick: onSignIn }), { children: signInLabel })))] })] }) }));
}
export default Header13;
//# sourceMappingURL=Header13.js.map