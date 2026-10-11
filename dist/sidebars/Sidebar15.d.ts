import * as React from "react";
export interface Sidebar15Item {
    key?: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
    /** Tooltip text when it differs from the label. */
    tooltip?: string;
    /** Sub-items: the button opens a flyout menu instead of navigating. */
    children?: Sidebar15Item[];
}
export interface Sidebar15Props {
    items: Sidebar15Item[];
    /** Pinned below a divider at the bottom. */
    footerItems?: Sidebar15Item[];
    /** Rendered first in the footer (e.g. a language selector). */
    footerSlot?: React.ReactNode;
    activeHref: string;
    onNavigate?: (href: string) => void;
    linkComponent?: React.ElementType;
    /** Shows the logout button when given. */
    onLogout?: () => void;
    logoutLabel?: string;
}
/**
 * Floating 64px icon rail: a rounded, elevated paper column of 48px icon buttons with
 * tooltips to the right. The active item is filled with the primary colour. An item with
 * `children` opens a flyout menu beside it instead of navigating. A footer block (custom
 * slot, footer items, logout with an error-tinted hover) is pinned to the bottom.
 */
export declare function Sidebar15({ items, footerItems, footerSlot, activeHref, onNavigate, linkComponent, onLogout, logoutLabel, }: Sidebar15Props): React.JSX.Element;
export default Sidebar15;
//# sourceMappingURL=Sidebar15.d.ts.map