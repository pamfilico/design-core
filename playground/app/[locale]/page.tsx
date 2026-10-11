import { getTranslations, setRequestLocale } from "next-intl/server";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { LocaleSwitch } from "./LocaleSwitch";
import { AuthCardDemo } from "./AuthCardDemo";

export default async function PlaygroundPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Playground");
  const other = locale === "en" ? "el" : "en";

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
          {t("title")}
        </Typography>
        <LocaleSwitch locale={other} label={t("switchLocale")} />
      </Stack>
      <Typography color="text.secondary" sx={{ mt: 1 }}>
        {t("subtitle")}
      </Typography>

      <Typography variant="overline" component="h2" sx={{ display: "block", mt: 5, mb: 2 }}>
        {t("components")} · AuthCard
      </Typography>
      <Box sx={{ p: 3, border: 1, borderColor: "divider", borderRadius: 2 }}>
        <AuthCardDemo />
      </Box>
    </Container>
  );
}
