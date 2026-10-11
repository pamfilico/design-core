"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
const isActive = (activeHref, href) => activeHref === href || activeHref.startsWith(href + "/");
/**
 * 260px temporary left drawer: a clickable logo + wordmark, the top-level pages with a
 * soft primary-tinted rounded selection, then — when inside a context — a small caption
 * heading and that context's pages in a plain list. Navigating or clicking the brand
 * closes the drawer.
 */
export function Sidebar17({ open, onClose, logo, brandName, onBrandClick, baseItems, contextSection, activeHref, onNavigate, linkComponent = "a", }) {
    const handleClick = (href) => (e) => {
        if (onNavigate) {
            e.preventDefault();
            onNavigate(href);
        }
        onClose();
    };
    return (_jsx(Drawer, { anchor: "left", open: open, onClose: onClose, "data-testid": "sidebar-drawer", children: _jsxs(Box, { sx: { width: 260 }, role: "navigation", children: [_jsxs(Box, { sx: {
                        px: 2.5,
                        py: 2.5,
                        display: "flex",
                        alignItems: "center",
                        gap: 1.25,
                        cursor: "pointer",
                        transition: "opacity 0.2s",
                        "&:hover": { opacity: 0.85 },
                    }, onClick: () => {
                        onBrandClick === null || onBrandClick === void 0 ? void 0 : onBrandClick();
                        onClose();
                    }, children: [logo, brandName ? (_jsx(Typography, { variant: "h6", sx: { fontWeight: 800, letterSpacing: 0.3, fontSize: "1.15rem" }, children: brandName })) : null] }), _jsx(Divider, {}), _jsx(List, { children: baseItems.map((item) => {
                        var _a;
                        const key = (_a = item.key) !== null && _a !== void 0 ? _a : item.href;
                        return (_jsxs(ListItemButton, { component: linkComponent, href: item.href, "data-testid": `nav-${key}`, selected: isActive(activeHref, item.href), onClick: handleClick(item.href), sx: (t) => ({
                                mx: 1,
                                my: 0.25,
                                borderRadius: 1.5,
                                "&.Mui-selected": {
                                    bgcolor: alpha(t.palette.primary.main, 0.12),
                                    color: "primary.main",
                                    "& .MuiListItemIcon-root": { color: "primary.main" },
                                    "&:hover": { bgcolor: alpha(t.palette.primary.main, 0.18) },
                                },
                                "&:hover": { bgcolor: alpha(t.palette.primary.main, 0.06) },
                            }), children: [_jsx(ListItemIcon, { sx: { minWidth: 36 }, children: item.icon }), _jsx(ListItemText, { primary: item.label, primaryTypographyProps: { fontWeight: 600, fontSize: "0.95rem" } })] }, key));
                    }) }), contextSection && contextSection.items.length > 0 && (_jsxs(_Fragment, { children: [_jsx(Divider, {}), contextSection.label && (_jsx(Box, { sx: { px: 2, pt: 2, pb: 1 }, children: _jsx(Typography, { variant: "caption", sx: { color: "text.secondary", fontWeight: 700, letterSpacing: 0.5 }, children: contextSection.label }) })), _jsx(List, { children: contextSection.items.map((item) => {
                                var _a;
                                const key = (_a = item.key) !== null && _a !== void 0 ? _a : item.href;
                                return (_jsxs(ListItemButton, { component: linkComponent, href: item.href, "data-testid": `nav-${key}`, selected: isActive(activeHref, item.href), onClick: handleClick(item.href), children: [_jsx(ListItemIcon, { sx: { minWidth: 40 }, children: item.icon }), _jsx(ListItemText, { primary: item.label, primaryTypographyProps: { fontWeight: 600 } })] }, key));
                            }) })] }))] }) }));
}
export default Sidebar17;
//# sourceMappingURL=Sidebar17.js.map