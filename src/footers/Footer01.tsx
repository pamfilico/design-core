import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface Footer01Link {
  label: React.ReactNode;
  href: string;
}

export interface Footer01Props {
  /** Copyright line, e.g. "© 2025 Company. All rights reserved." */
  copyright: React.ReactNode;
  /** Links on the right (default: Privacy Policy, Terms of Service). */
  links?: Footer01Link[];
  /** Component used to render links (e.g. a router link). Defaults to "a". */
  linkComponent?: React.ElementType;
  /** Hide the footer on extra-small screens (default true, like the original). */
  hideOnMobile?: boolean;
}

const defaultLinks: Footer01Link[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

/**
 * Compact grey footer bar: copyright on the left, small text links on the right.
 * Stacks vertically on small screens and is hidden on extra-small screens by default.
 */
export function Footer01(props: Footer01Props) {
  const { copyright, links = defaultLinks, linkComponent = "a", hideOnMobile = true } = props;
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 0.75, sm: 1 },
        px: { xs: 1, sm: 2 },
        mt: "auto",
        display: hideOnMobile ? { xs: "none", sm: "block" } : "block",
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 0.5, sm: 2 }}
          justifyContent="space-between"
          alignItems={{ xs: "center", sm: "center" }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            {copyright}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 0.5, sm: 2 }} alignItems="center">
            {links.map((link) => (
              <Box
                key={link.href}
                component={linkComponent}
                href={link.href}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.7rem", sm: "0.875rem" },
                    "&:hover": { textDecoration: "underline" },
                    textAlign: "center",
                  }}
                >
                  {link.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer01;
