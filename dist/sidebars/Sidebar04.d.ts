import * as React from "react";
import { type Sidebar01Props } from "./Sidebar01.tsx";
export interface Sidebar04Props extends Omit<Sidebar01Props, "header"> {
    /** Small overline above the title (the record type, e.g. "Contact"). */
    overline: React.ReactNode;
    /** The record's title. Shows `placeholder` while empty (e.g. still loading). */
    title?: string;
    /** Shown while `title` is empty (default "…"). */
    placeholder?: string;
}
/**
 * Hover-to-expand sectioned rail (see Sidebar01) for ONE record: each of the record's
 * sections is its own route and this rail moves between them. Expanded, a small overline
 * and the record's title sit on top; collapsed, the header disappears and only the icons remain.
 */
export declare function Sidebar04({ overline, title, placeholder, testId, ...rail }: Sidebar04Props): React.JSX.Element;
export default Sidebar04;
//# sourceMappingURL=Sidebar04.d.ts.map