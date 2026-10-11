"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export interface Header04Action {
  label: React.ReactNode;
  icon?: React.ReactNode;
  /** May return a promise; the drawer closes once it settles. */
  onClick?: () => void | Promise<void>;
  loading?: boolean;
  disabled?: boolean;
  variant?: "contained" | "outlined";
}

export interface Header04Select {
  label: string;
  value: string;
  options: { value: string; label: React.ReactNode }[];
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export interface Header04Section {
  title: React.ReactNode;
  /** Optional select shown above the section's buttons. */
  select?: Header04Select;
  actions: Header04Action[];
}

export interface Header04Props {
  onBack?: () => void;
  backLabel?: string;
  /** Breadcrumbs (or a title) next to the back button. */
  breadcrumbs?: React.ReactNode;
  /** Sections of the right-hand actions drawer. No sections → no drawer and no menu button. */
  sections?: Header04Section[];
  drawerTitle?: React.ReactNode;
  openActionsLabel?: string;
  closeLabel?: string;
}

/**
 * Static bar with a back arrow, a breadcrumbs slot and, when actions exist, a menu
 * button that opens a right drawer. The drawer has a title row with a close button
 * and divided sections of full-width buttons (first section contained, the rest
 * outlined by default), each showing a spinner while loading.
 */
export function Header04({
  onBack,
  backLabel = "Back",
  breadcrumbs,
  sections = [],
  drawerTitle = "Actions",
  openActionsLabel = "open actions menu",
  closeLabel = "close drawer",
}: Header04Props) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const hasDrawer = sections.length > 0;

  const run = async (action: Header04Action) => {
    if (!action.onClick) return;
    await action.onClick();
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onBack} sx={{ mr: 2 }} aria-label={backLabel}>
            <ArrowBackIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>{breadcrumbs}</Box>
          {hasDrawer && (
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)} aria-label={openActionsLabel} sx={{ mr: 1 }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {hasDrawer && (
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{ "& .MuiDrawer-paper": { width: { xs: "100%", sm: 400, md: 450 }, maxWidth: "90vw" } }}
        >
          <Box sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
              <Typography variant="h6">{drawerTitle}</Typography>
              <IconButton onClick={() => setDrawerOpen(false)} aria-label={closeLabel}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider sx={{ mb: 3 }} />
            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 3 }}>
              {sections.map((section, si) => (
                <React.Fragment key={si}>
                  {si > 0 && <Divider />}
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2, fontWeight: 600 }}>
                      {section.title}
                    </Typography>
                    {section.select && (
                      <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>{section.select.label}</InputLabel>
                        <Select
                          value={section.select.value}
                          label={section.select.label}
                          onChange={(e) => section.select?.onChange?.(e.target.value)}
                          disabled={section.select.disabled}
                        >
                          {section.select.options.map((o) => (
                            <MenuItem key={o.value} value={o.value}>
                              {o.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                    {section.actions.map((action, ai) => {
                      const variant = action.variant ?? (si === 0 ? "contained" : "outlined");
                      return (
                        <Button
                          key={ai}
                          variant={variant}
                          fullWidth
                          startIcon={
                            action.loading ? (
                              <CircularProgress size={20} color={variant === "contained" ? "inherit" : "primary"} />
                            ) : (
                              action.icon
                            )
                          }
                          onClick={() => run(action)}
                          disabled={action.disabled || action.loading}
                          sx={{ mb: ai < section.actions.length - 1 ? 1 : 0 }}
                        >
                          {action.label}
                        </Button>
                      );
                    })}
                  </Box>
                </React.Fragment>
              ))}
            </Box>
          </Box>
        </Drawer>
      )}
    </>
  );
}

export default Header04;
