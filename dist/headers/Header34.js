"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
/**
 * Public top bar that stays usable on a phone: logo and Sign in at every width; on `md`+ the
 * settings (install, theme, language) and Dashboard / Sign out sit in the bar, below `md` they move
 * into a right-hand drawer behind a menu button. Sign in can open a chooser of sign-in doors.
 */
export function Header34(props) {
    var _a, _b;
    const { logo, logoHref = "/", banner, signedIn = false, dashboardLabel, dashboardHref = "/dashboard", signOutLabel, onSignOut, signInLabel, signInOptions = [], signInHref = "/auth/login", menuLabel, closeMenuLabel, appearanceLabel, locales = [], locale, localeLabel = "Language", onLocaleChange, themeMode = "light", onToggleTheme, toDarkLabel = "Switch to dark mode", toLightLabel = "Switch to light mode", onInstall, installLabel = "Install", linkComponent = "a", } = props;
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [anchor, setAnchor] = React.useState(null);
    const themeToggle = onToggleTheme && (_jsx(Tooltip, { title: themeMode === "light" ? toDarkLabel : toLightLabel, children: _jsx(IconButton, { onClick: onToggleTheme, color: "inherit", "aria-label": "toggle theme", children: themeMode === "light" ? _jsx(DarkModeIcon, {}) : _jsx(LightModeIcon, {}) }) }));
    const localeSelect = (sx) => locales.length > 0 && (_jsxs(FormControl, { variant: "outlined", size: "small", sx: sx, children: [_jsx(InputLabel, { id: "header52-locale-label", children: localeLabel }), _jsx(Select, { labelId: "header52-locale-label", value: locale !== null && locale !== void 0 ? locale : locales[0].value, label: localeLabel, onChange: (e) => onLocaleChange === null || onLocaleChange === void 0 ? void 0 : onLocaleChange(e.target.value), children: locales.map((o) => (_jsx(MenuItem, { value: o.value, children: o.label }, o.value))) })] }));
    const barSelectSx = {
        width: 120,
        color: "inherit",
        "& .MuiOutlinedInput-notchedOutline": { borderColor: "currentColor", opacity: 0.5 },
        "& .MuiInputLabel-root": { color: "inherit", opacity: 0.9 },
        "& .MuiSelect-select": { color: "inherit" },
        "& .MuiSvgIcon-root": { color: "inherit" },
    };
    const chooser = signInOptions.length > 1;
    return (_jsxs(AppBar, { position: "static", sx: { flexDirection: "column", alignItems: "stretch" }, children: [banner, _jsxs(Toolbar, { sx: { gap: 1 }, children: [_jsx(Box, { sx: { flexGrow: 1, minWidth: 0 }, children: _jsx(Link, { component: linkComponent, href: logoHref, color: "inherit", underline: "none", sx: { display: "inline-flex" }, children: logo }) }), _jsxs(Box, { sx: { display: { xs: "none", md: "flex" }, gap: 2, alignItems: "center" }, children: [onInstall && (_jsx(Tooltip, { title: installLabel, children: _jsx(IconButton, { color: "inherit", onClick: onInstall, "aria-label": installLabel, size: "small", sx: { minWidth: 44, minHeight: 44 }, children: _jsx(InstallMobileIcon, { fontSize: "small" }) }) })), themeToggle, localeSelect(barSelectSx), signedIn && (_jsxs(_Fragment, { children: [_jsx(Button, { color: "inherit", component: linkComponent, href: dashboardHref, children: dashboardLabel }), _jsx(Button, { color: "inherit", onClick: onSignOut, children: signOutLabel })] }))] }), !signedIn && (_jsxs(_Fragment, { children: [_jsx(Button, Object.assign({ color: "inherit", startIcon: _jsx(LoginIcon, {}), "aria-label": signInLabel, sx: { minHeight: 44, minWidth: 44, whiteSpace: "nowrap" } }, (chooser
                                ? { onClick: (e) => setAnchor(e.currentTarget) }
                                : { component: linkComponent, href: (_b = (_a = signInOptions[0]) === null || _a === void 0 ? void 0 : _a.href) !== null && _b !== void 0 ? _b : signInHref }), { children: _jsx(Box, { component: "span", children: signInLabel }) })), chooser && (_jsx(Menu, { anchorEl: anchor, open: Boolean(anchor), onClose: () => setAnchor(null), slotProps: { paper: { sx: { p: 1, width: 300, borderRadius: 2 } } }, children: signInOptions.map((d) => (_jsx(Card, { variant: "outlined", sx: { mb: 1, overflow: "hidden", "&:last-of-type": { mb: 0 } }, children: _jsxs(CardActionArea, { component: linkComponent, href: d.href, onClick: () => setAnchor(null), sx: { p: 1.5, display: "flex", gap: 1.5, alignItems: "flex-start", justifyContent: "flex-start", minHeight: 44 }, children: [d.icon && _jsx(Box, { sx: { mt: 0.25, color: "primary.main", display: "flex" }, children: d.icon }), _jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 700 }, children: d.title }), d.body && (_jsx(Typography, { variant: "caption", color: "text.secondary", children: d.body }))] })] }) }, d.key))) }))] })), _jsx(IconButton, { color: "inherit", onClick: () => setMenuOpen(true), "aria-label": menuLabel, sx: { display: { xs: "inline-flex", md: "none" }, minWidth: 44, minHeight: 44 }, children: _jsx(MenuIcon, {}) })] }), _jsxs(Drawer, { anchor: "right", open: menuOpen, onClose: () => setMenuOpen(false), slotProps: { paper: { sx: { width: 280 } } }, children: [_jsxs(Stack, { direction: "row", alignItems: "center", sx: { p: 1.5, pb: 1 }, children: [_jsx(Typography, { variant: "overline", color: "text.secondary", sx: { flexGrow: 1 }, children: menuLabel }), _jsx(IconButton, { onClick: () => setMenuOpen(false), "aria-label": closeMenuLabel, children: _jsx(CloseIcon, {}) })] }), _jsx(Divider, {}), _jsxs(List, { children: [locales.length > 0 && _jsx(ListItem, { children: localeSelect({ width: "100%" }) }), themeToggle && (_jsx(ListItem, { secondaryAction: themeToggle, children: _jsx(ListItemText, { primary: appearanceLabel }) })), onInstall && (_jsxs(ListItemButton, { onClick: onInstall, sx: { minHeight: 44 }, children: [_jsx(ListItemIcon, { sx: { minWidth: 40 }, children: _jsx(InstallMobileIcon, { fontSize: "small" }) }), _jsx(ListItemText, { primary: installLabel })] })), signedIn && (_jsxs(_Fragment, { children: [_jsx(Divider, { sx: { my: 1 } }), _jsx(ListItemButton, { component: linkComponent, href: dashboardHref, onClick: () => setMenuOpen(false), sx: { minHeight: 44 }, children: _jsx(ListItemText, { primary: dashboardLabel }) }), _jsx(ListItemButton, { onClick: onSignOut, sx: { minHeight: 44 }, children: _jsx(ListItemText, { primary: signOutLabel }) })] }))] })] })] }));
}
export default Header34;
//# sourceMappingURL=Header34.js.map