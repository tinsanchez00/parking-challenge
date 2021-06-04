import React from "react";
import styled from "styled-components";

const Card = ({ name, rating, reviews, image, url, score }) => {
	return (
		<StyledCard href={url} target="_blank">
			{image ? (
				<img src={image} alt={name} />
			) : (
				<div className="noimage">no image</div>
			)}
			<div className="info">
				<div className="inforow1">
					<h2>{name}</h2>
					<h2>Score: {score}</h2>
				</div>
				<div className="inforow2">
					<p>
						Rating: {rating} star{rating !== 1 && "s"}
					</p>
					<p>Total Reviews: {reviews} </p>
				</div>
			</div>
		</StyledCard>
	);
};

const StyledCard = styled.a`
	display: flex;
	border: 1px solid var(--clr-soft-gray);
	border-radius: 3px;
	box-shadow: 3px 3px 4px #40404030;
	margin: 8px 0px;
	width: 100%;
	max-width: 800px;
	padding: 15px 25px;
	color: inherit;
	text-decoration: none;
	transition: transform ease 150ms, box-shadow ease 150ms,
		background-color ease 150ms;

	&:hover {
		transform: translateY(-3px);
		cursor: pointer;
		box-shadow: 5px 7px 6px #40404020;
		background-color: #f0f0f030;
	}

	img,
	.noimage {
		height: 100px;
		width: 100px;
		object-fit: cover;
		border-radius: 3px;
		margin-right: 15px;
	}

	.noimage {
		border: 2px solid gray;
		align-items: center;
		display: flex;
		justify-content: center;
	}

	.info {
		flex: 1;
	}

	.inforow1 {
		display: flex;
		justify-content: space-between;
		flex: 1;

		h2 {
			display: inline-block;
		}
	}
`;

export default Card;
