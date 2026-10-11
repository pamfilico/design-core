import * as React from "react";
export interface Footer01Link {
    label: React.ReactNode;
    href: string;
}
export interface Footer01Props {
    /** Copyright line, e.g. "© 2025 Company. All rights reserved." */
    copyright: React.ReactNode;
    /** Links on the right (default: Privacy Policy, Terms of Service). */
    links?: Footer01Link[];
    /** Component used to render links (e.g. a router link). Defaults to "a". */
    linkComponent?: React.ElementType;
    /** Hide the footer on extra-small screens (default true, like the original). */
    hideOnMobile?: boolean;
}
/**
 * Compact grey footer bar: copyright on the left, small text links on the right.
 * Stacks vertically on small screens and is hidden on extra-small screens by default.
 */
export declare function Footer01(props: Footer01Props): React.JSX.Element;
export default Footer01;
//# sourceMappingURL=Footer01.d.ts.map