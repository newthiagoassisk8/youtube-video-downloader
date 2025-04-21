import React, {createContext, useContext,useState} from "react";

type ApiConfigContextType = {
    apiUrl:string;
    setApiUrl:(url:string) => void;
}

const ApiConfigContext = createContext<ApiConfigContextType | undefined>(undefined);

export const ApiConfigProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [apiUrl, setApiUrl] = useState('http://192.168.0.27:8006');
    return(
        <ApiConfigContext.Provider value={{ apiUrl,setApiUrl }}>
            {children}
        </ApiConfigContext.Provider>
    )
}


export const useApiConfig = () => {
    const context = useContext(ApiConfigContext);
    if (!context) {
      throw new Error('useApiConfig must be used within an ApiConfigProvider');
    }
    return context;
  };
