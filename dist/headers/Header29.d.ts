import * as React from "react";
export interface Header29Crumb {
    label: React.ReactNode;
    href?: string;
    onClick?: () => void;
}
export interface Header29Link {
    label: React.ReactNode;
    href?: string;
    onClick?: () => void;
}
export interface Header29Props {
    /** First breadcrumb (underlined-on-hover link). */
    home: Header29Crumb;
    /** Further breadcrumbs, rendered as clickable chips. */
    crumbs?: Header29Crumb[];
    separator?: React.ReactNode;
    /** Slot right after the breadcrumbs. */
    children?: React.ReactNode;
    /** Text links on the right (desktop) and in the mobile drawer. */
    links?: Header29Link[];
    /** Disabled usage button with a count badge, e.g. "Billing 12/50" (desktop only). */
    usage?: {
        label: React.ReactNode;
        used: number;
        limit: number;
        loading?: boolean;
    };
    signedIn?: boolean;
    signOutLabel?: React.ReactNode;
    onSignOut?: () => void;
    signInLabel?: React.ReactNode;
    onSignIn?: () => void;
    menuLabel?: string;
    linkComponent?: React.ElementType;
}
/**
 * Fixed workspace bar: below `md` a hamburger opens a drawer of the links with the
 * auth button at the bottom; an arrow-separated breadcrumb trail (a home link then
 * chips); a children slot; and from `md` the text links, a disabled usage button
 * with a coloured count badge (warning at 70%, error at 90%) and the auth button.
 */
export declare function Header29({ home, crumbs, separator, children, links, usage, signedIn, signOutLabel, onSignOut, signInLabel, onSignIn, menuLabel, linkComponent, }: Header29Props): React.JSX.Element;
export default Header29;
//# sourceMappingURL=Header29.d.ts.map