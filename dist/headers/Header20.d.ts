import * as React from "react";
export interface Header20Item {
    /** Short label under the icon. */
    label: React.ReactNode;
    /** Longer tooltip text (defaults to the label). */
    tooltip?: React.ReactNode;
    icon: React.ReactNode;
    href?: string;
    onClick?: () => void;
}
export interface Header20Props {
    items: Header20Item[];
    linkComponent?: React.ElementType;
}
/**
 * Compact row of stacked icon-over-label text buttons for a toolbar (public site
 * sections), each with an arrow tooltip. Renders a fragment so it flows inline.
 */
export declare function Header20({ items, linkComponent }: Header20Props): React.JSX.Element;
export default Header20;
//# sourceMappingURL=Header20.d.ts.map