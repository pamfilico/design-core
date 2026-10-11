"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const groupCaptionSx = {
    px: 2,
    pb: 0.5,
    display: "block",
    fontWeight: 700,
    color: "text.secondary",
    textTransform: "uppercase",
    letterSpacing: 0.5,
};
/**
 * Right-hand catalogue panel (280px, left border). A heading with a "new" button, then
 * collapsible blocks (an ordered chain of items shown as linked chips, or expanded into a
 * dotted timeline of rows), then a primary and a secondary group of dense rows. Each row
 * shows a name, two caption lines, a tag chip, a "view" button and, on primary rows, a
 * "check" button with a spinner while running.
 */
export function Sidebar08({ title, items, blocks = [], selectedId, loading = false, checkingId = null, onSelect, onNew, onView, onCheck, blocksLabel, primaryLabel, secondaryLabel, newTitle, viewTitle, checkTitle, width = 280, }) {
    const [expandedBlocks, setExpandedBlocks] = React.useState(new Set());
    const renderRow = (t, opts) => (_jsxs(ListItemButton, { selected: selectedId === t.id, onClick: () => onSelect(t), sx: { px: 2, py: 0.75, alignItems: "flex-start", gap: 0.5 }, children: [_jsx(ListItemText, { primary: t.name, secondary: _jsxs(Box, { component: "span", sx: { display: "block" }, children: [t.caption ? (_jsx(Typography, { component: "span", variant: "caption", sx: { display: "block", color: "text.secondary" }, children: t.caption })) : null, t.subcaption ? (_jsx(Typography, { component: "span", variant: "caption", sx: { display: "block", color: "text.disabled", mt: 0.25 }, children: t.subcaption })) : null] }), primaryTypographyProps: { fontSize: 12, fontWeight: selectedId === t.id ? 700 : 500 }, secondaryTypographyProps: { component: "div" } }), onView ? (_jsx(IconButton, { size: "small", title: viewTitle, "aria-label": viewTitle, onClick: (e) => {
                    e.stopPropagation();
                    onView(t);
                }, sx: { mt: 0.25, flexShrink: 0 }, children: _jsx(VisibilityOutlinedIcon, { fontSize: "small" }) })) : null, (opts === null || opts === void 0 ? void 0 : opts.checkable) && onCheck ? (_jsx(IconButton, { size: "small", title: checkTitle, "aria-label": checkTitle, disabled: checkingId === t.id, onClick: (e) => {
                    e.stopPropagation();
                    onCheck(t, e);
                }, sx: { mt: 0.25, flexShrink: 0 }, children: checkingId === t.id ? _jsx(CircularProgress, { size: 16, thickness: 5 }) : _jsx(HealthAndSafetyIcon, { fontSize: "small" }) })) : null, t.tag ? (_jsx(Chip, { label: t.tag, size: "small", sx: { fontSize: 9, height: 18, flexShrink: 0, alignSelf: "flex-start", mt: 0.25 } })) : null] }, t.id));
    const primary = items.filter((t) => !t.secondary);
    const secondary = items.filter((t) => t.secondary);
    return (_jsxs(Paper, { elevation: 0, sx: { width, borderLeft: 1, borderColor: "divider", display: "flex", flexDirection: "column", flexShrink: 0 }, children: [_jsxs(Box, { sx: {
                    px: 2,
                    py: 1.5,
                    borderBottom: 1,
                    borderColor: "divider",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }, children: [_jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 700 }, children: title }), onNew ? (_jsx(IconButton, { size: "small", onClick: onNew, title: newTitle, "aria-label": newTitle, children: _jsx(AddIcon, { fontSize: "small" }) })) : null] }), loading ? (_jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 3 }, children: _jsx(CircularProgress, { size: 20 }) })) : (_jsxs(Box, { sx: { overflow: "auto", flex: 1 }, children: [blocks.length > 0 && (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "caption", sx: Object.assign(Object.assign({}, groupCaptionSx), { pt: 1.5 }), children: blocksLabel }), blocks.map((block) => {
                                const blockItems = block.steps
                                    .map((sid) => items.find((t) => t.id === sid))
                                    .filter(Boolean);
                                if (blockItems.length === 0)
                                    return null;
                                const isExpanded = expandedBlocks.has(block.id);
                                const toggleExpand = () => {
                                    setExpandedBlocks((prev) => {
                                        const next = new Set(prev);
                                        if (next.has(block.id))
                                            next.delete(block.id);
                                        else
                                            next.add(block.id);
                                        return next;
                                    });
                                };
                                return (_jsxs(Box, { sx: { mb: 0.5 }, children: [_jsxs(Box, { onClick: () => {
                                                toggleExpand();
                                                if (!isExpanded) {
                                                    const last = blockItems[blockItems.length - 1];
                                                    if (last)
                                                        onSelect(last);
                                                }
                                            }, sx: {
                                                px: 1.5,
                                                py: 0.5,
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 0.5,
                                                cursor: "pointer",
                                                "&:hover": { bgcolor: "action.hover" },
                                                borderRadius: 0.5,
                                            }, children: [isExpanded ? (_jsx(ExpandMoreIcon, { sx: { fontSize: 16, color: "text.secondary" } })) : (_jsx(ChevronRightIcon, { sx: { fontSize: 16, color: "text.secondary" } })), _jsx(Typography, { variant: "caption", sx: { fontWeight: 600, color: "text.secondary", fontSize: 11, flex: 1 }, children: block.name })] }), isExpanded ? (_jsx(List, { dense: true, disablePadding: true, children: blockItems.map((t, i) => (_jsxs(Box, { sx: { display: "flex", alignItems: "stretch" }, children: [_jsxs(Box, { sx: { width: 20, display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, ml: 1 }, children: [_jsx(Box, { sx: { width: 8, height: 8, borderRadius: "50%", bgcolor: "primary.main", mt: 1.2, flexShrink: 0 } }), i < blockItems.length - 1 && _jsx(Box, { sx: { width: 2, flex: 1, bgcolor: "divider" } })] }), _jsx(Box, { sx: { flex: 1, minWidth: 0 }, children: renderRow(t, { checkable: true }) })] }, t.id))) })) : (_jsx(Box, { sx: { px: 2, py: 0.5, display: "flex", alignItems: "center", gap: 0.5, flexWrap: "wrap" }, children: blockItems.map((t, i) => (_jsxs(React.Fragment, { children: [_jsx(Chip, { label: t.name, size: "small", sx: { fontSize: 9, height: 18 }, onClick: (e) => {
                                                            e.stopPropagation();
                                                            onSelect(t);
                                                        } }), i < blockItems.length - 1 && _jsx(ArrowForwardIcon, { sx: { fontSize: 10, color: "text.disabled" } })] }, t.id))) }))] }, block.id));
                            }), _jsx(Divider, { sx: { my: 0.5 } })] })), _jsx(Typography, { variant: "caption", sx: Object.assign(Object.assign({}, groupCaptionSx), { pt: 1.5 }), children: primaryLabel }), _jsx(List, { dense: true, disablePadding: true, children: primary.map((t) => renderRow(t, { checkable: true })) }), secondary.length > 0 && (_jsxs(_Fragment, { children: [_jsx(Divider, { sx: { my: 0.5 } }), _jsx(Typography, { variant: "caption", sx: Object.assign(Object.assign({}, groupCaptionSx), { pt: 1 }), children: secondaryLabel }), _jsx(List, { dense: true, disablePadding: true, children: secondary.map((t) => renderRow(t)) })] }))] }))] }));
}
export default Sidebar08;
//# sourceMappingURL=Sidebar08.js.map