"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, keyframes } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
const wiggle = keyframes `
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(-1deg); }
  75% { transform: rotate(1deg); }
`;
const authSx = { fontWeight: 700, textTransform: "none", px: 2.5, py: 0.75, borderRadius: 2, fontSize: "0.95rem" };
/**
 * Fixed transparent header: optional hamburger, a logo + wordmark brand, a wiggling
 * call-to-action on desktop for signed-in users, and at the right a contact text
 * button and an outlined sign-out / contained sign-in button. The hamburger opens a
 * 260px drawer with the brand, rounded primary-tinted nav items and an optional
 * captioned second block.
 */
export function Header25({ logo, brandName, onBrandClick, showMenu = true, items = [], sectionTitle, sectionItems = [], activeHref, onNavigate, linkComponent = "a", signedIn = false, highlightLabel, onHighlight, contactLabel, onContact, signOutLabel = "Logout", onSignOut, signInLabel = "Login", onSignIn, menuLabel = "open navigation", }) {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));
    const [open, setOpen] = React.useState(false);
    const isActive = (href) => !!activeHref && (activeHref === href || activeHref.startsWith(`${href}/`));
    const navProps = (href) => onNavigate
        ? { onClick: () => { onNavigate(href); setOpen(false); } }
        : { component: linkComponent, href, onClick: () => setOpen(false) };
    const brand = (size, drawer) => (_jsxs(Box, { onClick: () => {
            onBrandClick === null || onBrandClick === void 0 ? void 0 : onBrandClick();
            if (drawer)
                setOpen(false);
        }, sx: Object.assign({ display: "flex", alignItems: "center", gap: 1.25, cursor: onBrandClick ? "pointer" : undefined, transition: "opacity 0.2s", "&:hover": { opacity: 0.85 } }, (drawer ? { px: 2.5, py: 2.5 } : {})), children: [logo && (_jsx(Box, { sx: { width: size, height: size, borderRadius: 1, boxShadow: 1, overflow: "hidden", display: "flex", "& > *": { width: "100%", height: "100%" } }, children: logo })), brandName ? (_jsx(Typography, { variant: "h6", sx: Object.assign({ fontWeight: 800, letterSpacing: 0.3 }, (drawer ? { fontSize: "1.15rem" } : { display: { xs: "none", sm: "block" } })), children: brandName })) : null] }));
    return (_jsxs(_Fragment, { children: [_jsx(AppBar, { position: "fixed", sx: { backgroundColor: "transparent", color: "text.primary" }, children: _jsxs(Toolbar, { children: [showMenu && (_jsx(IconButton, { onClick: () => setOpen(true), edge: "start", sx: { mr: 1 }, "aria-label": menuLabel, size: "large", children: _jsx(MenuIcon, {}) })), brand(48, false), signedIn && highlightLabel && !isMobile && (_jsx(Box, { sx: { ml: 2 }, children: _jsx(Button, { sx: { my: 2, fontWeight: "bold", whiteSpace: "nowrap", animation: `${wiggle} 2s infinite` }, onClick: onHighlight, children: highlightLabel }) })), _jsx(Box, { sx: { flexGrow: 1 } }), _jsxs(Box, { sx: { ml: "auto", display: "flex", alignItems: "center", gap: 1 }, children: [contactLabel && (_jsx(Button, { onClick: onContact, sx: { textTransform: "none", fontWeight: 600, whiteSpace: "nowrap" }, children: contactLabel })), signedIn ? (_jsx(Button, { variant: "outlined", sx: authSx, onClick: onSignOut, children: signOutLabel })) : (_jsx(Button, { variant: "contained", sx: authSx, onClick: onSignIn, children: signInLabel }))] })] }) }), showMenu && (_jsx(Drawer, { anchor: "left", open: open, onClose: () => setOpen(false), children: _jsxs(Box, { sx: { width: 260 }, role: "navigation", children: [brand(40, true), _jsx(Divider, {}), _jsx(List, { children: items.map((item) => (_jsxs(ListItemButton, Object.assign({ selected: isActive(item.href) }, navProps(item.href), { sx: {
                                    mx: 1,
                                    my: 0.25,
                                    borderRadius: 1.5,
                                    "&.Mui-selected": {
                                        bgcolor: (t) => alpha(t.palette.primary.main, 0.12),
                                        color: "primary.main",
                                        "& .MuiListItemIcon-root": { color: "primary.main" },
                                        "&:hover": { bgcolor: (t) => alpha(t.palette.primary.main, 0.18) },
                                    },
                                    "&:hover": { bgcolor: (t) => alpha(t.palette.primary.main, 0.06) },
                                }, children: [item.icon && _jsx(ListItemIcon, { sx: { minWidth: 36 }, children: item.icon }), _jsx(ListItemText, { primary: item.label, slotProps: { primary: { sx: { fontWeight: 600, fontSize: "0.95rem" } } } })] }), item.href))) }), sectionItems.length > 0 && (_jsxs(_Fragment, { children: [_jsx(Divider, {}), sectionTitle && (_jsx(Box, { sx: { px: 2, pt: 2, pb: 1 }, children: _jsx(Typography, { variant: "caption", sx: { color: "text.secondary", fontWeight: 700, letterSpacing: 0.5 }, children: sectionTitle }) })), _jsx(List, { children: sectionItems.map((item) => (_jsxs(ListItemButton, Object.assign({ selected: isActive(item.href) }, navProps(item.href), { children: [item.icon && _jsx(ListItemIcon, { sx: { minWidth: 40 }, children: item.icon }), _jsx(ListItemText, { primary: item.label, slotProps: { primary: { sx: { fontWeight: 600 } } } })] }), item.href))) })] }))] }) }))] }));
}
export default Header25;
//# sourceMappingURL=Header25.js.map