import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export interface Footer02Link {
  label: React.ReactNode;
  href: string;
}

export interface Footer02Column {
  /** Column heading, e.g. "Support" or "Legal". */
  title: React.ReactNode;
  links: Footer02Link[];
}

export interface Footer02Props {
  /** Name shown as the heading of the first column. */
  brandName: React.ReactNode;
  /** Short description under the brand name. */
  description?: React.ReactNode;
  /** Link columns after the brand column. */
  columns: Footer02Column[];
  /** Centered copyright line under the columns. */
  copyright: React.ReactNode;
  /** Component used to render links (e.g. a router link). Defaults to "a". */
  linkComponent?: React.ElementType;
  /** Width of each column on md+ screens, out of 12 (default 3). */
  columnSize?: number;
}

/**
 * Multi-column site footer: a brand column with a short description, then
 * headed columns of stacked links, and a centered copyright line below.
 * Columns stack on mobile, two per row on small screens.
 */
export function Footer02(props: Footer02Props) {
  const { brandName, description, columns, copyright, linkComponent = "a", columnSize = 3 } = props;
  const size = { xs: 12, sm: 6, md: columnSize };
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        py: 4,
        borderTop: 1,
        borderColor: "divider",
        marginTop: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={size}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {brandName}
            </Typography>
            {description && (
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            )}
          </Grid>
          {columns.map((column, i) => (
            <Grid key={i} size={size}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {column.title}
              </Typography>
              {column.links.map((link) => (
                <Link
                  key={link.href}
                  component={linkComponent}
                  href={link.href}
                  variant="body2"
                  display="block"
                  color="text.secondary"
                  sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                >
                  {link.label}
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {copyright}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer02;
