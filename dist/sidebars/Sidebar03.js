"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Sidebar01 } from "./Sidebar01.js";
/**
 * Hover-to-expand sectioned rail (see Sidebar01) for a top-level area that is not nested
 * under a record: its header is a way back out. Collapsed, the header is a lone back
 * arrow; expanded, the arrow sits beside a bold "Back to home" label and the area name.
 */
export function Sidebar03(_a) {
    var { backHref = "/", backLabel = "Back to home", caption, linkComponent = "a", onNavigate } = _a, rail = __rest(_a, ["backHref", "backLabel", "caption", "linkComponent", "onNavigate"]);
    return (_jsx(Sidebar01, Object.assign({}, rail, { linkComponent: linkComponent, onNavigate: onNavigate, header: ({ expanded }) => (_jsxs(Box, { component: linkComponent, href: backHref, onClick: (e) => {
                if (onNavigate) {
                    e.preventDefault();
                    onNavigate(backHref);
                }
            }, sx: {
                px: expanded ? 2 : 0,
                py: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: expanded ? "flex-start" : "center",
                gap: 1,
                color: "inherit",
                textDecoration: "none",
                "&:hover": { opacity: 0.8 },
            }, children: [_jsx(ArrowBackIcon, { fontSize: "small" }), expanded ? (_jsxs(Box, { sx: { minWidth: 0 }, children: [_jsx(Typography, { variant: "subtitle2", fontWeight: 700, noWrap: true, children: backLabel }), caption ? (_jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, children: caption })) : null] })) : (_jsx(Tooltip, { title: backLabel, placement: "right", children: _jsx(Box, { component: "span", sx: { display: "none" } }) }))] })) })));
}
export default Sidebar03;
//# sourceMappingURL=Sidebar03.js.map