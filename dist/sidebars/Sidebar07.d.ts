import * as React from "react";
export interface Sidebar07Item {
    id: string;
    name: string;
    /** Small outlined chips under the name (e.g. "4 steps"). */
    chips?: string[];
}
export interface Sidebar07Props {
    /** Panel heading (e.g. "Projects"). */
    title: React.ReactNode;
    /** Caption under the heading (e.g. "Select one to see its details"). */
    subtitle?: React.ReactNode;
    items: Sidebar07Item[];
    selectedId: string | null;
    onSelect: (id: string) => void;
    /** Shows a spinner instead of the list. */
    loading?: boolean;
    /** Text when `items` is empty. */
    emptyText: React.ReactNode;
    /** Leading icon of every row (default a tree icon). */
    itemIcon?: React.ReactNode;
    /** When set, each row gets an "open" icon button calling this with the item id. */
    onOpen?: (id: string) => void;
    /** Title (hover text) of the open button. */
    openTitle?: string;
    /** Panel width in px (default 320). */
    width?: number;
}
/**
 * Selectable list column: a 320px flat panel with a right border, a heading and caption on
 * top, then a scrolling list of rows, each with an icon, a name (bold when selected), small
 * outlined chips and an optional "open" button. Shows a spinner while loading and a muted
 * line when empty. Sits as the second column next to an app rail.
 */
export declare function Sidebar07({ title, subtitle, items, selectedId, onSelect, loading, emptyText, itemIcon, onOpen, openTitle, width, }: Sidebar07Props): React.JSX.Element;
export default Sidebar07;
//# sourceMappingURL=Sidebar07.d.ts.map