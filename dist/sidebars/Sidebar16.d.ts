import * as React from "react";
import { type Sidebar15Props } from "./Sidebar15.tsx";
export interface Sidebar16Props extends Sidebar15Props {
    /** Smaller menu button for dense mobile headers. */
    compact?: boolean;
    /** Controlled open state; uncontrolled when omitted. */
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    /** Initial state when uncontrolled. */
    defaultOpen?: boolean;
    menuLabel?: string;
    closeLabel?: string;
}
/**
 * Hamburger button plus a transparent left drawer in which the floating icon rail
 * (Sidebar15) hangs: an 80px column with a round close button on top and the rail
 * filling the rest, with bottom padding to clear a fixed bottom tab bar. Navigating
 * closes the drawer.
 */
export declare function Sidebar16({ compact, open, onOpenChange, defaultOpen, menuLabel, closeLabel, ...rail }: Sidebar16Props): React.JSX.Element;
export default Sidebar16;
//# sourceMappingURL=Sidebar16.d.ts.map