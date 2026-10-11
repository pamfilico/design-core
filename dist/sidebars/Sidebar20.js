"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
/**
 * A sticky 64px floating rail of 48px icon buttons with tooltips on the right, kept on
 * screen next to the page (not in a drawer). The active button is filled with the primary
 * colour; `danger` items use the error colour; `dividerAfter` separates groups.
 */
export function Sidebar20({ items, activeHref, onNavigate, linkComponent = "a", isActive = (path, item) => path === item.href.split("?")[0], }) {
    return (_jsx(Paper, { elevation: 2, "data-testid": "icon-rail", sx: {
            width: 64,
            minHeight: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 2,
            position: "sticky",
            top: 20,
            backgroundColor: "background.paper",
            borderRadius: 2,
        }, children: items.map((item) => {
            var _a, _b;
            const active = isActive(activeHref, item);
            const tone = item.danger ? "error" : "primary";
            const key = (_a = item.key) !== null && _a !== void 0 ? _a : item.href;
            return (_jsxs(Box, { children: [_jsx(Tooltip, { title: (_b = item.tooltip) !== null && _b !== void 0 ? _b : item.label, placement: "right", children: _jsx(IconButton, { component: linkComponent, href: item.href, "aria-label": item.label, "data-testid": `nav-${key}`, onClick: (e) => {
                                if (onNavigate) {
                                    e.preventDefault();
                                    onNavigate(item.href);
                                }
                            }, sx: {
                                mb: 1,
                                width: 48,
                                height: 48,
                                backgroundColor: active ? `${tone}.main` : "transparent",
                                color: active ? `${tone}.contrastText` : item.danger ? "error.main" : "text.primary",
                                "&:hover": {
                                    backgroundColor: active ? `${tone}.dark` : item.danger ? "error.light" : "action.hover",
                                },
                            }, children: item.icon }) }), item.dividerAfter && _jsx(Divider, { sx: { width: "80%", my: 1 } })] }, key));
        }) }));
}
export default Sidebar20;
//# sourceMappingURL=Sidebar20.js.map