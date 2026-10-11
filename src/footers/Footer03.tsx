import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface Footer03Link {
  label: React.ReactNode;
  href: string;
}

export interface Footer03Props {
  /** Copyright line on the left. */
  copyright: React.ReactNode;
  /** Internal links (rendered with `linkComponent`), e.g. Privacy / Terms. */
  links: Footer03Link[];
  /** External links rendered as plain anchors after the internal ones (e.g. a source repository). */
  externalLinks?: Footer03Link[];
  /** Component used to render internal links (e.g. a router link). Defaults to "a". */
  linkComponent?: React.ElementType;
}

/**
 * Grey footer bar with a body-size copyright on the left and a row of small links
 * on the right, followed by optional external links. Stacks on mobile.
 */
export function Footer03(props: Footer03Props) {
  const { copyright, links, externalLinks = [], linkComponent = "a" } = props;
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1" color="text.secondary">
            {copyright}
          </Typography>
          <Stack direction="row" spacing={2}>
            {links.map((link) => (
              <Box key={link.href} component={linkComponent} href={link.href} style={{ textDecoration: "none" }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ "&:hover": { textDecoration: "underline" } }}
                >
                  {link.label}
                </Typography>
              </Box>
            ))}
            {externalLinks.map((link) => (
              <Link key={link.href} href={link.href} color="inherit" underline="hover">
                {link.label}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer03;
