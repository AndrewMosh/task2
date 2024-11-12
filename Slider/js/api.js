export async function fetchImages({ url = "https://jsonplaceholder.typicode.com/photos", limit = 5 } = {}) {
    try {
        const response = await axios.get(url, {
            params: { _limit: limit },
        });
        return response.data.map((photo) => ({
            url: photo.thumbnailUrl,
            title: photo.title,
        }));
    } catch (error) {
        console.error("Ошибка:", error);
        return [];
    }
}
