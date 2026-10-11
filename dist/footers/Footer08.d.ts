import * as React from "react";
export interface Footer08Link {
    label: React.ReactNode;
    href: string;
    /** Open in a new tab. */
    external?: boolean;
}
export interface Footer08Column {
    /** Upper-case column heading, e.g. "LINKS" or "LEGAL". */
    title: React.ReactNode;
    links: Footer08Link[];
}
export interface Footer08Props {
    /** Small logo shown before the app name. */
    logo?: React.ReactNode;
    /** Name next to the logo. */
    appName: React.ReactNode;
    /** Where the logo + name link to (default "/#"). */
    homeHref?: string;
    /** Short description under the name. */
    description?: React.ReactNode;
    /** Copyright line, e.g. "Copyright © 2025 - All rights reserved". */
    copyright: React.ReactNode;
    /** Link columns after the brand column. */
    columns: Footer08Column[];
    /** Component used to render internal links (e.g. a router link). Defaults to "a". */
    linkComponent?: React.ElementType;
}
/**
 * Centered multi-column footer: a brand column with logo, name, description and
 * copyright, then bold upper-case headed link columns. Centered text on mobile,
 * left-aligned from md up.
 */
export declare function Footer08(props: Footer08Props): React.JSX.Element;
export default Footer08;
//# sourceMappingURL=Footer08.d.ts.map