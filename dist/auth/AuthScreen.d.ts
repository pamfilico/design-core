import * as React from "react";
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
export declare function AuthScreen({ children, header, footer }: AuthScreenProps): React.JSX.Element;
export default AuthScreen;
//# sourceMappingURL=AuthScreen.d.ts.map