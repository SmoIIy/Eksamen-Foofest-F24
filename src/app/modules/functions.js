export async function fetchData(endpoint) {
	try {
		const response = await fetch(endpoint);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}
export async function getData(endpoint, method, body) {
	fetch(endpoint, {
		method: method,
		headers: headersList,
	});
}
