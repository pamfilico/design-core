import * as React from "react";
import Button from "@mui/material/Button";

export interface Header26Props {
  label: React.ReactNode;
  href?: string;
  onClick?: () => void;
  /** Active page: contained instead of text. */
  active?: boolean;
  linkComponent?: React.ElementType;
}

/** Single bold, no-wrap toolbar navigation button (text; contained when active). */
export function Header26({ label, href, onClick, active = false, linkComponent = "a" }: Header26Props) {
  return (
    <Button
      variant={active ? "contained" : "text"}
      onClick={onClick}
      {...(href ? { component: linkComponent, href } : {})}
      sx={{ my: 2, display: "block", fontWeight: "bold", whiteSpace: "nowrap", width: "auto" }}
    >
      {label}
    </Button>
  );
}

export default Header26;
