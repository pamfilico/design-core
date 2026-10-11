"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
/**
 * Brand-agnostic authentication card.
 *
 * Presentational only — it owns the email/password input state and calls
 * `onSubmit`, but does no auth wiring. All colors come from the host app's MUI
 * theme (`palette.primary`, `text.secondary`, `divider`, …), so the same card
 * brands itself per app. Pass providers/footer/notice to compose sign-in,
 * sign-up, magic-link, and OAuth flows.
 */
export function AuthCard({ title, subtitle, logo, onSubmit, withPassword = false, loading = false, error, notice, noticeReplacesForm = false, submitLabel = "Continue", submitIcon, providers, providersLabel, footer, emailLabel = "Email address", emailPlaceholder, passwordLabel = "Password", defaultEmail = "", maxWidth = 440, }) {
    var _a;
    const [email, setEmail] = React.useState(defaultEmail);
    const [password, setPassword] = React.useState("");
    const showForm = !(notice && noticeReplacesForm);
    const hasProviders = !!providers && providers.length > 0;
    const handleSubmit = (event) => {
        event.preventDefault();
        if (loading)
            return;
        onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(withPassword ? { email, password } : { email });
    };
    return (_jsxs(Paper, { variant: "outlined", sx: {
            width: "100%",
            maxWidth,
            mx: "auto",
            p: { xs: 3, sm: 4 },
            borderRadius: 2,
        }, children: [logo && (_jsx(Box, { sx: { display: "flex", justifyContent: "center", mb: 2 }, children: logo })), _jsx(Typography, { component: "h1", variant: "h5", align: "center", sx: { fontWeight: 700 }, children: title }), subtitle && (_jsx(Typography, { variant: "body2", color: "text.secondary", align: "center", sx: { mt: 0.5 }, children: subtitle })), error && (_jsx(Alert, { severity: "error", sx: { mt: 2.5 }, children: error })), notice && (_jsx(Alert, { severity: (_a = notice.severity) !== null && _a !== void 0 ? _a : "info", sx: { mt: 2.5 }, children: notice.message })), showForm && (_jsxs(Box, { component: "form", onSubmit: handleSubmit, noValidate: true, sx: { mt: 2.5 }, children: [_jsx(TextField, { fullWidth: true, required: true, type: "email", label: emailLabel, placeholder: emailPlaceholder, autoComplete: "email", autoFocus: true, value: email, onChange: (e) => setEmail(e.target.value), disabled: loading }), withPassword && (_jsx(TextField, { fullWidth: true, required: true, type: "password", label: passwordLabel, autoComplete: "current-password", value: password, onChange: (e) => setPassword(e.target.value), disabled: loading, sx: { mt: 2 } })), _jsx(Button, { type: "submit", fullWidth: true, size: "large", variant: "contained", color: "primary", disableElevation: true, disabled: loading || !email, startIcon: loading ? _jsx(CircularProgress, { size: 18, color: "inherit" }) : submitIcon, sx: { mt: 2.5, py: 1.25 }, children: submitLabel })] })), showForm && hasProviders && (_jsxs(_Fragment, { children: [_jsx(Divider, { sx: { my: 3 }, children: providersLabel ? (_jsx(Chip, { label: providersLabel, size: "small", variant: "outlined" })) : undefined }), _jsx(Stack, { spacing: 1.25, children: providers.map((provider) => (_jsx(Button, { fullWidth: true, size: "large", variant: "outlined", color: "inherit", disabled: provider.disabled, onClick: provider.onClick, startIcon: provider.icon, sx: { justifyContent: "center", textTransform: "none" }, children: provider.label }, provider.id))) })] })), footer && (_jsx(Box, { sx: {
                    mt: 3,
                    pt: 2.5,
                    textAlign: "center",
                    borderTop: 1,
                    borderColor: "divider",
                }, children: footer }))] }));
}
export default AuthCard;
//# sourceMappingURL=AuthCard.js.map