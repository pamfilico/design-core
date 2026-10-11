"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
/**
 * Static section bar: back arrow, icon and title, then a row of tabs on the bar
 * colour (inherit text, secondary indicator) at full toolbar height.
 */
export function Header06({ title, icon, onBack, backLabel = "Back", tabs, activeTab, onTabChange }) {
    var _a, _b;
    const value = tabs.some((t) => t.value === activeTab) ? activeTab : (_b = (_a = tabs[0]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : false;
    return (_jsx(AppBar, { position: "static", children: _jsxs(Toolbar, { children: [onBack && (_jsx(IconButton, { edge: "start", color: "inherit", onClick: onBack, sx: { mr: 2 }, "aria-label": backLabel, children: _jsx(ArrowBackIcon, {}) })), icon, _jsx(Typography, { variant: "h6", component: "div", sx: { flexGrow: 0, mr: 4, ml: icon ? 1 : 0 }, children: title }), _jsx(Tabs, { value: value, onChange: (_e, v) => onTabChange === null || onTabChange === void 0 ? void 0 : onTabChange(v), textColor: "inherit", indicatorColor: "secondary", variant: "scrollable", scrollButtons: "auto", sx: { minHeight: "64px", "& .MuiTab-root": { minHeight: "64px" } }, children: tabs.map((t) => (_jsx(Tab, { label: t.label, value: t.value }, t.value))) })] }) }));
}
export default Header06;
//# sourceMappingURL=Header06.js.map