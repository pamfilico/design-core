import * as React from "react";
export interface Header27Props {
    /** Large logo at the left (≈100px). */
    logo?: React.ReactNode;
    onLogoClick?: () => void;
    /** Small mark before the centred title (≈40px). */
    titleIcon?: React.ReactNode;
    title: React.ReactNode;
    /** Appended to the title after a dash (e.g. "Unit: 204"). */
    detail?: React.ReactNode;
    signedIn?: boolean;
    signOutLabel?: React.ReactNode;
    onSignOut?: () => void;
    signInLabel?: React.ReactNode;
    onSignIn?: () => void;
}
/**
 * Fixed bar for a single venue: big logo on the left, a centred h4 title with a small
 * mark and an optional "– detail" suffix, and a bold sign-in / sign-out text button
 * on the right.
 */
export declare function Header27({ logo, onLogoClick, titleIcon, title, detail, signedIn, signOutLabel, onSignOut, signInLabel, onSignIn, }: Header27Props): React.JSX.Element;
export default Header27;
//# sourceMappingURL=Header27.d.ts.map