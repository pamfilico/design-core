import * as React from "react";
export interface Sidebar08Item {
    id: string;
    name: string;
    /** First muted line (e.g. "text -> list"). */
    caption?: string;
    /** Second, fainter line (e.g. a scope). */
    subcaption?: string;
    /** Small chip at the right (e.g. a kind). */
    tag?: string;
    /** Listed under the secondary group instead of the primary one. */
    secondary?: boolean;
}
export interface Sidebar08Block {
    id: string;
    name: string;
    /** Item ids, in order. */
    steps: string[];
}
export interface Sidebar08Props {
    /** Panel heading (e.g. "Tools"). */
    title: React.ReactNode;
    items: Sidebar08Item[];
    /** Ordered groups of items, shown first as collapsible chains. */
    blocks?: Sidebar08Block[];
    selectedId: string | null;
    loading?: boolean;
    /** Item whose check is running (spinner on its check button). */
    checkingId?: string | null;
    onSelect: (item: Sidebar08Item) => void;
    onNew?: () => void;
    onView?: (item: Sidebar08Item) => void;
    /** Check action, shown on primary-group rows and block rows. */
    onCheck?: (item: Sidebar08Item, e: React.MouseEvent) => void;
    /** Captions of the three groups. */
    blocksLabel: React.ReactNode;
    primaryLabel: React.ReactNode;
    secondaryLabel: React.ReactNode;
    /** Hover titles of the icon buttons. */
    newTitle?: string;
    viewTitle?: string;
    checkTitle?: string;
    /** Panel width in px (default 280). */
    width?: number;
}
/**
 * Right-hand catalogue panel (280px, left border). A heading with a "new" button, then
 * collapsible blocks (an ordered chain of items shown as linked chips, or expanded into a
 * dotted timeline of rows), then a primary and a secondary group of dense rows. Each row
 * shows a name, two caption lines, a tag chip, a "view" button and, on primary rows, a
 * "check" button with a spinner while running.
 */
export declare function Sidebar08({ title, items, blocks, selectedId, loading, checkingId, onSelect, onNew, onView, onCheck, blocksLabel, primaryLabel, secondaryLabel, newTitle, viewTitle, checkTitle, width, }: Sidebar08Props): React.JSX.Element;
export default Sidebar08;
//# sourceMappingURL=Sidebar08.d.ts.map