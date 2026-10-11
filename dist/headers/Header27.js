import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
/**
 * Fixed bar for a single venue: big logo on the left, a centred h4 title with a small
 * mark and an optional "– detail" suffix, and a bold sign-in / sign-out text button
 * on the right.
 */
export function Header27({ logo, onLogoClick, titleIcon, title, detail, signedIn = false, signOutLabel = "Logout", onSignOut, signInLabel = "Login", onSignIn, }) {
    return (_jsx(AppBar, { position: "fixed", children: _jsxs(Toolbar, { children: [_jsxs(Box, { sx: { display: "flex", alignItems: "center", width: "100%" }, children: [_jsx(Box, { sx: { display: "flex", alignItems: "center", cursor: onLogoClick ? "pointer" : undefined }, onClick: onLogoClick, children: logo }), _jsx(Box, { sx: { flexGrow: 0.9, display: "flex", justifyContent: "center" }, children: _jsxs(Box, { sx: { display: "flex", alignItems: "center", padding: 2 }, children: [titleIcon && _jsx(Box, { sx: { mr: "10px", display: "flex" }, children: titleIcon }), _jsxs(Typography, { variant: "h4", children: [title, detail ? _jsxs(_Fragment, { children: [" - ", detail] }) : null] })] }) })] }), _jsx(Box, { sx: { flexGrow: 1 } }), _jsx(Box, { sx: { display: "flex", justifyContent: "flex-end" }, children: _jsx(Button, { sx: Object.assign({ color: "inherit", my: 2, display: "block", fontWeight: "bold" }, (signedIn ? {} : { fontSize: "1rem" })), onClick: signedIn ? onSignOut : onSignIn, children: signedIn ? signOutLabel : signInLabel }) })] }) }));
}
export default Header27;
//# sourceMappingURL=Header27.js.map