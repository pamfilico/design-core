import * as React from "react";
export interface Header55NavItem {
    label: React.ReactNode;
    href: string;
    icon?: React.ReactNode;
}
export interface Header55Props {
    /** Business / site name next to the icon; links to `homeHref`. */
    title: React.ReactNode;
    homeHref: string;
    /** Small icon shown before the title (from `sm`) and in the drawer header. */
    icon?: React.ReactNode;
    /** Nav buttons. The first item is treated as home (active only on an exact match). */
    items: Header55NavItem[];
    /** Current path; used to highlight the active item. */
    activeHref?: string;
    /** Caption at the bottom of the drawer (e.g. "Powered by …"). */
    drawerCaption?: React.ReactNode;
    menuLabel?: string;
    linkComponent?: React.ElementType;
}
/**
 * Sticky storefront bar on the default (paper) surface: icon + site name on the left and
 * icon buttons for each section on the right with a tinted active state. Below `sm` the buttons
 * move into a left drawer with a header, bordered active row and a caption at the bottom.
 */
export declare function Header37(props: Header55Props): React.JSX.Element;
export default Header37;
//# sourceMappingURL=Header37.d.ts.map