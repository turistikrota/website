export type Contract =
  | "privacy-notification"
  | "privacy-and-policy"
  | "terms-of-use";

export function isContract(slug: string): slug is Contract {
  return [
    "privacy-notification",
    "privacy-and-policy",
    "terms-of-use",
  ].includes(slug);
}
export type Locale = "tr" | "en";
