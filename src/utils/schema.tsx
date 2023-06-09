import { useTranslations } from "next-intl";
import { AuthSchema, buildAuthSchema } from "~/features/auth/auth.schema";

type Schema = {
  auth: AuthSchema;
};

export const useSchema = (): Schema => {
  const t = useTranslations();
  return {
    auth: buildAuthSchema(t),
  };
};
