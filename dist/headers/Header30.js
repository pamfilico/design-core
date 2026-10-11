import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
/**
 * Minimal fixed bar: logo link, spacer, a block of bold text navigation buttons and
 * a bold sign-in / sign-out text button at the right.
 */
export function Header30({ logo, logoHref = "/", items = [], showAuth = true, signedIn = false, signOutLabel = "Logout", onSignOut, signInLabel = "Login", onSignIn, linkComponent = "a", }) {
    return (_jsx(AppBar, { position: "fixed", children: _jsxs(Toolbar, { children: [logo && (_jsx(Link, { component: linkComponent, href: logoHref, sx: { display: "flex", alignItems: "center" }, children: logo })), _jsx(Box, { sx: { flexGrow: 1 } }), _jsx(Box, { sx: { flexGrow: 1, display: "flex", justifyContent: "flex-start" }, children: items.map((item, i) => (_jsx(Button, Object.assign({}, (item.href ? { component: linkComponent, href: item.href } : {}), { onClick: item.onClick, sx: { color: "inherit", my: 2, display: "block", fontWeight: "bold", backgroundColor: item.active ? "primary.dark" : undefined }, children: item.label }), i))) }), showAuth && (_jsx(Box, { sx: { ml: "auto", display: "flex", alignItems: "center" }, children: _jsx(Button, { sx: Object.assign({ color: "inherit", my: 2, display: "block", fontWeight: "bold" }, (signedIn ? {} : { fontSize: "1rem" })), onClick: signedIn ? onSignOut : onSignIn, children: signedIn ? signOutLabel : signInLabel }) }))] }) }));
}
export default Header30;
//# sourceMappingURL=Header30.js.map