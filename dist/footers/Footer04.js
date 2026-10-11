"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
/**
 * Slim footer bar fixed to the bottom of the viewport with a soft top shadow:
 * a primary-coloured copyright with a bold credit link, then underlined text links.
 */
export function Footer04(props) {
    const { copyright, credit, links, onNavigate, fixed = true } = props;
    const navigate = (href) => {
        if (onNavigate)
            onNavigate(href);
        else if (typeof window !== "undefined")
            window.location.assign(href);
    };
    const fontSize = { xs: "0.75rem", sm: "0.875rem" };
    return (_jsxs(Box, { sx: {
            display: "flex",
            flexDirection: { xs: "row", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            position: fixed ? "fixed" : "static",
            bottom: 0,
            width: "100%",
            padding: "8px 16px",
            boxShadow: "0 -1px 3px rgba(0, 0, 0, 0.1)",
        }, children: [_jsxs(Typography, { variant: "body2", color: "primary", sx: { fontSize }, children: [copyright, credit && (_jsxs(_Fragment, { children: [" ", _jsx(Typography, { component: "a", href: credit.href, target: "_blank", rel: "noopener noreferrer", sx: { textDecoration: "none", color: "inherit", fontWeight: "bold", mr: 2, fontSize }, children: credit.label })] }))] }), _jsx(Box, { sx: { mt: { xs: 1, sm: 0 } }, children: links.map((link, i) => (_jsx(Typography, { variant: "body2", component: "span", onClick: () => navigate(link.href), sx: {
                        cursor: "pointer",
                        marginRight: i < links.length - 1 ? 2 : 0,
                        textDecoration: "underline",
                        fontSize,
                    }, children: link.label }, link.href))) })] }));
}
export default Footer04;
//# sourceMappingURL=Footer04.js.map