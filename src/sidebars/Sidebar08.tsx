"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export interface Sidebar08Item {
  id: string;
  name: string;
  /** First muted line (e.g. "text -> list"). */
  caption?: string;
  /** Second, fainter line (e.g. a scope). */
  subcaption?: string;
  /** Small chip at the right (e.g. a kind). */
  tag?: string;
  /** Listed under the secondary group instead of the primary one. */
  secondary?: boolean;
}

export interface Sidebar08Block {
  id: string;
  name: string;
  /** Item ids, in order. */
  steps: string[];
}

export interface Sidebar08Props {
  /** Panel heading (e.g. "Tools"). */
  title: React.ReactNode;
  items: Sidebar08Item[];
  /** Ordered groups of items, shown first as collapsible chains. */
  blocks?: Sidebar08Block[];
  selectedId: string | null;
  loading?: boolean;
  /** Item whose check is running (spinner on its check button). */
  checkingId?: string | null;
  onSelect: (item: Sidebar08Item) => void;
  onNew?: () => void;
  onView?: (item: Sidebar08Item) => void;
  /** Check action, shown on primary-group rows and block rows. */
  onCheck?: (item: Sidebar08Item, e: React.MouseEvent) => void;
  /** Captions of the three groups. */
  blocksLabel: React.ReactNode;
  primaryLabel: React.ReactNode;
  secondaryLabel: React.ReactNode;
  /** Hover titles of the icon buttons. */
  newTitle?: string;
  viewTitle?: string;
  checkTitle?: string;
  /** Panel width in px (default 280). */
  width?: number;
}

const groupCaptionSx = {
  px: 2,
  pb: 0.5,
  display: "block",
  fontWeight: 700,
  color: "text.secondary",
  textTransform: "uppercase",
  letterSpacing: 0.5,
} as const;

/**
 * Right-hand catalogue panel (280px, left border). A heading with a "new" button, then
 * collapsible blocks (an ordered chain of items shown as linked chips, or expanded into a
 * dotted timeline of rows), then a primary and a secondary group of dense rows. Each row
 * shows a name, two caption lines, a tag chip, a "view" button and, on primary rows, a
 * "check" button with a spinner while running.
 */
