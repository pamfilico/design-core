"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
/**
 * Fixed landing header on the paper colour: below `lg` a hamburger opens a right
 * drawer of icon links; brand; centred icon text buttons on `lg`+; then theme toggle,
 * contact, and either dashboard (contained) + sign out or get started (contained) +
 * sign in.
 */
export function Header14({ brand, brandHref = "/", linkComponent = "a", items, onItemClick, menuLabel = "open navigation menu", themeMode = "light", onToggleTheme, toDarkLabel = "Switch to dark mode", toLightLabel = "Switch to light mode", contactLabel, onContact, signedIn = false, dashboardLabel = "Go to Dashboard", dashboardHref = "/dashboard", signOutLabel = "Logout", onSignOut, getStartedLabel = "Get Started", signInLabel = "Login", signInHref = "/login", }) {
    const [open, setOpen] = React.useState(false);
    const btnSx = { fontWeight: 600, textTransform: "none", color: "text.primary" };
    return (_jsx(AppBar, { position: "fixed", sx: { bgcolor: "background.paper", color: "text.primary", boxShadow: 1 }, children: _jsxs(Toolbar, { children: [_jsx(IconButton, { edge: "start", onClick: () => setOpen(true), sx: { display: { xs: "flex", lg: "none" }, mr: 1 }, "aria-label": menuLabel, children: _jsx(MenuIcon, {}) }), _jsx(Drawer, { anchor: "right", open: open, onClose: () => setOpen(false), sx: { display: { xs: "block", lg: "none" } }, children: _jsx(Box, { sx: { width: 280, pt: 2 }, role: "presentation", children: _jsx(List, { children: items.map((item) => (_jsxs(ListItemButton, { onClick: () => {
                                    onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item.id);
                                    setOpen(false);
                                }, sx: { py: 1.5 }, children: [item.icon && _jsx(ListItemIcon, { sx: { minWidth: 40, color: "primary.main" }, children: item.icon }), _jsx(ListItemText, { primary: item.label, slotProps: { primary: { sx: { fontWeight: 600 } } } })] }, item.id))) }) }) }), _jsx(Typography, { variant: "h6", component: linkComponent, href: brandHref, sx: { color: "inherit", textDecoration: "none", fontWeight: 700 }, children: brand }), _jsx(Box, { sx: { flexGrow: 1, display: { xs: "none", lg: "flex" }, gap: 1, ml: 4, justifyContent: "center" }, children: items.map((item) => (_jsx(Button, { startIcon: item.icon, sx: btnSx, onClick: () => onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item.id), children: item.label }, item.id))) }), _jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1, ml: "auto" }, children: [onToggleTheme && (_jsx(Tooltip, { title: themeMode === "light" ? toDarkLabel : toLightLabel, children: _jsx(IconButton, { onClick: onToggleTheme, color: "inherit", "aria-label": themeMode === "light" ? toDarkLabel : toLightLabel, children: themeMode === "light" ? _jsx(DarkModeIcon, {}) : _jsx(LightModeIcon, {}) }) })), contactLabel && (_jsx(Button, { onClick: onContact, sx: btnSx, children: contactLabel })), signedIn ? (_jsxs(_Fragment, { children: [_jsx(Button, { component: linkComponent, href: dashboardHref, variant: "contained", sx: { fontWeight: 600, textTransform: "none" }, children: dashboardLabel }), _jsx(Button, { onClick: onSignOut, sx: btnSx, children: signOutLabel })] })) : (_jsxs(_Fragment, { children: [_jsx(Button, { component: linkComponent, href: signInHref, variant: "contained", sx: { fontWeight: 600, textTransform: "none" }, children: getStartedLabel }), _jsx(Button, { component: linkComponent, href: signInHref, sx: btnSx, children: signInLabel })] }))] })] }) }));
}
export default Header14;
//# sourceMappingURL=Header14.js.map