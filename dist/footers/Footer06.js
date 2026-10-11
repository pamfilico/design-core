import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
/**
 * Bordered paper footer for a business's public page: "© year name" on the left,
 * a row of legal links in the middle and a "Powered by" credit on the right.
 * Stacks left-aligned on mobile.
 */
export function Footer06(props) {
    const { businessName, year = new Date().getFullYear(), links, poweredByLabel, poweredByName } = props;
    return (_jsx(Box, { component: "footer", sx: { borderTop: 1, borderColor: "divider", bgcolor: "background.paper", mt: "auto" }, children: _jsx(Container, { maxWidth: "lg", children: _jsxs(Stack, { direction: { xs: "column", sm: "row" }, spacing: { xs: 1, sm: 3 }, alignItems: { xs: "flex-start", sm: "center" }, justifyContent: "space-between", sx: { py: 2.5 }, children: [_jsxs(Typography, { variant: "body2", color: "text.secondary", children: ["\u00A9 ", year, " ", businessName !== null && businessName !== void 0 ? businessName : ""] }), _jsx(Stack, { direction: "row", spacing: 2.5, children: links.map((link) => (_jsx(Link, { href: link.href, underline: "hover", color: "text.secondary", variant: "body2", children: link.label }, link.href))) }), (poweredByLabel || poweredByName) && (_jsxs(Typography, { variant: "body2", color: "text.secondary", children: [poweredByLabel, " ", _jsx("strong", { children: poweredByName })] }))] }) }) }));
}
export default Footer06;
//# sourceMappingURL=Footer06.js.map