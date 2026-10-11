import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
const defaultLinks = [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
];
/**
 * Minimal 60px bar fixed to the bottom of the viewport with white text:
 * "© year credit" followed by inline links, all centered.
 */
export function Footer07(props) {
    const { copyright, credit, links = defaultLinks, solid = true, openInNewTab = true } = props;
    const target = openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (_jsxs(Box, { component: "footer", sx: {
            minHeight: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            bottom: 0,
            width: "100%",
            backgroundColor: solid ? "common.black" : "transparent",
        }, children: [_jsxs(Typography, { variant: "body2", color: "common.white", align: "center", children: [copyright, credit && (_jsxs(_Fragment, { children: [" ", _jsx(Link, { href: credit.href, target: "_blank", rel: "noopener noreferrer", sx: { color: "common.white" }, children: credit.label })] }))] }), _jsx(Typography, { variant: "body2", color: "text.primary", align: "center", children: links.map((link) => (_jsx(Link, Object.assign({ href: link.href }, target, { sx: { color: "common.white", marginLeft: "10px" }, children: link.label }), link.href))) })] }));
}
export default Footer07;
//# sourceMappingURL=Footer07.js.map