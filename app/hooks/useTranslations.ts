import { useLanguage } from '../providers/language-provider'
import { translations } from '../translations'

export function useTranslations() {
  const { language } = useLanguage()
  return translations[language]
} 