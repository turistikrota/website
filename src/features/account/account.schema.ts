import * as Yup from "yup";

export type AccountSchema = {
  create: ReturnType<typeof create>;
};

const create = (t: any) =>
  Yup.object().shape({
    userName: Yup.string().required(t("validation.required")),
    userCode: Yup.string().required(t("validation.required")),
  });

const buildAccountSchema = (t: any): AccountSchema => ({
  create: create(t),
});

export { buildAccountSchema };
