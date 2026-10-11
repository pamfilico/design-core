import * as React from "react";
import type { AppBarProps } from "@mui/material/AppBar";
/** One row in the account panel (icon · label · value). */
export interface Header01AccountDetail {
    icon?: React.ReactNode;
    label: React.ReactNode;
    value: React.ReactNode;
}
export interface Header01User {
    name?: string | null;
    email?: string | null;
    avatarUrl?: string;
}
export interface Header01Props {
    /** Brand label / node shown top-left. */
    brand: React.ReactNode;
    /** Where the brand links to (default "/"). */
    brandHref?: string;
    /** Component used for the brand link (e.g. a router link); default "a". */
    linkComponent?: React.ElementType;
    /** Show the hamburger below `md` (e.g. only when signed in). */
    showMenuButton?: boolean;
    onMenuClick?: () => void;
    menuLabel?: string;
    /** Replaces the brand in the grow area (e.g. breadcrumbs). */
    breadcrumbs?: React.ReactNode;
    /** Extra actions rendered before the account avatar (install button, app launcher…). */
    actions?: React.ReactNode;
    /** Signed-in user. When set, the avatar menu and the sign-out icon show; otherwise the sign-in icon. */
    user?: Header01User | null;
    /** Use the secondary colour for the avatar (e.g. a staff member rather than the owner). */
    secondaryAvatar?: boolean;
    /** Chip shown on the account panel's role row. */
    roleLabel?: React.ReactNode;
    roleTitle?: React.ReactNode;
    roleIcon?: React.ReactNode;
    /** Extra rows under the role row. */
    accountDetails?: Header01AccountDetail[];
    accountLabel?: string;
    onSignIn?: () => void;
    onSignOut?: () => void;
    signInLabel?: string;
    signOutLabel?: string;
    position?: AppBarProps["position"];
    sx?: AppBarProps["sx"];
}
/**
 * Authenticated app top bar: optional hamburger below `md`, a brand link or a
 * breadcrumbs slot that grows, then an actions slot, an avatar that opens an
 * account panel (name, email, role and detail rows) and a sign-in / sign-out icon.
 * Sits above the drawer (`zIndex: drawer + 1`).
 */
export declare function Header01({ brand, brandHref, linkComponent, showMenuButton, onMenuClick, menuLabel, breadcrumbs, actions, user, secondaryAvatar, roleLabel, roleTitle, roleIcon, accountDetails, accountLabel, onSignIn, onSignOut, signInLabel, signOutLabel, position, sx, }: Header01Props): React.JSX.Element;
export default Header01;
//# sourceMappingURL=Header01.d.ts.map