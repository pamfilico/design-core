import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useTranslations } from "next-intl";
import Typography from "@mui/material/Typography";
import { AuthCard } from "./AuthCard";
import { AuthScreen } from "./AuthScreen";

function Demo() {
  const t = useTranslations("AuthCard");
  return (
    <AuthScreen
      header={<Typography variant="overline">Header slot</Typography>}
      footer={<Typography variant="caption" color="text.secondary">Footer slot</Typography>}
    >
      <AuthCard
        title={t("title")}
        subtitle={t("subtitle")}
        emailLabel={t("emailLabel")}
        submitLabel={t("submit")}
      />
    </AuthScreen>
  );
}

const meta = {
  title: "Design Core/Auth/AuthScreen",
  component: Demo,
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = { globals: { locale: "en" } };
export const Greek: Story = { globals: { locale: "el" } };
export const Dark: Story = { globals: { mode: "dark" } };
