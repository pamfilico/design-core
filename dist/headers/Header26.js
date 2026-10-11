import { jsx as _jsx } from "react/jsx-runtime";
import Button from "@mui/material/Button";
/** Single bold, no-wrap toolbar navigation button (text; contained when active). */
export function Header26({ label, href, onClick, active = false, linkComponent = "a" }) {
    return (_jsx(Button, Object.assign({ variant: active ? "contained" : "text", onClick: onClick }, (href ? { component: linkComponent, href } : {}), { sx: { my: 2, display: "block", fontWeight: "bold", whiteSpace: "nowrap", width: "auto" }, children: label })));
}
export default Header26;
//# sourceMappingURL=Header26.js.map