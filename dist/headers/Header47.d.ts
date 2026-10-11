import * as React from "react";
/** One card in the sign-in chooser. */
export interface Header65SignInOption {
    key: string;
    href: string;
    title: React.ReactNode;
    body?: React.ReactNode;
    icon?: React.ReactNode;
}
export interface Header65Props {
    brand: React.ReactNode;
    brandHref?: string;
    /** Optional page title that replaces the brand from `sm` up. */
    pageTitle?: React.ReactNode;
    signedIn?: boolean;
    /** Signed in: opens the side navigation. */
    onMenuClick?: () => void;
    menuLabel?: string;
    /** Signed in: a small clickable status chip (e.g. a plan or trial state). */
    statusChip?: {
        label: React.ReactNode;
        color?: "primary" | "error" | "default" | "success" | "warning";
        onClick?: () => void;
    };
    themeMode?: "light" | "dark";
    /** Signed in: light/dark toggle, shown when given. */
    onToggleTheme?: () => void;
    toDarkLabel?: string;
    toLightLabel?: string;
    /** Signed out: the "Sign in ▾" button and the cards of its menu. */
    signInLabel: React.ReactNode;
    signInOptions: Header65SignInOption[];
    linkComponent?: React.ElementType;
}
/**
 * Primary app bar: a hamburger (signed in), the brand link (or a page title from `sm`), and on the
 * right either a status chip + theme toggle (signed in) or a "Sign in ▾" button opening a menu of
 * sign-in cards, one per kind of account.
 */
export declare function Header47(props: Header65Props): React.JSX.Element;
export default Header47;
//# sourceMappingURL=Header47.d.ts.map