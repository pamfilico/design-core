import * as React from "react";
export interface Footer04Link {
    label: React.ReactNode;
    href: string;
}
export interface Footer04Props {
    /** Leading copyright text, e.g. "© 2024 Company by". */
    copyright: React.ReactNode;
    /** Bold credit link after the copyright. */
    credit?: Footer04Link;
    /** Underlined text links on the right (e.g. Terms, Privacy). */
    links: Footer04Link[];
    /** Called with the link href on click. When omitted, the browser navigates to href. */
    onNavigate?: (href: string) => void;
    /** Pin the bar to the bottom of the viewport (default true). */
    fixed?: boolean;
}
/**
 * Slim footer bar fixed to the bottom of the viewport with a soft top shadow:
 * a primary-coloured copyright with a bold credit link, then underlined text links.
 */
export declare function Footer04(props: Footer04Props): React.JSX.Element;
export default Footer04;
//# sourceMappingURL=Footer04.d.ts.map