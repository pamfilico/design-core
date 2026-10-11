"use client";
import { jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
/**
 * Full-height, theme-backgrounded layout that vertically centers an AuthCard.
 * Background comes from `palette.background.default`, so it brands per app.
 */
export function AuthScreen({ children, header, footer }) {
    return (_jsxs(Box, { sx: {
            minHeight: "100dvh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            p: 2,
            bgcolor: "background.default",
        }, children: [header, children, footer] }));
}
export default AuthScreen;
//# sourceMappingURL=AuthScreen.js.map