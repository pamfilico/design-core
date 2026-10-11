import * as React from "react";
export interface Sidebar19Item {
    key?: string;
    label: string;
    href: string;
    /** Sub-items, shown in an indented collapse while the item is expanded. */
    children?: Sidebar19Item[];
}
export interface Sidebar19Props {
    /** AppBar title. */
    title: React.ReactNode;
    /** Signed-in user's name, shown before the logout button. */
    username?: React.ReactNode;
    onLogout: () => void;
    /** Logout button label (default "Logout"). */
    logoutLabel?: React.ReactNode;
    items: Sidebar19Item[];
    /** Current path; drives selection and which items are expanded. */
    activeHref: string;
    onNavigate?: (href: string) => void;
    /** Link component (e.g. a router link). Defaults to "a". */
    linkComponent?: React.ElementType;
    /** Which items show their children. Default: while the current path is under the item. */
    isExpanded?: (item: Sidebar19Item) => boolean;
    /** Max width of the main container; false for full-width pages (default "lg"). */
    containerMaxWidth?: "lg" | false;
    /** Drawer width in px (default 220). */
    drawerWidth?: number;
    children?: React.ReactNode;
}
/**
 * Whole admin frame: a full-width top bar (title, user name, logout) above a permanent
 * 220px drawer of text-only links, and the page in a container beside it. An item with
 * `children` expands into an indented, dense sub-list while you are inside it; a parent is
 * only selected on its own page, not while one of its children is.
 */
export declare function Sidebar19({ title, username, onLogout, logoutLabel, items, activeHref, onNavigate, linkComponent, isExpanded, containerMaxWidth, drawerWidth, children, }: Sidebar19Props): React.JSX.Element;
export default Sidebar19;
//# sourceMappingURL=Sidebar19.d.ts.map