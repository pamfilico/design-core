"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
/**
 * Operator panel top bar on the default surface: logo tile, bold title, a wrapping row of small
 * nav buttons (active = contained), the user name and an error-coloured sign-out.
 */
export function Header43(props) {
    const { logo, title, items, userName, signOutLabel = "Log out", onSignOut, position = "sticky", linkComponent = "a" } = props;
    return (_jsx(AppBar, { position: position, color: "default", children: _jsxs(Toolbar, { sx: { gap: 1, flexWrap: "wrap", py: 1 }, children: [logo, _jsx(Typography, { sx: { fontWeight: 800, mr: 2 }, children: title }), _jsx(Box, { component: "nav", sx: { display: "flex", gap: 0.5, flexWrap: "wrap", flexGrow: 1 }, children: items.map((n) => (_jsx(Button, { component: linkComponent, href: n.href, size: "small", variant: n.active ? "contained" : "text", children: n.label }, n.href))) }), userName && (_jsx(Typography, { variant: "body2", color: "text.secondary", children: userName })), _jsx(Button, { size: "small", color: "error", onClick: onSignOut, children: signOutLabel })] }) }));
}
export default Header43;
//# sourceMappingURL=Header43.js.map