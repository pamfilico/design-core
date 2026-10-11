import * as React from "react";
export interface Sidebar06Item {
    label: string;
    href: string;
    icon: React.ReactNode;
    /** Active only on exactly this path (default: active on `href` and anything starting with it). */
    exact?: boolean;
}
export interface Sidebar06Section {
    sectionLabel?: string;
    items: Sidebar06Item[];
}
export interface Sidebar06Props {
    sections: Sidebar06Section[];
    activeHref: string;
    /** Signed-in user shown above the nav. The block is hidden while this is empty. */
    user?: {
        name?: string | null;
        email: string;
        avatarUrl?: string | null;
    } | null;
    /** Shown when the user has no name (default "User"). */
    userFallbackName?: string;
    /** Temporary drawer state below `md`. */
    mobileOpen?: boolean;
    onCloseMobile?: () => void;
    /** Width of the temporary drawer (default 220). */
    drawerWidth?: number;
    onNavigate?: (href: string) => void;
    linkComponent?: React.ElementType;
}
/**
 * Hover-to-expand app rail with the signed-in user on top. From `md` up: a sticky,
 * full-height 48px icon rail that widens to 200px on hover (closing 400ms after the pointer
 * leaves), with an avatar + name/email row and captioned sections; labels fade in, no
 * tooltips. Below `md`: a 220px temporary drawer with the same content. Both leave 64px at
 * the top for a fixed app bar.
 */
export declare function Sidebar06({ sections, activeHref, user, userFallbackName, mobileOpen, onCloseMobile, drawerWidth, onNavigate, linkComponent, }: Sidebar06Props): React.JSX.Element;
export default Sidebar06;
//# sourceMappingURL=Sidebar06.d.ts.map