import * as Yup from "yup";

export type AuthSchema = {
  checkEmail: ReturnType<typeof checkEmail>;
};

const checkEmail = (t: any) => Yup.object().shape({});

const buildAuthSchema = (t: any): AuthSchema => ({
  checkEmail: checkEmail(t),
});

export { checkEmail, buildAuthSchema };
