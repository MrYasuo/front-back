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
import { Form, Protected } from "./components";
import { AuthContextProvider, AuthContext } from "./contexts";
import { useContext } from "react";

function App() {
	// return (
	// 	<>
	// 		<AuthContextProvider>
	// 			<Routes>
	// 				<Route path="/login" element={<Form />} />
	// 				<Route
	// 					path="/protected"
	// 					element={
	// 						<RequireAuth>
	// 							<Protected />
	// 						</RequireAuth>
	// 					}></Route>
	// 			</Routes>
	// 			<Outlet />
	// 		</AuthContextProvider>
	// 	</>
	// );
	return (
		<>
			<Form />
		</>
	);
}

function RequireAuth({ children }) {
	let auth = useContext(AuthContext);
	let location = useLocation();
	if (!auth.user) {
		return <Navigate to="/login" replace />;
	}
}

export default App;
