const API_KEY = '48427757-fc949e79797ba7e940d238484';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 20) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
    try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch images');
    }
    return await response.json();
    } catch (error) {
    console.error(error);
    throw error;
    }
}