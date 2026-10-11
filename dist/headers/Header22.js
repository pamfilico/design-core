import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
/**
 * Inline page header row (no AppBar): left and centre slots, and a right slot pushed
 * to the end with a small gap — e.g. page actions followed by an install icon.
 */
export function Header22({ left, center, right, mt = 0, mb = 0, ml = 0, mr = 0 }) {
    return (_jsxs(Box, { display: "flex", alignItems: "center", justifyContent: "space-between", flex: 1, mt: mt, mb: mb, ml: ml, mr: mr, children: [_jsx(Box, { display: "flex", alignItems: "center", children: left }), _jsx(Box, { display: "flex", alignItems: "center", children: center }), _jsx(Box, { display: "flex", alignItems: "center", gap: 1, marginLeft: "auto", children: right })] }));
}
export default Header22;
//# sourceMappingURL=Header22.js.map