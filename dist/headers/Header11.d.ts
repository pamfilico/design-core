import * as React from "react";
export interface Header11Item {
    label: React.ReactNode;
    href: string;
    icon?: React.ReactNode;
}
export interface Header11Props {
    title: React.ReactNode;
    /** Heading at the top of the drawer. */
    drawerTitle?: React.ReactNode;
    items: Header11Item[];
    /** Current path; the matching item (or its parent) is selected. */
    activeHref?: string;
    /** Called with the item's href; the drawer then closes. Without it items are plain links. */
    onNavigate?: (href: string) => void;
    linkComponent?: React.ElementType;
    /** Name shown before the sign-out button. */
    userName?: React.ReactNode;
    signOutLabel?: React.ReactNode;
    onSignOut?: () => void;
    menuLabel?: string;
}
/**
 * Static admin bar: a hamburger that opens a temporary left drawer (title, divider,
 * icon list with the current item selected), the title, the signed-in name and a
 * sign-out text button.
 */
export declare function Header11({ title, drawerTitle, items, activeHref, onNavigate, linkComponent, userName, signOutLabel, onSignOut, menuLabel, }: Header11Props): React.JSX.Element;
export default Header11;
//# sourceMappingURL=Header11.d.ts.map