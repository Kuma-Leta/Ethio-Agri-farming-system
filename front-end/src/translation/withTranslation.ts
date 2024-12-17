// import React from "react";
// import { useTranslation } from "./translationProvider";

// interface WithTranslationProps {
//   [key: string]: any; // Allow flexibility in props
// }

// const withTranslation = <P extends object>(
//   Component: React.ComponentType<
//     P & { translate: (content: string) => Promise<string> }
//   >
// ): React.FC<P> => {
//   return (props: P) => {
//     const { language, translateText } = useTranslation();

//     const translateContent = async (content: string): Promise<string> => {
//       return translateText(content, language);
//     };

//     return <Component {...props} translate={translateContent} />;
//   };
// };

// export default withTranslation;
