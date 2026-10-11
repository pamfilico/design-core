"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
const railButtonSx = (active) => ({
    mb: 1,
    width: 48,
    height: 48,
    backgroundColor: active ? "primary.main" : "transparent",
    color: active ? "primary.contrastText" : "text.primary",
    "&:hover": { backgroundColor: active ? "primary.dark" : "action.hover" },
});
/**
 * Hamburger that opens a transparent left drawer holding a floating close button
 * and a 64px rounded paper rail of icon buttons with right-side tooltips. Active
 * items are filled with the primary colour; group items open a side menu. The
 * bottom group (language, extra links, sign-out) stays pinned under a divider.
 */
export function Header19({ items, bottomItems = [], onNavigate, locales = [], locale, onLocaleChange, localeLabel = "Change language", onSignOut, signOutLabel = "Sign out", compact = false, menuLabel = "menu", closeLabel = "close drawer", }) {
    var _a, _b, _c, _d;
    const [open, setOpen] = React.useState(false);
    const [submenu, setSubmenu] = React.useState(null);
    const [localeEl, setLocaleEl] = React.useState(null);
    const go = (href) => {
        onNavigate === null || onNavigate === void 0 ? void 0 : onNavigate(href);
        setSubmenu(null);
    };
    const isActive = (item) => { var _a; return !!item.active || !!((_a = item.children) === null || _a === void 0 ? void 0 : _a.some((c) => c.active)); };
    const currentLocale = (_b = (_a = locales.find((o) => o.value === locale)) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : (_c = locales[0]) === null || _c === void 0 ? void 0 : _c.label;
    const renderItem = (item) => (_jsx(Tooltip, { title: item.label, placement: "right", children: _jsx(IconButton, { "aria-label": item.label, onClick: (e) => (item.children ? setSubmenu({ el: e.currentTarget, item }) : go(item.href)), sx: railButtonSx(isActive(item)), children: item.badge ? (_jsx(Badge, { badgeContent: item.badge, color: "error", max: 99, children: item.icon })) : (item.icon) }) }, item.href + item.label));
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, { edge: "start", "aria-label": menuLabel, onClick: () => setOpen(true), size: compact ? "small" : "medium", children: _jsx(MenuIcon, { fontSize: compact ? "small" : "medium" }) }), _jsx(Drawer, { anchor: "left", open: open, onClose: () => setOpen(false), slotProps: { paper: { sx: { backgroundColor: "transparent", boxShadow: "none" } } }, children: _jsxs(Box, { sx: { width: 80, display: "flex", flexDirection: "column", height: "100%", justifyContent: "flex-start", p: 1, pb: 9 }, role: "presentation", children: [_jsx(IconButton, { onClick: () => setOpen(false), "aria-label": closeLabel, sx: {
                                alignSelf: "center",
                                mt: 1,
                                mb: 2,
                                boxShadow: 3,
                                backgroundColor: "background.paper",
                                "&:hover": { boxShadow: 6, backgroundColor: "background.paper" },
                            }, children: _jsx(CloseIcon, {}) }), _jsx(Box, { sx: { flex: 1, minHeight: 0, display: "flex" }, children: _jsxs(Paper, { elevation: 2, sx: {
                                    width: 64,
                                    flex: 1,
                                    minHeight: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    py: 2,
                                    position: "sticky",
                                    backgroundColor: "background.paper",
                                    borderRadius: 2,
                                }, children: [_jsx(Box, { sx: { flex: 1, minHeight: 0, overflowY: "auto", display: "flex", flexDirection: "column", alignItems: "center" }, children: items.map(renderItem) }), _jsx(Menu, { anchorEl: submenu === null || submenu === void 0 ? void 0 : submenu.el, open: Boolean(submenu), onClose: () => setSubmenu(null), anchorOrigin: { vertical: "top", horizontal: "right" }, transformOrigin: { vertical: "top", horizontal: "left" }, children: (_d = submenu === null || submenu === void 0 ? void 0 : submenu.item.children) === null || _d === void 0 ? void 0 : _d.map((sub) => (_jsx(MenuItem, { onClick: () => go(sub.href), sx: { backgroundColor: sub.active ? "primary.light" : "transparent" }, children: _jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [sub.icon, _jsx(ListItemText, { primary: sub.label })] }) }, sub.href))) }), _jsxs(Box, { sx: { mt: "auto", flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center" }, children: [_jsx(Divider, { sx: { width: "80%", my: 1 } }), locales.length > 0 && (_jsxs(_Fragment, { children: [_jsx(Tooltip, { title: localeLabel, placement: "right", children: _jsx(IconButton, { onClick: (e) => setLocaleEl(e.currentTarget), "aria-label": localeLabel, sx: railButtonSx(false), children: _jsx(Typography, { variant: "caption", sx: { fontSize: "10px", fontWeight: "bold", lineHeight: 1 }, children: currentLocale }) }) }), _jsx(Menu, { anchorEl: localeEl, open: Boolean(localeEl), onClose: () => setLocaleEl(null), anchorOrigin: { vertical: "top", horizontal: "right" }, transformOrigin: { vertical: "top", horizontal: "left" }, children: locales.map((o) => (_jsx(MenuItem, { selected: o.value === locale, onClick: () => {
                                                                onLocaleChange === null || onLocaleChange === void 0 ? void 0 : onLocaleChange(o.value);
                                                                setLocaleEl(null);
                                                            }, sx: { minWidth: 80, justifyContent: "center" }, children: _jsx(Typography, { variant: "body2", sx: { fontWeight: "bold" }, children: o.label }) }, o.value))) })] })), bottomItems.map(renderItem), onSignOut && (_jsx(Tooltip, { title: signOutLabel, placement: "right", children: _jsx(IconButton, { onClick: onSignOut, "aria-label": signOutLabel, sx: {
                                                        width: 48,
                                                        height: 48,
                                                        color: "text.primary",
                                                        "&:hover": { backgroundColor: "error.light", color: "error.contrastText" },
                                                    }, children: _jsx(LogoutIcon, {}) }) }))] })] }) })] }) })] }));
}
export default Header19;
//# sourceMappingURL=Header19.js.map