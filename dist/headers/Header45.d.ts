import * as React from "react";
export interface Header63Props {
    /** Screen title; falls back to `brand`. */
    title?: React.ReactNode;
    /** Name shown when there is no title. */
    brand: React.ReactNode;
    /** 38px logo tile shown when there is no back button. */
    logo?: React.ReactNode;
    /** When given, a back arrow replaces the logo. */
    onBack?: () => void;
    backLabel?: string;
    /** Optional online/offline style status chip at the start of the right group. */
    status?: {
        label: React.ReactNode;
        online?: boolean;
    };
    /** Right-hand slot (icon buttons, install, settings…). */
    right?: React.ReactNode;
}
/**
 * Sticky mobile app bar (safe-area aware, 68px): logo tile or back arrow, a bold tight-tracked
 * title that truncates, and a right group with an optional status chip and actions.
 */
export declare function Header45(props: Header63Props): React.JSX.Element;
export default Header45;
//# sourceMappingURL=Header45.d.ts.map