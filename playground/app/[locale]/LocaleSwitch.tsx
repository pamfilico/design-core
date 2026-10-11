"use client";

import Button from "@mui/material/Button";
import { Link } from "../../i18n/navigation";

export function LocaleSwitch({ locale, label }: { locale: "en" | "el"; label: string }) {
  return (
    <Button component={Link} href="/" locale={locale} variant="outlined" size="small">
      {label}
    </Button>
  );
}
