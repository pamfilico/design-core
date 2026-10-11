import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
/**
 * Plain static admin bar on the default (neutral) AppBar colour: a bold title link,
 * a row of small text-button links, a spacer and a small sign-out button.
 */
export function Header05({ title, titleHref = "/", items = [], signOutLabel = "Sign out", onSignOut, linkComponent = "a", }) {
    return (_jsx(AppBar, { position: "static", color: "default", elevation: 1, children: _jsxs(Toolbar, { sx: { gap: 2 }, children: [_jsx(Typography, { variant: "h6", component: linkComponent, href: titleHref, sx: { color: "text.primary", textDecoration: "none", fontWeight: 700 }, children: title }), items.map((item) => (_jsx(Button, { component: linkComponent, href: item.href, size: "small", color: "inherit", children: item.label }, item.href))), _jsx(Box, { sx: { flexGrow: 1 } }), onSignOut && (_jsx(Button, { onClick: onSignOut, size: "small", color: "inherit", children: signOutLabel }))] }) }));
}
export default Header05;
//# sourceMappingURL=Header05.js.map