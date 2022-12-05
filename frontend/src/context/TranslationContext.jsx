import React, { createContext } from 'react'
import { TRANSLATION } from '../translations/Translation'

export const TranslationContext = createContext([])

export const TranslationProvider = ({ children }) => (
    <TranslationContext.Provider value={TRANSLATION}>
        {children}
    </TranslationContext.Provider>
)