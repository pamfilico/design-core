import * as React from "react";
import { render } from "@react-email/render";

export interface EmailPreviewProps {
  /** A react-email element, e.g. <MagicLinkEmail url="…" />. */
  email: React.ReactElement;
  /** Iframe height in px (default 720). */
  height?: number;
}

/**
 * Renders a react-email template to real email HTML (the same `render()` the
 * apps call before sending) and shows it in an isolated iframe, so the MUI
 * page styles cannot leak into the preview.
 */
export function EmailPreview({ email, height = 720 }: EmailPreviewProps) {
  const [html, setHtml] = React.useState("");

  React.useEffect(() => {
    let cancelled = false;
    render(email).then((out) => {
      if (!cancelled) setHtml(out);
    });
    return () => {
      cancelled = true;
    };
  }, [email]);

  return (
    <iframe
      title="Email preview"
      srcDoc={html}
      style={{ width: "100%", height, border: 0, background: "#fff" }}
    />
  );
}
