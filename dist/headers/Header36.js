import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
/**
 * Minimal header for sign-in pages: a transparent, blurred bar with a bottom divider and only the
 * logo (linked home) on the left.
 */
export function Header36(props) {
    const { logo, logoHref = "/", right, linkComponent = "a" } = props;
    return (_jsx(AppBar, { position: "static", elevation: 0, sx: {
            backgroundColor: "transparent",
            backdropFilter: "blur(6px)",
            color: "text.primary",
            borderBottom: 1,
            borderColor: "divider",
        }, children: _jsxs(Toolbar, { sx: { minHeight: 56 }, children: [_jsx(Link, { component: linkComponent, href: logoHref, color: "inherit", underline: "none", sx: { display: "inline-flex" }, children: logo }), _jsx(Box, { sx: { flexGrow: 1 } }), right] }) }));
}
export default Header36;
//# sourceMappingURL=Header36.js.map