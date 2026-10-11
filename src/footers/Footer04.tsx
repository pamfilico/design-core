"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface Footer04Link {
  label: React.ReactNode;
  href: string;
}

export interface Footer04Props {
  /** Leading copyright text, e.g. "© 2024 Company by". */
  copyright: React.ReactNode;
  /** Bold credit link after the copyright. */
  credit?: Footer04Link;
  /** Underlined text links on the right (e.g. Terms, Privacy). */
  links: Footer04Link[];
  /** Called with the link href on click. When omitted, the browser navigates to href. */
  onNavigate?: (href: string) => void;
  /** Pin the bar to the bottom of the viewport (default true). */
  fixed?: boolean;
}

/**
 * Slim footer bar fixed to the bottom of the viewport with a soft top shadow:
 * a primary-coloured copyright with a bold credit link, then underlined text links.
 */
export function Footer04(props: Footer04Props) {
  const { copyright, credit, links, onNavigate, fixed = true } = props;
  const navigate = (href: string) => {
    if (onNavigate) onNavigate(href);
    else if (typeof window !== "undefined") window.location.assign(href);
  };
  const fontSize = { xs: "0.75rem", sm: "0.875rem" };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", sm: "row" },
        justifyContent: "center",
        alignItems: "center",
        position: fixed ? "fixed" : "static",
        bottom: 0,
        width: "100%",
        padding: "8px 16px",
        boxShadow: "0 -1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="body2" color="primary" sx={{ fontSize }}>
        {copyright}
        {credit && (
          <>
            {" "}
            <Typography
              component="a"
              href={credit.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: "none", color: "inherit", fontWeight: "bold", mr: 2, fontSize }}
            >
              {credit.label}
            </Typography>
          </>
        )}
      </Typography>
      <Box sx={{ mt: { xs: 1, sm: 0 } }}>
        {links.map((link, i) => (
          <Typography
            key={link.href}
            variant="body2"
            component="span"
            onClick={() => navigate(link.href)}
            sx={{
              cursor: "pointer",
              marginRight: i < links.length - 1 ? 2 : 0,
              textDecoration: "underline",
              fontSize,
            }}
          >
            {link.label}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default Footer04;
