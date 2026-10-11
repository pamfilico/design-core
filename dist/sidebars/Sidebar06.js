"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
const SIDEBAR_WIDTH_COLLAPSED = 48;
const SIDEBAR_WIDTH_EXPANDED = 200;
const CLOSE_DELAY_MS = 400;
const TRANSITION_MS = 350;
/**
 * Hover-to-expand app rail with the signed-in user on top. From `md` up: a sticky,
 * full-height 48px icon rail that widens to 200px on hover (closing 400ms after the pointer
 * leaves), with an avatar + name/email row and captioned sections; labels fade in, no
 * tooltips. Below `md`: a 220px temporary drawer with the same content. Both leave 64px at
 * the top for a fixed app bar.
 */
export function Sidebar06({ sections, activeHref, user, userFallbackName = "User", mobileOpen = false, onCloseMobile, drawerWidth = 220, onNavigate, linkComponent = "a", }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [hovered, setHovered] = React.useState(false);
    const closeTimerRef = React.useRef(null);
    const handleMouseEnter = () => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
        setHovered(true);
    };
    const handleMouseLeave = () => {
        closeTimerRef.current = setTimeout(() => {
            setHovered(false);
            closeTimerRef.current = null;
        }, CLOSE_DELAY_MS);
    };
    const isActive = (item) => item.exact ? activeHref === item.href : activeHref.startsWith(item.href);
    const handleClick = (href, close) => (e) => {
        if (onNavigate) {
            e.preventDefault();
            onNavigate(href);
        }
        if (close)
            onCloseMobile === null || onCloseMobile === void 0 ? void 0 : onCloseMobile();
    };
    const expanded = hovered;
    if (isMobile) {
        return (_jsx(Drawer, { variant: "temporary", open: mobileOpen, onClose: onCloseMobile, ModalProps: { keepMounted: true }, sx: { "& .MuiDrawer-paper": { width: drawerWidth } }, children: _jsxs(Box, { sx: { overflow: "auto", display: "flex", flexDirection: "column", height: "100%", pt: 8 }, children: [user && (_jsxs(Box, { sx: { p: 2, display: "flex", alignItems: "center", gap: 1.5 }, children: [_jsx(Avatar, { src: user.avatarUrl || undefined, sx: { width: 36, height: 36 }, children: _jsx(PersonIcon, {}) }), _jsxs(Box, { sx: { overflow: "hidden" }, children: [_jsx(Typography, { variant: "body2", noWrap: true, sx: { fontWeight: 600 }, children: user.name || userFallbackName }), _jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, sx: { display: "block" }, children: user.email })] })] })), _jsx(Divider, {}), sections.map((section, sIdx) => (_jsxs(Box, { children: [section.sectionLabel && (_jsxs(_Fragment, { children: [_jsx(Divider, { sx: { my: 0.5 } }), _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { px: 2, py: 0.5, display: "block", fontWeight: 600, fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }, children: section.sectionLabel })] })), section.items.map((item) => (_jsxs(Box, { component: linkComponent, href: item.href, onClick: handleClick(item.href, true), sx: (t) => ({
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    px: 2,
                                    py: 1.2,
                                    textDecoration: "none",
                                    color: isActive(item) ? "primary.main" : "text.secondary",
                                    bgcolor: isActive(item) ? `${t.palette.primary.main}1A` : "transparent",
                                    "&:hover": { bgcolor: `${t.palette.primary.main}14` },
                                }), children: [item.icon, _jsx(Typography, { variant: "body2", children: item.label })] }, item.href)))] }, sIdx)))] }) }));
    }
    return (_jsxs(Box, { "data-testid": "sidebar", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, sx: {
            width: expanded ? SIDEBAR_WIDTH_EXPANDED : SIDEBAR_WIDTH_COLLAPSED,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            pt: 8,
            borderRight: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
            overflow: "hidden",
            transition: `width ${TRANSITION_MS}ms ease`,
            height: "100vh",
            position: "sticky",
            top: 0,
        }, children: [user && (_jsxs(Box, { sx: { px: 1, py: 1.5, display: "flex", alignItems: "center", gap: 1.5, overflow: "hidden" }, children: [_jsx(Avatar, { src: user.avatarUrl || undefined, sx: { width: 28, height: 28, flexShrink: 0 }, children: _jsx(PersonIcon, { fontSize: "small" }) }), _jsxs(Box, { sx: { overflow: "hidden", opacity: expanded ? 1 : 0, transition: `opacity ${TRANSITION_MS}ms ease` }, children: [_jsx(Typography, { variant: "body2", noWrap: true, sx: { fontWeight: 600, fontSize: 12 }, children: user.name || userFallbackName }), _jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, sx: { display: "block", fontSize: 10 }, children: user.email })] })] })), _jsx(Divider, {}), _jsx(Box, { sx: { flex: 1, overflow: "auto", display: "flex", flexDirection: "column", gap: 0.5, py: 1 }, children: sections.map((section, sIdx) => (_jsxs(Box, { children: [section.sectionLabel && (_jsxs(_Fragment, { children: [_jsx(Divider, { sx: { my: 0.5, mx: 1 } }), _jsx(Box, { sx: {
                                        px: 1,
                                        mx: 1,
                                        py: 0.5,
                                        opacity: expanded ? 1 : 0,
                                        transition: `opacity ${TRANSITION_MS}ms ease`,
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                    }, children: _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { fontWeight: 600, fontSize: 9, textTransform: "uppercase", letterSpacing: 1 }, children: section.sectionLabel }) })] })), section.items.map((item) => {
                            const active = isActive(item);
                            return (_jsxs(Box, { component: linkComponent, href: item.href, onClick: handleClick(item.href, false), sx: (t) => ({
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    px: 1,
                                    mx: 1,
                                    height: 36,
                                    borderRadius: t.shape.borderRadius,
                                    cursor: "pointer",
                                    whiteSpace: "nowrap",
                                    textDecoration: "none",
                                    color: active ? "primary.main" : "text.secondary",
                                    bgcolor: active ? `${t.palette.primary.main}1A` : "transparent",
                                    "&:hover": { bgcolor: `${t.palette.primary.main}14` },
                                }), children: [_jsx(Box, { sx: { display: "flex", alignItems: "center", justifyContent: "center", minWidth: 24 }, children: item.icon }), _jsx(Box, { component: "span", sx: {
                                            fontSize: 13,
                                            fontWeight: active ? 600 : 400,
                                            opacity: expanded ? 1 : 0,
                                            transition: `opacity ${TRANSITION_MS}ms ease`,
                                        }, children: item.label })] }, item.href));
                        })] }, sIdx))) })] }));
}
export default Sidebar06;
//# sourceMappingURL=Sidebar06.js.map