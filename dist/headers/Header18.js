"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
/**
 * Hamburger for the start of a toolbar that opens a 250px left drawer with a list
 * of small-icon links and an optional footer slot. Clicking anywhere in the drawer
 * closes it.
 */
export function Header18({ items, footer, menuLabel = "menu", linkComponent = "a" }) {
    const [open, setOpen] = React.useState(false);
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, { edge: "start", "aria-label": menuLabel, onClick: () => setOpen(true), children: _jsx(MenuIcon, {}) }), _jsx(Drawer, { anchor: "left", open: open, onClose: () => setOpen(false), children: _jsx(Box, { sx: { width: 250, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", p: 2 }, role: "presentation", onClick: () => setOpen(false), children: _jsxs(List, { children: [items.map((item, i) => (_jsxs(ListItemButton, Object.assign({}, (item.href ? { component: linkComponent, href: item.href } : {}), { onClick: item.onClick, children: [item.icon && _jsx(ListItemIcon, { sx: { minWidth: 36, "& svg": { fontSize: 20 } }, children: item.icon }), _jsx(ListItemText, { primary: item.label })] }), i))), footer && _jsx(Box, { onClick: (e) => e.stopPropagation(), children: footer })] }) }) })] }));
}
export default Header18;
//# sourceMappingURL=Header18.js.map