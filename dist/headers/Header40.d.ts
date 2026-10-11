import * as React from "react";
export interface Header58Props {
    /** Square logo in the floating home tile (top-left). */
    logo?: React.ReactNode;
    homeHref?: string;
    /** Hide the home tile (e.g. when already on the home page). */
    hideHome?: boolean;
    /** Tooltip / aria label of the home tile. */
    homeLabel: string;
    /** Optional pill link on the right (e.g. "For business"); shown only to signed-out visitors. */
    promoLabel?: React.ReactNode;
    promoHref?: string;
    promoIcon?: React.ReactNode;
    /** Hide the promo pill even when signed out (focused flows). */
    hidePromo?: boolean;
    /** Signed-in user; shows an avatar with an account menu. Signed out shows a sign-in icon link. */
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
    /** "fixed" to the viewport (original) or "absolute" inside a positioned parent. */
    position?: "fixed" | "absolute";
    linkComponent?: React.ElementType;
}
/**
 * Floating chrome with no bar: a translucent home tile with the logo at the top-left, and at the
 * top-right a promo pill plus an account pill (sign-in icon, or an avatar opening a
 * "signed in as" menu with Sign out). Sits above hero images.
 */
export declare function Header40(props: Header58Props): React.JSX.Element;
export default Header40;
//# sourceMappingURL=Header40.d.ts.map