import * as Yup from "yup";

export type AccountSchema = {
  create: ReturnType<typeof create>;
  update: ReturnType<typeof update>;
};

const create = (t: any) =>
  Yup.object().shape({
    userName: Yup.string().required(t("validation.required")),
  });

const update = (t: any) =>
  Yup.object().shape({
    fullName: Yup.string().required(t("validation.required")),
    description: Yup.string().required(t("validation.required")),
    birthDate: Yup.string().required(t("validation.required")),
  });

const buildAccountSchema = (t: any): AccountSchema => ({
  create: create(t),
  update: update(t),
});

export { buildAccountSchema };
