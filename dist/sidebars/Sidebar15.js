"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";
const slugTestId = (href) => href.replace(/^\//, "").replace(/[/?=&]/g, "-") || "root";
const isActive = (activeHref, href) => activeHref === href || (activeHref.startsWith(href) && href !== "/");
function RailButton({ item, active, linkComponent, asLink, onClick, }) {
    var _a, _b;
    const linkProps = asLink ? { component: linkComponent, href: item.href } : {};
    return (_jsx(Tooltip, { title: (_a = item.tooltip) !== null && _a !== void 0 ? _a : item.label, placement: "right", children: _jsx(IconButton, Object.assign({}, linkProps, { "data-testid": `nav-toolbar-${(_b = item.key) !== null && _b !== void 0 ? _b : slugTestId(item.href)}`, onClick: onClick, sx: {
                mb: 1,
                width: 48,
                height: 48,
                backgroundColor: active ? "primary.main" : "transparent",
                color: active ? "primary.contrastText" : "text.primary",
                "&:hover": { backgroundColor: active ? "primary.dark" : "action.hover" },
            }, children: item.icon })) }));
}
/**
 * Floating 64px icon rail: a rounded, elevated paper column of 48px icon buttons with
 * tooltips to the right. The active item is filled with the primary colour. An item with
 * `children` opens a flyout menu beside it instead of navigating. A footer block (custom
 * slot, footer items, logout with an error-tinted hover) is pinned to the bottom.
 */
export function Sidebar15({ items, footerItems = [], footerSlot, activeHref, onNavigate, linkComponent = "a", onLogout, logoutLabel = "Logout", }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [activeSubmenu, setActiveSubmenu] = React.useState(null);
    const closeMenu = () => {
        setAnchorEl(null);
        setActiveSubmenu(null);
    };
    const go = (e, href) => {
        if (onNavigate) {
            e.preventDefault();
            onNavigate(href);
        }
        closeMenu();
    };
    const itemActive = (item) => { var _a, _b; return isActive(activeHref, item.href) || ((_b = (_a = item.children) === null || _a === void 0 ? void 0 : _a.some((c) => isActive(activeHref, c.href))) !== null && _b !== void 0 ? _b : false); };
    const keyOf = (item) => { var _a; return (_a = item.key) !== null && _a !== void 0 ? _a : item.href; };
    return (_jsxs(Paper, { elevation: 2, "data-testid": "icon-rail", sx: {
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
        }, children: [_jsx(Box, { sx: { flex: 1, minHeight: 0, overflowY: "auto", display: "flex", flexDirection: "column", alignItems: "center" }, children: items.map((item) => {
                    var _a;
                    const hasChildren = Boolean((_a = item.children) === null || _a === void 0 ? void 0 : _a.length);
                    return (_jsx(RailButton, { item: item, active: itemActive(item), linkComponent: linkComponent, asLink: !hasChildren, onClick: hasChildren
                            ? (e) => {
                                setAnchorEl(e.currentTarget);
                                setActiveSubmenu(keyOf(item));
                            }
                            : (e) => go(e, item.href) }, keyOf(item)));
                }) }), items
                .filter((item) => { var _a; return (_a = item.children) === null || _a === void 0 ? void 0 : _a.length; })
                .map((item) => (_jsx(Menu, { anchorEl: anchorEl, open: Boolean(anchorEl) && activeSubmenu === keyOf(item), onClose: closeMenu, anchorOrigin: { vertical: "top", horizontal: "right" }, transformOrigin: { vertical: "top", horizontal: "left" }, children: item.children.map((sub) => {
                    var _a;
                    return (_jsx(MenuItem, { component: linkComponent, href: sub.href, "data-testid": `nav-submenu-${(_a = sub.key) !== null && _a !== void 0 ? _a : slugTestId(sub.href)}`, onClick: (e) => go(e, sub.href), sx: { backgroundColor: isActive(activeHref, sub.href) ? "primary.light" : "transparent" }, children: _jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [sub.icon, _jsx(ListItemText, { primary: sub.label })] }) }, keyOf(sub)));
                }) }, `submenu-${keyOf(item)}`))), _jsxs(Box, { sx: { mt: "auto", flexShrink: 0 }, children: [_jsx(Divider, { sx: { width: "80%", my: 1 } }), footerSlot, footerItems.map((item) => (_jsx(RailButton, { item: item, active: isActive(activeHref, item.href), linkComponent: linkComponent, asLink: true, onClick: (e) => go(e, item.href) }, keyOf(item)))), onLogout && (_jsx(Tooltip, { title: logoutLabel, placement: "right", children: _jsx(IconButton, { "data-testid": "nav-toolbar-logout", onClick: onLogout, sx: {
                                width: 48,
                                height: 48,
                                color: "text.primary",
                                "&:hover": { backgroundColor: "error.light", color: "error.contrastText" },
                            }, children: _jsx(LogoutIcon, {}) }) }))] })] }));
}
export default Sidebar15;
//# sourceMappingURL=Sidebar15.js.map