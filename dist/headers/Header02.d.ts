import * as React from "react";
export interface Header02Item {
    label: string;
    icon: React.ReactNode;
    href: string;
    active?: boolean;
}
export interface Header02Props {
    /** Live tiles. */
    items: Header02Item[];
    /** Disabled tiles shown under a divider and a "Coming soon" caption. */
    comingSoon?: Header02Item[];
    comingSoonLabel?: string;
    /** Tooltip / aria label of the launcher button. */
    title?: string;
    /** Component used for each tile link (e.g. a router link); default "a". */
    linkComponent?: React.ElementType;
}
/**
 * "Waffle" app launcher for a header: a 9-dot icon button that opens a menu with a
 * three-column grid of icon tiles, plus an optional disabled "coming soon" group
 * below a divider. The active tile uses the secondary colour.
 */
export declare function Header02({ items, comingSoon, comingSoonLabel, title, linkComponent, }: Header02Props): React.JSX.Element | null;
export default Header02;
//# sourceMappingURL=Header02.d.ts.map