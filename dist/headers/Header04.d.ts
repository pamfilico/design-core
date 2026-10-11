import * as React from "react";
export interface Header04Action {
    label: React.ReactNode;
    icon?: React.ReactNode;
    /** May return a promise; the drawer closes once it settles. */
    onClick?: () => void | Promise<void>;
    loading?: boolean;
    disabled?: boolean;
    variant?: "contained" | "outlined";
}
export interface Header04Select {
    label: string;
    value: string;
    options: {
        value: string;
        label: React.ReactNode;
    }[];
    onChange?: (value: string) => void;
    disabled?: boolean;
}
export interface Header04Section {
    title: React.ReactNode;
    /** Optional select shown above the section's buttons. */
    select?: Header04Select;
    actions: Header04Action[];
}
export interface Header04Props {
    onBack?: () => void;
    backLabel?: string;
    /** Breadcrumbs (or a title) next to the back button. */
    breadcrumbs?: React.ReactNode;
    /** Sections of the right-hand actions drawer. No sections → no drawer and no menu button. */
    sections?: Header04Section[];
    drawerTitle?: React.ReactNode;
    openActionsLabel?: string;
    closeLabel?: string;
}
/**
 * Static bar with a back arrow, a breadcrumbs slot and, when actions exist, a menu
 * button that opens a right drawer. The drawer has a title row with a close button
 * and divided sections of full-width buttons (first section contained, the rest
 * outlined by default), each showing a spinner while loading.
 */
export declare function Header04({ onBack, backLabel, breadcrumbs, sections, drawerTitle, openActionsLabel, closeLabel, }: Header04Props): React.JSX.Element;
export default Header04;
//# sourceMappingURL=Header04.d.ts.map