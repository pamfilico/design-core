import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface Footer06Link {
  label: React.ReactNode;
  href: string;
}

export interface Footer06Props {
  /** Business name shown after "© {year}". */
  businessName?: React.ReactNode;
  /** Year in the copyright (default: current year). */
  year?: number;
  /** Legal links in the middle (e.g. Terms, Privacy, Cookies). */
  links: Footer06Link[];
  /** "Powered by" label on the right. */
  poweredByLabel?: React.ReactNode;
  /** Bold name after the "Powered by" label. */
  poweredByName?: React.ReactNode;
}

/**
 * Bordered paper footer for a business's public page: "© year name" on the left,
 * a row of legal links in the middle and a "Powered by" credit on the right.
 * Stacks left-aligned on mobile.
 */
export function Footer06(props: Footer06Props) {
  const { businessName, year = new Date().getFullYear(), links, poweredByLabel, poweredByName } = props;
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: "divider", bgcolor: "background.paper", mt: "auto" }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 3 }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          sx={{ py: 2.5 }}
        >
          <Typography variant="body2" color="text.secondary">
            © {year} {businessName ?? ""}
          </Typography>
          <Stack direction="row" spacing={2.5}>
            {links.map((link) => (
              <Link key={link.href} href={link.href} underline="hover" color="text.secondary" variant="body2">
                {link.label}
              </Link>
            ))}
          </Stack>
          {(poweredByLabel || poweredByName) && (
            <Typography variant="body2" color="text.secondary">
              {poweredByLabel} <strong>{poweredByName}</strong>
            </Typography>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer06;
