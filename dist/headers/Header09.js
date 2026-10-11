import { jsx as _jsx } from "react/jsx-runtime";
import Box from "@mui/material/Box";
/**
 * Underlined tab strip for a section: a `nav` row with a bottom divider, each link
 * padded, semibold and accent-underlined when active, muted otherwise.
 */
export function Header09({ items, activeHref, linkComponent = "a" }) {
    return (_jsx(Box, { component: "nav", sx: {
            display: "flex",
            gap: 0.5,
            px: { xs: 2, sm: 3 },
            pt: 2,
            borderBottom: 1,
            borderColor: "divider",
            bgcolor: "background.default",
        }, children: items.map((item) => {
            var _a;
            const active = (_a = item.active) !== null && _a !== void 0 ? _a : (activeHref !== undefined && (activeHref === item.href || activeHref.startsWith(`${item.href}/`)));
            return (_jsx(Box, { component: linkComponent, href: item.href, "aria-current": active ? "page" : undefined, sx: {
                    px: 1.75,
                    py: 1.25,
                    fontSize: 14,
                    fontWeight: active ? 600 : 500,
                    color: active ? "text.primary" : "text.secondary",
                    textDecoration: "none",
                    borderBottom: 2,
                    borderColor: active ? "secondary.main" : "transparent",
                    mb: "-1px",
                    "&:hover": { color: "text.primary" },
                }, children: item.label }, item.href));
        }) }));
}
export default Header09;
//# sourceMappingURL=Header09.js.map