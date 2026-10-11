"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
/**
 * Static marketing bar on the neutral AppBar colour: logo + bold name, centred text
 * links, and below `md` a burger that opens a right drawer repeating the brand (with
 * a close button) and the links as a list.
 */
export function Header31({ logo, name, homeHref = "/", items, menuLabel = "menu", closeLabel = "close", linkComponent = "a", }) {
    const [open, setOpen] = React.useState(false);
    const brand = (_jsxs(Link, { component: linkComponent, href: homeHref, underline: "none", color: "inherit", sx: { display: "flex", alignItems: "center" }, children: [logo, _jsx(Typography, { variant: "h6", component: "span", sx: { ml: 1, fontWeight: "bold" }, children: name })] }));
    return (_jsxs(AppBar, { position: "static", color: "default", children: [_jsxs(Toolbar, { children: [brand, _jsx(Box, { sx: { flexGrow: 1, display: "flex", justifyContent: "center" }, children: items.map((link) => (_jsx(Button, { href: link.href, component: linkComponent, color: "inherit", sx: { mx: 2 }, children: link.label }, link.href))) }), _jsx(IconButton, { edge: "end", color: "inherit", "aria-label": menuLabel, onClick: () => setOpen(true), sx: { display: { md: "none" } }, children: _jsx(MenuIcon, {}) })] }), _jsx(Drawer, { anchor: "right", open: open, onClose: () => setOpen(false), children: _jsxs(Box, { sx: { width: 250, display: "flex", flexDirection: "column", p: 2 }, children: [_jsxs(Box, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [brand, _jsx(IconButton, { onClick: () => setOpen(false), "aria-label": closeLabel, children: _jsx(CloseIcon, {}) })] }), _jsx(List, { children: items.map((link) => (_jsx(ListItem, { disablePadding: true, children: _jsx(ListItemButton, { component: linkComponent, href: link.href, onClick: () => setOpen(false), children: _jsx(ListItemText, { primary: link.label }) }) }, link.href))) })] }) })] }));
}
export default Header31;
//# sourceMappingURL=Header31.js.map