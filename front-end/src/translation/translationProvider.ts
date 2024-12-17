// import React, {
//   createContext,
//   useContext,
//   useState,
//   ReactNode,
//   FC,
// } from "react";

// type TranslationContextType = {
//   language: string;
//   setLanguage: (language: string) => void;
//   translateText: (text: string, targetLang: string) => Promise<string>;
// };

// const TranslationContext = createContext<TranslationContextType | undefined>(
//   undefined
// );

// interface TranslationProviderProps {
//   apiKey: string;
//   defaultLanguage: string;
//   children: ReactNode;
// }

// export const TranslationProvider: FC<TranslationProviderProps> = ({
//   apiKey,
//   defaultLanguage,
//   children,
// }) => {
//   const [language, setLanguage] = useState<string>(defaultLanguage);

//   const translateText = async (
//     text: string,
//     targetLang: string
//   ): Promise<string> => {
//     try {
//       const response = await fetch(
//         `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
//         {
//           method: "POST",
//           body: JSON.stringify({ q: text, target: targetLang }),
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Translation API request failed");
//       }

//       const data = await response.json();
//       return data?.data?.translations[0]?.translatedText || text;
//     } catch (error) {
//       console.error("Translation error:", error);
//       return text;
//     }
//   };

//   return (
//     <TranslationContext.Provider value={{
//     language,
//     setLanguage,
//     translateText,
//   }}>
//       {children}
//     </TranslationContext.Provider>
//   );
// };

// export const useTranslation = (): TranslationContextType => {
//   const context = useContext(TranslationContext);
//   if (!context) {
//     throw new Error("useTranslation must be used within a TranslationProvider");
//   }
//   return context;
// };
