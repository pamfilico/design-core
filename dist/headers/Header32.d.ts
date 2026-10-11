import * as React from "react";
export interface Header50LocaleOption {
    value: string;
    label: string;
}
export interface Header50Props {
    /** Brand text or node in the left link. */
    brand: React.ReactNode;
    /** Href of the brand link (default "/"). */
    brandHref?: string;
    /** Optional slot rendered above the toolbar (e.g. a notice banner). */
    banner?: React.ReactNode;
    /** Signed-in state: shows the dashboard link and sign-out instead of sign-in. */
    signedIn?: boolean;
    dashboardLabel: React.ReactNode;
    dashboardHref?: string;
    signOutLabel: React.ReactNode;
    onSignOut?: () => void;
    signInLabel: React.ReactNode;
    signInHref?: string;
    /** Language select. Hidden when no options are given. */
    locales?: Header50LocaleOption[];
    locale?: string;
    localeLabel?: string;
    onLocaleChange?: (locale: string) => void;
    /** Theme toggle. Hidden when `onToggleTheme` is not given. */
    themeMode?: "light" | "dark";
    onToggleTheme?: () => void;
    toDarkLabel?: string;
    toLightLabel?: string;
    /** Install icon. Shown only when `onInstall` is given (i.e. installing is possible). */
    onInstall?: () => void;
    installLabel?: string;
    /** Component used for links (e.g. a router link). Defaults to "a". */
    linkComponent?: React.ElementType;
}
/**
 * Public top bar: brand link on the left; on the right an optional install icon, a light/dark
 * toggle, a language select and either Dashboard + Sign out (signed in) or Sign in.
 */
export declare function Header32(props: Header50Props): React.JSX.Element;
export default Header32;
//# sourceMappingURL=Header32.d.ts.map