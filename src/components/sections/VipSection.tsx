import { useTranslations } from "next-intl";
import Button from "../button/Button";
import VipIcon from "../icon/VipIcon";
import DisabledSection from "./DisabledSection";

type Props = {
  enabled?: boolean;
};

function VipFeature({ children }: React.PropsWithChildren) {
  return (
    <div className="relative w-full h-full rounded-md border-t-2 border-r-2 border-vip">
      <div className="absolute z-10 top-0 right-0 inset-0 flex justify-end">
        <VipIcon />
      </div>
      <div className="relative w-full h-full">{children}</div>
    </div>
  );
}
function VipRequired({ children }: React.PropsWithChildren) {
  const t = useTranslations("sections.vip");
  return (
    <DisabledSection
      title={t("title")}
      description={t("text")}
      variant="vip"
      size="md"
      button={
        <Button block={false} variant="vip" className="mt-4">
          {t("upgrade")}
        </Button>
      }
    >
      {children}
    </DisabledSection>
  );
}

function VipSection({
  enabled = false,
  children,
}: React.PropsWithChildren<Props>) {
  if (!enabled) {
    return <VipRequired>{children}</VipRequired>;
  }
  return <VipFeature>{children}</VipFeature>;
}

export default VipSection;
