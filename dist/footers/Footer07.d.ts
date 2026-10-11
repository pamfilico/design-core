import * as React from "react";
export interface Footer07Link {
    label: React.ReactNode;
    href: string;
}
export interface Footer07Props {
    /** Leading copyright text, e.g. "© 2024". */
    copyright: React.ReactNode;
    /** Credit link after the copyright. */
    credit?: Footer07Link;
    /** Links after the copyright (default: Terms, Privacy). */
    links?: Footer07Link[];
    /** Solid black background (default true). When false the bar is transparent. */
    solid?: boolean;
    /** Open the links in a new tab (default true). */
    openInNewTab?: boolean;
}
/**
 * Minimal 60px bar fixed to the bottom of the viewport with white text:
 * "© year credit" followed by inline links, all centered.
 */
export declare function Footer07(props: Footer07Props): React.JSX.Element;
export default Footer07;
//# sourceMappingURL=Footer07.d.ts.map