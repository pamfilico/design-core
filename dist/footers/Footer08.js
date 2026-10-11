import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
/**
 * Centered multi-column footer: a brand column with logo, name, description and
 * copyright, then bold upper-case headed link columns. Centered text on mobile,
 * left-aligned from md up.
 */
export function Footer08(props) {
    const { logo, appName, homeHref = "/#", description, copyright, columns, linkComponent = "a" } = props;
    return (_jsx(Box, { component: "footer", sx: { bgcolor: "background.paper", borderTop: 1, borderColor: "divider", py: 6 }, children: _jsxs(Grid, { container: true, spacing: 4, justifyContent: "center", children: [_jsxs(Grid, { size: { xs: 12, sm: 6, md: 3 }, textAlign: { xs: "center", md: "left" }, children: [_jsx(Box, { component: linkComponent, href: homeHref, "aria-current": "page", sx: { color: "inherit", textDecoration: "none" }, children: _jsxs(Box, { display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, mb: 2, children: [logo, _jsx(Typography, { variant: "h6", fontWeight: "bold", ml: 1, children: appName })] }) }), description && (_jsx(Typography, { variant: "body2", color: "text.secondary", mt: 2, children: description })), _jsx(Typography, { variant: "body2", color: "text.secondary", mt: 2, children: copyright })] }), columns.map((column, i) => (_jsxs(Grid, { size: { xs: 12, sm: 6, md: 3 }, children: [_jsx(Typography, { variant: "subtitle1", fontWeight: "bold", gutterBottom: true, children: column.title }), _jsx(Box, { display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" }, gap: 1, children: column.links.map((link) => link.external ? (_jsx(Link, { href: link.href, target: "_blank", color: "inherit", underline: "hover", children: link.label }, link.href)) : (_jsx(Link, { component: linkComponent, href: link.href, color: "inherit", underline: "hover", children: link.label }, link.href))) })] }, i)))] }) }));
}
export default Footer08;
//# sourceMappingURL=Footer08.js.map