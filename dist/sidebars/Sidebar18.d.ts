import * as React from "react";
export interface Sidebar18Item {
    key?: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
}
export interface Sidebar18Props {
    /** AppBar title. */
    title: React.ReactNode;
    /** Signed-in user's name, shown before the logout button. */
    username?: React.ReactNode;
    onLogout: () => void;
    /** Logout button label (default "Logout"). */
    logoutLabel?: React.ReactNode;
    items: Sidebar18Item[];
    /** Current path; the matching item (or anything under it) is selected. */
    activeHref: string;
    onNavigate?: (href: string) => void;
    /** Link component (e.g. a router link). Defaults to "a". */
    linkComponent?: React.ElementType;
    /** Heading at the top of the drawer (default "Admin Panel"). */
    drawerTitle?: React.ReactNode;
    /** aria-label of the hamburger (default "open navigation"). */
    openNavLabel?: string;
    /** Initial drawer state. */
    defaultOpen?: boolean;
}
/**
 * Static top bar (hamburger, title, user name, logout) whose hamburger opens a 250px
 * temporary left drawer: a primary-coloured heading, a divider and a list of icon + label
 * rows. Picking a row navigates and closes the drawer.
 */
export declare function Sidebar18({ title, username, onLogout, logoutLabel, items, activeHref, onNavigate, linkComponent, drawerTitle, openNavLabel, defaultOpen, }: Sidebar18Props): React.JSX.Element;
export default Sidebar18;
//# sourceMappingURL=Sidebar18.d.ts.map