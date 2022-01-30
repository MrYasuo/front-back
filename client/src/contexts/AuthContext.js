import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);
	const authContext = {
		user,
		setUser,
	};
	return (
		<AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
	);
}

export default AuthContextProvider;
export { AuthContext };
