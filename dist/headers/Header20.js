import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
const navButtonSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 0.25,
    minWidth: "auto",
    px: 0.75,
    py: 0.5,
    my: 0.5,
    fontSize: "0.6875rem",
    fontWeight: 500,
    lineHeight: 1.2,
    textTransform: "none",
    whiteSpace: "nowrap",
    "& svg": { fontSize: 18 },
};
/**
 * Compact row of stacked icon-over-label text buttons for a toolbar (public site
 * sections), each with an arrow tooltip. Renders a fragment so it flows inline.
 */
export function Header20({ items, linkComponent = "a" }) {
    return (_jsx(_Fragment, { children: items.map((item, i) => {
            var _a;
            return (_jsx(Tooltip, { title: (_a = item.tooltip) !== null && _a !== void 0 ? _a : item.label, arrow: true, children: _jsxs(Button, Object.assign({ sx: navButtonSx, onClick: item.onClick }, (item.href ? { component: linkComponent, href: item.href } : {}), { children: [item.icon, item.label] })) }, i));
        }) }));
}
export default Header20;
//# sourceMappingURL=Header20.js.map