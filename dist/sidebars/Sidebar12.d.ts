import * as React from "react";
export interface Sidebar12Item {
    key?: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
}
export interface Sidebar12Props {
    open: boolean;
    onClose: () => void;
    items: Sidebar12Item[];
    /** Current path; the exactly matching item is selected. */
    activeHref: string;
    onNavigate?: (href: string) => void;
    /** Link component (e.g. a router link). Defaults to "a". */
    linkComponent?: React.ElementType;
    /** Signed-in email shown under the close button. */
    userEmail?: string | null;
    /** Public page URL. The card is hidden while this is empty. */
    publicPageUrl?: string | null;
    onSignOut: () => void;
    signOutLabel?: string;
    publicPageLabel?: string;
    openLabel?: string;
    copyLabel?: string;
    openTooltip?: string;
    copyTooltip?: string;
    copiedMessage?: string;
}
/**
 * Temporary left drawer opened from a header hamburger: a close chevron, the signed-in
 * email, a primary-coloured "public page" card (open in new tab / copy link), a flat list
 * of pages with solid primary selection, and a red sign-out row pinned at the bottom. A
 * snackbar confirms the copied link.
 */
export declare function Sidebar12({ open, onClose, items, activeHref, onNavigate, linkComponent, userEmail, publicPageUrl, onSignOut, signOutLabel, publicPageLabel, openLabel, copyLabel, openTooltip, copyTooltip, copiedMessage, }: Sidebar12Props): React.JSX.Element;
export default Sidebar12;
//# sourceMappingURL=Sidebar12.d.ts.map