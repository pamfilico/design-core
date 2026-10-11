import * as React from "react";
import { type Header20Item } from "./Header20.tsx";
export interface Header16Link {
    label: React.ReactNode;
    href?: string;
    onClick?: () => void;
    active?: boolean;
}
export interface Header16NavItem extends Header16Link {
    /** When given, the button opens a dropdown of these links. */
    children?: Header16Link[];
}
export interface Header16LoginOption {
    title: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    href: string;
}
export interface Header16BottomItem extends Header16Link {
    icon: React.ReactNode;
}
export interface Header16Props {
    /** Logo (about 50px); clicking it calls `onLogoClick`. */
    logo?: React.ReactNode;
    onLogoClick?: () => void;
    /** Toolbar start slot, e.g. a drawer menu button (see Header18 / Header19). */
    menu?: React.ReactNode;
    /** Transparent bar (default) or the solid primary bar. */
    transparent?: boolean;
    signedIn?: boolean;
    /** On the home page a signed-in user sees the highlight button + public links. */
    onHome?: boolean;
    /** Signed-in app navigation (text buttons, dropdowns for groups). */
    navItems?: Header16NavItem[];
    /** Wiggling call-to-action shown to a signed-in user on the home page. */
    highlight?: Header16Link;
    /** Public section links (stacked icon buttons). */
    publicItems?: Header20Item[];
    /** Hide the whole right-hand auth/tools group. */
    showAuth?: boolean;
    themeMode?: "light" | "dark";
    onToggleTheme?: () => void;
    toDarkLabel?: string;
    toLightLabel?: string;
    locales?: {
        value: string;
        label: string;
    }[];
    locale?: string;
    localeLabel?: string;
    onLocaleChange?: (locale: string) => void;
    /** Extra right-side slot (e.g. an install icon). */
    actions?: React.ReactNode;
    signOutLabel?: React.ReactNode;
    onSignOut?: () => void;
    signInLabel?: React.ReactNode;
    onSignIn?: () => void;
    /** When given, sign-in opens a dropdown of cards (one per kind of account). */
    loginOptions?: Header16LoginOption[];
    /** Signed-in bottom navigation fixed to the bottom of the screen. */
    bottomItems?: Header16BottomItem[];
    linkComponent?: React.ElementType;
}
/**
 * Fixed app/site header (transparent by default). Start: a drawer menu slot and the
 * logo. Desktop (`lg`+): signed-in users get text-button navigation with dropdown
 * groups; on the home page they get a wiggling call-to-action plus the public section
 * links; signed-out visitors get the public links. End: theme toggle, language select
 * (desktop), an actions slot and sign-out / sign-in (optionally a dropdown of account
 * cards). Optional signed-in bottom navigation.
 */
export declare function Header16({ logo, onLogoClick, menu, transparent, signedIn, onHome, navItems, highlight, publicItems, showAuth, themeMode, onToggleTheme, toDarkLabel, toLightLabel, locales, locale, localeLabel, onLocaleChange, actions, signOutLabel, onSignOut, signInLabel, onSignIn, loginOptions, bottomItems, linkComponent, }: Header16Props): React.JSX.Element;
export default Header16;
//# sourceMappingURL=Header16.d.ts.map