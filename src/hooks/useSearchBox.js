import { useState } from "react";

const useSearchBox = (request) => {
	const [input, setInput] = useState("");

	const handleSubmit = (ev) => {
		ev.preventDefault();
		if (input !== "") {
			request(input);
		}
	};

	const handleInputChange = (ev) => {
		setInput(ev.target.value);
	};

	return [input, handleSubmit, handleInputChange];
};

export default useSearchBox;
