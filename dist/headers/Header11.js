"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
/**
 * Static admin bar: a hamburger that opens a temporary left drawer (title, divider,
 * icon list with the current item selected), the title, the signed-in name and a
 * sign-out text button.
 */
export function Header11({ title, drawerTitle, items, activeHref, onNavigate, linkComponent = "a", userName, signOutLabel = "Sign out", onSignOut, menuLabel = "open menu", }) {
    const [open, setOpen] = React.useState(false);
    const isActive = (href) => !!activeHref && (activeHref === href || activeHref.startsWith(`${href}/`));
    return (_jsxs(_Fragment, { children: [_jsx(AppBar, { position: "static", children: _jsxs(Toolbar, { children: [_jsx(IconButton, { color: "inherit", edge: "start", onClick: () => setOpen(true), sx: { mr: 2 }, "aria-label": menuLabel, children: _jsx(MenuIcon, {}) }), _jsx(Typography, { variant: "h6", component: "div", sx: { flexGrow: 1 }, children: title }), userName && (_jsx(Typography, { variant: "body2", sx: { mr: 2 }, children: userName })), onSignOut && (_jsx(Button, { color: "inherit", onClick: onSignOut, children: signOutLabel }))] }) }), _jsx(Drawer, { anchor: "left", open: open, onClose: () => setOpen(false), children: _jsxs(Box, { sx: { width: 250 }, role: "presentation", children: [drawerTitle && (_jsx(Box, { sx: { p: 2 }, children: _jsx(Typography, { variant: "h6", color: "primary", children: drawerTitle }) })), _jsx(Divider, {}), _jsx(List, { children: items.map((item) => (_jsx(ListItem, { disablePadding: true, children: _jsxs(ListItemButton, Object.assign({}, (onNavigate
                                    ? { onClick: () => { onNavigate(item.href); setOpen(false); } }
                                    : { component: linkComponent, href: item.href }), { selected: isActive(item.href), children: [item.icon && _jsx(ListItemIcon, { children: item.icon }), _jsx(ListItemText, { primary: item.label })] })) }, item.href))) })] }) })] }));
}
export default Header11;
//# sourceMappingURL=Header11.js.map