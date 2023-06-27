import { useTranslations } from "next-intl";
import { useEffect } from "react";
import Spin from "sspin";
import Condition from "~/components/condition/Condition";
import LineForm from "~/components/form/LineForm";
import ToggleButton from "~/components/form/Toggle";
import ErrorText from "~/components/text/ErrorText";
import { useToast } from "~/components/toast/Toast";
import { useEnableMyAccountMutation } from "~/features/account/account.api";
import { isBaseResponse } from "~/types/response/response.types";
import { parseApiError } from "~/utils/response";

type Props = {
  onOk: () => void;
  userName: string;
};

export default function AccountActivationEnableForm({ onOk, userName }: Props) {
  const t = useTranslations("account.details.edit.activation");
  const toast = useToast();
  const [handleEnable, { isLoading, error, status }] =
    useEnableMyAccountMutation({});

  useEffect(() => {
    if (status === "fulfilled") {
      onOk();
    } else if (status === "rejected") {
      parseApiError({ error, toast });
    }
  }, [status]);

  const handleChange = (val: boolean) => {
    if (!val) return;
    toast.askSuccess({
      cancelText: t("enable.cancel"),
      confirmText: t("enable.confirm"),
      description: t("enable.description"),
      title: t("enable.title"),
      onConfirm: () => {
        handleEnable(userName);
      },
    });
  };

  return (
    <Spin loading={isLoading}>
      <div className="p-4 bg-second">
        <LineForm className="rounded-md">
          <LineForm.Left>
            <LineForm.Left.Title>{t("title")}</LineForm.Left.Title>
            <LineForm.Left.Description>
              {t("passive")}
            </LineForm.Left.Description>
          </LineForm.Left>
          <LineForm.Right>
            <ToggleButton
              defaultChecked={false}
              onChange={handleChange}
              variant="success"
              title={t("enable.alt")}
            ></ToggleButton>
          </LineForm.Right>
        </LineForm>
        <Condition value={!isLoading && !!error && isBaseResponse(error)}>
          <ErrorText>{isBaseResponse(error) && error.message}</ErrorText>
        </Condition>
      </div>
    </Spin>
  );
}
