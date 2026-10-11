"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
/**
 * Public top bar: brand link on the left; on the right an optional install icon, a light/dark
 * toggle, a language select and either Dashboard + Sign out (signed in) or Sign in.
 */
export function Header32(props) {
    const { brand, brandHref = "/", banner, signedIn = false, dashboardLabel, dashboardHref = "/dashboard", signOutLabel, onSignOut, signInLabel, signInHref = "/auth/login", locales = [], locale, localeLabel = "Language", onLocaleChange, themeMode = "light", onToggleTheme, toDarkLabel = "Switch to dark mode", toLightLabel = "Switch to light mode", onInstall, installLabel = "Install", linkComponent = "a", } = props;
    return (_jsxs(AppBar, { position: "static", sx: { flexDirection: "column", alignItems: "stretch" }, children: [banner, _jsxs(Toolbar, { children: [_jsx(Typography, { variant: "h6", component: "div", sx: { flexGrow: 1 }, children: _jsx(Link, { component: linkComponent, href: brandHref, color: "inherit", underline: "none", children: brand }) }), _jsxs(Box, { sx: { display: "flex", gap: 2, alignItems: "center" }, children: [onInstall && (_jsx(Tooltip, { title: installLabel, children: _jsx(IconButton, { color: "inherit", onClick: onInstall, "aria-label": installLabel, size: "small", sx: { minWidth: 44, minHeight: 44 }, children: _jsx(InstallMobileIcon, { fontSize: "small" }) }) })), onToggleTheme && (_jsx(Tooltip, { title: themeMode === "light" ? toDarkLabel : toLightLabel, children: _jsx(IconButton, { onClick: onToggleTheme, color: "inherit", "aria-label": "toggle theme", children: themeMode === "light" ? _jsx(DarkModeIcon, {}) : _jsx(LightModeIcon, {}) }) })), locales.length > 0 && (_jsxs(FormControl, { variant: "outlined", size: "small", sx: {
                                    width: 140,
                                    color: "inherit",
                                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "currentColor", opacity: 0.5 },
                                    "& .MuiInputLabel-root": { color: "inherit", opacity: 0.9 },
                                    "& .MuiSelect-select": { color: "inherit" },
                                    "& .MuiSvgIcon-root": { color: "inherit" },
                                }, children: [_jsx(InputLabel, { id: "header50-locale-label", children: localeLabel }), _jsx(Select, { labelId: "header50-locale-label", value: locale !== null && locale !== void 0 ? locale : locales[0].value, label: localeLabel, onChange: (e) => onLocaleChange === null || onLocaleChange === void 0 ? void 0 : onLocaleChange(e.target.value), children: locales.map((o) => (_jsx(MenuItem, { value: o.value, children: o.label }, o.value))) })] })), signedIn ? (_jsxs(_Fragment, { children: [_jsx(Button, { color: "inherit", component: linkComponent, href: dashboardHref, children: dashboardLabel }), _jsx(Button, { color: "inherit", onClick: onSignOut, children: signOutLabel })] })) : (_jsx(Button, { color: "inherit", component: linkComponent, href: signInHref, children: signInLabel }))] })] })] }));
}
export default Header32;
//# sourceMappingURL=Header32.js.map