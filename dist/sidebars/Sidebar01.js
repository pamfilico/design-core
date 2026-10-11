"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const SIDEBAR_WIDTH_COLLAPSED = 48;
const SIDEBAR_WIDTH_EXPANDED = 200;
const CLOSE_DELAY_MS = 400;
const TRANSITION_MS = 350;
/** Stable kebab-case slug from a nav label (`"Back to list"` → `"back-to-list"`). */
function slugNavLabel(label) {
    return label
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}
function resolveTestId(item, parentSlug) {
    var _a;
    const slug = parentSlug ? `${parentSlug}-${slugNavLabel(item.label)}` : slugNavLabel(item.label);
    return (_a = item.testId) !== null && _a !== void 0 ? _a : `sidebar-item-${slug}`;
}
/**
 * Sectioned app sidebar. From `md` up (or always, without `mobileDrawer`) it is a
 * hover-to-expand icon rail: 48px collapsed, 200px expanded, closing 400ms after the
 * pointer leaves, with tooltips while collapsed. Below `md`, with `mobileDrawer`, it is a
 * temporary drawer with full labels. Supports section captions, dividers, nested children,
 * disabled ("coming soon") rows and a header slot.
 */
export function Sidebar01({ sections, activeHref, linkComponent = "a", onNavigate, mobileDrawer, drawerWidth = 220, header, headerDivider = true, disabledSuffix = " — coming soon", testId = "sidebar", itemChip, }) {
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
    const isItemActive = React.useCallback((item) => {
        if (item.matchPath)
            return item.matchPath(activeHref);
        const { href } = item;
        if (href === "/")
            return activeHref === "/";
        return activeHref === href || activeHref.startsWith(`${href}/`);
    }, [activeHref]);
    const handleNavClick = (item) => (event) => {
        if (item.onClick) {
            event.preventDefault();
            item.onClick(event);
        }
        else if (onNavigate) {
            event.preventDefault();
            onNavigate(item.href);
        }
        mobileDrawer === null || mobileDrawer === void 0 ? void 0 : mobileDrawer.onClose();
    };
    const expanded = hovered;
    const useMobileDrawer = Boolean(isMobile && mobileDrawer);
    const renderHeaderBlock = () => {
        if (!header)
            return null;
        const node = typeof header === "function" ? header({ expanded }) : header;
        if (!node)
            return null;
        return (_jsxs(Box, { "data-testid": `${testId}-header`, children: [node, headerDivider ? _jsx(Divider, {}) : null] }));
    };
    const renderLeaf = (item, itemKey, variant, indent, parentSlug) => {
        const active = isItemActive(item);
        const itemTestId = resolveTestId(item, parentSlug);
        const chip = itemChip === null || itemChip === void 0 ? void 0 : itemChip(item);
        const wrapRow = (node) => (_jsxs(Box, { sx: { position: "relative", display: "flex", alignItems: "center", minWidth: 0 }, children: [chip ? (_jsx(Box, { sx: { position: "absolute", top: -4, right: 0, zIndex: 2 }, onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }, children: chip })) : null, node] }, itemKey));
        if (item.disabled) {
            const disabledEl = (_jsxs(Box, { "aria-disabled": "true", "data-testid": itemTestId, sx: Object.assign({ display: "flex", alignItems: "center", gap: 1.5, whiteSpace: "nowrap", color: "text.disabled", opacity: 0.6, cursor: "default", flex: 1, minWidth: 0 }, (variant === "drawer"
                    ? { pl: indent ? 4 : 2, pr: 2, py: 1.2 }
                    : { pl: indent ? 3 : 1, pr: 1, mx: 1, height: indent ? 32 : 36 })), children: [_jsx(Box, { sx: { display: "flex", alignItems: "center", justifyContent: "center", minWidth: 24 }, children: item.icon }), variant === "drawer" ? (_jsx(Typography, { variant: "body2", children: item.label })) : (_jsx(Box, { component: "span", sx: { fontSize: indent ? 12 : 13, opacity: expanded ? 1 : 0, transition: `opacity ${TRANSITION_MS}ms ease` }, children: item.label }))] }));
            if (variant === "rail" && !expanded) {
                return wrapRow(_jsx(Tooltip, { title: `${item.label}${disabledSuffix}`, placement: "right", children: disabledEl }));
            }
            return wrapRow(disabledEl);
        }
        if (variant === "drawer") {
            return wrapRow(_jsxs(Box, { component: linkComponent, "data-testid": itemTestId, href: item.href, onClick: handleNavClick(item), sx: (t) => ({
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    pl: indent ? 4 : 2,
                    pr: 2,
                    py: 1.2,
                    flex: 1,
                    minWidth: 0,
                    textDecoration: "none",
                    color: active ? "primary.main" : "text.secondary",
                    bgcolor: active ? `${t.palette.primary.main}1A` : "transparent",
                    "&:hover": { bgcolor: `${t.palette.primary.main}14` },
                }), children: [item.icon, _jsx(Typography, { variant: "body2", children: item.label })] }));
        }
        const linkEl = (_jsxs(Box, { component: linkComponent, "data-testid": itemTestId, href: item.href, onClick: handleNavClick(item), sx: (t) => ({
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                pl: indent ? 3 : 1,
                pr: 1,
                mx: 1,
                height: indent ? 32 : 36,
                flex: 1,
                minWidth: 0,
                borderRadius: t.shape.borderRadius,
                cursor: "pointer",
                whiteSpace: "nowrap",
                textDecoration: "none",
                color: active ? "primary.main" : "text.secondary",
                bgcolor: active ? `${t.palette.primary.main}1A` : "transparent",
                "&:hover": { bgcolor: `${t.palette.primary.main}14` },
            }), children: [_jsx(Box, { sx: { display: "flex", alignItems: "center", justifyContent: "center", minWidth: 24 }, children: item.icon }), _jsx(Box, { component: "span", sx: {
                        fontSize: indent ? 12 : 13,
                        fontWeight: active ? 600 : 400,
                        opacity: expanded ? 1 : 0,
                        transition: `opacity ${TRANSITION_MS}ms ease`,
                    }, children: item.label })] }));
        if (!expanded) {
            return wrapRow(_jsx(Tooltip, { title: item.label, placement: "right", children: linkEl }));
        }
        return wrapRow(linkEl);
    };
    const renderNavSections = (variant) => sections.map((section, sIdx) => {
        const sectionSlug = section.sectionLabel ? slugNavLabel(section.sectionLabel) : `section-${sIdx}`;
        return (_jsxs(Box, { "data-testid": `${testId}-section-${sectionSlug}`, children: [section.dividerBefore ? _jsx(Divider, { sx: { my: 0.5, mx: variant === "drawer" ? 2 : 1 } }) : null, section.sectionLabel &&
                    (variant === "drawer" ? (_jsx(Typography, { variant: "caption", color: "text.secondary", sx: {
                            px: 2,
                            py: 0.5,
                            display: "block",
                            fontWeight: 600,
                            fontSize: 10,
                            textTransform: "uppercase",
                            letterSpacing: 1,
                        }, children: section.sectionLabel })) : (_jsx(Box, { sx: {
                            px: 1,
                            mx: 1,
                            py: 0.5,
                            opacity: expanded ? 1 : 0,
                            transition: `opacity ${TRANSITION_MS}ms ease`,
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                        }, children: _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { fontWeight: 600, fontSize: 9, textTransform: "uppercase", letterSpacing: 1 }, children: section.sectionLabel }) }))), section.items.map((item) => {
                    var _a;
                    const itemKey = `${sIdx}-${item.label}`;
                    const parentSlug = slugNavLabel(item.label);
                    const children = (_a = item.children) !== null && _a !== void 0 ? _a : [];
                    // Sub-items only show when there is room to read them: expanded rail or the drawer.
                    const showChildren = children.length > 0 && (variant === "drawer" || expanded);
                    return (_jsxs(React.Fragment, { children: [renderLeaf(item, itemKey, variant, false), showChildren
                                ? children.map((child) => renderLeaf(child, `${itemKey}-${child.label}`, variant, true, parentSlug))
                                : null] }, itemKey));
                })] }, sIdx));
    });
    if (useMobileDrawer && mobileDrawer) {
        return (_jsx(Drawer, { variant: "temporary", open: mobileDrawer.open, onClose: mobileDrawer.onClose, ModalProps: { keepMounted: true }, "data-testid": `${testId}-drawer`, sx: { "& .MuiDrawer-paper": { width: drawerWidth } }, children: _jsxs(Box, { sx: { overflow: "auto", display: "flex", flexDirection: "column", height: "100%", pt: 2 }, children: [renderHeaderBlock(), _jsx(Box, { sx: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column", gap: 0.5, py: 1 }, children: renderNavSections("drawer") })] }) }));
    }
    return (_jsxs(Box, { component: "nav", "data-testid": testId, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, sx: {
            width: expanded ? SIDEBAR_WIDTH_EXPANDED : SIDEBAR_WIDTH_COLLAPSED,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignSelf: "stretch",
            minHeight: 0,
            pt: 2,
            borderRight: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
            overflow: "hidden",
            transition: `width ${TRANSITION_MS}ms ease`,
        }, children: [renderHeaderBlock(), _jsx(Box, { sx: { flex: 1, overflow: "auto", display: "flex", flexDirection: "column", gap: 0.5, py: 1 }, children: renderNavSections("rail") })] }));
}
export default Sidebar01;
//# sourceMappingURL=Sidebar01.js.map