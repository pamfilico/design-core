"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
/**
 * Sticky public-site header on the primary colour: icon + name link, icon text
 * buttons on desktop (active one tinted), and below `md` a hamburger that opens a
 * left drawer with a primary-coloured name band, an icon list whose active item has
 * a primary left border, and an optional footer caption.
 */
export function Header12({ name, nameHref = "/", icon, items, activeHref, drawerFooter, linkComponent = "a", menuLabel = "open menu", closeLabel = "close menu", }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen((o) => !o);
    const isActive = (href) => {
        if (!activeHref)
            return false;
        if (href === nameHref)
            return activeHref === nameHref;
        return activeHref === href || activeHref.startsWith(`${href}/`);
    };
    return (_jsxs(_Fragment, { children: [_jsx(AppBar, { position: "sticky", color: "primary", sx: { boxShadow: 2 }, children: _jsxs(Toolbar, { sx: { minHeight: { xs: 56, sm: 64 } }, children: [isMobile && (_jsx(IconButton, { color: "inherit", "aria-label": menuLabel, edge: "start", onClick: toggle, sx: { mr: 1 }, children: _jsx(MenuIcon, {}) })), _jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }, children: [icon && _jsx(Box, { sx: { display: { xs: "none", sm: "flex" } }, children: icon }), _jsx(Typography, { variant: "h6", component: linkComponent, href: nameHref, sx: {
                                        color: "inherit",
                                        textDecoration: "none",
                                        fontWeight: 600,
                                        fontSize: { xs: "1rem", sm: "1.25rem" },
                                        "&:hover": { opacity: 0.9 },
                                    }, children: name })] }), !isMobile && (_jsx(Box, { sx: { display: "flex", gap: 1 }, children: items.map((item) => {
                                const active = isActive(item.href);
                                return (_jsx(Button, { color: "inherit", component: linkComponent, href: item.href, startIcon: item.icon, sx: {
                                        fontWeight: active ? 600 : 400,
                                        bgcolor: active ? "action.selected" : "transparent",
                                        borderRadius: 2,
                                        px: 2,
                                        "&:hover": { bgcolor: "action.focus" },
                                    }, children: item.label }, item.href));
                            }) }))] }) }), _jsx(Drawer, { anchor: "left", open: open, onClose: toggle, ModalProps: { keepMounted: true }, sx: { display: { xs: "block", md: "none" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 } }, children: _jsxs(Box, { sx: { width: 280 }, children: [_jsxs(Box, { sx: {
                                bgcolor: "primary.main",
                                color: "primary.contrastText",
                                p: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }, children: [_jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [icon, _jsx(Typography, { variant: "h6", sx: { fontWeight: 600 }, children: name })] }), _jsx(IconButton, { onClick: toggle, sx: { color: "inherit" }, size: "small", "aria-label": closeLabel, children: _jsx(CloseIcon, {}) })] }), _jsx(Divider, {}), _jsx(List, { sx: { pt: 1 }, children: items.map((item) => {
                                const active = isActive(item.href);
                                return (_jsx(ListItem, { disablePadding: true, children: _jsxs(ListItemButton, { component: linkComponent, href: item.href, onClick: toggle, sx: {
                                            py: 1.5,
                                            bgcolor: active ? "action.selected" : "transparent",
                                            borderLeft: active ? 4 : 0,
                                            borderColor: "primary.main",
                                            "&:hover": { bgcolor: "action.hover" },
                                        }, children: [item.icon && (_jsx(ListItemIcon, { sx: { color: active ? "primary.main" : "text.secondary", minWidth: 40 }, children: item.icon })), _jsx(ListItemText, { primary: item.label, slotProps: {
                                                    primary: { sx: { fontWeight: active ? 600 : 400, color: active ? "primary.main" : "text.primary" } },
                                                } })] }) }, item.href));
                            }) }), drawerFooter && (_jsxs(_Fragment, { children: [_jsx(Divider, { sx: { mt: 2 } }), _jsx(Box, { sx: { p: 2, mt: "auto" }, children: _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { display: "block", textAlign: "center" }, children: drawerFooter }) })] }))] }) })] }));
}
export default Header12;
//# sourceMappingURL=Header12.js.map