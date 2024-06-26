import { createContext, useContext, useEffect, useState } from "react";

const ScreenContext = createContext("");

export default function MyProvider({ children }) {
  const [previewType, setPreviewType] = useState("");

  useEffect(() => {
    console.log("previewType", previewType);
  });
  const resposiveIconClickHandle = (responsiveType) => {
    setPreviewType(responsiveType);
  };

  let Context = {
    previewType: previewType,
    setPreviewType: setPreviewType,
    resposiveIconClickHandle: resposiveIconClickHandle,
  };
  return (
    <ScreenContext.Provider value={Context}>{children}</ScreenContext.Provider>
  );
}

export const useGetTheme = () => useContext(ScreenContext);
