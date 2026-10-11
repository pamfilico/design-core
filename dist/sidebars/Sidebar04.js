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
import Typography from "@mui/material/Typography";
import { Sidebar01 } from "./Sidebar01.js";
/**
 * Hover-to-expand sectioned rail (see Sidebar01) for ONE record: each of the record's
 * sections is its own route and this rail moves between them. Expanded, a small overline
 * and the record's title sit on top; collapsed, the header disappears and only the icons remain.
 */
export function Sidebar04(_a) {
    var { overline, title, placeholder = "…", testId = "sidebar" } = _a, rail = __rest(_a, ["overline", "title", "placeholder", "testId"]);
    return (_jsx(Sidebar01, Object.assign({}, rail, { testId: testId, header: ({ expanded }) => expanded ? (_jsxs(Box, { sx: { px: 2, py: 1.5, display: "flex", flexDirection: "column" }, children: [_jsx(Typography, { variant: "overline", sx: { color: "text.secondary", lineHeight: 1.2 }, children: overline }), _jsx(Typography, { variant: "body2", "data-testid": `${testId}-title`, sx: { fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: title || placeholder })] })) : null })));
}
export default Sidebar04;
//# sourceMappingURL=Sidebar04.js.map