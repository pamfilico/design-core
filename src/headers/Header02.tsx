"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import AppsIcon from "@mui/icons-material/Apps";

export interface Header02Item {
  label: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
}

export interface Header02Props {
  /** Live tiles. */
  items: Header02Item[];
  /** Disabled tiles shown under a divider and a "Coming soon" caption. */
  comingSoon?: Header02Item[];
  comingSoonLabel?: string;
  /** Tooltip / aria label of the launcher button. */
  title?: string;
  /** Component used for each tile link (e.g. a router link); default "a". */
  linkComponent?: React.ElementType;
}

const gridSx = { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0.5 } as const;

const tileSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 0.75,
  p: 1.25,
  minWidth: 0,
  width: "100%",
  borderRadius: 1,
  textAlign: "center",
  "& svg": { fontSize: 26 },
} as const;

/**
 * "Waffle" app launcher for a header: a 9-dot icon button that opens a menu with a
 * three-column grid of icon tiles, plus an optional disabled "coming soon" group
 * below a divider. The active tile uses the secondary colour.
 */
export function Header02({
  items,
  comingSoon = [],
  comingSoonLabel = "Coming soon",
  title = "Apps",
  linkComponent = "a",
}: Header02Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => setAnchorEl(null);

  if (items.length === 0 && comingSoon.length === 0) return null;

  return (
    <>
      <Tooltip title={title}>
        <IconButton
          color="inherit"
          onClick={(e) => setAnchorEl(e.currentTarget)}
          aria-label={title}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <AppsIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              width: 368,
              maxWidth: "calc(100vw - 16px)",
              maxHeight: "min(80vh, 720px)",
              overflowX: "hidden",
              overflowY: "auto",
            },
          },
          list: { sx: { p: 1, display: "block" } },
        }}
      >
        <Box>
          <Box sx={gridSx}>
            {items.map((item) => (
              <Box key={item.href} sx={{ position: "relative", minWidth: 0 }}>
                <ButtonBase
                  component={linkComponent}
                  href={item.href}
                  onClick={handleClose}
                  sx={{
                    ...tileSx,
                    color: item.active ? "secondary.main" : "text.primary",
                    "&:hover": { bgcolor: "action.hover" },
                  }}
                >
                  {item.icon}
                  <Typography variant="caption" sx={{ lineHeight: 1.2, width: "100%" }} noWrap>
                    {item.label}
                  </Typography>
                </ButtonBase>
              </Box>
            ))}
          </Box>
          {comingSoon.length > 0 && (
            <>
              <Divider sx={{ my: 1 }} />
              <Typography
                variant="caption"
                sx={{ display: "block", px: 1, mb: 0.5, fontWeight: 600, color: "text.secondary", letterSpacing: "0.04em" }}
              >
                {comingSoonLabel}
              </Typography>
              <Box sx={gridSx}>
                {comingSoon.map((item) => (
                  <Box key={item.href} sx={{ position: "relative", minWidth: 0 }}>
                    <Box aria-disabled="true" sx={{ ...tileSx, color: "text.disabled", opacity: 0.6, cursor: "default" }}>
                      {item.icon}
                      <Typography variant="caption" sx={{ lineHeight: 1.2, width: "100%" }} noWrap>
                        {item.label}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </>
          )}
        </Box>
      </Menu>
    </>
  );
}

export default Header02;
