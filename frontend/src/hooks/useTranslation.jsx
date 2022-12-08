import { useContext } from 'react'
import { TranslationContext } from "../context/TranslationContext"

/**
 * Trys to return the translation. If the translation is not available, returns the english translation.
 * If both translations are not available, returns the fallback value.
 * If the fallback value is not available returns the translation key.
 * @returns translation or a set fallback or the key if no fallback is set
 */
const useTranslation = () => {
    const context = useContext(TranslationContext)

    const prefLanguage = navigator.language || navigator.userLanguage || "de"

    return (key, fallback) => {
        try {
            const translation = context?.find((translation) => translation[prefLanguage])[prefLanguage].find(element => element.key === key).value
            return translation 
        } catch {
            try {    
                const englishTranslation = context?.find((translation) => translation["en"])["en"].find(element => element.key === key).value
                return englishTranslation
            } catch(err) {
                console.log(err);
            }
        }
        return fallback || key
    }
}

export default useTranslation