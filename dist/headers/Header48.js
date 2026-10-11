"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
/**
 * Marketing top bar on the paper surface: brand on the left, centred icon buttons that scroll to
 * page sections (a right-hand drawer below `lg`), and on the right a theme toggle plus either
 * "Go to dashboard" or a contained call to action and a "Sign in ▾" chooser.
 */
export function Header48(props) {
    const { brand, brandHref = "/", sections, onSectionClick, menuLabel = "open navigation menu", themeMode = "light", onToggleTheme, toDarkLabel = "Switch to dark mode", toLightLabel = "Switch to light mode", signedIn = false, dashboardLabel, dashboardHref = "/dashboard", ctaLabel, ctaHref = "/auth/login", signInLabel, signInOptions, position = "fixed", linkComponent = "a", } = props;
    const [anchor, setAnchor] = React.useState(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const go = (id) => {
        var _a;
        if (onSectionClick)
            onSectionClick(id);
        else
            (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    return (_jsx(AppBar, { position: position, sx: { backgroundColor: "background.paper", color: "text.primary", boxShadow: 1 }, children: _jsxs(Toolbar, { children: [_jsx(IconButton, { edge: "start", onClick: () => setDrawerOpen(true), sx: { display: { xs: "flex", lg: "none" }, mr: 1 }, "aria-label": menuLabel, children: _jsx(MenuIcon, {}) }), _jsx(Drawer, { anchor: "right", open: drawerOpen, onClose: () => setDrawerOpen(false), sx: { display: { xs: "block", lg: "none" } }, children: _jsx(Box, { sx: { width: 280, pt: 2 }, role: "presentation", children: _jsx(List, { children: sections.map((s) => (_jsxs(ListItemButton, { onClick: () => {
                                    go(s.id);
                                    setDrawerOpen(false);
                                }, sx: { py: 1.5 }, children: [s.icon && _jsx(ListItemIcon, { sx: { minWidth: 40, color: "primary.main" }, children: s.icon }), _jsx(ListItemText, { primary: s.label, slotProps: { primary: { fontWeight: 600 } } })] }, s.id))) }) }) }), _jsx(Typography, { variant: "h6", component: linkComponent, href: brandHref, sx: { color: "inherit", textDecoration: "none", fontWeight: 700 }, children: brand }), _jsx(Box, { sx: { flexGrow: 1, display: { xs: "none", lg: "flex" }, gap: 1, ml: 4, justifyContent: "center" }, children: sections.map((s) => (_jsx(Button, { startIcon: s.icon, sx: { fontWeight: 600, textTransform: "none", color: "text.primary" }, onClick: () => go(s.id), children: s.label }, s.id))) }), _jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1, ml: "auto" }, children: [onToggleTheme && (_jsx(Tooltip, { title: themeMode === "light" ? toDarkLabel : toLightLabel, children: _jsx(IconButton, { onClick: onToggleTheme, color: "inherit", "aria-label": "toggle theme", children: themeMode === "light" ? _jsx(DarkModeIcon, {}) : _jsx(LightModeIcon, {}) }) })), signedIn ? (_jsx(Button, { component: linkComponent, href: dashboardHref, variant: "contained", sx: { fontWeight: 600, textTransform: "none" }, children: dashboardLabel })) : (_jsxs(_Fragment, { children: [_jsx(Button, { component: linkComponent, href: ctaHref, variant: "contained", sx: { fontWeight: 600, textTransform: "none" }, children: ctaLabel }), _jsx(Button, { onClick: (e) => setAnchor(e.currentTarget), endIcon: _jsx(ExpandMoreIcon, {}), sx: { fontWeight: 600, textTransform: "none", color: "text.primary" }, children: signInLabel }), _jsx(Menu, { anchorEl: anchor, open: Boolean(anchor), onClose: () => setAnchor(null), anchorOrigin: { vertical: "bottom", horizontal: "right" }, transformOrigin: { vertical: "top", horizontal: "right" }, slotProps: { paper: { sx: { mt: 1.5, p: 1.5, minWidth: 280 } } }, children: _jsx(Box, { sx: { display: "flex", flexDirection: "column", gap: 1 }, children: signInOptions.map((o) => (_jsx(Card, { variant: "outlined", sx: { overflow: "hidden" }, children: _jsx(CardActionArea, { component: linkComponent, href: o.href, onClick: () => setAnchor(null), sx: { display: "block", textAlign: "left" }, children: _jsxs(CardContent, { sx: { "&:last-child": { pb: 2 } }, children: [_jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }, children: [o.icon && _jsx(Box, { sx: { display: "flex", color: "primary.main" }, children: o.icon }), _jsx(Typography, { variant: "subtitle1", fontWeight: 600, children: o.title })] }), o.body && (_jsx(Typography, { variant: "body2", color: "text.secondary", children: o.body }))] }) }) }, o.key))) }) })] }))] })] }) }));
}
export default Header48;
//# sourceMappingURL=Header48.js.map