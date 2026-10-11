import * as React from "react";
export interface Header30Item {
    label: React.ReactNode;
    href?: string;
    onClick?: () => void;
    active?: boolean;
}
export interface Header30Props {
    /** Logo (≈50px) linking home. */
    logo?: React.ReactNode;
    logoHref?: string;
    /** Text navigation buttons (active one gets a darker background). */
    items?: Header30Item[];
    /** Hide the auth button entirely. */
    showAuth?: boolean;
    signedIn?: boolean;
    signOutLabel?: React.ReactNode;
    onSignOut?: () => void;
    signInLabel?: React.ReactNode;
    onSignIn?: () => void;
    linkComponent?: React.ElementType;
}
/**
 * Minimal fixed bar: logo link, spacer, a block of bold text navigation buttons and
 * a bold sign-in / sign-out text button at the right.
 */
export declare function Header30({ logo, logoHref, items, showAuth, signedIn, signOutLabel, onSignOut, signInLabel, onSignIn, linkComponent, }: Header30Props): React.JSX.Element;
export default Header30;
//# sourceMappingURL=Header30.d.ts.map