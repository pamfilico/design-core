import * as React from "react";
export interface Header28Props {
    /** Logo at the left (hidden on xs). */
    logo?: React.ReactNode;
    onLogoClick?: () => void;
    /** Mark before the centred name (≈50px). */
    titleIcon?: React.ReactNode;
    title: React.ReactNode;
    signedIn?: boolean;
    /** Line under the title when signed in (e.g. "(204)"). */
    signedInDetail?: React.ReactNode;
    /** Two-part hint under the title when signed out; stacks on xs. */
    hint?: [React.ReactNode, React.ReactNode];
    signOutLabel?: string;
    onSignOut?: () => void;
    signInLabel?: string;
    /** When given, the sign-in icon opens this instructions dialog instead of calling `onSignIn`. */
    signInDialog?: {
        title: React.ReactNode;
        body: React.ReactNode;
        closeLabel?: React.ReactNode;
    };
    onSignIn?: () => void;
}
/**
 * Fixed guest-facing bar: logo (from `sm`), a centred mark + h5 name with either a
 * signed-in detail line or a two-part hint, and a sign-in / sign-out icon with a
 * tooltip. Sign-in can open an instructions dialog.
 */
export declare function Header28({ logo, onLogoClick, titleIcon, title, signedIn, signedInDetail, hint, signOutLabel, onSignOut, signInLabel, signInDialog, onSignIn, }: Header28Props): React.JSX.Element;
export default Header28;
//# sourceMappingURL=Header28.d.ts.map