import * as React from "react";
export interface Header23Props {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    /** Right-aligned slot. */
    end?: React.ReactNode;
    onBack?: () => void;
    backLabel?: string;
    mb?: number;
}
/**
 * Inline "go back" row: a back-arrow icon button, a stacked title / subtitle, and an
 * end slot on the right.
 */
export declare function Header23({ title, subtitle, end, onBack, backLabel, mb }: Header23Props): React.JSX.Element;
export default Header23;
//# sourceMappingURL=Header23.d.ts.map