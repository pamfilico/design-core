import * as React from "react";
export interface Sidebar10Section {
    /** Id of the page section to jump to. */
    id: string;
    /** Tooltip text. */
    label: string;
    icon: React.ReactNode;
}
export interface Sidebar10Props {
    sections: Sidebar10Section[];
    /** Id of the highlighted section. */
    activeId?: string;
    /** Called with the section id when a button is tapped. */
    onSelect: (id: string) => void;
    /** aria-label on every button (default "scroll"). */
    ariaLabel?: string;
}
/**
 * Floating section navigation for phones: a vertical stack of small FABs fixed at the
 * bottom-left corner (16px / 12px) that stays on screen while the page scrolls. Tapping
 * one jumps to its section; the active one uses the secondary colour. Hidden from `md` up.
 */
export declare function Sidebar10({ sections, activeId, onSelect, ariaLabel }: Sidebar10Props): React.JSX.Element;
export default Sidebar10;
//# sourceMappingURL=Sidebar10.d.ts.map