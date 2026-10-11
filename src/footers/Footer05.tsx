"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface Footer05Link {
  label: React.ReactNode;
  href: string;
}

export interface Footer05Props {
  /** Leading copyright text, e.g. "© 2024". */
  copyright: React.ReactNode;
  /** Bold credit link after the copyright. */
  credit?: Footer05Link;
  /** Underlined text links on the right (e.g. Terms, Privacy). */
  links: Footer05Link[];
  /** Called with the link href on click. When omitted, the browser navigates to href. */
  onNavigate?: (href: string) => void;
}

/**
 * Centered in-flow footer row with a top border on the paper background:
 * a primary-coloured copyright with a bold credit link, then underlined text links.
 */
export function Footer05(props: Footer05Props) {
  const { copyright, credit, links, onNavigate } = props;
  const navigate = (href: string) => {
    if (onNavigate) onNavigate(href);
    else if (typeof window !== "undefined") window.location.assign(href);
  };
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "24px 16px",
        marginTop: 4,
        borderTop: 1,
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="body2" color="primary">
        {copyright}
        {credit && (
          <>
            {" "}
            <Typography
              component="a"
              href={credit.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: "none", color: "inherit", fontWeight: "bold", mr: 2 }}
            >
              {credit.label}
            </Typography>
          </>
        )}
      </Typography>
      <Box>
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
            }}
          >
            {link.label}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default Footer05;
