import * as React from "react";
export interface Header54Props {
    /** Logo on the far left; clicking it is the way back home. */
    logo: React.ReactNode;
    /** Href of the logo link (default "/"). */
    logoHref?: string;
    /** Optional slot on the right. Empty in the original. */
    right?: React.ReactNode;
    linkComponent?: React.ElementType;
}
/**
 * Minimal header for sign-in pages: a transparent, blurred bar with a bottom divider and only the
 * logo (linked home) on the left.
 */
export declare function Header36(props: Header54Props): React.JSX.Element;
export default Header36;
//# sourceMappingURL=Header36.d.ts.map