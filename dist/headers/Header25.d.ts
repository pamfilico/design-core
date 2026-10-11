import * as React from "react";
export interface Header25Item {
    label: React.ReactNode;
    icon?: React.ReactNode;
    href: string;
}
export interface Header25Props {
    /** Logo (≈48px; rounded with a soft shadow). */
    logo?: React.ReactNode;
    /** Wordmark next to the logo (hidden on xs). Leave empty for a neutral bar. */
    brandName?: React.ReactNode;
    onBrandClick?: () => void;
    /** Show the hamburger + drawer (e.g. not on the home or auth pages). */
    showMenu?: boolean;
    /** Top drawer items. */
    items?: Header25Item[];
    /** Optional second drawer block under a caption (e.g. the current record's pages). */
    sectionTitle?: React.ReactNode;
    sectionItems?: Header25Item[];
    /** Current path; the matching item (or a parent) is selected. */
    activeHref?: string;
    onNavigate?: (href: string) => void;
    linkComponent?: React.ElementType;
    signedIn?: boolean;
    /** Wiggling call-to-action (signed in, desktop). */
    highlightLabel?: React.ReactNode;
    onHighlight?: () => void;
    contactLabel?: React.ReactNode;
    onContact?: () => void;
    signOutLabel?: React.ReactNode;
    onSignOut?: () => void;
    signInLabel?: React.ReactNode;
    onSignIn?: () => void;
    menuLabel?: string;
}
/**
 * Fixed transparent header: optional hamburger, a logo + wordmark brand, a wiggling
 * call-to-action on desktop for signed-in users, and at the right a contact text
 * button and an outlined sign-out / contained sign-in button. The hamburger opens a
 * 260px drawer with the brand, rounded primary-tinted nav items and an optional
 * captioned second block.
 */
export declare function Header25({ logo, brandName, onBrandClick, showMenu, items, sectionTitle, sectionItems, activeHref, onNavigate, linkComponent, signedIn, highlightLabel, onHighlight, contactLabel, onContact, signOutLabel, onSignOut, signInLabel, onSignIn, menuLabel, }: Header25Props): React.JSX.Element;
export default Header25;
//# sourceMappingURL=Header25.d.ts.map