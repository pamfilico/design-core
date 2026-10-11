import * as React from "react";
export interface Header53Props {
    /** Full logo / lockup, shown from `sm` up. */
    logo?: React.ReactNode;
    /** Compact mark, shown below `sm` instead of the full logo. */
    logoMark?: React.ReactNode;
    logoHref?: string;
    /** Context chip next to the logo (e.g. the selected workspace). */
    contextLabel?: React.ReactNode;
    /** The signed-in user. The name collapses below `sm`, the role always shows. */
    user?: {
        name: string;
        role?: string;
    };
    /** Chip colour of the role chip (default "primary"). */
    roleColor?: "primary" | "secondary" | "default";
    onMenuClick?: () => void;
    menuLabel?: string;
    onSignOut?: () => void;
    signOutLabel?: string;
    /** Install icon, shown only when given. */
    onInstall?: () => void;
    installLabel?: string;
    /** "fixed" as in the original app shell; "static" for embedding. */
    position?: "fixed" | "static" | "sticky";
    linkComponent?: React.ElementType;
}
/**
 * Dense signed-in top bar that sits above the side navigation: a hamburger below `md`, the logo
 * (reduced to a mark on phones), an optional context chip, then install, a name · role chip and a
 * Sign out button whose label collapses to its icon on phones.
 */
export declare function Header35(props: Header53Props): React.JSX.Element;
export default Header35;
//# sourceMappingURL=Header35.d.ts.map