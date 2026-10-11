import * as React from "react";
export interface Header07Props {
    /** Wordmark text or logo node. */
    brand: React.ReactNode;
    /** True once the page has scrolled: the bar turns solid with a divider and shadow. */
    scrolled?: boolean;
    signedIn?: boolean;
    onSignIn?: () => void;
    onSignOut?: () => void;
    signInLabel?: string;
    signOutLabel?: string;
}
/**
 * Fixed landing-page bar that is transparent over the hero (contrast-text wordmark)
 * and turns into a paper bar with a divider and shadow once `scrolled` is true.
 * Right side: a sign-in / sign-out icon button.
 */
export declare function Header07({ brand, scrolled, signedIn, onSignIn, onSignOut, signInLabel, signOutLabel, }: Header07Props): React.JSX.Element;
export default Header07;
//# sourceMappingURL=Header07.d.ts.map