import * as React from "react";
export interface Sidebar05Item {
    key?: string;
    label: string;
    href: string;
    icon: React.ReactNode;
    /** Overrides the default "href or anything under it" match. */
    matchPath?: (pathname: string) => boolean;
}
export interface Sidebar05Props {
    /** Bold title (e.g. the workspace name). */
    title: string;
    /** Muted caption under the title on the expanded rail (e.g. "Workspace"). */
    caption?: React.ReactNode;
    /** Primary rows. On phones they become scrollable tabs. */
    items: Sidebar05Item[];
    /** Caption of the secondary group (e.g. "More"). */
    secondaryLabel?: React.ReactNode;
    /** Secondary rows, below a divider. On phones they become inline links. */
    secondaryItems?: Sidebar05Item[];
    activeHref: string;
    onNavigate?: (href: string) => void;
    linkComponent?: React.ElementType;
    /** `aria-label` of the rail (e.g. "Workspace navigation"). */
    ariaLabel?: string;
    /** The page, rendered beside the rail (desktop) or under the tabs (phone). */
    children?: React.ReactNode;
}
/**
 * Scoped workspace shell. From `md` up: a hover-to-expand rail (56px → 220px) with a
 * title block that collapses to initials, primary rows, then a captioned secondary group
 * below a divider, and the page beside it. Below `md`: a sticky bar with the title,
 * scrollable tabs for the primary rows and a line of inline links for the secondary ones.
 */
export declare function Sidebar05({ title, caption, items, secondaryLabel, secondaryItems, activeHref, onNavigate, linkComponent, ariaLabel, children, }: Sidebar05Props): React.JSX.Element;
export default Sidebar05;
//# sourceMappingURL=Sidebar05.d.ts.map