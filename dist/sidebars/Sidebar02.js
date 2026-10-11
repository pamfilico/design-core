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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Sidebar01 } from "./Sidebar01.js";
/**
 * Hover-to-expand sectioned rail (see Sidebar01) with a title block on top. Expanded, the
 * block shows a bold title and a muted caption; collapsed, it shrinks to a two-letter
 * initials badge with the title in a tooltip. The block can link to an overview page.
 */
export function Sidebar02(_a) {
    var { title, caption, initials, collapsedTooltip, titleHref, linkComponent = "a", onNavigate } = _a, rail = __rest(_a, ["title", "caption", "initials", "collapsedTooltip", "titleHref", "linkComponent", "onNavigate"]);
    const short = initials !== null && initials !== void 0 ? initials : title.slice(0, 2).toUpperCase();
    const linkProps = titleHref
        ? {
            component: linkComponent,
            href: titleHref,
            onClick: (e) => {
                if (onNavigate) {
                    e.preventDefault();
                    onNavigate(titleHref);
                }
            },
        }
        : {};
    return (_jsx(Sidebar01, Object.assign({}, rail, { linkComponent: linkComponent, onNavigate: onNavigate, header: ({ expanded }) => (_jsx(Box, Object.assign({}, linkProps, { sx: Object.assign({ px: expanded ? 2 : 0, py: 1.5, display: "flex", flexDirection: "column", alignItems: expanded ? "flex-start" : "center" }, (titleHref ? { color: "inherit", textDecoration: "none", "&:hover": { opacity: 0.8 } } : {})), children: expanded ? (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "subtitle2", fontWeight: 700, noWrap: true, children: title }), caption ? (_jsx(Typography, { variant: "caption", color: "text.secondary", noWrap: true, children: caption })) : null] })) : (_jsx(Tooltip, { title: collapsedTooltip !== null && collapsedTooltip !== void 0 ? collapsedTooltip : title, placement: "right", children: _jsx(Typography, { variant: "subtitle2", fontWeight: 700, sx: { fontSize: 11 }, noWrap: true, children: short }) })) }))) })));
}
export default Sidebar02;
//# sourceMappingURL=Sidebar02.js.map