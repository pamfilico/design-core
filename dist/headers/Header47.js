"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
/**
 * Primary app bar: a hamburger (signed in), the brand link (or a page title from `sm`), and on the
 * right either a status chip + theme toggle (signed in) or a "Sign in ▾" button opening a menu of
 * sign-in cards, one per kind of account.
 */
export function Header47(props) {
    var _a;
    const { brand, brandHref = "/", pageTitle, signedIn = false, onMenuClick, menuLabel = "open drawer", statusChip, themeMode = "light", onToggleTheme, toDarkLabel = "Switch to dark mode", toLightLabel = "Switch to light mode", signInLabel, signInOptions, linkComponent = "a", } = props;
    const [anchor, setAnchor] = React.useState(null);
    const close = () => setAnchor(null);
    return (_jsx(AppBar, { position: "static", children: _jsxs(Toolbar, { children: [signedIn && (_jsx(IconButton, { color: "inherit", "aria-label": menuLabel, edge: "start", onClick: onMenuClick, sx: { mr: 2 }, children: _jsx(MenuIcon, {}) })), _jsx(Typography, { variant: "h6", component: "div", sx: { flexGrow: 1 }, children: _jsx(Link, { component: linkComponent, href: brandHref, color: "inherit", underline: "none", children: pageTitle ? (_jsxs(_Fragment, { children: [_jsx(Box, { component: "span", sx: { display: { xs: "none", sm: "inline" } }, children: pageTitle }), _jsx(Box, { component: "span", sx: { display: { xs: "inline", sm: "none" } }, children: brand })] })) : (brand) }) }), _jsx(Box, { sx: { display: "flex", gap: 1, alignItems: "center" }, children: signedIn ? (_jsxs(_Fragment, { children: [statusChip && (_jsx(Chip, { label: statusChip.label, color: (_a = statusChip.color) !== null && _a !== void 0 ? _a : "primary", onClick: statusChip.onClick, sx: { cursor: "pointer" }, size: "small" })), onToggleTheme && (_jsx(Tooltip, { title: themeMode === "light" ? toDarkLabel : toLightLabel, children: _jsx(IconButton, { onClick: onToggleTheme, color: "inherit", "aria-label": "toggle theme", children: themeMode === "light" ? _jsx(DarkModeIcon, {}) : _jsx(LightModeIcon, {}) }) }))] })) : (_jsxs(_Fragment, { children: [_jsx(Button, { color: "inherit", onClick: (e) => setAnchor(e.currentTarget), endIcon: _jsx(ExpandMoreIcon, {}), sx: { textTransform: "none" }, children: signInLabel }), _jsx(Menu, { anchorEl: anchor, open: Boolean(anchor), onClose: close, anchorOrigin: { vertical: "bottom", horizontal: "right" }, transformOrigin: { vertical: "top", horizontal: "right" }, slotProps: { paper: { sx: { mt: 1.5, p: 1.5, minWidth: 280 } } }, children: _jsx(Box, { sx: { display: "flex", flexDirection: "column", gap: 1 }, children: signInOptions.map((o) => (_jsx(Card, { variant: "outlined", sx: { overflow: "hidden" }, children: _jsx(CardActionArea, { component: linkComponent, href: o.href, onClick: close, sx: { display: "block", textAlign: "left" }, children: _jsxs(CardContent, { sx: { "&:last-child": { pb: 2 } }, children: [_jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }, children: [o.icon && _jsx(Box, { sx: { display: "flex", color: "primary.main" }, children: o.icon }), _jsx(Typography, { variant: "subtitle1", fontWeight: 600, children: o.title })] }), o.body && (_jsx(Typography, { variant: "body2", color: "text.secondary", children: o.body }))] }) }) }, o.key))) }) })] })) })] }) }));
}
export default Header47;
//# sourceMappingURL=Header47.js.map