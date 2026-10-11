import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
/**
 * Grey footer bar with a body-size copyright on the left and a row of small links
 * on the right, followed by optional external links. Stacks on mobile.
 */
export function Footer03(props) {
    const { copyright, links, externalLinks = [], linkComponent = "a" } = props;
    return (_jsx(Box, { component: "footer", sx: {
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) => theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
        }, children: _jsx(Container, { maxWidth: "lg", children: _jsxs(Stack, { direction: { xs: "column", sm: "row" }, spacing: 2, justifyContent: "space-between", alignItems: "center", children: [_jsx(Typography, { variant: "body1", color: "text.secondary", children: copyright }), _jsxs(Stack, { direction: "row", spacing: 2, children: [links.map((link) => (_jsx(Box, { component: linkComponent, href: link.href, style: { textDecoration: "none" }, children: _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { "&:hover": { textDecoration: "underline" } }, children: link.label }) }, link.href))), externalLinks.map((link) => (_jsx(Link, { href: link.href, color: "inherit", underline: "hover", children: link.label }, link.href)))] })] }) }) }));
}
export default Footer03;
//# sourceMappingURL=Footer03.js.map