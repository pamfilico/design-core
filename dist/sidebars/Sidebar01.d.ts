import * as React from "react";
export interface Sidebar01Item {
    label: string;
    href: string;
    icon: React.ReactNode;
    /** When set, used instead of the default prefix match on `href`. */
    matchPath?: (pathname: string) => boolean;
    /** Render as a non-interactive, muted row (e.g. "coming soon"). */
    disabled?: boolean;
    /** Nested sub-items, indented below this item (shown when expanded / in the drawer). */
    children?: Sidebar01Item[];
    /** Overrides the auto `sidebar-item-<slug>` test id. */
    testId?: string;
    /** When set, runs instead of following `href` (e.g. history back). */
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
export interface Sidebar01Section {
    sectionLabel?: string;
    items: Sidebar01Item[];
    /** Subtle divider above this section. */
    dividerBefore?: boolean;
}
export interface Sidebar01Props {
    sections: Sidebar01Section[];
    /** Current path; drives the active row. */
    activeHref: string;
    /** Link component (e.g. a router link). Defaults to "a". */
    linkComponent?: React.ElementType;
    /** Called with the href when a row is clicked (after the item's own onClick). */
    onNavigate?: (href: string) => void;
    /** When set, viewports below `md` use a temporary drawer; otherwise the rail is used at all sizes. */
    mobileDrawer?: {
        open: boolean;
        onClose: () => void;
    };
    /** Width of the temporary mobile drawer (default 220). */
    drawerWidth?: number;
    /** Optional block above the nav. A function receives `{ expanded }` (rail state). */
    header?: React.ReactNode | ((ctx: {
        expanded: boolean;
    }) => React.ReactNode);
    /** Divider between header and nav (default true). */
    headerDivider?: boolean;
    /** Tooltip suffix for disabled rows on the collapsed rail (default " — coming soon"). */
    disabledSuffix?: string;
    /** Root `data-testid` (default "sidebar"). */
    testId?: string;
    /** Optional chip rendered at the top-right of every row. */
    itemChip?: (item: Sidebar01Item) => React.ReactNode;
}
/**
 * Sectioned app sidebar. From `md` up (or always, without `mobileDrawer`) it is a
 * hover-to-expand icon rail: 48px collapsed, 200px expanded, closing 400ms after the
 * pointer leaves, with tooltips while collapsed. Below `md`, with `mobileDrawer`, it is a
 * temporary drawer with full labels. Supports section captions, dividers, nested children,
 * disabled ("coming soon") rows and a header slot.
 */
export declare function Sidebar01({ sections, activeHref, linkComponent, onNavigate, mobileDrawer, drawerWidth, header, headerDivider, disabledSuffix, testId, itemChip, }: Sidebar01Props): React.JSX.Element;
export default Sidebar01;
//# sourceMappingURL=Sidebar01.d.ts.map