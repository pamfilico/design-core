import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export interface Header05Item {
  label: React.ReactNode;
  href: string;
}

export interface Header05Props {
  /** Bold title link at the left. */
  title: React.ReactNode;
  titleHref?: string;
  /** Small text buttons after the title. */
  items?: Header05Item[];
  signOutLabel?: React.ReactNode;
  onSignOut?: () => void;
  /** Component used for links (e.g. a router link); default "a". */
  linkComponent?: React.ElementType;
}

/**
 * Plain static admin bar on the default (neutral) AppBar colour: a bold title link,
 * a row of small text-button links, a spacer and a small sign-out button.
 */
export function Header05({
  title,
  titleHref = "/",
  items = [],
  signOutLabel = "Sign out",
  onSignOut,
  linkComponent = "a",
}: Header05Props) {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ gap: 2 }}>
        <Typography
          variant="h6"
          component={linkComponent}
          href={titleHref}
          sx={{ color: "text.primary", textDecoration: "none", fontWeight: 700 }}
        >
          {title}
        </Typography>
        {items.map((item) => (
          <Button key={item.href} component={linkComponent} href={item.href} size="small" color="inherit">
            {item.label}
          </Button>
        ))}
        <Box sx={{ flexGrow: 1 }} />
        {onSignOut && (
          <Button onClick={onSignOut} size="small" color="inherit">
            {signOutLabel}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header05;
