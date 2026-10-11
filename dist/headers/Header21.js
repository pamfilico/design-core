import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
/**
 * Three-column grid bar (`1fr auto 1fr`) whose centre slot stays truly centred
 * whatever the widths of the start and end slots.
 */
export function Header21({ start, center, end, sx }) {
    return (_jsxs(Box, { sx: [{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 1 }, ...(Array.isArray(sx) ? sx : [sx])], children: [_jsx(Box, { sx: { justifySelf: "start" }, children: start !== null && start !== void 0 ? start : null }), _jsx(Box, { sx: { justifySelf: "center", minWidth: 0, maxWidth: "100%" }, children: center !== null && center !== void 0 ? center : null }), _jsx(Box, { sx: { justifySelf: "end" }, children: end !== null && end !== void 0 ? end : null })] }));
}
export default Header21;
//# sourceMappingURL=Header21.js.map