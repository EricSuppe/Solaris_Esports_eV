import { useContext } from 'react'
import { TranslationContext } from "../context/TranslationContext"
import { LANGUAGE_MAP } from '../keys/LANGUAGE_MAP'

/**
 * Trys to return the translation. If the translation is not available, returns the english translation.
 * If both translations are not available, returns the fallback value.
 * If the fallback value is not available returns the translation key.
 * @returns translation or a set fallback or the key if no fallback is set
 */
const useTranslation = () => {

    const context = useContext(TranslationContext)

    const fallbackLanguage = "en"

    const prefLanguage = navigator.language || navigator.userLanguage

    return (key, fallback) => {
        try {
            const translation = context?.find((translation) => translation[LANGUAGE_MAP[prefLanguage]])[LANGUAGE_MAP[prefLanguage]].find(element => element.key === key).value
            return translation 
        } catch {
            try {    
                const fallbackTranslation = context?.find((translation) => translation[LANGUAGE_MAP[fallbackLanguage]])[LANGUAGE_MAP[fallbackLanguage]].find(element => element.key === key).value
                return fallbackTranslation
            } catch(err) {
                console.log(err);
            }
        }
        return fallback || key
    }
}

export default useTranslation