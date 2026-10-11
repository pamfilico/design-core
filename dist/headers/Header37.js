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
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
/**
 * Sticky storefront bar on the default (paper) surface: icon + site name on the left and
 * icon buttons for each section on the right with a tinted active state. Below `sm` the buttons
 * move into a left drawer with a header, bordered active row and a caption at the bottom.
 */
export function Header37(props) {
    const { title, homeHref, icon, items, activeHref, drawerCaption, menuLabel = "open menu", linkComponent = "a" } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const isActive = (path) => {
        if (!activeHref)
            return false;
        if (path === homeHref)
            return activeHref === homeHref;
        return activeHref === path || activeHref.startsWith(`${path}/`);
    };
    const toggle = () => setDrawerOpen((o) => !o);
    return (_jsxs(_Fragment, { children: [_jsx(AppBar, { position: "sticky", color: "default", children: _jsxs(Toolbar, { sx: { minHeight: { xs: 56, sm: 64 } }, children: [isMobile && (_jsx(IconButton, { color: "inherit", "aria-label": menuLabel, edge: "start", onClick: toggle, sx: { mr: 1 }, children: _jsx(MenuIcon, {}) })), _jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }, children: [icon && _jsx(Box, { sx: { display: { xs: "none", sm: "flex" }, color: "primary.main" }, children: icon }), _jsx(Typography, { variant: "h6", component: linkComponent, href: homeHref, sx: {
                                        color: "text.primary",
                                        textDecoration: "none",
                                        fontWeight: 600,
                                        fontSize: { xs: "1rem", sm: "1.25rem" },
                                        "&:hover": { opacity: 0.9 },
                                    }, children: title })] }), !isMobile && (_jsx(Box, { sx: { display: "flex", gap: 1 }, children: items.map((item) => {
                                const active = isActive(item.href);
                                return (_jsx(Button, { color: "inherit", component: linkComponent, href: item.href, startIcon: item.icon, sx: {
                                        color: active ? "primary.main" : "text.primary",
                                        fontWeight: active ? 600 : 400,
                                        bgcolor: (t) => (active ? alpha(t.palette.primary.main, 0.1) : "transparent"),
                                        borderRadius: 2,
                                        px: 2,
                                        "&:hover": { bgcolor: (t) => alpha(t.palette.primary.main, 0.08) },
                                    }, children: item.label }, item.href));
                            }) }))] }) }), _jsx(Drawer, { anchor: "left", open: drawerOpen, onClose: toggle, ModalProps: { keepMounted: true }, sx: { display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 } }, children: _jsxs(Box, { sx: { width: 280 }, children: [_jsxs(Box, { sx: {
                                color: "text.primary",
                                p: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderBottom: 1,
                                borderColor: "divider",
                            }, children: [_jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [icon && _jsx(Box, { sx: { display: "flex", color: "primary.main" }, children: icon }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 600 }, children: title })] }), _jsx(IconButton, { onClick: toggle, sx: { color: "text.primary" }, size: "small", children: _jsx(CloseIcon, {}) })] }), _jsx(List, { sx: { pt: 1 }, children: items.map((item) => {
                                const active = isActive(item.href);
                                return (_jsx(ListItem, { disablePadding: true, children: _jsxs(ListItemButton, { component: linkComponent, href: item.href, onClick: toggle, sx: {
                                            py: 1.5,
                                            bgcolor: active ? "action.selected" : "transparent",
                                            borderLeft: active ? 4 : 0,
                                            borderColor: "primary.main",
                                            "&:hover": { bgcolor: "action.hover" },
                                        }, children: [item.icon && (_jsx(ListItemIcon, { sx: { color: active ? "primary.main" : "text.secondary", minWidth: 40 }, children: item.icon })), _jsx(ListItemText, { primary: item.label, slotProps: {
                                                    primary: { fontWeight: active ? 600 : 400, color: active ? "primary.main" : "text.primary" },
                                                } })] }) }, item.href));
                            }) }), drawerCaption && (_jsxs(_Fragment, { children: [_jsx(Divider, { sx: { mt: 2 } }), _jsx(Box, { sx: { p: 2, mt: "auto" }, children: _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { display: "block", textAlign: "center" }, children: drawerCaption }) })] }))] }) })] }));
}
export default Header37;
//# sourceMappingURL=Header37.js.map