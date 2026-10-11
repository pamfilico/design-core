import * as React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export interface Header20Item {
  /** Short label under the icon. */
  label: React.ReactNode;
  /** Longer tooltip text (defaults to the label). */
  tooltip?: React.ReactNode;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface Header20Props {
  items: Header20Item[];
  linkComponent?: React.ElementType;
}

const navButtonSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 0.25,
  minWidth: "auto",
  px: 0.75,
  py: 0.5,
  my: 0.5,
  fontSize: "0.6875rem",
  fontWeight: 500,
  lineHeight: 1.2,
  textTransform: "none",
  whiteSpace: "nowrap",
  "& svg": { fontSize: 18 },
} as const;

/**
 * Compact row of stacked icon-over-label text buttons for a toolbar (public site
 * sections), each with an arrow tooltip. Renders a fragment so it flows inline.
 */
export function Header20({ items, linkComponent = "a" }: Header20Props) {
  return (
    <>
      {items.map((item, i) => (
        <Tooltip key={i} title={item.tooltip ?? item.label} arrow>
          <Button
            sx={navButtonSx}
            onClick={item.onClick}
            {...(item.href ? { component: linkComponent, href: item.href } : {})}
          >
            {item.icon}
            {item.label}
          </Button>
        </Tooltip>
      ))}
    </>
  );
}

export default Header20;
