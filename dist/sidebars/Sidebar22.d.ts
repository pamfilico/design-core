import * as React from "react";
export interface Sidebar22Action {
    key: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    /** Scroll to a section, navigate, … The drawer closes afterwards. */
    onClick: () => void;
}
export interface Sidebar22Props {
    items: Sidebar22Action[];
    /** aria-label of the hamburger (default "open navigation menu"). */
    menuLabel?: string;
    /** Controlled open state; uncontrolled when omitted. */
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    /** Initial state when uncontrolled. */
    defaultOpen?: boolean;
}
/**
 * Landing-page menu: a hamburger button that opens a 280px drawer from the RIGHT, with
 * roomy rows, primary-coloured icons and bold labels. Each row runs its action and closes
 * the drawer.
 */
export declare function Sidebar22({ items, menuLabel, open, onOpenChange, defaultOpen, }: Sidebar22Props): React.JSX.Element;
export default Sidebar22;
//# sourceMappingURL=Sidebar22.d.ts.map