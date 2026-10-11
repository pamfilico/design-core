"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
/**
 * Fixed guest-facing bar: logo (from `sm`), a centred mark + h5 name with either a
 * signed-in detail line or a two-part hint, and a sign-in / sign-out icon with a
 * tooltip. Sign-in can open an instructions dialog.
 */
export function Header28({ logo, onLogoClick, titleIcon, title, signedIn = false, signedInDetail, hint, signOutLabel = "Logout", onSignOut, signInLabel = "Login", signInDialog, onSignIn, }) {
    var _a;
    const [dialogOpen, setDialogOpen] = React.useState(false);
    return (_jsxs(_Fragment, { children: [_jsx(AppBar, { position: "fixed", children: _jsxs(Toolbar, { children: [_jsxs(Box, { sx: { display: "flex", alignItems: "center", width: "100%" }, children: [_jsx(Box, { sx: { display: { xs: "none", sm: "flex" }, alignItems: "center", cursor: onLogoClick ? "pointer" : undefined }, onClick: onLogoClick, children: logo }), _jsx(Box, { sx: { flexGrow: 0.9, display: "flex", justifyContent: "center" }, children: _jsxs(Box, { sx: { display: "flex", alignItems: "center", padding: 2 }, children: [titleIcon && _jsx(Box, { sx: { mr: "10px", display: "flex" }, children: titleIcon }), _jsxs(Box, { display: "flex", flexDirection: "column", alignItems: "flex-start", children: [_jsx(Typography, { variant: "h5", children: title }), signedIn ? (signedInDetail && _jsx(Typography, { children: signedInDetail })) : hint ? (_jsxs(Box, { sx: { display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center" }, children: [_jsx(Typography, { children: hint[0] }), _jsx(Typography, { sx: { ml: { xs: 0, sm: 1 } }, children: hint[1] })] })) : null] })] }) })] }), _jsx(Box, { sx: { flexGrow: 1 } }), _jsx(Box, { sx: { display: "flex", justifyContent: "flex-end" }, children: signedIn ? (_jsx(Tooltip, { title: signOutLabel, children: _jsx(IconButton, { onClick: onSignOut, "aria-label": signOutLabel, children: _jsx(LogoutIcon, {}) }) })) : (_jsx(Tooltip, { title: signInLabel, children: _jsx(IconButton, { onClick: signInDialog ? () => setDialogOpen(true) : onSignIn, "aria-label": signInLabel, children: _jsx(LoginIcon, {}) }) })) })] }) }), signInDialog && (_jsxs(Dialog, { open: dialogOpen, onClose: () => setDialogOpen(false), children: [_jsx(DialogTitle, { children: signInDialog.title }), _jsx(DialogContent, { dividers: true, children: _jsx(Typography, { children: signInDialog.body }) }), _jsx(DialogActions, { children: _jsx(Button, { onClick: () => setDialogOpen(false), variant: "outlined", children: (_a = signInDialog.closeLabel) !== null && _a !== void 0 ? _a : "Close" }) })] }))] }));
}
export default Header28;
//# sourceMappingURL=Header28.js.map