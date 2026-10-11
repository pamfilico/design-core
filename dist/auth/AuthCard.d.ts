import * as React from "react";
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
    onSubmit?: (values: {
        email: string;
        password?: string;
    }) => void | Promise<void>;
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
export declare function AuthCard({ title, subtitle, logo, onSubmit, withPassword, loading, error, notice, noticeReplacesForm, submitLabel, submitIcon, providers, providersLabel, footer, emailLabel, emailPlaceholder, passwordLabel, defaultEmail, maxWidth, }: AuthCardProps): React.JSX.Element;
export default AuthCard;
//# sourceMappingURL=AuthCard.d.ts.map