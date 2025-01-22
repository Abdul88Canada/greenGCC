
const url = "https://www.goflightlabs.com/routes?access_key=YOUR_ACCESS_KEY&dep_iata=LAX";
const options = {
    method: "GET",
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}