import React, { useState } from "react";
import styled from "styled-components";
import useSearchBox from "../hooks/useSearchBox";

const SearchBox = ({ request }) => {
	const [input, handleSubmit, handleInputChange] = useSearchBox(request);

	return (
		<StyledForm onSubmit={handleSubmit}>
			<label htmlFor="location">Location:</label>
			<input
				type="text"
				name="location"
				id="location"
				value={input}
				onChange={handleInputChange}
				className="textinput"
			/>
			<input type="submit" value="Search" />
		</StyledForm>
	);
};

const StyledForm = styled.form`
	margin: 40px 0;

	input {
		padding: 10px 15px;
	}

	.textinput {
		margin: 0 15px;
	}
`;

export default SearchBox;
