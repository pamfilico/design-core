import * as React from "react";
export interface Header61NavItem {
    label: React.ReactNode;
    href: string;
    active?: boolean;
}
export interface Header61Props {
    /** 32px logo tile on the left. */
    logo?: React.ReactNode;
    title: React.ReactNode;
    /** Click-only nav; the active item is a contained button. */
    items: Header61NavItem[];
    /** Signed-in user name shown before the sign-out button. */
    userName?: React.ReactNode;
    signOutLabel?: React.ReactNode;
    onSignOut?: () => void;
    position?: "sticky" | "static" | "fixed";
    linkComponent?: React.ElementType;
}
/**
 * Operator panel top bar on the default surface: logo tile, bold title, a wrapping row of small
 * nav buttons (active = contained), the user name and an error-coloured sign-out.
 */
export declare function Header43(props: Header61Props): React.JSX.Element;
export default Header43;
//# sourceMappingURL=Header43.d.ts.map