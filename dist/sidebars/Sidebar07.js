"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
/**
 * Selectable list column: a 320px flat panel with a right border, a heading and caption on
 * top, then a scrolling list of rows, each with an icon, a name (bold when selected), small
 * outlined chips and an optional "open" button. Shows a spinner while loading and a muted
 * line when empty. Sits as the second column next to an app rail.
 */
export function Sidebar07({ title, subtitle, items, selectedId, onSelect, loading = false, emptyText, itemIcon = _jsx(AccountTreeIcon, { fontSize: "small", color: "primary" }), onOpen, openTitle, width = 320, }) {
    return (_jsxs(Paper, { elevation: 0, sx: { width, borderRight: 1, borderColor: "divider", display: "flex", flexDirection: "column", flexShrink: 0 }, children: [_jsxs(Box, { sx: { px: 2, py: 2, borderBottom: 1, borderColor: "divider" }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 700 }, children: title }), subtitle ? (_jsx(Typography, { variant: "caption", color: "text.secondary", children: subtitle })) : null] }), loading ? (_jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: _jsx(CircularProgress, { size: 24 }) })) : items.length === 0 ? (_jsx(Typography, { variant: "body2", color: "text.secondary", sx: { p: 2 }, children: emptyText })) : (_jsx(List, { disablePadding: true, sx: { overflow: "auto", flex: 1 }, children: items.map((p) => {
                    var _a;
                    return (_jsxs(ListItemButton, { selected: selectedId === p.id, onClick: () => onSelect(p.id), sx: { px: 2, py: 1.5, borderBottom: 1, borderColor: "divider" }, children: [_jsx(ListItemText, { primaryTypographyProps: { component: "div" }, secondaryTypographyProps: { component: "div" }, primary: _jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [itemIcon, _jsx(Typography, { variant: "body1", sx: { fontWeight: selectedId === p.id ? 700 : 500 }, children: p.name })] }), secondary: ((_a = p.chips) === null || _a === void 0 ? void 0 : _a.length) ? (_jsx(Box, { sx: { display: "flex", gap: 0.5, mt: 0.5 }, children: p.chips.map((c) => (_jsx(Chip, { label: c, size: "small", variant: "outlined", sx: { height: 20, fontSize: 10 } }, c))) })) : null }), onOpen ? (_jsx(IconButton, { size: "small", onClick: (e) => {
                                    e.stopPropagation();
                                    onOpen(p.id);
                                }, title: openTitle, "aria-label": openTitle, children: _jsx(OpenInNewIcon, { fontSize: "small" }) })) : null] }, p.id));
                }) }))] }));
}
export default Sidebar07;
//# sourceMappingURL=Sidebar07.js.map