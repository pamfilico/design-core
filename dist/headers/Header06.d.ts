import * as React from "react";
export interface Header06Tab {
    label: React.ReactNode;
    value: string;
}
export interface Header06Props {
    title: React.ReactNode;
    /** Small icon before the title (e.g. a settings icon). */
    icon?: React.ReactNode;
    onBack?: () => void;
    backLabel?: string;
    tabs: Header06Tab[];
    /** Value of the selected tab. */
    activeTab?: string;
    onTabChange?: (value: string) => void;
}
/**
 * Static section bar: back arrow, icon and title, then a row of tabs on the bar
 * colour (inherit text, secondary indicator) at full toolbar height.
 */
export declare function Header06({ title, icon, onBack, backLabel, tabs, activeTab, onTabChange }: Header06Props): React.JSX.Element;
export default Header06;
//# sourceMappingURL=Header06.d.ts.map