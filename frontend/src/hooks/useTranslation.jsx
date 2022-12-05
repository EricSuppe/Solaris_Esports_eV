import { useContext } from 'react'
import { TranslationContext } from "../context/TranslationContext"

const useTranslation = () => {
    const context = useContext(TranslationContext)

    const prefLanguage = navigator.language || navigator.userLanguage

    return (key, fallback) => {
        const translation = context?.find((translation) => translation[prefLanguage].key === key)[prefLanguage].value

        return translation || fallback || key
    }
}

export default useTranslation