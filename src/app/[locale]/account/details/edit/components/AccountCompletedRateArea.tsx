import { useTranslations } from "next-intl";
import Progress from "~/components/progress/progress";

type Props = {
  rate: number;
};

export default function AccountCompletedRateArea({ rate }: Props) {
  const t = useTranslations("account.details.edit.rate");
  return (
    <div className="bg-second rounded-md p-4 flex flex-col justify-center items-center">
      <Progress.Circle value={rate} />
      <span className="text-base font-semibold mt-2 text-gray-800 dark:text-gray-300">
        {t("title")}
      </span>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        {t("description")}
      </p>
    </div>
  );
}
