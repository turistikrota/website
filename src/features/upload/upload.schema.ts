import * as Yup from "yup";

export type UploadSchema = {
  avatar: ReturnType<typeof uploadAvatar>;
};

const uploadAvatar = (t: any) =>
  Yup.object().shape({
    avatar: Yup.mixed().required(t("validation.required")),
  });

const buildUploadSchema = (t: any): UploadSchema => ({
  avatar: uploadAvatar(t),
});

export { buildUploadSchema };
