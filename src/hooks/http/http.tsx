import axios, { Axios } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const onError = (err: Error) => {
  console.error(err);
  return null;
};

export const ContentTypeHeaders = {
  json: {
    headers: {
      "Content-Type": "application/json",
    },
  },
  formData: {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  },
};

const makeFormDataBody = (json: Record<string, any>) => {
  const formData = new FormData();
  Object.entries(json).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      const formKey = `${key}[]`;
      value.forEach((item) => formData.append(formKey, item));
      return;
    } else {
      formData.append(key, value);
    }
  });
  return formData;
};

type UseHttpHookOptions = {
  headers?: Record<string, string>;
  formData?: boolean;
};

interface UseHttpResponse extends Axios {
  onError: (err: Error) => null;
  makeFormDataBody: (json: Record<string, any>) => FormData;
}

const useHttp = (
  {
    headers = ContentTypeHeaders.json.headers,
    formData = false,
  }: UseHttpHookOptions = {
    headers: ContentTypeHeaders.json.headers,
    formData: false,
  }
): UseHttpResponse => {
  const client: Axios = axios.create({
    baseURL: BASE_URL,
    headers: {
      ...headers,
      "Content-Type": formData ? "multipart/form-data" : "application/json",
    },
    validateStatus: (status) => status >= 200 && status < 500,
  });
  const _client: UseHttpResponse = Object.assign(client, {
    onError,
    makeFormDataBody,
  });
  return _client;
};

export { useHttp };
