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
 * Public (signed-out) menu: a hamburger button that opens a 250px left drawer of action
 * rows with small icons, followed by an optional footer slot. Each row runs its action and
 * closes the drawer.
 */
export function Sidebar21({ items, footerSlot, menuLabel = "menu", open, onOpenChange, defaultOpen = false, }) {
    const [inner, setInner] = React.useState(defaultOpen);
    const isOpen = open !== null && open !== void 0 ? open : inner;
    const setOpen = (value) => {
        setInner(value);
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(value);
    };
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, { edge: "start", "aria-label": menuLabel, onClick: () => setOpen(true), children: _jsx(MenuIcon, {}) }), _jsx(Drawer, { anchor: "left", open: isOpen, onClose: () => setOpen(false), children: _jsx(Box, { sx: { width: 250, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", p: 2 }, role: "presentation", children: _jsxs(List, { children: [items.map((item) => (_jsxs(ListItemButton, { onClick: () => {
                                    item.onClick();
                                    setOpen(false);
                                }, children: [_jsx(ListItemIcon, { sx: { minWidth: 36 }, children: item.icon }), _jsx(ListItemText, { primary: item.label })] }, item.key))), footerSlot] }) }) })] }));
}
export default Sidebar21;
//# sourceMappingURL=Sidebar21.js.map