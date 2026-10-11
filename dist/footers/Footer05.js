"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
/**
 * Centered in-flow footer row with a top border on the paper background:
 * a primary-coloured copyright with a bold credit link, then underlined text links.
 */
export function Footer05(props) {
    const { copyright, credit, links, onNavigate } = props;
    const navigate = (href) => {
        if (onNavigate)
            onNavigate(href);
        else if (typeof window !== "undefined")
            window.location.assign(href);
    };
    return (_jsxs(Box, { component: "footer", sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "24px 16px",
            marginTop: 4,
            borderTop: 1,
            borderColor: "divider",
            backgroundColor: "background.paper",
        }, children: [_jsxs(Typography, { variant: "body2", color: "primary", children: [copyright, credit && (_jsxs(_Fragment, { children: [" ", _jsx(Typography, { component: "a", href: credit.href, target: "_blank", rel: "noopener noreferrer", sx: { textDecoration: "none", color: "inherit", fontWeight: "bold", mr: 2 }, children: credit.label })] }))] }), _jsx(Box, { children: links.map((link, i) => (_jsx(Typography, { variant: "body2", component: "span", onClick: () => navigate(link.href), sx: {
                        cursor: "pointer",
                        marginRight: i < links.length - 1 ? 2 : 0,
                        textDecoration: "underline",
                    }, children: link.label }, link.href))) })] }));
}
export default Footer05;
//# sourceMappingURL=Footer05.js.map