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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Sidebar15 } from "./Sidebar15.js";
/**
 * Hamburger button plus a transparent left drawer in which the floating icon rail
 * (Sidebar15) hangs: an 80px column with a round close button on top and the rail
 * filling the rest, with bottom padding to clear a fixed bottom tab bar. Navigating
 * closes the drawer.
 */
export function Sidebar16(_a) {
    var { compact = false, open, onOpenChange, defaultOpen = false, menuLabel = "menu", closeLabel = "close drawer" } = _a, rail = __rest(_a, ["compact", "open", "onOpenChange", "defaultOpen", "menuLabel", "closeLabel"]);
    const [innerOpen, setInnerOpen] = React.useState(defaultOpen);
    const drawerOpen = open !== null && open !== void 0 ? open : innerOpen;
    const setOpen = (value) => {
        setInnerOpen(value);
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(value);
    };
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, { edge: "start", "aria-label": menuLabel, "data-testid": "drawer-open-menu", onClick: () => setOpen(true), size: compact ? "small" : "medium", children: _jsx(MenuIcon, { fontSize: compact ? "small" : "medium" }) }), _jsx(Drawer, { anchor: "left", open: drawerOpen, onClose: () => setOpen(false), slotProps: { paper: { sx: { backgroundColor: "transparent", boxShadow: "none" } } }, children: _jsxs(Box, { sx: {
                        width: 80,
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        justifyContent: "flex-start",
                        backgroundColor: "transparent",
                        p: 1,
                        pb: 9,
                    }, role: "presentation", children: [_jsx(IconButton, { "data-testid": "drawer-close", onClick: () => setOpen(false), "aria-label": closeLabel, sx: {
                                alignSelf: "center",
                                mt: 1,
                                mb: 2,
                                boxShadow: 3,
                                backgroundColor: "background.paper",
                                "&:hover": { boxShadow: 6, backgroundColor: "background.paper" },
                            }, children: _jsx(CloseIcon, {}) }), _jsx(Box, { sx: { flex: 1, minHeight: 0, display: "flex" }, children: _jsx(Sidebar15, Object.assign({}, rail, { onNavigate: rail.onNavigate
                                    ? (href) => {
                                        var _a;
                                        (_a = rail.onNavigate) === null || _a === void 0 ? void 0 : _a.call(rail, href);
                                        setOpen(false);
                                    }
                                    : undefined })) })] }) })] }));
}
export default Sidebar16;
//# sourceMappingURL=Sidebar16.js.map