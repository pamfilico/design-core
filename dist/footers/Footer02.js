import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
/**
 * Multi-column site footer: a brand column with a short description, then
 * headed columns of stacked links, and a centered copyright line below.
 * Columns stack on mobile, two per row on small screens.
 */
export function Footer02(props) {
    const { brandName, description, columns, copyright, linkComponent = "a", columnSize = 3 } = props;
    const size = { xs: 12, sm: 6, md: columnSize };
    return (_jsx(Box, { component: "footer", sx: {
            width: "100%",
            backgroundColor: "background.paper",
            py: 4,
            borderTop: 1,
            borderColor: "divider",
            marginTop: 4,
        }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Grid, { container: true, spacing: 4, children: [_jsxs(Grid, { size: size, children: [_jsx(Typography, { variant: "h6", color: "text.primary", gutterBottom: true, children: brandName }), description && (_jsx(Typography, { variant: "body2", color: "text.secondary", children: description }))] }), columns.map((column, i) => (_jsxs(Grid, { size: size, children: [_jsx(Typography, { variant: "h6", color: "text.primary", gutterBottom: true, children: column.title }), column.links.map((link) => (_jsx(Link, { component: linkComponent, href: link.href, variant: "body2", display: "block", color: "text.secondary", sx: { textDecoration: "none", "&:hover": { textDecoration: "underline" } }, children: link.label }, link.href)))] }, i)))] }), _jsx(Box, { mt: 5, children: _jsx(Typography, { variant: "body2", color: "text.secondary", align: "center", children: copyright }) })] }) }));
}
export default Footer02;
//# sourceMappingURL=Footer02.js.map