"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
/**
 * Static bar with a back arrow, a breadcrumbs slot and, when actions exist, a menu
 * button that opens a right drawer. The drawer has a title row with a close button
 * and divided sections of full-width buttons (first section contained, the rest
 * outlined by default), each showing a spinner while loading.
 */
export function Header04({ onBack, backLabel = "Back", breadcrumbs, sections = [], drawerTitle = "Actions", openActionsLabel = "open actions menu", closeLabel = "close drawer", }) {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const hasDrawer = sections.length > 0;
    const run = async (action) => {
        if (!action.onClick)
            return;
        await action.onClick();
        setDrawerOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx(AppBar, { position: "static", children: _jsxs(Toolbar, { children: [_jsx(IconButton, { edge: "start", color: "inherit", onClick: onBack, sx: { mr: 2 }, "aria-label": backLabel, children: _jsx(ArrowBackIcon, {}) }), _jsx(Box, { sx: { flexGrow: 1 }, children: breadcrumbs }), hasDrawer && (_jsx(IconButton, { color: "inherit", onClick: () => setDrawerOpen(true), "aria-label": openActionsLabel, sx: { mr: 1 }, children: _jsx(MenuIcon, {}) }))] }) }), hasDrawer && (_jsx(Drawer, { anchor: "right", open: drawerOpen, onClose: () => setDrawerOpen(false), sx: { "& .MuiDrawer-paper": { width: { xs: "100%", sm: 400, md: 450 }, maxWidth: "90vw" } }, children: _jsxs(Box, { sx: { p: 3, height: "100%", display: "flex", flexDirection: "column" }, children: [_jsxs(Box, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }, children: [_jsx(Typography, { variant: "h6", children: drawerTitle }), _jsx(IconButton, { onClick: () => setDrawerOpen(false), "aria-label": closeLabel, children: _jsx(CloseIcon, {}) })] }), _jsx(Divider, { sx: { mb: 3 } }), _jsx(Box, { sx: { flexGrow: 1, display: "flex", flexDirection: "column", gap: 3 }, children: sections.map((section, si) => (_jsxs(React.Fragment, { children: [si > 0 && _jsx(Divider, {}), _jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle2", color: "text.secondary", sx: { mb: 2, fontWeight: 600 }, children: section.title }), section.select && (_jsxs(FormControl, { fullWidth: true, sx: { mb: 2 }, children: [_jsx(InputLabel, { children: section.select.label }), _jsx(Select, { value: section.select.value, label: section.select.label, onChange: (e) => { var _a, _b; return (_b = (_a = section.select) === null || _a === void 0 ? void 0 : _a.onChange) === null || _b === void 0 ? void 0 : _b.call(_a, e.target.value); }, disabled: section.select.disabled, children: section.select.options.map((o) => (_jsx(MenuItem, { value: o.value, children: o.label }, o.value))) })] })), section.actions.map((action, ai) => {
                                                var _a;
                                                const variant = (_a = action.variant) !== null && _a !== void 0 ? _a : (si === 0 ? "contained" : "outlined");
                                                return (_jsx(Button, { variant: variant, fullWidth: true, startIcon: action.loading ? (_jsx(CircularProgress, { size: 20, color: variant === "contained" ? "inherit" : "primary" })) : (action.icon), onClick: () => run(action), disabled: action.disabled || action.loading, sx: { mb: ai < section.actions.length - 1 ? 1 : 0 }, children: action.label }, ai));
                                            })] })] }, si))) })] }) }))] }));
}
export default Header04;
//# sourceMappingURL=Header04.js.map