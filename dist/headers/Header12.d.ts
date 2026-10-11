import * as React from "react";
export interface Header12Item {
    label: React.ReactNode;
    href: string;
    icon?: React.ReactNode;
}
export interface Header12Props {
    /** Business / site name shown next to the icon. */
    name: React.ReactNode;
    nameHref?: string;
    /** Small icon before the name (hidden on xs) and in the drawer band. */
    icon?: React.ReactNode;
    items: Header12Item[];
    /** Current path; exact match for `nameHref`, prefix match for the rest. */
    activeHref?: string;
    /** Caption at the bottom of the mobile drawer. */
    drawerFooter?: React.ReactNode;
    linkComponent?: React.ElementType;
    menuLabel?: string;
    closeLabel?: string;
}
/**
 * Sticky public-site header on the primary colour: icon + name link, icon text
 * buttons on desktop (active one tinted), and below `md` a hamburger that opens a
 * left drawer with a primary-coloured name band, an icon list whose active item has
 * a primary left border, and an optional footer caption.
 */
export declare function Header12({ name, nameHref, icon, items, activeHref, drawerFooter, linkComponent, menuLabel, closeLabel, }: Header12Props): React.JSX.Element;
export default Header12;
//# sourceMappingURL=Header12.d.ts.map