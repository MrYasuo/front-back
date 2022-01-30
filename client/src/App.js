import "./App.css";
import {
	Routes,
	Route,
	Link,
	useNavigate,
	Navigate,
	useLocation,
	Outlet,
} from "react-router-dom";
import { Form, Protected, Home } from "./components";
import { AuthContextProvider, AuthContext } from "./contexts";
import { useContext } from "react";

function App() {
	return (
		<>
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Form />} />
					<Route
						path="/protected"
						element={
							<RequireAuth>
								<Protected />
							</RequireAuth>
						}></Route>
				</Routes>
			</AuthContextProvider>
		</>
	);
}

function RequireAuth({ children }) {
	let authContext = useContext(AuthContext);
	let location = useLocation();
	(async () => {
		fetch("http://localhost:8000/credential", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			keepalive: true,
			body: JSON.stringify({ message: "Hello" }),
		})
			.then((res) => res.json())
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	})();
	if (!authContext.user) {
		return <Navigate to="/login" state={{ from: location }} />;
	}
	return children;
}

export default App;
