import * as React from "react";
export interface Header66Section {
    /** Section id to scroll to. */
    id: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
}
export interface Header66SignInOption {
    key: string;
    href: string;
    title: React.ReactNode;
    body?: React.ReactNode;
    icon?: React.ReactNode;
}
export interface Header66Props {
    brand: React.ReactNode;
    brandHref?: string;
    /** In-page sections; centred buttons from `lg`, a right drawer below. */
    sections: Header66Section[];
    /** Called with the section id. Defaults to smooth-scrolling to the element with that id. */
    onSectionClick?: (id: string) => void;
    menuLabel?: string;
    themeMode?: "light" | "dark";
    onToggleTheme?: () => void;
    toDarkLabel?: string;
    toLightLabel?: string;
    signedIn?: boolean;
    dashboardLabel: React.ReactNode;
    dashboardHref?: string;
    /** Signed out: the contained primary call to action. */
    ctaLabel: React.ReactNode;
    ctaHref?: string;
    /** Signed out: "Sign in ▾" opening a menu of sign-in cards. */
    signInLabel: React.ReactNode;
    signInOptions: Header66SignInOption[];
    position?: "fixed" | "static" | "sticky";
    linkComponent?: React.ElementType;
}
/**
 * Marketing top bar on the paper surface: brand on the left, centred icon buttons that scroll to
 * page sections (a right-hand drawer below `lg`), and on the right a theme toggle plus either
 * "Go to dashboard" or a contained call to action and a "Sign in ▾" chooser.
 */
export declare function Header48(props: Header66Props): React.JSX.Element;
export default Header48;
//# sourceMappingURL=Header48.d.ts.map