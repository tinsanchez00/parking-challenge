import axios from "axios";
import { useState } from "react";

const useApiRequest = () => {
	const [results, setResults] = useState([]);

	const request = (input) => {
		axios.get(process.env.REACT_APP_API + input).then((res) => {
			let array = res.data.businesses.map((each) => {
				let { review_count, rating } = each;
				each.score = (
					(review_count * rating) /
					(review_count + 1)
				).toFixed(2);
				return each;
			});

			//the api can't sort by lowest rating so we do it manually
			array.sort((a, b) => a.score - b.score);

			setResults(array);
		});
	};

	return [results, request];
};

export default useApiRequest;
