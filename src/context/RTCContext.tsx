import React, { createContext, ReactNode } from "react";

type RTCContextValue = {};
const RTCContextInitialValue: RTCContextValue = {};
const RTCContext = createContext<RTCContextValue>(RTCContextInitialValue);

type RTCProvider = {
  children: ReactNode;
};

const RTCProvider: React.FC<RTCProvider> = ({ children }) => {
  return <RTCContext.Provider value={{}}>{children}</RTCContext.Provider>;
};

export { RTCProvider, RTCContext };
