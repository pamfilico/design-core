"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "@mui/material/Link";
import { AuthCard } from "@pamfilico/design-core";

export function AuthCardDemo() {
  const t = useTranslations("AuthCard");
  const [sent, setSent] = useState(false);

  return (
    <AuthCard
      title={t("title")}
      subtitle={t("subtitle")}
      emailLabel={t("emailLabel")}
      emailPlaceholder={t("emailPlaceholder")}
      submitLabel={t("submit")}
      notice={sent ? { severity: "success", message: t("sent") } : null}
      noticeReplacesForm={sent}
      providersLabel={t("or")}
      providers={[{ id: "google", label: t("google") }]}
      footer={<Link href="#">{t("noAccount")}</Link>}
      onSubmit={() => setSent(true)}
    />
  );
}
