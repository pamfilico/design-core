"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
/**
 * Floating chrome with no bar: a translucent home tile with the logo at the top-left, and at the
 * top-right a promo pill plus an account pill (sign-in icon, or an avatar opening a
 * "signed in as" menu with Sign out). Sits above hero images.
 */
export function Header40(props) {
    var _a;
    const { logo, homeHref = "/", hideHome = false, homeLabel, promoLabel, promoHref = "#", promoIcon = _jsx(StorefrontOutlinedIcon, { fontSize: "small" }), hidePromo = false, user, signInLabel, signInHref = "/sign-in", signedInAsLabel, signOutLabel, onSignOut, position = "fixed", linkComponent = "a", } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const glass = {
        backgroundColor: (t) => alpha(t.palette.background.paper, 0.85),
        backdropFilter: "blur(6px)",
        boxShadow: 1,
    };
    const pillSx = Object.assign(Object.assign({}, glass), { borderRadius: 999, display: "flex", alignItems: "center" });
    const email = (_a = user === null || user === void 0 ? void 0 : user.email) !== null && _a !== void 0 ? _a : "";
    return (_jsxs(_Fragment, { children: [!hideHome && (_jsx(Tooltip, { title: homeLabel, children: _jsx(Box, { component: linkComponent, href: homeHref, "aria-label": homeLabel, sx: Object.assign(Object.assign({}, glass), { position, top: 8, left: 8, zIndex: 1100, display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, p: 0.75, borderRadius: 2, overflow: "hidden", transition: "transform 200ms, box-shadow 200ms", "&:hover": { transform: "translateY(-1px)", boxShadow: 2 } }), children: logo }) })), _jsxs(Box, { sx: { position, top: 8, right: 8, zIndex: 1100, display: "flex", alignItems: "center", gap: 1 }, children: [!user && !hidePromo && promoLabel && (_jsx(Box, { sx: pillSx, children: _jsx(Button, { component: linkComponent, href: promoHref, size: "small", startIcon: promoIcon, sx: {
                                textTransform: "none",
                                fontWeight: 600,
                                color: "text.primary",
                                px: 1.5,
                                py: 0.5,
                                minWidth: 0,
                                borderRadius: 999,
                                "& .MuiButton-startIcon": { mr: 0.5 },
                            }, children: promoLabel }) })), _jsx(Box, { sx: Object.assign(Object.assign({}, pillSx), { p: 0.25 }), children: user ? (_jsxs(_Fragment, { children: [_jsx(Tooltip, { title: email || signOutLabel, children: _jsx(IconButton, { onClick: (e) => setAnchorEl(e.currentTarget), size: "small", sx: { p: 0.5 }, children: _jsx(Avatar, { src: user.avatarUrl, sx: { width: 28, height: 28, fontSize: 14 }, children: (email[0] || "?").toUpperCase() }) }) }), _jsxs(Menu, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: () => setAnchorEl(null), anchorOrigin: { vertical: "bottom", horizontal: "right" }, transformOrigin: { vertical: "top", horizontal: "right" }, slotProps: { paper: { sx: { mt: 1, minWidth: 220 } } }, children: [_jsxs(Box, { sx: { p: 1.5, pb: 1, borderBottom: 1, borderColor: "divider" }, children: [_jsx(Typography, { variant: "caption", color: "text.secondary", children: signedInAsLabel }), _jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, noWrap: true, children: email })] }), _jsx(Box, { sx: { display: "flex", flexDirection: "column", p: 0.5 }, children: _jsx(Button, { onClick: () => {
                                                    setAnchorEl(null);
                                                    onSignOut === null || onSignOut === void 0 ? void 0 : onSignOut();
                                                }, startIcon: _jsx(LogoutIcon, {}), sx: { justifyContent: "flex-start", textTransform: "none" }, children: signOutLabel }) })] })] })) : (_jsx(Tooltip, { title: signInLabel, children: _jsx(IconButton, { component: linkComponent, href: signInHref, size: "small", color: "primary", sx: { p: 0.75 }, "aria-label": signInLabel, children: _jsx(LoginIcon, { fontSize: "small" }) }) })) })] })] }));
}
export default Header40;
//# sourceMappingURL=Header40.js.map