"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
/**
 * Transparent 70px bar with a single Contact button on the right; below `sm` it becomes a
 * hamburger opening a left drawer with large Home and Contact rows.
 */
export function Header41(props) {
    const { left, homeLabel, homeHref = "/", contactLabel, onContact, menuLabel = "open drawer", linkComponent = "a" } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const bar = (right) => (_jsx(AppBar, { position: "static", sx: { height: 70, backgroundColor: "transparent" }, children: _jsxs(Toolbar, { sx: { justifyContent: "space-between", alignItems: "center", height: "100%" }, children: [left, _jsx(Box, { sx: { flexGrow: 1 } }), _jsx(Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: right })] }) }));
    if (!isMobile)
        return bar(_jsx(Button, { onClick: onContact, children: contactLabel }));
    const rowText = { primary: { fontSize: "1.125rem", fontWeight: 500 } };
    return (_jsxs(_Fragment, { children: [bar(_jsx(IconButton, { color: "inherit", "aria-label": menuLabel, onClick: () => setDrawerOpen(true), children: _jsx(MenuIcon, {}) })), _jsx(Drawer, { anchor: "left", open: drawerOpen, onClose: () => setDrawerOpen(false), children: _jsx(Box, { sx: { width: 250 }, role: "presentation", onClick: () => setDrawerOpen(false), children: _jsxs(List, { children: [_jsx(ListItem, { disablePadding: true, children: _jsx(ListItemButton, { component: linkComponent, href: homeHref, sx: { py: 2 }, children: _jsx(ListItemText, { primary: homeLabel, slotProps: rowText }) }) }), _jsx(ListItem, { disablePadding: true, children: _jsx(ListItemButton, { onClick: onContact, sx: { py: 2 }, children: _jsx(ListItemText, { primary: contactLabel, slotProps: rowText }) }) })] }) }) })] }));
}
export default Header41;
//# sourceMappingURL=Header41.js.map