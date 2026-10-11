import * as React from "react";
export interface Header59Props {
    /** Optional slot on the left (empty in the original, where the brand was switched off). */
    left?: React.ReactNode;
    homeLabel: React.ReactNode;
    homeHref?: string;
    contactLabel: React.ReactNode;
    /** Opens the contact dialog. */
    onContact?: () => void;
    menuLabel?: string;
    linkComponent?: React.ElementType;
}
/**
 * Transparent 70px bar with a single Contact button on the right; below `sm` it becomes a
 * hamburger opening a left drawer with large Home and Contact rows.
 */
export declare function Header41(props: Header59Props): React.JSX.Element;
export default Header41;
//# sourceMappingURL=Header41.d.ts.map