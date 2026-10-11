"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Snackbar from "@mui/material/Snackbar";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { alpha, type Theme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CopyIcon from "@mui/icons-material/ContentCopy";
import LogoutIcon from "@mui/icons-material/Logout";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PublicIcon from "@mui/icons-material/Public";

export interface Sidebar12Item {
  key?: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface Sidebar12Props {
  open: boolean;
  onClose: () => void;
  items: Sidebar12Item[];
  /** Current path; the exactly matching item is selected. */
  activeHref: string;
  onNavigate?: (href: string) => void;
  /** Link component (e.g. a router link). Defaults to "a". */
  linkComponent?: React.ElementType;
  /** Signed-in email shown under the close button. */
  userEmail?: string | null;
  /** Public page URL. The card is hidden while this is empty. */
  publicPageUrl?: string | null;
  onSignOut: () => void;
  signOutLabel?: string;
  publicPageLabel?: string;
  openLabel?: string;
  copyLabel?: string;
  openTooltip?: string;
  copyTooltip?: string;
  copiedMessage?: string;
}

const actionButtonSx = (t: Theme) => ({
  color: "primary.contrastText",
  backgroundColor: alpha(t.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(t.palette.common.white, 0.25) },
  flex: 1,
  borderRadius: 1,
  py: 0.75,
});

/**
 * Temporary left drawer opened from a header hamburger: a close chevron, the signed-in
 * email, a primary-coloured "public page" card (open in new tab / copy link), a flat list
 * of pages with solid primary selection, and a red sign-out row pinned at the bottom. A
 * snackbar confirms the copied link.
 */
export function Sidebar12({
  open,
  onClose,
  items,
  activeHref,
  onNavigate,
  linkComponent = "a",
  userEmail,
  publicPageUrl,
  onSignOut,
  signOutLabel = "Sign Out",
  publicPageLabel = "Public Page",
  openLabel = "Open",
  copyLabel = "Copy",
  openTooltip = "Open in new tab",
  copyTooltip = "Copy link",
  copiedMessage = "Link copied to clipboard",
}: Sidebar12Props) {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleCopyLink = () => {
    if (!publicPageUrl) return;
    navigator.clipboard?.writeText(publicPageUrl);
    setSnackbarOpen(true);
  };

  return (
    <>
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        data-testid="sidebar-drawer"
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { xs: 200, sm: 220 },
            maxWidth: "75vw",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "background.paper",
            backdropFilter: "none",
            borderRight: 1,
            borderColor: "divider",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            minHeight: { xs: 44, sm: 48 },
            px: 1,
            py: 0.25,
          }}
        >
          <IconButton
            onClick={onClose}
            size="small"
            sx={{ p: 0.5, "& .MuiSvgIcon-root": { fontSize: { xs: "1.125rem", sm: "1.25rem" } } }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>

        {userEmail && (
          <Box sx={{ px: { xs: 1.5, sm: 1.75 }, py: { xs: 1, sm: 1.25 }, pb: { xs: 1.25, sm: 1.5 } }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "0.8125rem", sm: "0.875rem" },
                fontWeight: 500,
                color: "text.secondary",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {userEmail}
            </Typography>
          </Box>
        )}

        {publicPageUrl && (
          <>
            <Box sx={{ px: 1, pb: 1 }}>
              <Box sx={{ p: 1.5, backgroundColor: "primary.main", borderRadius: 1, color: "primary.contrastText" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1 }}>
                  <PublicIcon sx={{ fontSize: "1rem" }} />
                  <Typography variant="caption" sx={{ fontWeight: 600, fontSize: "0.75rem" }}>
                    {publicPageLabel}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 0.5 }}>
                  <Tooltip title={openTooltip}>
                    <IconButton size="small" onClick={() => window.open(publicPageUrl, "_blank")} sx={actionButtonSx}>
                      <OpenInNewIcon sx={{ fontSize: "1rem", mr: 0.5 }} />
                      <Typography variant="caption" sx={{ fontSize: "0.7rem" }}>
                        {openLabel}
                      </Typography>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={copyTooltip}>
                    <IconButton size="small" onClick={handleCopyLink} sx={actionButtonSx}>
                      <CopyIcon sx={{ fontSize: "1rem", mr: 0.5 }} />
                      <Typography variant="caption" sx={{ fontSize: "0.7rem" }}>
                        {copyLabel}
                      </Typography>
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Box>
            <Divider />
          </>
        )}

        <Box sx={{ flex: 1, overflow: "auto", py: 0 }}>
          <List sx={{ py: 0.5, px: 0.5 }}>
            {items.map((item) => {
              const selected = activeHref === item.href;
              const key = item.key ?? item.href;
              return (
                <ListItem key={key} disablePadding>
                  <ListItemButton
                    component={linkComponent}
                    href={item.href}
                    selected={selected}
                    data-testid={`nav-${key}`}
                    onClick={(e: React.MouseEvent) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate(item.href);
                      }
                      onClose();
                    }}
                    sx={{
                      py: { xs: 0.75, sm: 0.875 },
                      px: { xs: 1, sm: 1.25 },
                      minHeight: { xs: 40, sm: 44 },
                      borderRadius: 1,
                      "&.Mui-selected": {
                        backgroundColor: "primary.main",
                        color: "primary.contrastText",
                        "&:hover": { backgroundColor: "primary.dark" },
                        "& .MuiListItemIcon-root": { color: "primary.contrastText" },
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: "inherit",
                        minWidth: { xs: 32, sm: 36 },
                        "& .MuiSvgIcon-root": { fontSize: { xs: "1.125rem", sm: "1.25rem" } },
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: { xs: "0.8125rem", sm: "0.875rem" },
                        fontWeight: selected ? 600 : 400,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Divider />
        <Box sx={{ py: 0.5, px: 0.5 }}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                onSignOut();
                onClose();
              }}
              data-testid="btn-signout"
              sx={{
                py: { xs: 0.75, sm: 0.875 },
                px: { xs: 1, sm: 1.25 },
                minHeight: { xs: 40, sm: 44 },
                borderRadius: 1,
                color: "error.main",
                "&:hover": {
                  backgroundColor: "error.light",
                  color: "error.contrastText",
                  "& .MuiListItemIcon-root": { color: "error.contrastText" },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: { xs: 32, sm: 36 },
                  color: "inherit",
                  "& .MuiSvgIcon-root": { fontSize: { xs: "1.125rem", sm: "1.25rem" } },
                }}
              >
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                primary={signOutLabel}
                primaryTypographyProps={{ fontSize: { xs: "0.8125rem", sm: "0.875rem" }, fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        </Box>
      </Drawer>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        message={copiedMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
}

export default Sidebar12;
