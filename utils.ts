import type { t } from "@/utils/i18n.ts";
import { createDefine } from "fresh";

interface Data {
  languages: string[];
}

// Tipo de retorno de la función t()
type Translations = ReturnType<typeof t>;

// This specifies the type of "ctx.state" which is used to share
// data among middlewares, layouts and routes.
export interface State {
  data: Data;
  lang: string;
  translations: Translations;
}

export const define = createDefine<State>();
