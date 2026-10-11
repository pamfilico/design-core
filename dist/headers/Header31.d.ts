import * as React from "react";
export interface Header31Item {
    label: React.ReactNode;
    href: string;
}
export interface Header31Props {
    /** Small logo (≈32px) before the name. */
    logo?: React.ReactNode;
    name: React.ReactNode;
    homeHref?: string;
    items: Header31Item[];
    menuLabel?: string;
    closeLabel?: string;
    linkComponent?: React.ElementType;
}
/**
 * Static marketing bar on the neutral AppBar colour: logo + bold name, centred text
 * links, and below `md` a burger that opens a right drawer repeating the brand (with
 * a close button) and the links as a list.
 */
export declare function Header31({ logo, name, homeHref, items, menuLabel, closeLabel, linkComponent, }: Header31Props): React.JSX.Element;
export default Header31;
//# sourceMappingURL=Header31.d.ts.map