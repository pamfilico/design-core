import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useTranslations } from "next-intl";
import Link from "@mui/material/Link";
import { AuthCard, type AuthCardProps } from "./AuthCard";
import { AuthScreen } from "./AuthScreen";

type Variant = Partial<AuthCardProps> & { locale?: "en" | "el" };

/** Feeds every visible string from messages/{en,el}.json, like a consuming app. */
function TranslatedAuthCard(props: Partial<AuthCardProps>) {
  const t = useTranslations("AuthCard");
  return (
    <AuthScreen>
      <AuthCard
        title={t("title")}
        subtitle={t("subtitle")}
        emailLabel={t("emailLabel")}
        emailPlaceholder={t("emailPlaceholder")}
        passwordLabel={t("passwordLabel")}
        submitLabel={props.withPassword ? t("submitPassword") : t("submit")}
        footer={<Link href="#">{t("noAccount")}</Link>}
        {...props}
      />
    </AuthScreen>
  );
}

const meta = {
  title: "Design Core/Auth/AuthCard",
  component: TranslatedAuthCard,
  args: { onSubmit: () => {} },
} satisfies Meta<typeof TranslatedAuthCard>;

export default meta;
type Story = StoryObj<Variant>;

export const English: Story = { globals: { locale: "en" } };
export const Greek: Story = { globals: { locale: "el" } };

export const WithPassword: Story = { args: { withPassword: true } };

export const Loading: Story = { args: { loading: true, defaultEmail: "maria@example.com" } };

function ErrorVariant() {
  const t = useTranslations("AuthCard");
  return <TranslatedAuthCard error={t("error")} defaultEmail="maria@example.com" />;
}
export const WithError: Story = { render: () => <ErrorVariant /> };

function SentVariant() {
  const t = useTranslations("AuthCard");
  return (
    <TranslatedAuthCard
      notice={{ severity: "success", message: t("sent") }}
      noticeReplacesForm
    />
  );
}
export const MagicLinkSent: Story = { render: () => <SentVariant /> };

function ProvidersVariant() {
  const t = useTranslations("AuthCard");
  return (
    <TranslatedAuthCard
      providersLabel={t("or")}
      providers={[{ id: "google", label: t("google") }]}
    />
  );
}
export const WithProviders: Story = { render: () => <ProvidersVariant /> };

export const Dark: Story = { globals: { mode: "dark" } };
