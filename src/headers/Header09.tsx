import * as React from "react";
import Box from "@mui/material/Box";

export interface Header09Item {
  label: React.ReactNode;
  href: string;
  active?: boolean;
}

export interface Header09Props {
  items: Header09Item[];
  /** Href of the active item (alternative to `active` on each item). */
  activeHref?: string;
  linkComponent?: React.ElementType;
}

/**
 * Underlined tab strip for a section: a `nav` row with a bottom divider, each link
 * padded, semibold and accent-underlined when active, muted otherwise.
 */
export function Header09({ items, activeHref, linkComponent = "a" }: Header09Props) {
  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        gap: 0.5,
        px: { xs: 2, sm: 3 },
        pt: 2,
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.default",
      }}
    >
      {items.map((item) => {
        const active = item.active ?? (activeHref !== undefined && (activeHref === item.href || activeHref.startsWith(`${item.href}/`)));
        return (
          <Box
            key={item.href}
            component={linkComponent}
            href={item.href}
            aria-current={active ? "page" : undefined}
            sx={{
              px: 1.75,
              py: 1.25,
              fontSize: 14,
              fontWeight: active ? 600 : 500,
              color: active ? "text.primary" : "text.secondary",
              textDecoration: "none",
              borderBottom: 2,
              borderColor: active ? "secondary.main" : "transparent",
              mb: "-1px",
              "&:hover": { color: "text.primary" },
            }}
          >
            {item.label}
          </Box>
        );
      })}
    </Box>
  );
}

export default Header09;
