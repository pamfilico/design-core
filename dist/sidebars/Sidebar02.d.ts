import * as React from "react";
import { type Sidebar01Props } from "./Sidebar01.tsx";
export interface Sidebar02Props extends Omit<Sidebar01Props, "header"> {
    /** Bold title at the top of the rail (e.g. the workspace or record name). */
    title: string;
    /** Muted caption under the title (e.g. "Workspace", "Settings"). */
    caption?: React.ReactNode;
    /** Shown on the collapsed rail. Defaults to the first two letters of `title`, upper-cased. */
    initials?: string;
    /** Tooltip on the collapsed initials. Defaults to `title`. */
    collapsedTooltip?: string;
    /** When set, the header block is a link (e.g. to the workspace overview). */
    titleHref?: string;
}
/**
 * Hover-to-expand sectioned rail (see Sidebar01) with a title block on top. Expanded, the
 * block shows a bold title and a muted caption; collapsed, it shrinks to a two-letter
 * initials badge with the title in a tooltip. The block can link to an overview page.
 */
export declare function Sidebar02({ title, caption, initials, collapsedTooltip, titleHref, linkComponent, onNavigate, ...rail }: Sidebar02Props): React.JSX.Element;
export default Sidebar02;
//# sourceMappingURL=Sidebar02.d.ts.map