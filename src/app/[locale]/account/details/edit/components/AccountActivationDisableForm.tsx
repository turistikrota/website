import { useTranslations } from "next-intl";
import { useEffect } from "react";
import Spin from "sspin";
import Condition from "~/components/condition/Condition";
import LineForm from "~/components/form/LineForm";
import ToggleButton from "~/components/form/Toggle";
import ErrorText from "~/components/text/ErrorText";
import { useToast } from "~/components/toast/Toast";
import { useDisableMyAccountMutation } from "~/features/account/account.api";
import { isBaseResponse } from "~/types/response/response.types";
import { parseApiError } from "~/utils/response";

type Props = {
  onOk: () => void;
  userName: string;
};

export default function AccountActivationDisableForm({
  onOk,
  userName,
}: Props) {
  const t = useTranslations("account.details.edit.activation");
  const toast = useToast();
  const [handleDisable, { isLoading, error, status }] =
    useDisableMyAccountMutation({});

  useEffect(() => {
    if (status === "fulfilled") {
      onOk();
    } else if (status === "rejected") {
      parseApiError({ error, toast });
    }
  }, [error, status, onOk]);

  const handleChange = (val: boolean) => {
    if (val) return;
    toast.askError({
      cancelText: t("disable.cancel"),
      confirmText: t("disable.confirm"),
      description: t("disable.description"),
      title: t("disable.title"),
      onConfirm: () => {
        handleDisable(userName);
      },
    });
  };

  return (
    <Spin loading={isLoading}>
      <LineForm className="bg-second p-4 rounded-md">
        <LineForm.Left>
          <LineForm.Left.Title>{t("title")}</LineForm.Left.Title>
          <LineForm.Left.Description>{t("active")}</LineForm.Left.Description>
        </LineForm.Left>
        <LineForm.Right>
          <ToggleButton
            defaultChecked={true}
            onChange={handleChange}
            variant="success"
            title={t("disable.alt")}
          ></ToggleButton>
        </LineForm.Right>
      </LineForm>
      <Condition value={!isLoading && !!error && isBaseResponse(error)}>
        <ErrorText>{isBaseResponse(error) && error.message}</ErrorText>
      </Condition>
    </Spin>
  );
}
