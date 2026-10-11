import * as React from "react";
export interface Sidebar20Item {
    key?: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
    /** Tooltip text when it differs from the label. */
    tooltip?: string;
    /** Destructive styling (error colour). */
    danger?: boolean;
    /** Draw a divider after this item (group separator). */
    dividerAfter?: boolean;
}
export interface Sidebar20Props {
    items: Sidebar20Item[];
    /** Current path; drives the active button. */
    activeHref: string;
    onNavigate?: (href: string) => void;
    /** Link component (e.g. a router link). Defaults to "a". */
    linkComponent?: React.ElementType;
    /** Active rule. Defaults to an exact match on the href without its query string. */
    isActive?: (activeHref: string, item: Sidebar20Item) => boolean;
}
/**
 * A sticky 64px floating rail of 48px icon buttons with tooltips on the right, kept on
 * screen next to the page (not in a drawer). The active button is filled with the primary
 * colour; `danger` items use the error colour; `dividerAfter` separates groups.
 */
export declare function Sidebar20({ items, activeHref, onNavigate, linkComponent, isActive, }: Sidebar20Props): React.JSX.Element;
export default Sidebar20;
//# sourceMappingURL=Sidebar20.d.ts.map