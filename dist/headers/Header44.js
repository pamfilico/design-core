import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
/**
 * Plain page header: an h4 title with an optional secondary subtitle, and actions aligned to the
 * baseline on the right; wraps on narrow screens.
 */
export function Header44(props) {
    const { title, subtitle, actions } = props;
    return (_jsxs(Box, { sx: { display: "flex", alignItems: "flex-end", gap: 2, mb: 3, flexWrap: "wrap" }, children: [_jsxs(Box, { sx: { flexGrow: 1 }, children: [_jsx(Typography, { variant: "h4", component: "h1", children: title }), subtitle && _jsx(Typography, { color: "text.secondary", children: subtitle })] }), actions] }));
}
export default Header44;
//# sourceMappingURL=Header44.js.map