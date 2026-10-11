import * as React from "react";
export interface Header52LocaleOption {
    value: string;
    label: string;
}
/** One entry of the sign-in chooser ("which sign-in?"). */
export interface Header52SignInOption {
    key: string;
    href: string;
    title: React.ReactNode;
    body?: React.ReactNode;
    icon?: React.ReactNode;
}
export interface Header52Props {
    /** Logo / lockup on the left. */
    logo?: React.ReactNode;
    /** Href of the logo link (default "/"). */
    logoHref?: string;
    /** Optional slot rendered above the toolbar. */
    banner?: React.ReactNode;
    signedIn?: boolean;
    dashboardLabel: React.ReactNode;
    dashboardHref?: string;
    signOutLabel: React.ReactNode;
    onSignOut?: () => void;
    signInLabel: string;
    /** Sign-in doors shown in a menu of cards. With one option or none, the button links straight to `signInHref`. */
    signInOptions?: Header52SignInOption[];
    signInHref?: string;
    /** Drawer (phones) title, close label and the label of the appearance row. */
    menuLabel: string;
    closeMenuLabel: string;
    appearanceLabel: React.ReactNode;
    locales?: Header52LocaleOption[];
    locale?: string;
    localeLabel?: string;
    onLocaleChange?: (locale: string) => void;
    themeMode?: "light" | "dark";
    onToggleTheme?: () => void;
    toDarkLabel?: string;
    toLightLabel?: string;
    /** Install control, shown only when given. */
    onInstall?: () => void;
    installLabel?: string;
    linkComponent?: React.ElementType;
}
/**
 * Public top bar that stays usable on a phone: logo and Sign in at every width; on `md`+ the
 * settings (install, theme, language) and Dashboard / Sign out sit in the bar, below `md` they move
 * into a right-hand drawer behind a menu button. Sign in can open a chooser of sign-in doors.
 */
export declare function Header34(props: Header52Props): React.JSX.Element;
export default Header34;
//# sourceMappingURL=Header34.d.ts.map