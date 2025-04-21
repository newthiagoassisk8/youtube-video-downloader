import React, { createContext, useContext, useState } from "react";

// Define o formato do contexto, com uma URL e um setter
type ApiConfigContextType = {
  apiUrl: string;
  setApiUrl: (url: string) => void;
};

// ✅ Correção: usamos createContext com parênteses e passamos undefined como valor padrão
const ApiConfigContext = createContext<ApiConfigContextType | undefined>(undefined);

// ✅ Correção: React.FC já entende que existe children, então não precisa tipar manualmente
export const ApiConfigProvider: React.FC = ({ children }) => {
  const [apiUrl, setApiUrl] = useState('http://192.168.0.27:8006');

  return (
    <ApiConfigContext.Provider value={{ apiUrl, setApiUrl }}>
      {children}
    </ApiConfigContext.Provider>
  );
};

// Hook customizado para acessar o contexto de qualquer componente
export const useApiConfig = () => {
  const context = useContext(ApiConfigContext);
  if (!context) {
    throw new Error('useApiConfig must be used within an ApiConfigProvider');
  }
  return context;
};
