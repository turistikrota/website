export type Contract = "privacy-notification" | "privacy-and-policy";

export function isContract(slug: string): slug is Contract {
  return ["privacy-notification", "privacy-and-policy"].includes(slug);
}
export type Locale = "tr" | "en";
