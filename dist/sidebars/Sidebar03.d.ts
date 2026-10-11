import * as React from "react";
import { type Sidebar01Props } from "./Sidebar01.tsx";
export interface Sidebar03Props extends Omit<Sidebar01Props, "header"> {
    /** Where the header leads back to (default "/"). */
    backHref?: string;
    /** Bold header label (default "Back to home"). */
    backLabel?: string;
    /** Muted caption under the label: the name of this area (e.g. "Settings"). */
    caption?: React.ReactNode;
}
/**
 * Hover-to-expand sectioned rail (see Sidebar01) for a top-level area that is not nested
 * under a record: its header is a way back out. Collapsed, the header is a lone back
 * arrow; expanded, the arrow sits beside a bold "Back to home" label and the area name.
 */
export declare function Sidebar03({ backHref, backLabel, caption, linkComponent, onNavigate, ...rail }: Sidebar03Props): React.JSX.Element;
export default Sidebar03;
//# sourceMappingURL=Sidebar03.d.ts.map