import * as React from "react";
export interface Sidebar21Action {
    key: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    /** Scroll to a section, navigate, … The drawer closes afterwards. */
    onClick: () => void;
}
export interface Sidebar21Props {
    items: Sidebar21Action[];
    /** Rendered at the end of the list (e.g. a language switcher). */
    footerSlot?: React.ReactNode;
    /** aria-label of the hamburger (default "menu"). */
    menuLabel?: string;
    /** Controlled open state; uncontrolled when omitted. */
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    /** Initial state when uncontrolled. */
    defaultOpen?: boolean;
}
/**
 * Public (signed-out) menu: a hamburger button that opens a 250px left drawer of action
 * rows with small icons, followed by an optional footer slot. Each row runs its action and
 * closes the drawer.
 */
export declare function Sidebar21({ items, footerSlot, menuLabel, open, onOpenChange, defaultOpen, }: Sidebar21Props): React.JSX.Element;
export default Sidebar21;
//# sourceMappingURL=Sidebar21.d.ts.map