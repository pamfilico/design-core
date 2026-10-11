import * as React from "react";
export interface Header64Props {
    /** Screen title; falls back to `brand`. */
    title?: React.ReactNode;
    brand: React.ReactNode;
    /** 36px logo tile shown when there is no back button. */
    logo?: React.ReactNode;
    /** When given, a "‹" back glyph replaces the logo. */
    onBack?: () => void;
    backLabel?: string;
    /** Optional status chip on the right (green when online). */
    status?: {
        label: React.ReactNode;
        online?: boolean;
    };
}
/**
 * Compact sticky mobile app bar (64px): logo tile or a large "‹" back glyph, a bold title and an
 * optional status chip on the right.
 */
export declare function Header46(props: Header64Props): React.JSX.Element;
export default Header46;
//# sourceMappingURL=Header46.d.ts.map