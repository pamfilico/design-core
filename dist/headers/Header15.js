import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
/**
 * In-page title block: optional back button, a 56px tinted icon tile, an h4 title
 * with an optional badge chip, a secondary subtitle, and actions on the right.
 */
export function Header15({ title, subtitle, icon, onBack, backLabel = "Back", badge, badgeColor = "default", actions }) {
    return (_jsxs(Box, { sx: { mb: 4 }, children: [onBack && (_jsx(Button, { startIcon: _jsx(ArrowBackIcon, {}), onClick: onBack, sx: { mb: 2, color: "text.secondary", "&:hover": { bgcolor: (t) => alpha(t.palette.primary.main, 0.03) } }, children: backLabel })), _jsxs(Box, { sx: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }, children: [_jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [icon && (_jsx(Box, { sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 56,
                                    height: 56,
                                    borderRadius: "14px",
                                    bgcolor: (t) => alpha(t.palette.primary.main, 0.08),
                                    color: "primary.main",
                                }, children: icon })), _jsxs(Box, { children: [_jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1.5 }, children: [_jsx(Typography, { variant: "h4", component: "h1", fontWeight: 700, sx: { color: "text.primary" }, children: title }), badge && _jsx(Chip, { label: badge, color: badgeColor, size: "small", sx: { fontWeight: 600 } })] }), subtitle && (_jsx(Box, { sx: { mt: 0.5 }, children: typeof subtitle === "string" ? (_jsx(Typography, { variant: "body1", sx: { color: "text.secondary" }, children: subtitle })) : (subtitle) }))] })] }), actions && _jsx(Box, { children: actions })] })] }));
}
export default Header15;
//# sourceMappingURL=Header15.js.map