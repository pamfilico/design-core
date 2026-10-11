import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
const defaultLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
];
/**
 * Compact grey footer bar: copyright on the left, small text links on the right.
 * Stacks vertically on small screens and is hidden on extra-small screens by default.
 */
export function Footer01(props) {
    const { copyright, links = defaultLinks, linkComponent = "a", hideOnMobile = true } = props;
    return (_jsx(Box, { component: "footer", sx: {
            py: { xs: 0.75, sm: 1 },
            px: { xs: 1, sm: 2 },
            mt: "auto",
            display: hideOnMobile ? { xs: "none", sm: "block" } : "block",
            backgroundColor: (theme) => theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
        }, children: _jsx(Container, { maxWidth: "lg", sx: { px: { xs: 1, sm: 2 } }, children: _jsxs(Stack, { direction: { xs: "column", sm: "row" }, spacing: { xs: 0.5, sm: 2 }, justifyContent: "space-between", alignItems: { xs: "center", sm: "center" }, children: [_jsx(Typography, { variant: "body2", color: "text.secondary", sx: {
                            fontSize: { xs: "0.75rem", sm: "0.875rem" },
                            textAlign: { xs: "center", sm: "left" },
                        }, children: copyright }), _jsx(Stack, { direction: { xs: "column", sm: "row" }, spacing: { xs: 0.5, sm: 2 }, alignItems: "center", children: links.map((link) => (_jsx(Box, { component: linkComponent, href: link.href, style: { textDecoration: "none" }, children: _jsx(Typography, { variant: "body2", color: "text.secondary", sx: {
                                    fontSize: { xs: "0.7rem", sm: "0.875rem" },
                                    "&:hover": { textDecoration: "underline" },
                                    textAlign: "center",
                                }, children: link.label }) }, link.href))) })] }) }) }));
}
export default Footer01;
//# sourceMappingURL=Footer01.js.map