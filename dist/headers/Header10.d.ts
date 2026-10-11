import * as React from "react";
type ChipColor = "default" | "primary" | "secondary" | "success" | "info" | "warning" | "error";
export interface Header10Chip {
    label: React.ReactNode;
    color?: ChipColor;
}
export interface Header10Option {
    value: string;
    label: React.ReactNode;
}
export interface Header10Props {
    title: React.ReactNode;
    /** Outlined chips right after the title (e.g. counts). */
    chips?: Header10Chip[];
    /** Run status. When set, a divider, a status chip and `statusChips` follow. */
    status?: "running" | "completed" | "failed" | null;
    statusLabels?: {
        running?: React.ReactNode;
        completed?: React.ReactNode;
        failed?: React.ReactNode;
    };
    statusChips?: Header10Chip[];
    /** Single select at the right. */
    select?: {
        label: string;
        value: string;
        options: Header10Option[];
        onChange?: (value: string) => void;
        loading?: boolean;
    };
    /** Multi select shown after the single select (only when it has options). */
    multiSelect?: {
        label: string;
        value: string[];
        options: Header10Option[];
        onChange?: (value: string[]) => void;
        /** Text shown for the current selection. */
        renderValue?: (selected: string[]) => React.ReactNode;
    };
    actionLabel: React.ReactNode;
    onAction?: () => void;
    actionLoading?: boolean;
    actionDisabled?: boolean;
}
/**
 * Flat toolbar row for an editor page (paper, bottom divider): bold title, outlined
 * info chips, an optional run-status block, and on the right a single select, an
 * optional multi select and a contained run button with a play icon / spinner.
 */
export declare function Header10({ title, chips, status, statusLabels, statusChips, select, multiSelect, actionLabel, onAction, actionLoading, actionDisabled, }: Header10Props): React.JSX.Element;
export default Header10;
//# sourceMappingURL=Header10.d.ts.map