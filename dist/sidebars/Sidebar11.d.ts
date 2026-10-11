import * as React from "react";
export interface Sidebar11Section {
    /** Id of the page section to jump to. */
    id: string;
    /** Tooltip text. */
    label: string;
    icon: React.ReactNode;
}
export interface Sidebar11Props {
    sections: Sidebar11Section[];
    /** Id of the highlighted section. */
    activeId?: string;
    /** Called with the section id when a button is tapped. */
    onSelect: (id: string) => void;
    /** aria-label on every button (default "scroll"). */
    ariaLabel?: string;
}
/**
 * Floating section navigation for phones, as a horizontal row: each small FAB is fixed at
 * 12% from the top and spaced 56px apart from 10% of the width, so the row stays put while
 * the page scrolls (usually rendered inside a header bar). Tapping one jumps to its section;
 * the active one uses the secondary colour. Hidden from `md` up.
 */
export declare function Sidebar11({ sections, activeId, onSelect, ariaLabel }: Sidebar11Props): React.JSX.Element;
export default Sidebar11;
//# sourceMappingURL=Sidebar11.d.ts.map