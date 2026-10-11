import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export interface Header30Item {
  label: React.ReactNode;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface Header30Props {
  /** Logo (≈50px) linking home. */
  logo?: React.ReactNode;
  logoHref?: string;
  /** Text navigation buttons (active one gets a darker background). */
  items?: Header30Item[];
  /** Hide the auth button entirely. */
  showAuth?: boolean;
  signedIn?: boolean;
  signOutLabel?: React.ReactNode;
  onSignOut?: () => void;
  signInLabel?: React.ReactNode;
  onSignIn?: () => void;
  linkComponent?: React.ElementType;
}

/**
 * Minimal fixed bar: logo link, spacer, a block of bold text navigation buttons and
 * a bold sign-in / sign-out text button at the right.
 */
export function Header30({
  logo,
  logoHref = "/",
  items = [],
  showAuth = true,
  signedIn = false,
  signOutLabel = "Logout",
  onSignOut,
  signInLabel = "Login",
  onSignIn,
  linkComponent = "a",
}: Header30Props) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        {logo && (
          <Link component={linkComponent} href={logoHref} sx={{ display: "flex", alignItems: "center" }}>
            {logo}
          </Link>
        )}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-start" }}>
          {items.map((item, i) => (
            <Button
              key={i}
              {...(item.href ? { component: linkComponent, href: item.href } : {})}
              onClick={item.onClick}
              sx={{ color: "inherit", my: 2, display: "block", fontWeight: "bold", backgroundColor: item.active ? "primary.dark" : undefined }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
        {showAuth && (
          <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
            <Button
              sx={{ color: "inherit", my: 2, display: "block", fontWeight: "bold", ...(signedIn ? {} : { fontSize: "1rem" }) }}
              onClick={signedIn ? onSignOut : onSignIn}
            >
              {signedIn ? signOutLabel : signInLabel}
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header30;
