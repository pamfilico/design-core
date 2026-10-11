import * as React from "react";
export interface Sidebar14Item {
    key?: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
}
export interface Sidebar14Props {
    /** Brand shown at the top of the drawer (wordmark text or a logo node). */
    brand?: React.ReactNode;
    items: Sidebar14Item[];
    /** Current path; the exactly matching item is selected and titles the app bar. */
    activeHref: string;
    onNavigate?: (href: string) => void;
    linkComponent?: React.ElementType;
    onSignOut: () => void;
    signOutLabel?: string;
    openNavLabel?: string;
    /** App bar title when no item matches the current path. */
    fallbackTitle?: string;
    /** Drawer width in px (default 240). */
    railWidth?: number;
    /** Colour the brand with the primary colour (default true). */
    brandColored?: boolean;
    /** `auto` (default) switches at `md`. */
    mode?: "auto" | "permanent" | "temporary";
    testid?: string;
    children?: React.ReactNode;
}
/**
 * Whole signed-in frame: a permanent 240px drawer (brand, page list, sign out) from `md`
 * up, a temporary drawer opened by a hamburger below it, and an app bar offset by the
 * drawer that shows the current page's label. Two drawers rather than one that changes
 * variant, so a resize never remounts the page content.
 */
export declare function Sidebar14({ brand, items, activeHref, onNavigate, linkComponent, onSignOut, signOutLabel, openNavLabel, fallbackTitle, railWidth, brandColored, mode, testid, children, }: Sidebar14Props): React.JSX.Element;
export default Sidebar14;
//# sourceMappingURL=Sidebar14.d.ts.map