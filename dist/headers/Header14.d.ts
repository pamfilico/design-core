import * as React from "react";
export interface Header14Item {
    /** Stable key (e.g. a section id). */
    id: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
}
export interface Header14Props {
    brand: React.ReactNode;
    brandHref?: string;
    linkComponent?: React.ElementType;
    /** Section links; `onItemClick` gets the id (e.g. to scroll to a section). */
    items: Header14Item[];
    onItemClick?: (id: string) => void;
    menuLabel?: string;
    themeMode?: "light" | "dark";
    onToggleTheme?: () => void;
    toDarkLabel?: string;
    toLightLabel?: string;
    contactLabel?: React.ReactNode;
    onContact?: () => void;
    signedIn?: boolean;
    dashboardLabel?: React.ReactNode;
    dashboardHref?: string;
    signOutLabel?: React.ReactNode;
    onSignOut?: () => void;
    getStartedLabel?: React.ReactNode;
    signInLabel?: React.ReactNode;
    signInHref?: string;
}
/**
 * Fixed landing header on the paper colour: below `lg` a hamburger opens a right
 * drawer of icon links; brand; centred icon text buttons on `lg`+; then theme toggle,
 * contact, and either dashboard (contained) + sign out or get started (contained) +
 * sign in.
 */
export declare function Header14({ brand, brandHref, linkComponent, items, onItemClick, menuLabel, themeMode, onToggleTheme, toDarkLabel, toLightLabel, contactLabel, onContact, signedIn, dashboardLabel, dashboardHref, signOutLabel, onSignOut, getStartedLabel, signInLabel, signInHref, }: Header14Props): React.JSX.Element;
export default Header14;
//# sourceMappingURL=Header14.d.ts.map