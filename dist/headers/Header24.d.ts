import * as React from "react";
export interface Header24Quick {
    label: React.ReactNode;
    selected?: boolean;
    onClick?: () => void;
}
export interface Header24Props {
    /** Date field (any picker, e.g. a small outlined date input). */
    datePicker: React.ReactNode;
    /** Quick-pick buttons (e.g. yesterday / today / tomorrow); the selected one is contained. */
    quickPicks: Header24Quick[];
}
/**
 * Date toolbar card on the paper colour: a date field (160px from `md`) and a row of
 * small quick-pick buttons. Stacks and spans the width on mobile; centred and
 * shrink-wrapped from `md`.
 */
export declare function Header24({ datePicker, quickPicks }: Header24Props): React.JSX.Element;
export default Header24;
//# sourceMappingURL=Header24.d.ts.map