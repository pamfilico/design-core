"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
/**
 * Dense signed-in top bar that sits above the side navigation: a hamburger below `md`, the logo
 * (reduced to a mark on phones), an optional context chip, then install, a name · role chip and a
 * Sign out button whose label collapses to its icon on phones.
 */
export function Header35(props) {
    const { logo, logoMark, logoHref = "/", contextLabel, user, roleColor = "primary", onMenuClick, menuLabel = "Open navigation", onSignOut, signOutLabel = "Sign out", onInstall, installLabel = "Install", position = "fixed", linkComponent = "a", } = props;
    return (_jsx(AppBar, { position: position, elevation: 0, sx: { borderBottom: 1, borderColor: "divider", zIndex: (t) => t.zIndex.appBar + 2 }, children: _jsxs(Toolbar, { variant: "dense", sx: { gap: 1 }, children: [_jsx(IconButton, { edge: "start", color: "inherit", "aria-label": menuLabel, onClick: onMenuClick, sx: { display: { xs: "inline-flex", md: "none" } }, children: _jsx(MenuIcon, {}) }), logo && (_jsx(Link, { component: linkComponent, href: logoHref, color: "inherit", underline: "none", sx: { display: { xs: logoMark ? "none" : "flex", sm: "flex" }, alignItems: "center" }, children: logo })), logoMark && _jsx(Box, { sx: { display: { xs: "flex", sm: "none" }, alignItems: "center" }, children: logoMark }), contextLabel && (_jsx(Chip, { size: "small", variant: "outlined", label: contextLabel, sx: { ml: 1, maxWidth: { xs: 120, sm: 220 }, fontWeight: 700 } })), _jsx(Box, { sx: { flexGrow: 1 } }), onInstall && (_jsx(Tooltip, { title: installLabel, children: _jsx(IconButton, { color: "inherit", onClick: onInstall, "aria-label": installLabel, size: "small", sx: { minWidth: 44, minHeight: 44 }, children: _jsx(InstallMobileIcon, { fontSize: "small" }) }) })), user && (_jsx(Chip, { size: "small", color: roleColor, label: _jsxs(Box, { component: "span", sx: { whiteSpace: "nowrap" }, children: [_jsxs(Box, { component: "span", sx: { display: { xs: user.role ? "none" : "inline", sm: "inline" } }, children: [user.name, user.role ? " · " : ""] }), user.role] }) })), _jsx(Tooltip, { title: signOutLabel, children: _jsx(Button, { color: "inherit", "aria-label": signOutLabel, onClick: onSignOut, startIcon: _jsx(LogoutIcon, { fontSize: "small" }), sx: {
                            minWidth: { xs: 0, sm: 64 },
                            px: { xs: 1, sm: 2 },
                            "& .MuiButton-startIcon": { mr: { xs: 0, sm: 1 } },
                        }, children: _jsx(Box, { component: "span", sx: { display: { xs: "none", sm: "inline" } }, children: signOutLabel }) }) })] }) }));
}
export default Header35;
//# sourceMappingURL=Header35.js.map