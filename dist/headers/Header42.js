"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
/**
 * Transparent, shadowless 70px results-page bar: logo, an outlined "Back to home" button and the
 * account control on the right. Below `sm` only the logo remains.
 */
export function Header42(props) {
    var _a;
    const { logo, onHome, backLabel, user, signInLabel, signInHref = "/sign-in", signedInAsLabel, signOutLabel, onSignOut, linkComponent = "a", } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const email = (_a = user === null || user === void 0 ? void 0 : user.email) !== null && _a !== void 0 ? _a : "";
    const logoBox = (_jsx(Box, { onClick: onHome, sx: {
            height: 40,
            maxHeight: 40,
            maxWidth: 100,
            mr: 2,
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            transition: "transform 0.2s ease-in-out",
            "&:hover": { transform: "scale(1.05)" },
        }, children: logo }));
    const barSx = { height: 70, backgroundColor: "transparent", boxShadow: "none" };
    if (isMobile) {
        return (_jsx(AppBar, { position: "static", sx: barSx, children: _jsxs(Toolbar, { sx: { justifyContent: "space-between", alignItems: "center", height: "100%", px: 2 }, children: [logoBox, _jsx(Box, { sx: { width: 40 } })] }) }));
    }
    return (_jsx(AppBar, { position: "static", sx: barSx, children: _jsxs(Toolbar, { sx: { alignItems: "center", height: "100%", px: 3, gap: 1 }, children: [logoBox, _jsx(Button, { variant: "outlined", onClick: onHome, sx: { borderRadius: 2, textTransform: "none", fontWeight: "medium" }, children: backLabel }), _jsx(Box, { sx: { flexGrow: 1 } }), _jsx(Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: user ? (_jsxs(_Fragment, { children: [_jsx(Tooltip, { title: email || signOutLabel, children: _jsx(IconButton, { onClick: (e) => setAnchorEl(e.currentTarget), size: "small", sx: { p: 0.5 }, children: _jsx(Avatar, { src: user.avatarUrl, sx: { width: 28, height: 28, fontSize: 14 }, children: (email[0] || "?").toUpperCase() }) }) }), _jsxs(Menu, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: () => setAnchorEl(null), anchorOrigin: { vertical: "bottom", horizontal: "right" }, transformOrigin: { vertical: "top", horizontal: "right" }, slotProps: { paper: { sx: { mt: 1, minWidth: 220 } } }, children: [_jsxs(Box, { sx: { p: 1.5, pb: 1, borderBottom: 1, borderColor: "divider" }, children: [_jsx(Typography, { variant: "caption", color: "text.secondary", children: signedInAsLabel }), _jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, noWrap: true, children: email })] }), _jsx(Box, { sx: { display: "flex", flexDirection: "column", p: 0.5 }, children: _jsx(Button, { onClick: () => {
                                                setAnchorEl(null);
                                                onSignOut === null || onSignOut === void 0 ? void 0 : onSignOut();
                                            }, startIcon: _jsx(LogoutIcon, {}), sx: { justifyContent: "flex-start", textTransform: "none" }, children: signOutLabel }) })] })] })) : (_jsx(Tooltip, { title: signInLabel, children: _jsx(IconButton, { component: linkComponent, href: signInHref, size: "small", color: "primary", sx: { p: 0.75 }, "aria-label": signInLabel, children: _jsx(LoginIcon, { fontSize: "small" }) }) })) })] }) }));
}
export default Header42;
//# sourceMappingURL=Header42.js.map