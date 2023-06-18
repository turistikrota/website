import { useTranslations } from "next-intl";
import {
  AccountSchema,
  buildAccountSchema,
} from "~/features/account/account.schema";
import { AuthSchema, buildAuthSchema } from "~/features/auth/auth.schema";

type Schema = {
  auth: AuthSchema;
  account: AccountSchema;
};

export const useSchema = (): Schema => {
  const t = useTranslations();
  return {
    auth: buildAuthSchema(t),
    account: buildAccountSchema(t),
  };
};
