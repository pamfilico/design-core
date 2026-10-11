import * as React from "react";
export interface Header05Item {
    label: React.ReactNode;
    href: string;
}
export interface Header05Props {
    /** Bold title link at the left. */
    title: React.ReactNode;
    titleHref?: string;
    /** Small text buttons after the title. */
    items?: Header05Item[];
    signOutLabel?: React.ReactNode;
    onSignOut?: () => void;
    /** Component used for links (e.g. a router link); default "a". */
    linkComponent?: React.ElementType;
}
/**
 * Plain static admin bar on the default (neutral) AppBar colour: a bold title link,
 * a row of small text-button links, a spacer and a small sign-out button.
 */
export declare function Header05({ title, titleHref, items, signOutLabel, onSignOut, linkComponent, }: Header05Props): React.JSX.Element;
export default Header05;
//# sourceMappingURL=Header05.d.ts.map