import * as React from "react";
export interface Footer03Link {
    label: React.ReactNode;
    href: string;
}
export interface Footer03Props {
    /** Copyright line on the left. */
    copyright: React.ReactNode;
    /** Internal links (rendered with `linkComponent`), e.g. Privacy / Terms. */
    links: Footer03Link[];
    /** External links rendered as plain anchors after the internal ones (e.g. a source repository). */
    externalLinks?: Footer03Link[];
    /** Component used to render internal links (e.g. a router link). Defaults to "a". */
    linkComponent?: React.ElementType;
}
/**
 * Grey footer bar with a body-size copyright on the left and a row of small links
 * on the right, followed by optional external links. Stacks on mobile.
 */
export declare function Footer03(props: Footer03Props): React.JSX.Element;
export default Footer03;
//# sourceMappingURL=Footer03.d.ts.map