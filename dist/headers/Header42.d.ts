import * as React from "react";
export interface Header60Props {
    /** Logo (max 40px high); clicking it calls `onHome`. */
    logo: React.ReactNode;
    /** Called by the logo and the back button (e.g. navigate home keeping the search). */
    onHome?: () => void;
    backLabel: React.ReactNode;
    /** Signed-in user → avatar with a "signed in as" menu; otherwise a sign-in icon link. */
    user?: {
        name?: string;
        email: string;
        avatarUrl?: string;
    } | null;
    signInLabel: string;
    signInHref?: string;
    signedInAsLabel: React.ReactNode;
    signOutLabel: string;
    onSignOut?: () => void;
    linkComponent?: React.ElementType;
}
/**
 * Transparent, shadowless 70px results-page bar: logo, an outlined "Back to home" button and the
 * account control on the right. Below `sm` only the logo remains.
 */
export declare function Header42(props: Header60Props): React.JSX.Element;
export default Header42;
//# sourceMappingURL=Header42.d.ts.map