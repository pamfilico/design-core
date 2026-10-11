import * as React from "react";
export interface Sidebar17Item {
    key?: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
}
export interface Sidebar17Section {
    /** Small heading above the section (e.g. "WORKSPACE"). */
    label?: string;
    items: Sidebar17Item[];
}
export interface Sidebar17Props {
    open: boolean;
    onClose: () => void;
    logo?: React.ReactNode;
    /** Wordmark next to the logo; omit to hide it. */
    brandName?: React.ReactNode;
    onBrandClick?: () => void;
    /** Top-level pages. */
    baseItems: Sidebar17Item[];
    /** Context section (the pages of the item you are inside). Hidden when empty. */
    contextSection?: Sidebar17Section;
    activeHref: string;
    onNavigate?: (href: string) => void;
    linkComponent?: React.ElementType;
}
/**
 * 260px temporary left drawer: a clickable logo + wordmark, the top-level pages with a
 * soft primary-tinted rounded selection, then — when inside a context — a small caption
 * heading and that context's pages in a plain list. Navigating or clicking the brand
 * closes the drawer.
 */
export declare function Sidebar17({ open, onClose, logo, brandName, onBrandClick, baseItems, contextSection, activeHref, onNavigate, linkComponent, }: Sidebar17Props): React.JSX.Element;
export default Sidebar17;
//# sourceMappingURL=Sidebar17.d.ts.map