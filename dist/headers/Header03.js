import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
/**
 * Static three-slot page bar: left slot, a centred slot that takes the free space,
 * and a right slot with a small gap between its children.
 */
export function Header03({ left, center, right }) {
    return (_jsx(AppBar, { position: "static", children: _jsxs(Toolbar, { children: [_jsx(Box, { sx: { display: "flex", alignItems: "center", minWidth: 0 }, children: left }), _jsx(Box, { sx: { flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center", mx: 2, minWidth: 0 }, children: center }), _jsx(Box, { sx: { display: "flex", alignItems: "center", gap: 1, minWidth: 0 }, children: right })] }) }));
}
export default Header03;
//# sourceMappingURL=Header03.js.map