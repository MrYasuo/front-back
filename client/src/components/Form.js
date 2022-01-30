import { useState } from "react";

export default function Form() {
	const [data, setData] = useState({
		uname: "",
		passwd: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("http://localhost:8000", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: JSON.stringify(data),
			credentials: "include",
			redirect: "follow",
		})
			.then()
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
			<input type="submit" value="Submit"></input>
		</form>
	);
}
