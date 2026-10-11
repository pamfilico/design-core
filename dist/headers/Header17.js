"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { keyframes } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
const wiggle = keyframes `
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(-1deg); }
  75% { transform: rotate(1deg); }
`;
const navSx = { my: 2, display: "block", fontWeight: "bold", whiteSpace: "nowrap", width: "auto" };
function linkProps(link, linkComponent) {
    return link.href ? { component: linkComponent, href: link.href, onClick: link.onClick } : { onClick: link.onClick };
}
function Dropdown({ item, linkComponent }) {
    var _a;
    const [anchorEl, setAnchorEl] = React.useState(null);
    return (_jsxs(_Fragment, { children: [_jsx(Button, { sx: Object.assign(Object.assign({}, navSx), { color: "primary.contrastText" }), onClick: (e) => setAnchorEl(e.currentTarget), children: item.label }), _jsx(Menu, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: () => setAnchorEl(null), children: (_a = item.children) === null || _a === void 0 ? void 0 : _a.map((c, i) => (_jsx(MenuItem, Object.assign({}, (c.href ? { component: linkComponent, href: c.href } : {}), { onClick: () => {
                        var _a;
                        (_a = c.onClick) === null || _a === void 0 ? void 0 : _a.call(c);
                        setAnchorEl(null);
                    }, sx: { color: c.active ? "secondary.main" : "primary.main", fontWeight: "bold" }, children: c.label }), i))) })] }));
}
/**
 * Fixed solid header. Below `sm` a hamburger opens a 250px drawer of titled groups
 * (indented items) with the auth button pinned at the bottom. From `sm` up: logo,
 * then text-button navigation (active in the secondary colour) with dropdown groups;
 * on the home page a signed-in user sees a wiggling call-to-action and the public
 * links. The auth text button sits at the far right.
 */
export function Header17({ logo, onLogoClick, signedIn = false, onHome = false, navItems = [], highlight, publicItems = [], drawerGroups = [], publicGroup, signOutLabel = "Logout", onSignOut, signInLabel = "Login", onSignIn, menuLabel = "menu", linkComponent = "a", }) {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const [open, setOpen] = React.useState(false);
    const authButton = (_jsx(Button, { sx: Object.assign({ color: "inherit", my: 2, display: "block", fontWeight: "bold" }, (signedIn ? {} : { fontSize: "1rem" })), onClick: signedIn ? onSignOut : onSignIn, children: signedIn ? signOutLabel : signInLabel }));
    const publicButtons = publicItems.map((p, i) => (_jsx(Button, Object.assign({ sx: Object.assign(Object.assign({}, navSx), { color: "inherit" }) }, linkProps(p, linkComponent), { children: p.label }), i)));
    const groups = signedIn ? drawerGroups : publicGroup ? [publicGroup] : [];
    return (_jsx(AppBar, { position: "fixed", children: _jsxs(Toolbar, { children: [isMobile && (_jsxs(_Fragment, { children: [_jsx(IconButton, { edge: "start", color: "inherit", "aria-label": menuLabel, onClick: () => setOpen(true), children: _jsx(MenuIcon, {}) }), _jsx(Drawer, { anchor: "left", open: open, onClose: () => setOpen(false), children: _jsxs(Box, { sx: { width: 250, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh" }, role: "presentation", onClick: () => setOpen(false), children: [_jsx(List, { children: groups.map((g, gi) => (_jsxs(React.Fragment, { children: [_jsx(ListItem, { sx: { color: "secondary.main" }, children: _jsx(ListItemText, { primary: g.title }) }), g.items.map((it, ii) => (_jsx(ListItemButton, Object.assign({ sx: { pl: 4 }, selected: it.active }, linkProps(it, linkComponent), { children: _jsx(ListItemText, { primary: it.label }) }), ii)))] }, gi))) }), _jsx(Box, { sx: { p: 2, color: "text.primary" }, children: authButton })] }) })] })), logo && (_jsx(Box, { onClick: onLogoClick, sx: { display: "flex", alignItems: "center", cursor: onLogoClick ? "pointer" : undefined }, children: logo })), !isMobile &&
                    (signedIn ? (onHome ? (_jsxs(_Fragment, { children: [highlight && (_jsx(Button, Object.assign({ sx: Object.assign(Object.assign({}, navSx), { color: "inherit", animation: `${wiggle} 2s infinite` }) }, linkProps(highlight, linkComponent), { children: highlight.label }))), _jsx(Box, { sx: { flexGrow: 1 } }), publicButtons] })) : (navItems.map((item, i) => item.children ? (_jsx(Dropdown, { item: item, linkComponent: linkComponent }, i)) : (_jsx(Button, Object.assign({ sx: Object.assign(Object.assign({}, navSx), { color: item.active ? "secondary.main" : "primary.contrastText" }) }, linkProps(item, linkComponent), { children: item.label }), i))))) : (publicButtons)), _jsx(Box, { sx: { flexGrow: 1 } }), _jsx(Box, { sx: { display: { xs: "none", md: "flex" }, flexGrow: 1 } }), _jsx(Box, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: authButton })] }) }));
}
export default Header17;
//# sourceMappingURL=Header17.js.map