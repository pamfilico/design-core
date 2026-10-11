import * as React from "react";
export interface Header19SubItem {
    label: React.ReactNode;
    icon?: React.ReactNode;
    href: string;
    active?: boolean;
}
export interface Header19Item {
    /** Tooltip text (shown to the right of the icon). */
    label: string;
    icon: React.ReactNode;
    href: string;
    active?: boolean;
    /** Count badge on the icon. */
    badge?: number;
    /** When given, the icon opens a menu of these instead of navigating. */
    children?: Header19SubItem[];
}
export interface Header19Props {
    /** Scrollable main items. */
    items: Header19Item[];
    /** Fixed items under the divider at the bottom (billing, help, settings…). */
    bottomItems?: Header19Item[];
    /** Called with the target href; the menu closes. */
    onNavigate?: (href: string) => void;
    /** Compact language picker at the top of the bottom group; hidden without locales. */
    locales?: {
        value: string;
        label: string;
    }[];
    locale?: string;
    onLocaleChange?: (locale: string) => void;
    localeLabel?: string;
    /** Shows the sign-out icon (hover turns it red). */
    onSignOut?: () => void;
    signOutLabel?: string;
    /** Smaller hamburger for dense headers. */
    compact?: boolean;
    menuLabel?: string;
    closeLabel?: string;
}
/**
 * Hamburger that opens a transparent left drawer holding a floating close button
 * and a 64px rounded paper rail of icon buttons with right-side tooltips. Active
 * items are filled with the primary colour; group items open a side menu. The
 * bottom group (language, extra links, sign-out) stays pinned under a divider.
 */
export declare function Header19({ items, bottomItems, onNavigate, locales, locale, onLocaleChange, localeLabel, onSignOut, signOutLabel, compact, menuLabel, closeLabel, }: Header19Props): React.JSX.Element;
export default Header19;
//# sourceMappingURL=Header19.d.ts.map