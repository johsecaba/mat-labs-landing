import { de } from "./de";
import { en, type Messages } from "./en";
import { ja } from "./ja";
import { ko } from "./ko";
import type { Locale } from "./config";

export * from "./config";
export type { Messages };

const dictionaries: Record<Locale, Messages> = { en, ja, de, ko };

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}
