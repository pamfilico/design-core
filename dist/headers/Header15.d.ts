import * as React from "react";
export interface Header15Props {
    title: React.ReactNode;
    /** String → secondary body text; node → rendered as is. */
    subtitle?: React.ReactNode;
    /** Icon in a rounded, primary-tinted square left of the title. */
    icon?: React.ReactNode;
    /** Shows a "Back" text button above the title. */
    onBack?: () => void;
    backLabel?: React.ReactNode;
    badge?: React.ReactNode;
    badgeColor?: "default" | "primary" | "success" | "warning" | "error";
    /** Right-aligned actions (wrap under the title on narrow screens). */
    actions?: React.ReactNode;
}
/**
 * In-page title block: optional back button, a 56px tinted icon tile, an h4 title
 * with an optional badge chip, a secondary subtitle, and actions on the right.
 */
export declare function Header15({ title, subtitle, icon, onBack, backLabel, badge, badgeColor, actions }: Header15Props): React.JSX.Element;
export default Header15;
//# sourceMappingURL=Header15.d.ts.map