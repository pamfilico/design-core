import * as React from "react";
export interface Sidebar09Props {
    open: boolean;
    onClose: () => void;
    /** Drawer heading. */
    title: React.ReactNode;
    /** Optional status chip under the heading. */
    status?: {
        label: string;
        color?: "default" | "success" | "error" | "info" | "warning";
    } | null;
    /** Error text under the status. */
    error?: React.ReactNode;
    /** Muted paragraph. */
    description?: React.ReactNode;
    /** Label / value rows; the value renders as an outlined chip. */
    details?: {
        label: React.ReactNode;
        value: string;
    }[];
    /** Titled monospace blocks (e.g. input and output). */
    codeBlocks?: {
        title: React.ReactNode;
        content: string;
    }[];
    /** Full-width contained button. */
    primaryAction?: {
        label: React.ReactNode;
        onClick: () => void;
        loading?: boolean;
        disabled?: boolean;
    };
    /** Full-width outlined button under the primary one. */
    secondaryAction?: {
        label: React.ReactNode;
        onClick: () => void;
    } | null;
    /** `aria-label` of the close button. */
    closeLabel?: string;
    /** Drawer width in px (default 360). */
    width?: number;
}
/**
 * Right-anchored persistent detail drawer (360px, 64px top padding to clear a fixed app
 * bar). A heading with a close button, an optional status chip and error, a description,
 * label/value rows with outlined chips, dark monospace blocks, then a full-width primary
 * button (with a spinner while running) and an optional outlined secondary button.
 */
export declare function Sidebar09({ open, onClose, title, status, error, description, details, codeBlocks, primaryAction, secondaryAction, closeLabel, width, }: Sidebar09Props): React.JSX.Element;
export default Sidebar09;
//# sourceMappingURL=Sidebar09.d.ts.map