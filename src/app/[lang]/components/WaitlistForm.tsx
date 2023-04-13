"use client";

import React, { FormEvent, useState } from "react";
import { BaseResponse } from "~/types/response/response.types";
import { usePost } from "~/hooks/http/request";
import { useFormik } from "formik";
import * as Yup from "yup";
import Spin from "~/components/spin/Spin";
import Alert from "~/components/alert/Alert";

type AlertTexts = {
  title: string;
  description: string;
};

type Params = {
  label: string;
  placeholder: string;
  submit: string;
  emailInvalid: string;
  emailRequired: string;
  error: AlertTexts;
  success: AlertTexts;
};

const WaitlistForm: React.FC<Params> = ({
  label,
  placeholder,
  submit,
  emailRequired,
  emailInvalid,
  error: errorText,
  success: successText,
}) => {
  const [alertVisible, setAlertVisible] = useState<boolean>(true);
  const [result, setResult] = useState<BaseResponse | null>(null);
  const [loading, dispatch, error] = usePost<{ email: string }, BaseResponse>(
    "/waitlist"
  );
  const form = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email(emailInvalid).required(emailRequired),
    }),
    onSubmit: (values) => {
      dispatch(setResult, null, values);
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.handleSubmit();
  };

  return (
    <Spin loading={loading}>
      <Alert
        type="primary"
        show={!loading && alertVisible && error === null && result !== null}
      >
        <>
          <Alert.Title>{successText.title}</Alert.Title>
          <Alert.Description>{successText.description}</Alert.Description>
        </>
      </Alert>
      <Alert
        type="error"
        show={!loading && alertVisible && error !== null}
        closable={true}
        className="mb-2 mt-2"
      >
        <>
          <Alert.Title>{errorText.title}</Alert.Title>
          <Alert.Description>
            {error?.message || errorText.description}
          </Alert.Description>
        </>
      </Alert>
      {(loading || !alertVisible || error !== null || result === null) && (
        <form
          method="POST"
          onSubmit={onSubmit}
          className="sm:mx-auto sm:max-w-xl lg:mx-0"
        >
          <div className="sm:flex">
            <div className="min-w-0 flex-1">
              <label htmlFor="email" className="sr-only">
                {label}
              </label>
              <input
                id="email"
                type="email"
                placeholder={placeholder}
                className="block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                autoComplete="on"
              />
              {form.touched.email && form.errors.email && (
                <div className="text-red-500 text-sm">{form.errors.email}</div>
              )}
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="block w-full rounded-md bg-primary-400 hover:bg-primary-300 py-3 px-4 font-medium text-white shadow focus:outline-none transition duration-150 ease-out hover:ease-in focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                {submit}
              </button>
            </div>
          </div>
        </form>
      )}
    </Spin>
  );
};

export default WaitlistForm;
