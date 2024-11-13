export async function fetchImages({ url = "https://jsonplaceholder.typicode.com/photos", limit = 5 } = {}) {
    try {
        const response = await axios.get(url, {
            params: { _limit: limit },
        });
        return response.data.map((el) => ({
            url: el.thumbnailUrl,
            title: el.title,
        }));
    } catch (error) {
        console.error("Ошибка:", error);
		console.log(error);
        return [];
	} 
}
