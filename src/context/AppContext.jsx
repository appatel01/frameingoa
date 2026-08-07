import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [photo, setPhoto] = useState(null);

    const [user, setUser] = useState({
        fullName: "",
        role: "",
        college: "",
        github: "",
        twitter: "",
    });

    return (
        <AppContext.Provider
        value={{
            photo,
            setPhoto,
            user,
            setUser,
        }}
        >
        {children}
        </AppContext.Provider>
    );
}