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
import Tooltip from "@mui/material/Tooltip";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import useMediaQuery from "@mui/material/useMediaQuery";
import { keyframes } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Header20 } from "./Header20.js";
const wiggle = keyframes `
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(-1deg); }
  75% { transform: rotate(1deg); }
`;
const navButtonSx = {
    my: 2,
    display: "block",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    width: "auto",
};
function linkProps(link, linkComponent) {
    return link.href ? { component: linkComponent, href: link.href, onClick: link.onClick } : { onClick: link.onClick };
}
function Dropdown({ item, linkComponent }) {
    var _a;
    const [anchorEl, setAnchorEl] = React.useState(null);
    return (_jsxs(_Fragment, { children: [_jsx(Button, { sx: navButtonSx, onClick: (e) => setAnchorEl(e.currentTarget), children: item.label }), _jsx(Menu, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: () => setAnchorEl(null), children: (_a = item.children) === null || _a === void 0 ? void 0 : _a.map((c, i) => (_jsx(MenuItem, Object.assign({}, (c.href ? { component: linkComponent, href: c.href } : {}), { onClick: () => {
                        var _a;
                        (_a = c.onClick) === null || _a === void 0 ? void 0 : _a.call(c);
                        setAnchorEl(null);
                    }, sx: { color: c.active ? "secondary.main" : "primary.main", fontWeight: "bold" }, children: c.label }), i))) })] }));
}
function LoginMenu({ label, options, linkComponent }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    return (_jsxs(_Fragment, { children: [_jsx(Button, { color: "primary", onClick: (e) => setAnchorEl(e.currentTarget), endIcon: _jsx(ExpandMoreIcon, {}), sx: { my: 2, fontWeight: "bold", textTransform: "none" }, children: label }), _jsx(Menu, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: () => setAnchorEl(null), anchorOrigin: { vertical: "bottom", horizontal: "right" }, transformOrigin: { vertical: "top", horizontal: "right" }, slotProps: { paper: { sx: { mt: 1.5, p: 1.5, minWidth: 280 } } }, children: _jsx(Box, { sx: { display: "flex", flexDirection: "column", gap: 1 }, children: options.map((o, i) => (_jsx(Card, { variant: "outlined", sx: { overflow: "hidden" }, children: _jsx(CardActionArea, { component: linkComponent, href: o.href, onClick: () => setAnchorEl(null), sx: { display: "block", textAlign: "left" }, children: _jsxs(CardContent, { sx: { "&:last-child": { pb: 2 } }, children: [_jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1.5, mb: 0.5, color: "primary.main" }, children: [o.icon, _jsx(Typography, { variant: "subtitle1", fontWeight: 600, color: "text.primary", children: o.title })] }), o.description && (_jsx(Typography, { variant: "body2", color: "text.secondary", children: o.description }))] }) }) }, i))) }) })] }));
}
/**
 * Fixed app/site header (transparent by default). Start: a drawer menu slot and the
 * logo. Desktop (`lg`+): signed-in users get text-button navigation with dropdown
 * groups; on the home page they get a wiggling call-to-action plus the public section
 * links; signed-out visitors get the public links. End: theme toggle, language select
 * (desktop), an actions slot and sign-out / sign-in (optionally a dropdown of account
 * cards). Optional signed-in bottom navigation.
 */
export function Header16({ logo, onLogoClick, menu, transparent = true, signedIn = false, onHome = false, navItems = [], highlight, publicItems = [], showAuth = true, themeMode = "light", onToggleTheme, toDarkLabel = "Switch to dark mode", toLightLabel = "Switch to light mode", locales = [], locale, localeLabel = "Language", onLocaleChange, actions, signOutLabel = "Logout", onSignOut, signInLabel = "Login", onSignIn, loginOptions, bottomItems = [], linkComponent = "a", }) {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));
    const desktop = signedIn ? (onHome ? (_jsxs(_Fragment, { children: [highlight && (_jsx(Button, Object.assign({ sx: Object.assign(Object.assign({}, navButtonSx), { animation: `${wiggle} 2s infinite` }) }, linkProps(highlight, linkComponent), { children: highlight.label }))), _jsx(Box, { sx: { flexGrow: 1 } }), _jsx(Header20, { items: publicItems, linkComponent: linkComponent })] })) : (navItems.map((item, i) => item.children ? (_jsx(Dropdown, { item: item, linkComponent: linkComponent }, i)) : (_jsx(Button, Object.assign({ sx: navButtonSx }, linkProps(item, linkComponent), { children: item.label }), i))))) : (_jsxs(_Fragment, { children: [_jsx(Box, { sx: { flexGrow: 2 } }), _jsx(Header20, { items: publicItems, linkComponent: linkComponent })] }));
    return (_jsxs(_Fragment, { children: [_jsx(AppBar, { position: "fixed", sx: transparent ? { backgroundColor: "transparent", color: "text.primary" } : undefined, children: _jsxs(Toolbar, { children: [menu, logo && (_jsx(Box, { onClick: onLogoClick, sx: { display: "flex", alignItems: "center", cursor: onLogoClick ? "pointer" : undefined }, children: logo })), !isMobile && desktop, _jsx(Box, { sx: { flexGrow: 1 } }), _jsx(Box, { sx: { display: { xs: "none", lg: "flex" }, flexGrow: 1 } }), showAuth && (_jsxs(Box, { sx: { ml: "auto", display: "flex", alignItems: "center", gap: 1 }, children: [onToggleTheme && (_jsx(Tooltip, { title: themeMode === "light" ? toDarkLabel : toLightLabel, children: _jsx(IconButton, { onClick: onToggleTheme, color: "inherit", "aria-label": themeMode === "light" ? toDarkLabel : toLightLabel, children: themeMode === "light" ? _jsx(DarkModeIcon, {}) : _jsx(LightModeIcon, {}) }) })), !isMobile && locales.length > 0 && (_jsxs(FormControl, { variant: "outlined", size: "small", sx: { width: 150, flexShrink: 0 }, children: [_jsx(InputLabel, { id: "header16-locale-label", children: localeLabel }), _jsx(Select, { labelId: "header16-locale-label", value: locale !== null && locale !== void 0 ? locale : locales[0].value, label: localeLabel, onChange: (e) => onLocaleChange === null || onLocaleChange === void 0 ? void 0 : onLocaleChange(e.target.value), children: locales.map((o) => (_jsx(MenuItem, { value: o.value, children: o.label }, o.value))) })] })), actions, signedIn ? (_jsx(Button, { sx: { my: 2, display: "block", fontWeight: "bold" }, onClick: onSignOut, children: signOutLabel })) : loginOptions && loginOptions.length > 0 ? (_jsx(LoginMenu, { label: signInLabel, options: loginOptions, linkComponent: linkComponent })) : (_jsx(Button, { sx: { my: 2, display: "block", fontWeight: "bold", fontSize: "1rem" }, onClick: onSignIn, children: signInLabel }))] }))] }) }), signedIn && bottomItems.length > 0 && (_jsx(Box, { component: "nav", sx: { position: "fixed", bottom: 0, left: 0, right: 0, zIndex: (t) => t.zIndex.appBar }, children: _jsx(BottomNavigation, { showLabels: true, children: bottomItems.map((b, i) => (_jsx(BottomNavigationAction, Object.assign({ label: b.label, icon: b.icon }, (b.href ? { component: linkComponent, href: b.href } : {}), { onClick: b.onClick, sx: { padding: "4px", minWidth: "auto", color: b.active ? "primary.main" : "inherit" } }), i))) }) }))] }));
}
export default Header16;
//# sourceMappingURL=Header16.js.map