export function Sidebar08({
  title,
  items,
  blocks = [],
  selectedId,
  loading = false,
  checkingId = null,
  onSelect,
  onNew,
  onView,
  onCheck,
  blocksLabel,
  primaryLabel,
  secondaryLabel,
  newTitle,
  viewTitle,
  checkTitle,
  width = 280,
}: Sidebar08Props) {
  const [expandedBlocks, setExpandedBlocks] = React.useState<Set<string>>(new Set());

  const renderRow = (t: Sidebar08Item, opts?: { checkable?: boolean }) => (
    <ListItemButton
      key={t.id}
      selected={selectedId === t.id}
      onClick={() => onSelect(t)}
      sx={{ px: 2, py: 0.75, alignItems: "flex-start", gap: 0.5 }}
    >
      <ListItemText
        primary={t.name}
        secondary={
          <Box component="span" sx={{ display: "block" }}>
            {t.caption ? (
              <Typography component="span" variant="caption" sx={{ display: "block", color: "text.secondary" }}>
                {t.caption}
              </Typography>
            ) : null}
            {t.subcaption ? (
              <Typography component="span" variant="caption" sx={{ display: "block", color: "text.disabled", mt: 0.25 }}>
                {t.subcaption}
              </Typography>
            ) : null}
          </Box>
        }
        primaryTypographyProps={{ fontSize: 12, fontWeight: selectedId === t.id ? 700 : 500 }}
        secondaryTypographyProps={{ component: "div" }}
      />
      {onView ? (
        <IconButton
          size="small"
          title={viewTitle}
          aria-label={viewTitle}
          onClick={(e) => {
            e.stopPropagation();
            onView(t);
          }}
          sx={{ mt: 0.25, flexShrink: 0 }}
        >
          <VisibilityOutlinedIcon fontSize="small" />
        </IconButton>
      ) : null}
      {opts?.checkable && onCheck ? (
        <IconButton
          size="small"
          title={checkTitle}
          aria-label={checkTitle}
          disabled={checkingId === t.id}
          onClick={(e) => {
            e.stopPropagation();
            onCheck(t, e);
          }}
          sx={{ mt: 0.25, flexShrink: 0 }}
        >
          {checkingId === t.id ? <CircularProgress size={16} thickness={5} /> : <HealthAndSafetyIcon fontSize="small" />}
        </IconButton>
      ) : null}
      {t.tag ? (
        <Chip label={t.tag} size="small" sx={{ fontSize: 9, height: 18, flexShrink: 0, alignSelf: "flex-start", mt: 0.25 }} />
      ) : null}
    </ListItemButton>
  );

  const primary = items.filter((t) => !t.secondary);
  const secondary = items.filter((t) => t.secondary);

  return (
    <Paper
      elevation={0}
      sx={{ width, borderLeft: 1, borderColor: "divider", display: "flex", flexDirection: "column", flexShrink: 0 }}
    >
      <Box
        sx={{
          px: 2,
          py: 1.5,
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        {onNew ? (
          <IconButton size="small" onClick={onNew} title={newTitle} aria-label={newTitle}>
            <AddIcon fontSize="small" />
          </IconButton>
        ) : null}
      </Box>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
          <CircularProgress size={20} />
        </Box>
      ) : (
        <Box sx={{ overflow: "auto", flex: 1 }}>
          {blocks.length > 0 && (
            <>
              <Typography variant="caption" sx={{ ...groupCaptionSx, pt: 1.5 }}>
                {blocksLabel}
              </Typography>
              {blocks.map((block) => {
                const blockItems = block.steps
                  .map((sid) => items.find((t) => t.id === sid))
                  .filter(Boolean) as Sidebar08Item[];
                if (blockItems.length === 0) return null;
                const isExpanded = expandedBlocks.has(block.id);
                const toggleExpand = () => {
                  setExpandedBlocks((prev) => {
                    const next = new Set(prev);
                    if (next.has(block.id)) next.delete(block.id);
                    else next.add(block.id);
                    return next;
                  });
                };
                return (
                  <Box key={block.id} sx={{ mb: 0.5 }}>
                    <Box
                      onClick={() => {
                        toggleExpand();
                        if (!isExpanded) {
                          const last = blockItems[blockItems.length - 1];
                          if (last) onSelect(last);
                        }
                      }}
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        cursor: "pointer",
                        "&:hover": { bgcolor: "action.hover" },
                        borderRadius: 0.5,
                      }}
                    >
                      {isExpanded ? (
                        <ExpandMoreIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                      ) : (
                        <ChevronRightIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                      )}
                      <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary", fontSize: 11, flex: 1 }}>
                        {block.name}
                      </Typography>
                    </Box>
                    {isExpanded ? (
                      <List dense disablePadding>
                        {blockItems.map((t, i) => (
                          <Box key={t.id} sx={{ display: "flex", alignItems: "stretch" }}>
                            <Box sx={{ width: 20, display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, ml: 1 }}>
                              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "primary.main", mt: 1.2, flexShrink: 0 }} />
                              {i < blockItems.length - 1 && <Box sx={{ width: 2, flex: 1, bgcolor: "divider" }} />}
                            </Box>
                            <Box sx={{ flex: 1, minWidth: 0 }}>{renderRow(t, { checkable: true })}</Box>
                          </Box>
                        ))}
                      </List>
                    ) : (
                      <Box sx={{ px: 2, py: 0.5, display: "flex", alignItems: "center", gap: 0.5, flexWrap: "wrap" }}>
                        {blockItems.map((t, i) => (
                          <React.Fragment key={t.id}>
                            <Chip
                              label={t.name}
                              size="small"
                              sx={{ fontSize: 9, height: 18 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelect(t);
                              }}
                            />
                            {i < blockItems.length - 1 && <ArrowForwardIcon sx={{ fontSize: 10, color: "text.disabled" }} />}
                          </React.Fragment>
                        ))}
                      </Box>
                    )}
                  </Box>
                );
              })}
              <Divider sx={{ my: 0.5 }} />
            </>
          )}
          <Typography variant="caption" sx={{ ...groupCaptionSx, pt: 1.5 }}>
            {primaryLabel}
          </Typography>
          <List dense disablePadding>
            {primary.map((t) => renderRow(t, { checkable: true }))}
          </List>
          {secondary.length > 0 && (
            <>
              <Divider sx={{ my: 0.5 }} />
              <Typography variant="caption" sx={{ ...groupCaptionSx, pt: 1 }}>
                {secondaryLabel}
              </Typography>
              <List dense disablePadding>
                {secondary.map((t) => renderRow(t))}
              </List>
            </>
          )}
        </Box>
      )}
    </Paper>
  );
}

export default Sidebar08;
