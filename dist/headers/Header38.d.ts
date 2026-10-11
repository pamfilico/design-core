import * as React from "react";
export interface Header56Props {
    /** Article title (rendered as h1 in the h2 style). */
    title: React.ReactNode;
    /** Author name; shown as "{byLabel} {author}". */
    author?: React.ReactNode;
    /** Publication date, already formatted by the caller. */
    date?: React.ReactNode;
    /** Prefix before the author (default "By"). */
    byLabel?: React.ReactNode;
    /** Call-to-action button on the right; hidden when `onAction` is missing. */
    actionLabel?: React.ReactNode;
    onAction?: () => void;
    actionIcon?: React.ReactNode;
}
/**
 * Article header: a large title with a prominent contained call-to-action on the right (wrapping
 * under the title on small screens) and a "By author | date" line beneath.
 */
export declare function Header38(props: Header56Props): React.JSX.Element;
export default Header38;
//# sourceMappingURL=Header38.d.ts.map