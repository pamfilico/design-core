import * as React from "react";
export interface Header26Props {
    label: React.ReactNode;
    href?: string;
    onClick?: () => void;
    /** Active page: contained instead of text. */
    active?: boolean;
    linkComponent?: React.ElementType;
}
/** Single bold, no-wrap toolbar navigation button (text; contained when active). */
export declare function Header26({ label, href, onClick, active, linkComponent }: Header26Props): React.JSX.Element;
export default Header26;
//# sourceMappingURL=Header26.d.ts.map