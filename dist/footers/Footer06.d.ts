import * as React from "react";
export interface Footer06Link {
    label: React.ReactNode;
    href: string;
}
export interface Footer06Props {
    /** Business name shown after "© {year}". */
    businessName?: React.ReactNode;
    /** Year in the copyright (default: current year). */
    year?: number;
    /** Legal links in the middle (e.g. Terms, Privacy, Cookies). */
    links: Footer06Link[];
    /** "Powered by" label on the right. */
    poweredByLabel?: React.ReactNode;
    /** Bold name after the "Powered by" label. */
    poweredByName?: React.ReactNode;
}
/**
 * Bordered paper footer for a business's public page: "© year name" on the left,
 * a row of legal links in the middle and a "Powered by" credit on the right.
 * Stacks left-aligned on mobile.
 */
export declare function Footer06(props: Footer06Props): React.JSX.Element;
export default Footer06;
//# sourceMappingURL=Footer06.d.ts.map