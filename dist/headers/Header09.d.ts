import * as React from "react";
export interface Header09Item {
    label: React.ReactNode;
    href: string;
    active?: boolean;
}
export interface Header09Props {
    items: Header09Item[];
    /** Href of the active item (alternative to `active` on each item). */
    activeHref?: string;
    linkComponent?: React.ElementType;
}
/**
 * Underlined tab strip for a section: a `nav` row with a bottom divider, each link
 * padded, semibold and accent-underlined when active, muted otherwise.
 */
export declare function Header09({ items, activeHref, linkComponent }: Header09Props): React.JSX.Element;
export default Header09;
//# sourceMappingURL=Header09.d.ts.map