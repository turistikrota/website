import * as Yup from "yup";

export type AuthSchema = {
  checkEmail: ReturnType<typeof checkEmail>;
  login: ReturnType<typeof login>;
};

const checkEmail = (t: any) =>
  Yup.object().shape({
    email: Yup.string()
      .email(t("validation.invalidEmail"))
      .required(t("validation.required")),
  });

const login = (t: any) =>
  Yup.object().shape({
    email: Yup.string()
      .email(t("validation.invalidEmail"))
      .required(t("validation.required")),
    password: Yup.string()
      .min(
        6,
        t("validation.passwordMin", {
          min: 6,
        })
      )
      .required(t("validation.required")),
  });

const buildAuthSchema = (t: any): AuthSchema => ({
  checkEmail: checkEmail(t),
  login: login(t),
});

export { checkEmail, buildAuthSchema };
