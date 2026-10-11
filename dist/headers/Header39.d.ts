import * as React from "react";
export interface Header57Props {
    /** Back link text, e.g. "Back to results". */
    backLabel: React.ReactNode;
    onBack?: () => void;
    /** Current page / owner name shown after a "›" separator (from `sm`). */
    currentLabel?: React.ReactNode;
    /** Accessible label of the nav landmark (default "breadcrumb"). */
    ariaLabel?: string;
    /**
     * "fixed" floats the chip at the top-left, after a 40px floating home logo (as in the original);
     * "static" renders it inline.
     */
    position?: "fixed" | "static";
    /** Left offset when fixed (default 56 = 8 + 40 + 8). */
    left?: number;
}
/**
 * Floating breadcrumb chip for a focused flow such as a checkout: a translucent, blurred rounded
 * box with "‹ Back" and, from `sm`, "› Current". Lifts slightly on hover. Adds no second header.
 */
export declare function Header39(props: Header57Props): React.JSX.Element;
export default Header39;
//# sourceMappingURL=Header39.d.ts.map