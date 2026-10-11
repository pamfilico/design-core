"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
/**
 * Article header: a large title with a prominent contained call-to-action on the right (wrapping
 * under the title on small screens) and a "By author | date" line beneath.
 */
export function Header38(props) {
    const { title, author, date, byLabel = "By", actionLabel = "Book Now", onAction, actionIcon = _jsx(CalendarTodayIcon, {}) } = props;
    return (_jsxs(_Fragment, { children: [_jsxs(Box, { sx: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3, flexWrap: "wrap", gap: 2 }, children: [_jsx(Typography, { variant: "h2", component: "h1", sx: { fontWeight: 700, flex: 1, minWidth: { xs: "100%", md: "auto" } }, children: title }), onAction && (_jsx(Button, { variant: "contained", startIcon: actionIcon, onClick: onAction, sx: {
                            bgcolor: "primary.main",
                            color: "primary.contrastText",
                            fontWeight: 600,
                            px: 3,
                            py: 1.5,
                            borderRadius: 2,
                            textTransform: "none",
                            fontSize: "1rem",
                            boxShadow: 2,
                            "&:hover": { bgcolor: "primary.dark", boxShadow: 4 },
                        }, children: actionLabel }))] }), (author || date) && (_jsxs(Typography, { variant: "subtitle1", color: "text.secondary", gutterBottom: true, sx: { mb: 4 }, children: [author && (_jsxs(_Fragment, { children: [byLabel, " ", author] })), author && date && " | ", date] }))] }));
}
export default Header38;
//# sourceMappingURL=Header38.js.map