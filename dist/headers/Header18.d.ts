import * as React from "react";
export interface Header18Item {
    label: React.ReactNode;
    icon?: React.ReactNode;
    /** Either a link… */
    href?: string;
    /** …or a handler (e.g. scroll to a section). */
    onClick?: () => void;
}
export interface Header18Props {
    items: Header18Item[];
    /** Rendered under the list inside the drawer (e.g. a language select). */
    footer?: React.ReactNode;
    menuLabel?: string;
    linkComponent?: React.ElementType;
}
/**
 * Hamburger for the start of a toolbar that opens a 250px left drawer with a list
 * of small-icon links and an optional footer slot. Clicking anywhere in the drawer
 * closes it.
 */
export declare function Header18({ items, footer, menuLabel, linkComponent }: Header18Props): React.JSX.Element;
export default Header18;
//# sourceMappingURL=Header18.d.ts.map