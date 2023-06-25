import { useTranslations } from "next-intl";
import {
  AccountSchema,
  buildAccountSchema,
} from "~/features/account/account.schema";
import { AuthSchema, buildAuthSchema } from "~/features/auth/auth.schema";
import {
  UploadSchema,
  buildUploadSchema,
} from "~/features/upload/upload.schema";

type Schema = {
  auth: AuthSchema;
  account: AccountSchema;
  upload: UploadSchema;
};

export const useSchema = (): Schema => {
  const t = useTranslations();
  return {
    auth: buildAuthSchema(t),
    account: buildAccountSchema(t),
    upload: buildUploadSchema(t),
  };
};
