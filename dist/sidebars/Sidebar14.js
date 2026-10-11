"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
/**
 * Whole signed-in frame: a permanent 240px drawer (brand, page list, sign out) from `md`
 * up, a temporary drawer opened by a hamburger below it, and an app bar offset by the
 * drawer that shows the current page's label. Two drawers rather than one that changes
 * variant, so a resize never remounts the page content.
 */
export function Sidebar14({ brand, items, activeHref, onNavigate, linkComponent = "a", onSignOut, signOutLabel = "Sign out", openNavLabel = "Open navigation", fallbackTitle, railWidth = 240, brandColored = true, mode = "auto", testid, children, }) {
    var _a, _b, _c, _d;
    const theme = useTheme();
    const upMd = useMediaQuery(theme.breakpoints.up("md"));
    const isDesktop = mode === "auto" ? upMd : mode === "permanent";
    const [open, setOpen] = React.useState(false);
    const nav = (_jsxs(List, { "data-testid": "app-sidebar", children: [items.map((item) => {
                var _a;
                const key = (_a = item.key) !== null && _a !== void 0 ? _a : item.href;
                return (_jsxs(ListItemButton, { component: linkComponent, href: item.href, selected: activeHref === item.href, "data-testid": `nav-${key}`, onClick: (e) => {
                        if (onNavigate) {
                            e.preventDefault();
                            onNavigate(item.href);
                        }
                        setOpen(false);
                    }, children: [_jsx(ListItemIcon, { sx: { minWidth: 40 }, children: item.icon }), _jsx(ListItemText, { primary: item.label })] }, key));
            }), _jsx(Divider, { sx: { my: 1 } }), _jsxs(ListItemButton, { onClick: onSignOut, "data-testid": "btn-signout", children: [_jsx(ListItemIcon, { sx: { minWidth: 40 }, children: _jsx(LogoutIcon, {}) }), _jsx(ListItemText, { primary: signOutLabel })] })] }));
    const brandBlock = (_jsx(Toolbar, { children: typeof brand === "string" ? (_jsx(Typography, { sx: { fontWeight: 800, color: brandColored ? "primary.main" : undefined }, children: brand })) : (_jsx(Box, { sx: { display: "flex", alignItems: "center", color: brandColored ? "primary.main" : undefined }, children: brand })) }));
    return (_jsxs(Box, { sx: { display: "flex", minHeight: "100vh" }, "data-testid": testid, children: [_jsx(AppBar, { position: "fixed", color: "default", elevation: 0, sx: {
                    background: "transparent",
                    backgroundColor: "background.paper",
                    borderBottom: 1,
                    borderColor: "divider",
                    width: isDesktop ? `calc(100% - ${railWidth}px)` : "100%",
                    ml: isDesktop ? `${railWidth}px` : 0,
                }, children: _jsxs(Toolbar, { children: [!isDesktop && (_jsx(IconButton, { edge: "start", onClick: () => setOpen(true), sx: { mr: 2 }, "aria-label": openNavLabel, "data-testid": "btn-open-nav", children: _jsx(MenuIcon, {}) })), _jsx(Typography, { variant: "h6", sx: { fontWeight: 700 }, children: (_c = (_b = (_a = items.find((i) => i.href === activeHref)) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : fallbackTitle) !== null && _c !== void 0 ? _c : (_d = items[0]) === null || _d === void 0 ? void 0 : _d.label })] }) }), isDesktop ? (_jsxs(Drawer, { variant: "permanent", sx: {
                    width: railWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": { width: railWidth, boxSizing: "border-box" },
                }, children: [brandBlock, _jsx(Divider, {}), nav] })) : (_jsxs(Drawer, { open: open, onClose: () => setOpen(false), slotProps: { paper: { sx: { width: railWidth } } }, "data-testid": "nav-drawer", children: [brandBlock, _jsx(Divider, {}), nav] })), _jsxs(Box, { component: "main", sx: { flexGrow: 1, p: { xs: 2, md: 3 }, width: "100%", minWidth: 0 }, children: [_jsx(Toolbar, {}), children] })] }));
}
export default Sidebar14;
//# sourceMappingURL=Sidebar14.js.map