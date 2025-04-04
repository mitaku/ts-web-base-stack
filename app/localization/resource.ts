import bosnian from "../../resources/locales/bs/common.json"
import english from "../../resources/locales/en/common.json"
import japanese from "../../resources/locales/ja/common.json"

const languages = ["ja", "en", "bs"] as const
export const supportedLanguages = [...languages]
export type Language = (typeof languages)[number]

type Resource = {
	common: typeof english
}

export type Namespace = keyof Resource

export const resources: Record<Language, Resource> = {
	en: {
		common: english,
	},
	bs: {
		common: bosnian,
	},
	ja: {
		common: japanese,
	},
}
