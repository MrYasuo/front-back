import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../contexts";

export default function Home() {
	const authContext = useContext(AuthContext);
	return (
		<>
			<h1>Home</h1>
			<nav>
				{authContext.user ? (
					<Link to="/protected">Protected</Link>
				) : (
					<Link to="/login">Login</Link>
				)}
			</nav>
		</>
	);
}
