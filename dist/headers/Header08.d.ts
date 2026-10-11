import * as React from "react";
export interface Header08Props {
    brand: React.ReactNode;
    brandHref?: string;
    linkComponent?: React.ElementType;
    /** Signed-in state: shows the hamburger (below `md`) and the sign-out icon. */
    signedIn?: boolean;
    onMenuClick?: () => void;
    menuLabel?: string;
    /** Slot before the theme toggle (e.g. an install button). */
    actions?: React.ReactNode;
    /** Theme toggle; hidden without `onToggleTheme`. */
    themeMode?: "light" | "dark";
    onToggleTheme?: () => void;
    toDarkLabel?: string;
    toLightLabel?: string;
    /** Language select; hidden without options. */
    locales?: {
        value: string;
        label: string;
    }[];
    locale?: string;
    localeLabel?: string;
    onLocaleChange?: (locale: string) => void;
    /** Text button (e.g. "Contact"); hidden without a label. */
    contactLabel?: React.ReactNode;
    onContact?: () => void;
    signInLabel?: string;
    signOutLabel?: string;
    onSignIn?: () => void;
    onSignOut?: () => void;
}
/**
 * Fixed app bar above the drawer: hamburger (signed in, below `md`), brand link that
 * grows, then actions slot, theme toggle, an outlined language select styled for the
 * coloured bar, a text contact button and a sign-in / sign-out icon with tooltip.
 */
export declare function Header08({ brand, brandHref, linkComponent, signedIn, onMenuClick, menuLabel, actions, themeMode, onToggleTheme, toDarkLabel, toLightLabel, locales, locale, localeLabel, onLocaleChange, contactLabel, onContact, signInLabel, signOutLabel, onSignIn, onSignOut, }: Header08Props): React.JSX.Element;
export default Header08;
//# sourceMappingURL=Header08.d.ts.map