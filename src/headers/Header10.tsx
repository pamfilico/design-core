import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

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
  statusLabels?: { running?: React.ReactNode; completed?: React.ReactNode; failed?: React.ReactNode };
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
export function Header10({
  title,
  chips = [],
  status,
  statusLabels = {},
  statusChips = [],
  select,
  multiSelect,
  actionLabel,
  onAction,
  actionLoading = false,
  actionDisabled = false,
}: Header10Props) {
  const labels = { running: "Running", completed: "Completed", failed: "Failed", ...statusLabels };
  return (
    <Paper
      elevation={0}
      sx={{ px: 3, py: 1.5, borderBottom: 1, borderColor: "divider", display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      {chips.map((c, i) => (
        <Chip key={i} label={c.label} size="small" variant="outlined" color={c.color ?? "default"} />
      ))}
      {status && (
        <>
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
          {status === "running" && (
            <Chip icon={<CircularProgress size={14} />} label={labels.running} size="small" color="primary" variant="outlined" />
          )}
          {status === "completed" && (
            <Chip icon={<CheckCircleIcon />} label={labels.completed} size="small" color="success" variant="outlined" />
          )}
          {status === "failed" && <Chip icon={<ErrorIcon />} label={labels.failed} size="small" color="error" variant="outlined" />}
          {statusChips.map((c, i) => (
            <Chip key={i} label={c.label} size="small" variant="outlined" color={c.color ?? "default"} />
          ))}
        </>
      )}
      <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1 }}>
        {select &&
          (select.loading ? (
            <CircularProgress size={20} />
          ) : (
            <FormControl size="small" sx={{ minWidth: 220 }}>
              <InputLabel>{select.label}</InputLabel>
              <Select value={select.value} label={select.label} onChange={(e) => select.onChange?.(e.target.value)}>
                {select.options.map((o) => (
                  <MenuItem key={o.value} value={o.value}>
                    <Typography variant="body2">{o.label}</Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
        {multiSelect && multiSelect.options.length > 0 && (
          <FormControl size="small" sx={{ minWidth: 280 }}>
            <InputLabel>{multiSelect.label}</InputLabel>
            <Select<string[]>
              multiple
              value={multiSelect.value}
              label={multiSelect.label}
              onChange={(e) => multiSelect.onChange?.(e.target.value as string[])}
              renderValue={(s) => (multiSelect.renderValue ? multiSelect.renderValue(s) : s.join(", "))}
              MenuProps={{ slotProps: { paper: { sx: { maxHeight: 400 } } } }}
            >
              {multiSelect.options.map((o) => (
                <MenuItem key={o.value} value={o.value} sx={{ py: 0.3 }}>
                  <Typography variant="body2" sx={{ fontSize: 12 }}>
                    {o.label}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        <Button
          variant="contained"
          startIcon={actionLoading ? <CircularProgress size={16} /> : <PlayArrowIcon />}
          onClick={onAction}
          disabled={actionDisabled || actionLoading || status === "running"}
        >
          {actionLabel}
        </Button>
      </Box>
    </Paper>
  );
}

export default Header10;
