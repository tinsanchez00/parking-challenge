var http = require("http");
var https = require("https");

http.createServer(function (req, res) {
	const { url } = req;

	if (url.length > 1) {
		const params = {
			location: url.slice(1),
			categories: "parking",
			sort_by: "distance",
			limit: "30",
		};
		const paramsString = Object.entries(params)
			.map(([key, value]) => `${key}=${value}`)
			.join("&");
		const urlRequest =
			"https://api.yelp.com/v3/businesses/search?" + paramsString;
		const token =
			"xQ97mW5ojxVGdvUz5NdsSD2tpx6-OhHE6tg35PlW_0IS82AKNsmgxW_u8O6q-z9OccWC6-pIYqTGTqMulzEnPPg8zZ7Q7vXjAiQI0xmnCmLJmfO-X79_ORTmr165YHYx";
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};

		https
			.get(urlRequest, config, (apires) => {
				let data = "";
				apires.on("data", (chunk) => {
					data += chunk;
				});
				apires.on("end", () => {
					res.writeHead(200, {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "OPTIONS, POST, GET",
					});
					res.end(data);
				});
			})
			.on("error", () => {
				res.writeHead(400, {
					"Content-Type": "text/plain",
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "OPTIONS, POST, GET",
				});
				res.end("Error while requesting to Yelp");
			});
	}
}).listen(1337);
