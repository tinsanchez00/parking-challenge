import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
	position: relative;
	h3 {
		position: absolute;
		right: 15px;
		top: 5px;
	}
	a {
		color: #b01010;
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<h3>
				By{" "}
				<a href="https://martin-sanchez.vercel.app/" target="_blank">
					Martin Sanchez
				</a>
			</h3>
		</StyledHeader>
	);
};

export default Header;
