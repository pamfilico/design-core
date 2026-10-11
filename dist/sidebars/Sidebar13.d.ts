import * as React from "react";
export interface Sidebar13Item {
    key?: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
}
export interface Sidebar13Section {
    /** Small uppercase heading above the section. */
    label?: string;
    items: Sidebar13Item[];
    dividerBefore?: boolean;
}
export interface Sidebar13Props {
    sections: Sidebar13Section[];
    /** Current path; an item is active on its own path or anything under it. */
    activeHref: string;
    onNavigate?: (href: string) => void;
    linkComponent?: React.ElementType;
    mobileOpen: boolean;
    onCloseMobile: () => void;
    /** Rendered above the nav in the mobile drawer (identity, sign out). */
    headerSlot?: React.ReactNode;
    /** `auto` (default) switches at `md`. */
    mode?: "auto" | "rail" | "drawer";
    /** The rail is `position: fixed` under an app bar; false drops the spacer toolbar. */
    clearAppBar?: boolean;
}
/**
 * Sectioned list sidebar. From `md` up it is a fixed hover-to-expand icon rail (56px →
 * 208px, no close delay) with fading section captions and tooltips while collapsed; below
 * `md` it is a 240px temporary drawer opened by a header hamburger. It renders either the
 * rail or the drawer, never both. Selection uses `action.selected` with a primary icon.
 */
export declare function Sidebar13({ sections, activeHref, onNavigate, linkComponent, mobileOpen, onCloseMobile, headerSlot, mode, clearAppBar, }: Sidebar13Props): React.JSX.Element;
export default Sidebar13;
//# sourceMappingURL=Sidebar13.d.ts.map