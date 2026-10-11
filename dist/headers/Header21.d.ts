import * as React from "react";
import type { SxProps, Theme } from "@mui/material/styles";
export interface Header21Props {
    start?: React.ReactNode;
    center?: React.ReactNode;
    end?: React.ReactNode;
    sx?: SxProps<Theme>;
}
/**
 * Three-column grid bar (`1fr auto 1fr`) whose centre slot stays truly centred
 * whatever the widths of the start and end slots.
 */
export declare function Header21({ start, center, end, sx }: Header21Props): React.JSX.Element;
export default Header21;
//# sourceMappingURL=Header21.d.ts.map