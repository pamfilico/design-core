import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
/**
 * Flat toolbar row for an editor page (paper, bottom divider): bold title, outlined
 * info chips, an optional run-status block, and on the right a single select, an
 * optional multi select and a contained run button with a play icon / spinner.
 */
export function Header10({ title, chips = [], status, statusLabels = {}, statusChips = [], select, multiSelect, actionLabel, onAction, actionLoading = false, actionDisabled = false, }) {
    const labels = Object.assign({ running: "Running", completed: "Completed", failed: "Failed" }, statusLabels);
    return (_jsxs(Paper, { elevation: 0, sx: { px: 3, py: 1.5, borderBottom: 1, borderColor: "divider", display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 700 }, children: title }), chips.map((c, i) => {
                var _a;
                return (_jsx(Chip, { label: c.label, size: "small", variant: "outlined", color: (_a = c.color) !== null && _a !== void 0 ? _a : "default" }, i));
            }), status && (_jsxs(_Fragment, { children: [_jsx(Divider, { orientation: "vertical", flexItem: true, sx: { mx: 1 } }), status === "running" && (_jsx(Chip, { icon: _jsx(CircularProgress, { size: 14 }), label: labels.running, size: "small", color: "primary", variant: "outlined" })), status === "completed" && (_jsx(Chip, { icon: _jsx(CheckCircleIcon, {}), label: labels.completed, size: "small", color: "success", variant: "outlined" })), status === "failed" && _jsx(Chip, { icon: _jsx(ErrorIcon, {}), label: labels.failed, size: "small", color: "error", variant: "outlined" }), statusChips.map((c, i) => {
                        var _a;
                        return (_jsx(Chip, { label: c.label, size: "small", variant: "outlined", color: (_a = c.color) !== null && _a !== void 0 ? _a : "default" }, i));
                    })] })), _jsxs(Box, { sx: { ml: "auto", display: "flex", alignItems: "center", gap: 1 }, children: [select &&
                        (select.loading ? (_jsx(CircularProgress, { size: 20 })) : (_jsxs(FormControl, { size: "small", sx: { minWidth: 220 }, children: [_jsx(InputLabel, { children: select.label }), _jsx(Select, { value: select.value, label: select.label, onChange: (e) => { var _a; return (_a = select.onChange) === null || _a === void 0 ? void 0 : _a.call(select, e.target.value); }, children: select.options.map((o) => (_jsx(MenuItem, { value: o.value, children: _jsx(Typography, { variant: "body2", children: o.label }) }, o.value))) })] }))), multiSelect && multiSelect.options.length > 0 && (_jsxs(FormControl, { size: "small", sx: { minWidth: 280 }, children: [_jsx(InputLabel, { children: multiSelect.label }), _jsx(Select, { multiple: true, value: multiSelect.value, label: multiSelect.label, onChange: (e) => { var _a; return (_a = multiSelect.onChange) === null || _a === void 0 ? void 0 : _a.call(multiSelect, e.target.value); }, renderValue: (s) => (multiSelect.renderValue ? multiSelect.renderValue(s) : s.join(", ")), MenuProps: { slotProps: { paper: { sx: { maxHeight: 400 } } } }, children: multiSelect.options.map((o) => (_jsx(MenuItem, { value: o.value, sx: { py: 0.3 }, children: _jsx(Typography, { variant: "body2", sx: { fontSize: 12 }, children: o.label }) }, o.value))) })] })), _jsx(Button, { variant: "contained", startIcon: actionLoading ? _jsx(CircularProgress, { size: 16 }) : _jsx(PlayArrowIcon, {}), onClick: onAction, disabled: actionDisabled || actionLoading || status === "running", children: actionLabel })] })] }));
}
export default Header10;
//# sourceMappingURL=Header10.js.map