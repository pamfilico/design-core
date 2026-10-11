import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
/**
 * Inline "go back" row: a back-arrow icon button, a stacked title / subtitle, and an
 * end slot on the right.
 */
export function Header23({ title, subtitle, end, onBack, backLabel = "Back", mb = 2 }) {
    return (_jsxs(Box, { display: "flex", alignItems: "center", justifyContent: "space-between", mb: mb, flex: 1, children: [_jsxs(Box, { display: "flex", alignItems: "center", gap: 1, children: [_jsx(IconButton, { onClick: onBack, sx: { mr: 0.5 }, "aria-label": backLabel, children: _jsx(ArrowBackIcon, {}) }), _jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 0.5 }, children: [title, subtitle && _jsx(Box, { sx: { mt: 0.25 }, children: subtitle })] })] }), end] }));
}
export default Header23;
//# sourceMappingURL=Header23.js.map