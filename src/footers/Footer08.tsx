import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export interface Footer08Link {
  label: React.ReactNode;
  href: string;
  /** Open in a new tab. */
  external?: boolean;
}

export interface Footer08Column {
  /** Upper-case column heading, e.g. "LINKS" or "LEGAL". */
  title: React.ReactNode;
  links: Footer08Link[];
}

export interface Footer08Props {
  /** Small logo shown before the app name. */
  logo?: React.ReactNode;
  /** Name next to the logo. */
  appName: React.ReactNode;
  /** Where the logo + name link to (default "/#"). */
  homeHref?: string;
  /** Short description under the name. */
  description?: React.ReactNode;
  /** Copyright line, e.g. "Copyright © 2025 - All rights reserved". */
  copyright: React.ReactNode;
  /** Link columns after the brand column. */
  columns: Footer08Column[];
  /** Component used to render internal links (e.g. a router link). Defaults to "a". */
  linkComponent?: React.ElementType;
}

/**
 * Centered multi-column footer: a brand column with logo, name, description and
 * copyright, then bold upper-case headed link columns. Centered text on mobile,
 * left-aligned from md up.
 */
export function Footer08(props: Footer08Props) {
  const { logo, appName, homeHref = "/#", description, copyright, columns, linkComponent = "a" } = props;
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "background.paper", borderTop: 1, borderColor: "divider", py: 6 }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid size={{ xs: 12, sm: 6, md: 3 }} textAlign={{ xs: "center", md: "left" }}>
          <Box
            component={linkComponent}
            href={homeHref}
            aria-current="page"
            sx={{ color: "inherit", textDecoration: "none" }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              mb={2}
            >
              {logo}
              <Typography variant="h6" fontWeight="bold" ml={1}>
                {appName}
              </Typography>
            </Box>
          </Box>
          {description && (
            <Typography variant="body2" color="text.secondary" mt={2}>
              {description}
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary" mt={2}>
            {copyright}
          </Typography>
        </Grid>

        {columns.map((column, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              {column.title}
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ xs: "center", md: "flex-start" }}
              gap={1}
            >
              {column.links.map((link) =>
                link.external ? (
                  <Link key={link.href} href={link.href} target="_blank" color="inherit" underline="hover">
                    {link.label}
                  </Link>
                ) : (
                  <Link key={link.href} component={linkComponent} href={link.href} color="inherit" underline="hover">
                    {link.label}
                  </Link>
                ),
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Footer08;
