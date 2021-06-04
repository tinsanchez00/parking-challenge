import React from "react";
import styled from "styled-components";
import useApiRequest from "../hooks/useApiRequest";
import Card from "./Card";
import SearchBox from "./SearchBox";

const StyledMain = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;

	.title {
		margin-top: 40px;
	}
`;

const Main = () => {
	const [results, request] = useApiRequest();

	return (
		<StyledMain>
			<h1 className="title">Lowest Rated Parking Lots</h1>
			<SearchBox request={request} />
			{results.map((r, i) => (
				<Card
					name={r.name}
					rating={r.rating}
					reviews={r.review_count}
					image={r.image_url}
					url={r.url}
					score={r.score}
					key={"card" + i}
				/>
			))}
		</StyledMain>
	);
};

export default Main;
