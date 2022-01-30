import { useState, useContext } from "react";
import { AuthContext } from "../contexts";
import { useNavigate } from "react-router-dom";

export default function Form() {
	const authContext = useContext(AuthContext);
	const navigate = useNavigate();
	const [data, setData] = useState({
		uname: "",
		passwd: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("http://localhost:8000", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.isLoggedIn) {
					authContext.setUser(data.uname);
					navigate("/protected", { replace: true });
				} else alert("You are not logged in");
			})
			.catch();
	};
	return (
		<form method="POST" action="http://localhost:8000">
			<label>Username</label>
			<input
				type="text"
				name="uname"
				onChange={(e) =>
					setData(Object.assign({}, data, { uname: e.target.value }))
				}></input>
			<label>Password</label>
			<input
				type="password"
				name="passwd"
				onChange={(e) =>
					setData(Object.assign({}, data, { passwd: e.target.value }))
				}></input>
			<input type="submit" value="Submit" onClick={handleSubmit}></input>
		</form>
	);
}
