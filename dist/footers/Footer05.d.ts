import * as React from "react";
export interface Footer05Link {
    label: React.ReactNode;
    href: string;
}
export interface Footer05Props {
    /** Leading copyright text, e.g. "© 2024". */
    copyright: React.ReactNode;
    /** Bold credit link after the copyright. */
    credit?: Footer05Link;
    /** Underlined text links on the right (e.g. Terms, Privacy). */
    links: Footer05Link[];
    /** Called with the link href on click. When omitted, the browser navigates to href. */
    onNavigate?: (href: string) => void;
}
/**
 * Centered in-flow footer row with a top border on the paper background:
 * a primary-coloured copyright with a bold credit link, then underlined text links.
 */
export declare function Footer05(props: Footer05Props): React.JSX.Element;
export default Footer05;
//# sourceMappingURL=Footer05.d.ts.map