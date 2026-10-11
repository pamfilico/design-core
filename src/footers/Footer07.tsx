import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export interface Footer07Link {
  label: React.ReactNode;
  href: string;
}

export interface Footer07Props {
  /** Leading copyright text, e.g. "© 2024". */
  copyright: React.ReactNode;
  /** Credit link after the copyright. */
  credit?: Footer07Link;
  /** Links after the copyright (default: Terms, Privacy). */
  links?: Footer07Link[];
  /** Solid black background (default true). When false the bar is transparent. */
  solid?: boolean;
  /** Open the links in a new tab (default true). */
  openInNewTab?: boolean;
}

const defaultLinks: Footer07Link[] = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

/**
 * Minimal 60px bar fixed to the bottom of the viewport with white text:
 * "© year credit" followed by inline links, all centered.
 */
export function Footer07(props: Footer07Props) {
  const { copyright, credit, links = defaultLinks, solid = true, openInNewTab = true } = props;
  const target = openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Box
      component="footer"
      sx={{
        minHeight: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: solid ? "common.black" : "transparent",
      }}
    >
      <Typography variant="body2" color="common.white" align="center">
        {copyright}
        {credit && (
          <>
            {" "}
            <Link href={credit.href} target="_blank" rel="noopener noreferrer" sx={{ color: "common.white" }}>
              {credit.label}
            </Link>
          </>
        )}
      </Typography>
      <Typography variant="body2" color="text.primary" align="center">
        {links.map((link) => (
          <Link key={link.href} href={link.href} {...target} sx={{ color: "common.white", marginLeft: "10px" }}>
            {link.label}
          </Link>
        ))}
      </Typography>
    </Box>
  );
}

export default Footer07;
