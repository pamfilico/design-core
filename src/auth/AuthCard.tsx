"use client";

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

/** A third-party / OAuth provider rendered below the form. */
export interface AuthProvider {
  /** Stable key, e.g. "google". */
  id: string;
  /** Visible label, e.g. "Continue with Google". */
  label: React.ReactNode;
  /** Optional leading icon (any node — a brand SVG, an MUI icon, etc.). */
  icon?: React.ReactNode;
  /** Click handler — wire this to your `signIn(id)` call. */
  onClick?: () => void;
  /** Render disabled (e.g. "coming soon"). */
  disabled?: boolean;
}

/** A banner shown above or in place of the form (e.g. "magic link sent"). */
export interface AuthNotice {
  severity?: "success" | "info" | "warning" | "error";
  message: React.ReactNode;
}

export interface AuthCardProps {
  /** Heading, e.g. "Sign in" / "Create your account". */
  title: React.ReactNode;
  /** Optional sub-heading under the title. */
  subtitle?: React.ReactNode;
  /** Optional brand slot above the title (logo / wordmark). */
  logo?: React.ReactNode;
  /** Called with the entered values on submit. */
  onSubmit?: (values: { email: string; password?: string }) => void | Promise<void>;
  /** Render a password field too (default false → passwordless / magic-link). */
  withPassword?: boolean;
  /** Disable inputs and show a spinner in the submit button. */
  loading?: boolean;
  /** Error message rendered above the form. */
  error?: React.ReactNode;
  /** Notice banner (e.g. success after a magic link is sent). */
  notice?: AuthNotice | null;
  /** When true, the notice replaces the form instead of sitting above it. */
  noticeReplacesForm?: boolean;
  /** Submit button label (default "Continue"). */
  submitLabel?: React.ReactNode;
  /** Optional leading icon for the submit button. */
  submitIcon?: React.ReactNode;
  /** Providers rendered below a divider. */
  providers?: AuthProvider[];
  /** Label shown on the divider above the providers (e.g. "or", "coming soon"). */
  providersLabel?: React.ReactNode;
  /** Footer content — typically a link such as "Don't have an account? Sign up". */
  footer?: React.ReactNode;
  /** Field label / placeholder overrides. */
  emailLabel?: string;
  emailPlaceholder?: string;
  passwordLabel?: string;
  /** Prefill the email field. */
  defaultEmail?: string;
  /** Card max width in px (default 440). */
  maxWidth?: number;
}

/**
 * Brand-agnostic authentication card.
 *
 * Presentational only — it owns the email/password input state and calls
 * `onSubmit`, but does no auth wiring. All colors come from the host app's MUI
 * theme (`palette.primary`, `text.secondary`, `divider`, …), so the same card
 * brands itself per app. Pass providers/footer/notice to compose sign-in,
 * sign-up, magic-link, and OAuth flows.
 */
export function AuthCard({
  title,
  subtitle,
  logo,
  onSubmit,
  withPassword = false,
  loading = false,
  error,
  notice,
  noticeReplacesForm = false,
  submitLabel = "Continue",
  submitIcon,
  providers,
  providersLabel,
  footer,
  emailLabel = "Email address",
  emailPlaceholder,
  passwordLabel = "Password",
  defaultEmail = "",
  maxWidth = 440,
}: AuthCardProps) {
  const [email, setEmail] = React.useState(defaultEmail);
  const [password, setPassword] = React.useState("");

  const showForm = !(notice && noticeReplacesForm);
  const hasProviders = !!providers && providers.length > 0;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (loading) return;
    onSubmit?.(withPassword ? { email, password } : { email });
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        width: "100%",
        maxWidth,
        mx: "auto",
        p: { xs: 3, sm: 4 },
        borderRadius: 2,
      }}
    >
      {logo && (
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>{logo}</Box>
      )}

      <Typography component="h1" variant="h5" align="center" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 0.5 }}
        >
          {subtitle}
        </Typography>
      )}

      {error && (
        <Alert severity="error" sx={{ mt: 2.5 }}>
          {error}
        </Alert>
      )}
      {notice && (
        <Alert severity={notice.severity ?? "info"} sx={{ mt: 2.5 }}>
          {notice.message}
        </Alert>
      )}

      {showForm && (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2.5 }}>
          <TextField
            fullWidth
            required
            type="email"
            label={emailLabel}
            placeholder={emailPlaceholder}
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          {withPassword && (
            <TextField
              fullWidth
              required
              type="password"
              label={passwordLabel}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              sx={{ mt: 2 }}
            />
          )}
          <Button
            type="submit"
            fullWidth
            size="large"
            variant="contained"
            color="primary"
            disableElevation
            disabled={loading || !email}
            startIcon={
              loading ? <CircularProgress size={18} color="inherit" /> : submitIcon
            }
            sx={{ mt: 2.5, py: 1.25 }}
          >
            {submitLabel}
          </Button>
        </Box>
      )}

      {showForm && hasProviders && (
        <>
          <Divider sx={{ my: 3 }}>
            {providersLabel ? (
              <Chip label={providersLabel} size="small" variant="outlined" />
            ) : undefined}
          </Divider>
          <Stack spacing={1.25}>
            {providers!.map((provider) => (
              <Button
                key={provider.id}
                fullWidth
                size="large"
                variant="outlined"
                color="inherit"
                disabled={provider.disabled}
                onClick={provider.onClick}
                startIcon={provider.icon}
                sx={{ justifyContent: "center", textTransform: "none" }}
              >
                {provider.label}
              </Button>
            ))}
          </Stack>
        </>
      )}

      {footer && (
        <Box
          sx={{
            mt: 3,
            pt: 2.5,
            textAlign: "center",
            borderTop: 1,
            borderColor: "divider",
          }}
        >
          {footer}
        </Box>
      )}
    </Paper>
  );
}

export default AuthCard;
