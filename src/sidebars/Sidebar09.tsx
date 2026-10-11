"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VisibilityIcon from "@mui/icons-material/Visibility";

export interface Sidebar09Props {
  open: boolean;
  onClose: () => void;
  /** Drawer heading. */
  title: React.ReactNode;
  /** Optional status chip under the heading. */
  status?: { label: string; color?: "default" | "success" | "error" | "info" | "warning" } | null;
  /** Error text under the status. */
  error?: React.ReactNode;
  /** Muted paragraph. */
  description?: React.ReactNode;
  /** Label / value rows; the value renders as an outlined chip. */
  details?: { label: React.ReactNode; value: string }[];
  /** Titled monospace blocks (e.g. input and output). */
  codeBlocks?: { title: React.ReactNode; content: string }[];
  /** Full-width contained button. */
  primaryAction?: { label: React.ReactNode; onClick: () => void; loading?: boolean; disabled?: boolean };
  /** Full-width outlined button under the primary one. */
  secondaryAction?: { label: React.ReactNode; onClick: () => void } | null;
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
export function Sidebar09({
  open,
  onClose,
  title,
  status,
  error,
  description,
  details = [],
  codeBlocks = [],
  primaryAction,
  secondaryAction,
  closeLabel,
  width = 360,
}: Sidebar09Props) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose} variant="persistent" sx={{ "& .MuiDrawer-paper": { width, pt: 8 } }}>
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          <IconButton onClick={onClose} size="small" aria-label={closeLabel}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2 }} />

        {status && (
          <Box sx={{ mb: 2 }}>
            <Chip label={status.label} size="small" sx={{ fontWeight: 600, mb: 1 }} color={status.color ?? "default"} />
            {error && (
              <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
          </Box>
        )}

        {description ? (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description}
          </Typography>
        ) : null}

        {details.length > 0 && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2 }}>
            {details.map((row, i) => (
              <Box key={i} sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" color="text.secondary">
                  {row.label}
                </Typography>
                <Chip label={row.value} size="small" variant="outlined" />
              </Box>
            ))}
          </Box>
        )}

        {codeBlocks.map((block, i) => (
          <Box key={i} sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
              {block.title}
            </Typography>
            <Box
              component="pre"
              sx={{
                bgcolor: "grey.900",
                color: "grey.300",
                p: 1.5,
                borderRadius: 1,
                fontSize: 11,
                overflow: "auto",
                maxHeight: 150,
                fontFamily: "monospace",
              }}
            >
              {block.content}
            </Box>
          </Box>
        ))}

        {primaryAction ? (
          <Button
            fullWidth
            variant="contained"
            startIcon={primaryAction.loading ? <CircularProgress size={16} /> : <PlayArrowIcon />}
            onClick={primaryAction.onClick}
            disabled={primaryAction.disabled || primaryAction.loading}
            sx={{ mb: 1 }}
          >
            {primaryAction.label}
          </Button>
        ) : null}

        {secondaryAction ? (
          <Button fullWidth variant="outlined" startIcon={<VisibilityIcon />} onClick={secondaryAction.onClick}>
            {secondaryAction.label}
          </Button>
        ) : null}
      </Box>
    </Drawer>
  );
}

export default Sidebar09;
