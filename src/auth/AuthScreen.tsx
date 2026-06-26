"use client";

import * as React from "react";
import Box from "@mui/material/Box";

export interface AuthScreenProps {
  /** Usually an <AuthCard />. */
  children: React.ReactNode;
  /** Optional content above the card (logo, marketing copy). */
  header?: React.ReactNode;
  /** Optional content below the card (legal, links). */
  footer?: React.ReactNode;
}

/**
 * Full-height, theme-backgrounded layout that vertically centers an AuthCard.
 * Background comes from `palette.background.default`, so it brands per app.
 */
export function AuthScreen({ children, header, footer }: AuthScreenProps) {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        p: 2,
        bgcolor: "background.default",
      }}
    >
      {header}
      {children}
      {footer}
    </Box>
  );
}

export default AuthScreen;
