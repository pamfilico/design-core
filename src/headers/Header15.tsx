import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export interface Header15Props {
  title: React.ReactNode;
  /** String → secondary body text; node → rendered as is. */
  subtitle?: React.ReactNode;
  /** Icon in a rounded, primary-tinted square left of the title. */
  icon?: React.ReactNode;
  /** Shows a "Back" text button above the title. */
  onBack?: () => void;
  backLabel?: React.ReactNode;
  badge?: React.ReactNode;
  badgeColor?: "default" | "primary" | "success" | "warning" | "error";
  /** Right-aligned actions (wrap under the title on narrow screens). */
  actions?: React.ReactNode;
}

/**
 * In-page title block: optional back button, a 56px tinted icon tile, an h4 title
 * with an optional badge chip, a secondary subtitle, and actions on the right.
 */
export function Header15({ title, subtitle, icon, onBack, backLabel = "Back", badge, badgeColor = "default", actions }: Header15Props) {
  return (
    <Box sx={{ mb: 4 }}>
      {onBack && (
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={onBack}
          sx={{ mb: 2, color: "text.secondary", "&:hover": { bgcolor: (t) => alpha(t.palette.primary.main, 0.03) } }}
        >
          {backLabel}
        </Button>
      )}
      <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {icon && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                borderRadius: "14px",
                bgcolor: (t) => alpha(t.palette.primary.main, 0.08),
                color: "primary.main",
              }}
            >
              {icon}
            </Box>
          )}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Typography variant="h4" component="h1" fontWeight={700} sx={{ color: "text.primary" }}>
                {title}
              </Typography>
              {badge && <Chip label={badge} color={badgeColor} size="small" sx={{ fontWeight: 600 }} />}
            </Box>
            {subtitle && (
              <Box sx={{ mt: 0.5 }}>
                {typeof subtitle === "string" ? (
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    {subtitle}
                  </Typography>
                ) : (
                  subtitle
                )}
              </Box>
            )}
          </Box>
        </Box>
        {actions && <Box>{actions}</Box>}
      </Box>
    </Box>
  );
}

export default Header15;
