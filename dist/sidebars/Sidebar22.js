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
 * Landing-page menu: a hamburger button that opens a 280px drawer from the RIGHT, with
 * roomy rows, primary-coloured icons and bold labels. Each row runs its action and closes
 * the drawer.
 */
export function Sidebar22({ items, menuLabel = "open navigation menu", open, onOpenChange, defaultOpen = false, }) {
    const [inner, setInner] = React.useState(defaultOpen);
    const isOpen = open !== null && open !== void 0 ? open : inner;
    const setOpen = (value) => {
        setInner(value);
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(value);
    };
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, { edge: "start", onClick: () => setOpen(true), sx: { mr: 1 }, "aria-label": menuLabel, children: _jsx(MenuIcon, {}) }), _jsx(Drawer, { anchor: "right", open: isOpen, onClose: () => setOpen(false), children: _jsx(Box, { sx: { width: 280, pt: 2 }, role: "presentation", children: _jsx(List, { children: items.map((item) => (_jsxs(ListItemButton, { onClick: () => {
                                item.onClick();
                                setOpen(false);
                            }, sx: { py: 1.5 }, children: [_jsx(ListItemIcon, { sx: { minWidth: 40, color: "primary.main" }, children: item.icon }), _jsx(ListItemText, { primary: item.label, primaryTypographyProps: { fontWeight: 600 } })] }, item.key))) }) }) })] }));
}
export default Sidebar22;
//# sourceMappingURL=Sidebar22.js.map