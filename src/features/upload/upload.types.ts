export type FileUploadedResponse = {
  url: string;
};

export type UploadAvatarFormData = {
  file: File;
  username: string;
};

export function isFileUploadedResponse(
  data: any
): data is FileUploadedResponse {
  return typeof data.url === "string";
}
