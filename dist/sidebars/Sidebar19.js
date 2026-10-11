"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
/**
 * Whole admin frame: a full-width top bar (title, user name, logout) above a permanent
 * 220px drawer of text-only links, and the page in a container beside it. An item with
 * `children` expands into an indented, dense sub-list while you are inside it; a parent is
 * only selected on its own page, not while one of its children is.
 */
export function Sidebar19({ title, username, onLogout, logoutLabel = "Logout", items, activeHref, onNavigate, linkComponent = "a", isExpanded, containerMaxWidth = "lg", drawerWidth = 220, children, }) {
    const expanded = isExpanded !== null && isExpanded !== void 0 ? isExpanded : ((item) => activeHref.startsWith(item.href));
    const linkProps = (href) => ({
        component: linkComponent,
        href,
        onClick: (e) => {
            if (onNavigate) {
                e.preventDefault();
                onNavigate(href);
            }
        },
    });
    return (_jsxs(Box, { sx: { display: "flex", minHeight: "100vh" }, children: [_jsx(AppBar, { position: "fixed", sx: { zIndex: (t) => t.zIndex.drawer + 1 }, color: "default", children: _jsxs(Toolbar, { children: [_jsx(Typography, { variant: "h6", sx: { flexGrow: 1 }, children: title }), username ? (_jsx(Typography, { variant: "body2", sx: { mr: 2 }, children: username })) : null, _jsx(Button, { size: "small", onClick: onLogout, children: logoutLabel })] }) }), _jsxs(Drawer, { variant: "permanent", sx: {
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
                }, children: [_jsx(Toolbar, {}), _jsx(List, { children: items.map((item) => {
                            var _a, _b, _c, _d;
                            const hasChildren = !!((_a = item.children) === null || _a === void 0 ? void 0 : _a.length);
                            const open = hasChildren && expanded(item);
                            const childActive = (_c = (_b = item.children) === null || _b === void 0 ? void 0 : _b.some((c) => activeHref.startsWith(c.href))) !== null && _c !== void 0 ? _c : false;
                            const key = (_d = item.key) !== null && _d !== void 0 ? _d : item.href;
                            return (_jsxs(Box, { children: [_jsx(ListItem, { disablePadding: true, children: _jsx(ListItemButton, Object.assign({}, linkProps(item.href), { selected: hasChildren
                                                ? activeHref === item.href || (activeHref.startsWith(item.href) && !childActive && !open)
                                                : activeHref.startsWith(item.href), "data-testid": `nav-${key}`, sx: hasChildren ? { py: 1 } : undefined, children: _jsx(ListItemText, { primary: item.label }) })) }), hasChildren && (_jsx(Collapse, { in: open, timeout: "auto", unmountOnExit: false, children: _jsx(List, { component: "div", disablePadding: true, dense: true, children: item.children.map((child) => {
                                                var _a, _b;
                                                return (_jsx(ListItem, { disablePadding: true, children: _jsx(ListItemButton, Object.assign({}, linkProps(child.href), { selected: activeHref.startsWith(child.href), "data-testid": `nav-${(_a = child.key) !== null && _a !== void 0 ? _a : child.href}`, sx: { pl: 4 }, children: _jsx(ListItemText, { primary: child.label }) })) }, (_b = child.key) !== null && _b !== void 0 ? _b : child.href));
                                            }) }) }))] }, key));
                        }) })] }), _jsxs(Box, { component: "main", sx: { flexGrow: 1, p: 0 }, children: [_jsx(Toolbar, {}), _jsx(Container, { maxWidth: containerMaxWidth, sx: { py: 3 }, children: children })] })] }));
}
export default Sidebar19;
//# sourceMappingURL=Sidebar19.js.map