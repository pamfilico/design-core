"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
/**
 * Fixed app bar above the drawer: hamburger (signed in, below `md`), brand link that
 * grows, then actions slot, theme toggle, an outlined language select styled for the
 * coloured bar, a text contact button and a sign-in / sign-out icon with tooltip.
 */
export function Header08({ brand, brandHref = "/", linkComponent = "a", signedIn = false, onMenuClick, menuLabel = "open menu", actions, themeMode = "light", onToggleTheme, toDarkLabel = "Switch to dark mode", toLightLabel = "Switch to light mode", locales = [], locale, localeLabel = "Language", onLocaleChange, contactLabel, onContact, signInLabel = "Sign in", signOutLabel = "Sign out", onSignIn, onSignOut, }) {
    return (_jsx(AppBar, { position: "fixed", sx: { zIndex: (theme) => theme.zIndex.drawer + 1 }, children: _jsxs(Toolbar, { children: [signedIn && (_jsx(IconButton, { color: "inherit", edge: "start", onClick: onMenuClick, "aria-label": menuLabel, sx: { mr: 1, display: { md: "none" } }, children: _jsx(MenuIcon, {}) })), _jsx(Typography, { variant: "h6", component: "div", sx: { flexGrow: 1, fontWeight: 700, letterSpacing: "-0.02em" }, children: _jsx(Link, { component: linkComponent, href: brandHref, color: "inherit", underline: "none", children: brand }) }), _jsxs(Box, { sx: { display: "flex", gap: 1, alignItems: "center" }, children: [actions, onToggleTheme && (_jsx(Tooltip, { title: themeMode === "light" ? toDarkLabel : toLightLabel, children: _jsx(IconButton, { onClick: onToggleTheme, color: "inherit", "aria-label": themeMode === "light" ? toDarkLabel : toLightLabel, children: themeMode === "light" ? _jsx(DarkModeIcon, {}) : _jsx(LightModeIcon, {}) }) })), locales.length > 0 && (_jsxs(FormControl, { variant: "outlined", size: "small", sx: {
                                width: 140,
                                color: "inherit",
                                "& .MuiOutlinedInput-notchedOutline": { borderColor: "currentColor", opacity: 0.5 },
                                "& .MuiInputLabel-root": { color: "inherit", opacity: 0.9 },
                                "& .MuiSelect-select, & .MuiSelect-icon": { color: "inherit" },
                            }, children: [_jsx(InputLabel, { id: "header08-locale-label", children: localeLabel }), _jsx(Select, { labelId: "header08-locale-label", value: locale !== null && locale !== void 0 ? locale : locales[0].value, label: localeLabel, onChange: (e) => onLocaleChange === null || onLocaleChange === void 0 ? void 0 : onLocaleChange(e.target.value), children: locales.map((o) => (_jsx(MenuItem, { value: o.value, children: o.label }, o.value))) })] })), contactLabel && (_jsx(Button, { color: "inherit", onClick: onContact, sx: { textTransform: "none", fontWeight: 600, whiteSpace: "nowrap" }, children: contactLabel })), signedIn ? (_jsx(Tooltip, { title: signOutLabel, children: _jsx(IconButton, { color: "inherit", onClick: onSignOut, "aria-label": signOutLabel, children: _jsx(LogoutIcon, {}) }) })) : (_jsx(Tooltip, { title: signInLabel, children: _jsx(IconButton, { color: "inherit", onClick: onSignIn, "aria-label": signInLabel, children: _jsx(LoginIcon, {}) }) }))] })] }) }));
}
export default Header08;
//# sourceMappingURL=Header08.js.map