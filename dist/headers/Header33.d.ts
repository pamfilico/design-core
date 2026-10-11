import * as React from "react";
export interface Header51Props {
    /** Page title (in the original: the label of the active nav item). */
    title: React.ReactNode;
    /** Opens the navigation drawer; the button shows below `md` only. */
    onMenuClick?: () => void;
    /** Accessible label of the menu button. */
    menuLabel?: string;
    /** Width of the permanent side rail on `md`+; the bar is offset by it (default 240). */
    railWidth?: number;
    /** "fixed" as in the original app shell; "static" for embedding. */
    position?: "fixed" | "static" | "sticky";
}
/**
 * Slim signed-in top bar of a rail + content shell: paper background with a bottom divider,
 * offset by the side rail width on desktop, a hamburger below `md`, and the current page title.
 */
export declare function Header33(props: Header51Props): React.JSX.Element;
export default Header33;
//# sourceMappingURL=Header33.d.ts.map