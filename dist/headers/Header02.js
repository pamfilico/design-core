"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import AppsIcon from "@mui/icons-material/Apps";
const gridSx = { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0.5 };
const tileSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0.75,
    p: 1.25,
    minWidth: 0,
    width: "100%",
    borderRadius: 1,
    textAlign: "center",
    "& svg": { fontSize: 26 },
};
/**
 * "Waffle" app launcher for a header: a 9-dot icon button that opens a menu with a
 * three-column grid of icon tiles, plus an optional disabled "coming soon" group
 * below a divider. The active tile uses the secondary colour.
 */
export function Header02({ items, comingSoon = [], comingSoonLabel = "Coming soon", title = "Apps", linkComponent = "a", }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClose = () => setAnchorEl(null);
    if (items.length === 0 && comingSoon.length === 0)
        return null;
    return (_jsxs(_Fragment, { children: [_jsx(Tooltip, { title: title, children: _jsx(IconButton, { color: "inherit", onClick: (e) => setAnchorEl(e.currentTarget), "aria-label": title, "aria-haspopup": "true", "aria-expanded": open ? "true" : undefined, children: _jsx(AppsIcon, {}) }) }), _jsx(Menu, { anchorEl: anchorEl, open: open, onClose: handleClose, anchorOrigin: { vertical: "bottom", horizontal: "right" }, transformOrigin: { vertical: "top", horizontal: "right" }, slotProps: {
                    paper: {
                        sx: {
                            mt: 1,
                            width: 368,
                            maxWidth: "calc(100vw - 16px)",
                            maxHeight: "min(80vh, 720px)",
                            overflowX: "hidden",
                            overflowY: "auto",
                        },
                    },
                    list: { sx: { p: 1, display: "block" } },
                }, children: _jsxs(Box, { children: [_jsx(Box, { sx: gridSx, children: items.map((item) => (_jsx(Box, { sx: { position: "relative", minWidth: 0 }, children: _jsxs(ButtonBase, { component: linkComponent, href: item.href, onClick: handleClose, sx: Object.assign(Object.assign({}, tileSx), { color: item.active ? "secondary.main" : "text.primary", "&:hover": { bgcolor: "action.hover" } }), children: [item.icon, _jsx(Typography, { variant: "caption", sx: { lineHeight: 1.2, width: "100%" }, noWrap: true, children: item.label })] }) }, item.href))) }), comingSoon.length > 0 && (_jsxs(_Fragment, { children: [_jsx(Divider, { sx: { my: 1 } }), _jsx(Typography, { variant: "caption", sx: { display: "block", px: 1, mb: 0.5, fontWeight: 600, color: "text.secondary", letterSpacing: "0.04em" }, children: comingSoonLabel }), _jsx(Box, { sx: gridSx, children: comingSoon.map((item) => (_jsx(Box, { sx: { position: "relative", minWidth: 0 }, children: _jsxs(Box, { "aria-disabled": "true", sx: Object.assign(Object.assign({}, tileSx), { color: "text.disabled", opacity: 0.6, cursor: "default" }), children: [item.icon, _jsx(Typography, { variant: "caption", sx: { lineHeight: 1.2, width: "100%" }, noWrap: true, children: item.label })] }) }, item.href))) })] }))] }) })] }));
}
export default Header02;
//# sourceMappingURL=Header02.js.map