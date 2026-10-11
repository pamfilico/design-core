import * as React from "react";
export interface Header13Props {
    brand: React.ReactNode;
    brandHref?: string;
    /** Alternative title shown instead of the brand from `sm` up (e.g. the current page name). */
    pageTitle?: React.ReactNode;
    linkComponent?: React.ElementType;
    signedIn?: boolean;
    onMenuClick?: () => void;
    menuLabel?: string;
    /** Small clickable chip (e.g. plan / trial state), signed in only. */
    statusChip?: {
        label: React.ReactNode;
        color?: "primary" | "secondary" | "error" | "warning" | "success" | "default";
        onClick?: () => void;
    };
    /** Theme toggle, signed in only; hidden without `onToggleTheme`. */
    themeMode?: "light" | "dark";
    onToggleTheme?: () => void;
    toDarkLabel?: string;
    toLightLabel?: string;
    signInLabel?: React.ReactNode;
    signInHref?: string;
    onSignIn?: () => void;
}
/**
 * Static app bar: hamburger when signed in, a brand link that grows (optionally
 * swapped for a page title from `sm` up), then a status chip and a theme toggle when
 * signed in, or a sign-in text button when signed out.
 */
export declare function Header13({ brand, brandHref, pageTitle, linkComponent, signedIn, onMenuClick, menuLabel, statusChip, themeMode, onToggleTheme, toDarkLabel, toLightLabel, signInLabel, signInHref, onSignIn, }: Header13Props): React.JSX.Element;
export default Header13;
//# sourceMappingURL=Header13.d.ts.map