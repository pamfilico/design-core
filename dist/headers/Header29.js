"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import Badge from "@mui/material/Badge";
import CircularProgress from "@mui/material/CircularProgress";
import MenuIcon from "@mui/icons-material/Menu";
function linkProps(link, linkComponent) {
    return link.href ? { component: linkComponent, href: link.href, onClick: link.onClick } : { onClick: link.onClick };
}
/**
 * Fixed workspace bar: below `md` a hamburger opens a drawer of the links with the
 * auth button at the bottom; an arrow-separated breadcrumb trail (a home link then
 * chips); a children slot; and from `md` the text links, a disabled usage button
 * with a coloured count badge (warning at 70%, error at 90%) and the auth button.
 */
export function Header29({ home, crumbs = [], separator = "→", children, links = [], usage, signedIn = false, signOutLabel = "Logout", onSignOut, signInLabel = "Login", onSignIn, menuLabel = "menu", linkComponent = "a", }) {
    const [open, setOpen] = React.useState(false);
    const authButton = (_jsx(Button, { sx: { color: "inherit", my: 2, display: "block", fontWeight: "bold" }, onClick: signedIn ? onSignOut : onSignIn, children: signedIn ? signOutLabel : signInLabel }));
    const ratio = usage && usage.limit > 0 ? usage.used / usage.limit : 0;
    const badgeColor = (usage === null || usage === void 0 ? void 0 : usage.loading) ? "primary" : ratio >= 0.9 ? "error" : ratio >= 0.7 ? "warning" : "primary";
    return (_jsx(AppBar, { position: "fixed", children: _jsxs(Toolbar, { children: [_jsx(IconButton, { edge: "start", color: "inherit", "aria-label": menuLabel, onClick: () => setOpen(true), sx: { display: { xs: "block", md: "none" } }, children: _jsx(MenuIcon, {}) }), _jsx(Drawer, { anchor: "left", open: open, onClose: () => setOpen(false), children: _jsxs(Box, { sx: { width: 250, display: "flex", flexDirection: "column", height: "100%" }, role: "presentation", onClick: () => setOpen(false), children: [_jsx(List, { children: links.map((l, i) => (_jsx(Button, Object.assign({ sx: { color: "text.primary", display: "block", fontWeight: "bold" } }, linkProps(l, linkComponent), { children: l.label }), i))) }), _jsx(Box, { sx: { flexGrow: 1 } }), _jsx(Box, { sx: { p: 2, color: "text.primary" }, children: authButton })] }) }), _jsxs(Breadcrumbs, { "aria-label": "breadcrumb", separator: separator, sx: { color: "inherit" }, children: [_jsx(Link, Object.assign({ underline: "hover", color: "inherit" }, (home.href ? { component: linkComponent, href: home.href } : {}), { onClick: home.onClick, children: home.label })), crumbs.map((c, i) => (_jsx(Chip, Object.assign({ label: c.label, onClick: c.onClick }, (c.href ? { component: linkComponent, href: c.href, clickable: true } : {}), { sx: { color: "inherit", bgcolor: "action.selected" } }), i)))] }), children, _jsx(Box, { sx: { flexGrow: 1 } }), links.map((l, i) => (_jsx(Button, Object.assign({ sx: { color: "inherit", fontWeight: "bold", display: { xs: "none", md: "block" } } }, linkProps(l, linkComponent), { children: l.label }), i))), usage && (_jsx(Box, { sx: { display: { xs: "none", md: "block" } }, children: _jsx(Badge, { badgeContent: usage.loading ? _jsx(CircularProgress, { size: 16 }) : `${usage.used}/${usage.limit}`, color: badgeColor, children: _jsx(Button, { sx: { fontWeight: "bold", marginRight: 2, "&.Mui-disabled": { color: "inherit", opacity: 0.8 } }, disabled: true, children: usage.label }) }) })), _jsx(Box, { sx: { display: { xs: "none", md: "block" } }, children: authButton })] }) }));
}
export default Header29;
//# sourceMappingURL=Header29.js.map