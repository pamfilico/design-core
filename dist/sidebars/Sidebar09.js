"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VisibilityIcon from "@mui/icons-material/Visibility";
/**
 * Right-anchored persistent detail drawer (360px, 64px top padding to clear a fixed app
 * bar). A heading with a close button, an optional status chip and error, a description,
 * label/value rows with outlined chips, dark monospace blocks, then a full-width primary
 * button (with a spinner while running) and an optional outlined secondary button.
 */
export function Sidebar09({ open, onClose, title, status, error, description, details = [], codeBlocks = [], primaryAction, secondaryAction, closeLabel, width = 360, }) {
    var _a;
    return (_jsx(Drawer, { anchor: "right", open: open, onClose: onClose, variant: "persistent", sx: { "& .MuiDrawer-paper": { width, pt: 8 } }, children: _jsxs(Box, { sx: { p: 2 }, children: [_jsxs(Box, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 600 }, children: title }), _jsx(IconButton, { onClick: onClose, size: "small", "aria-label": closeLabel, children: _jsx(CloseIcon, {}) })] }), _jsx(Divider, { sx: { mb: 2 } }), status && (_jsxs(Box, { sx: { mb: 2 }, children: [_jsx(Chip, { label: status.label, size: "small", sx: { fontWeight: 600, mb: 1 }, color: (_a = status.color) !== null && _a !== void 0 ? _a : "default" }), error && (_jsx(Typography, { variant: "body2", color: "error", sx: { mt: 1 }, children: error }))] })), description ? (_jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: description })) : null, details.length > 0 && (_jsx(Box, { sx: { display: "flex", flexDirection: "column", gap: 1, mb: 2 }, children: details.map((row, i) => (_jsxs(Box, { sx: { display: "flex", justifyContent: "space-between" }, children: [_jsx(Typography, { variant: "body2", color: "text.secondary", children: row.label }), _jsx(Chip, { label: row.value, size: "small", variant: "outlined" })] }, i))) })), codeBlocks.map((block, i) => (_jsxs(Box, { sx: { mb: 2 }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 0.5 }, children: block.title }), _jsx(Box, { component: "pre", sx: {
                                bgcolor: "grey.900",
                                color: "grey.300",
                                p: 1.5,
                                borderRadius: 1,
                                fontSize: 11,
                                overflow: "auto",
                                maxHeight: 150,
                                fontFamily: "monospace",
                            }, children: block.content })] }, i))), primaryAction ? (_jsx(Button, { fullWidth: true, variant: "contained", startIcon: primaryAction.loading ? _jsx(CircularProgress, { size: 16 }) : _jsx(PlayArrowIcon, {}), onClick: primaryAction.onClick, disabled: primaryAction.disabled || primaryAction.loading, sx: { mb: 1 }, children: primaryAction.label })) : null, secondaryAction ? (_jsx(Button, { fullWidth: true, variant: "outlined", startIcon: _jsx(VisibilityIcon, {}), onClick: secondaryAction.onClick, children: secondaryAction.label })) : null] }) }));
}
export default Sidebar09;
//# sourceMappingURL=Sidebar09.js.map