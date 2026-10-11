import * as React from "react";
export interface Header17Link {
    label: React.ReactNode;
    href?: string;
    onClick?: () => void;
    active?: boolean;
}
export interface Header17NavItem extends Header17Link {
    children?: Header17Link[];
}
export interface Header17Group {
    title: React.ReactNode;
    items: Header17Link[];
}
export interface Header17Props {
    logo?: React.ReactNode;
    onLogoClick?: () => void;
    signedIn?: boolean;
    onHome?: boolean;
    /** Desktop navigation for signed-in users (buttons, dropdowns for groups). */
    navItems?: Header17NavItem[];
    /** Wiggling call-to-action for a signed-in user on the home page. */
    highlight?: Header17Link;
    /** Public links (signed out, or home page). */
    publicItems?: Header17Link[];
    /** Mobile drawer groups (titled, indented items) for signed-in users. */
    drawerGroups?: Header17Group[];
    /** Mobile drawer group for signed-out visitors. */
    publicGroup?: Header17Group;
    signOutLabel?: React.ReactNode;
    onSignOut?: () => void;
    signInLabel?: React.ReactNode;
    onSignIn?: () => void;
    menuLabel?: string;
    linkComponent?: React.ElementType;
}
/**
 * Fixed solid header. Below `sm` a hamburger opens a 250px drawer of titled groups
 * (indented items) with the auth button pinned at the bottom. From `sm` up: logo,
 * then text-button navigation (active in the secondary colour) with dropdown groups;
 * on the home page a signed-in user sees a wiggling call-to-action and the public
 * links. The auth text button sits at the far right.
 */
export declare function Header17({ logo, onLogoClick, signedIn, onHome, navItems, highlight, publicItems, drawerGroups, publicGroup, signOutLabel, onSignOut, signInLabel, onSignIn, menuLabel, linkComponent, }: Header17Props): React.JSX.Element;
export default Header17;
//# sourceMappingURL=Header17.d.ts.map