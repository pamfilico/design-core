import * as React from "react";
export interface Footer02Link {
    label: React.ReactNode;
    href: string;
}
export interface Footer02Column {
    /** Column heading, e.g. "Support" or "Legal". */
    title: React.ReactNode;
    links: Footer02Link[];
}
export interface Footer02Props {
    /** Name shown as the heading of the first column. */
    brandName: React.ReactNode;
    /** Short description under the brand name. */
    description?: React.ReactNode;
    /** Link columns after the brand column. */
    columns: Footer02Column[];
    /** Centered copyright line under the columns. */
    copyright: React.ReactNode;
    /** Component used to render links (e.g. a router link). Defaults to "a". */
    linkComponent?: React.ElementType;
    /** Width of each column on md+ screens, out of 12 (default 3). */
    columnSize?: number;
}
/**
 * Multi-column site footer: a brand column with a short description, then
 * headed columns of stacked links, and a centered copyright line below.
 * Columns stack on mobile, two per row on small screens.
 */
export declare function Footer02(props: Footer02Props): React.JSX.Element;
export default Footer02;
//# sourceMappingURL=Footer02.d.ts.map