"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
function initials(name, email) {
    var _a, _b;
    const source = (name || "").trim();
    if (source && !source.includes("@")) {
        const parts = source.split(/\s+/).slice(0, 2);
        return parts.map((p) => { var _a, _b; return (_b = (_a = p[0]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : ""; }).join("") || "?";
    }
    return (_b = (_a = (email || "?").trim()[0]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : "?";
}
/**
 * Authenticated app top bar: optional hamburger below `md`, a brand link or a
 * breadcrumbs slot that grows, then an actions slot, an avatar that opens an
 * account panel (name, email, role and detail rows) and a sign-in / sign-out icon.
 * Sits above the drawer (`zIndex: drawer + 1`).
 */
export function Header01({ brand, brandHref = "/", linkComponent = "a", showMenuButton = false, onMenuClick, menuLabel = "open menu", breadcrumbs, actions, user, secondaryAvatar = false, roleLabel, roleTitle = "Role", roleIcon, accountDetails = [], accountLabel = "Account", onSignIn, onSignOut, signInLabel = "Sign in", signOutLabel = "Sign out", position = "fixed", sx, }) {
    var _a, _b;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const name = (_a = user === null || user === void 0 ? void 0 : user.name) !== null && _a !== void 0 ? _a : null;
    const email = (_b = user === null || user === void 0 ? void 0 : user.email) !== null && _b !== void 0 ? _b : null;
    const displayName = name && !name.includes("@") ? name : null;
    const avatarColor = secondaryAvatar ? "secondary.main" : "primary.main";
    return (_jsx(AppBar, { position: position, sx: Object.assign({ zIndex: (theme) => theme.zIndex.drawer + 1 }, sx), children: _jsxs(Toolbar, { children: [showMenuButton ? (_jsx(IconButton, { color: "inherit", edge: "start", onClick: onMenuClick, sx: { mr: 1, display: { md: "none" } }, "aria-label": menuLabel, children: _jsx(MenuIcon, {}) })) : null, breadcrumbs ? (_jsx(Box, { sx: { flexGrow: 1, minWidth: 0, display: "flex", alignItems: "center" }, children: breadcrumbs })) : (_jsx(Typography, { variant: "h6", component: linkComponent, href: brandHref, color: "inherit", sx: { flexGrow: 1, fontWeight: 700, letterSpacing: "-0.02em", textDecoration: "none" }, children: brand })), _jsxs(Box, { sx: { display: "flex", gap: 1, alignItems: "center" }, children: [actions, user ? (_jsxs(_Fragment, { children: [_jsx(Tooltip, { title: email !== null && email !== void 0 ? email : accountLabel, children: _jsx(IconButton, { onClick: (e) => setAnchorEl(e.currentTarget), sx: { color: "inherit" }, size: "small", "aria-label": accountLabel, children: _jsx(Avatar, { src: user.avatarUrl, sx: { width: 30, height: 30, fontSize: 13, fontWeight: 600, bgcolor: avatarColor }, children: initials(displayName, email) }) }) }), _jsxs(Menu, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: () => setAnchorEl(null), anchorOrigin: { vertical: "bottom", horizontal: "right" }, transformOrigin: { vertical: "top", horizontal: "right" }, slotProps: { paper: { sx: { minWidth: 260, mt: 1 } } }, children: [_jsx(Box, { sx: { px: 2, py: 1.5 }, children: _jsxs(Stack, { direction: "row", spacing: 1.5, alignItems: "center", children: [_jsx(Avatar, { src: user.avatarUrl, sx: { width: 40, height: 40, fontSize: 15, fontWeight: 600, bgcolor: avatarColor }, children: initials(displayName, email) }), _jsxs(Box, { sx: { minWidth: 0 }, children: [displayName && (_jsx(Typography, { variant: "subtitle2", noWrap: true, children: displayName })), _jsx(Typography, { variant: "body2", color: "text.secondary", noWrap: true, children: email !== null && email !== void 0 ? email : "—" })] })] }) }), (roleLabel || accountDetails.length > 0) && _jsx(Divider, {}), (roleLabel || accountDetails.length > 0) && (_jsx(Box, { sx: { px: 2, py: 1.5 }, children: _jsxs(Stack, { spacing: 1, children: [roleLabel && (_jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [roleIcon, _jsx(Typography, { variant: "body2", color: "text.secondary", children: roleTitle }), _jsx(Box, { sx: { flexGrow: 1 } }), _jsx(Chip, { size: "small", label: roleLabel, color: secondaryAvatar ? "secondary" : "primary", variant: "outlined" })] })), accountDetails.map((row, i) => (_jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [row.icon, _jsx(Typography, { variant: "body2", color: "text.secondary", children: row.label }), _jsx(Box, { sx: { flexGrow: 1 } }), _jsx(Typography, { variant: "body2", children: row.value })] }, i)))] }) }))] }), _jsx(IconButton, { onClick: onSignOut, sx: { color: "inherit" }, "aria-label": signOutLabel, children: _jsx(LogoutIcon, {}) })] })) : (_jsx(IconButton, { onClick: onSignIn, sx: { color: "inherit" }, "aria-label": signInLabel, children: _jsx(LoginIcon, {}) }))] })] }) }));
}
export default Header01;
//# sourceMappingURL=Header01.js.map