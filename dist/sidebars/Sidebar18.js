"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
const isPathActive = (activeHref, href) => activeHref === href || activeHref.startsWith(href.replace(/\/$/, "") + "/");
/**
 * Static top bar (hamburger, title, user name, logout) whose hamburger opens a 250px
 * temporary left drawer: a primary-coloured heading, a divider and a list of icon + label
 * rows. Picking a row navigates and closes the drawer.
 */
export function Sidebar18({ title, username, onLogout, logoutLabel = "Logout", items, activeHref, onNavigate, linkComponent = "a", drawerTitle = "Admin Panel", openNavLabel = "open navigation", defaultOpen = false, }) {
    const [drawerOpen, setDrawerOpen] = React.useState(defaultOpen);
    return (_jsxs(_Fragment, { children: [_jsx(AppBar, { position: "static", children: _jsxs(Toolbar, { children: [_jsx(IconButton, { color: "inherit", edge: "start", onClick: () => setDrawerOpen(true), sx: { mr: 2 }, "aria-label": openNavLabel, "data-testid": "btn-open-nav", children: _jsx(MenuIcon, {}) }), _jsx(Typography, { variant: "h6", component: "div", sx: { flexGrow: 1 }, children: title }), _jsx(Typography, { variant: "body2", sx: { mr: 2 }, children: username }), _jsx(Button, { color: "inherit", onClick: onLogout, children: logoutLabel })] }) }), _jsx(Drawer, { anchor: "left", open: drawerOpen, onClose: () => setDrawerOpen(false), children: _jsxs(Box, { sx: { width: 250 }, role: "presentation", children: [_jsx(Box, { sx: { p: 2 }, children: _jsx(Typography, { variant: "h6", color: "primary", children: drawerTitle }) }), _jsx(Divider, {}), _jsx(List, { children: items.map((item) => {
                                var _a, _b;
                                return (_jsx(ListItem, { disablePadding: true, children: _jsxs(ListItemButton, { component: linkComponent, href: item.href, "data-testid": `nav-${(_a = item.key) !== null && _a !== void 0 ? _a : item.href}`, onClick: (e) => {
                                            if (onNavigate) {
                                                e.preventDefault();
                                                onNavigate(item.href);
                                            }
                                            setDrawerOpen(false);
                                        }, selected: isPathActive(activeHref, item.href), children: [_jsx(ListItemIcon, { children: item.icon }), _jsx(ListItemText, { primary: item.label })] }) }, (_b = item.key) !== null && _b !== void 0 ? _b : item.href));
                            }) })] }) })] }));
}
export default Sidebar18;
//# sourceMappingURL=Sidebar18.js.map