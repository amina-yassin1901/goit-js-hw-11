
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-function.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const input = document.querySelector('.form-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox = new SimpleLightbox('.gallery a');
let page = 1;

form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) {
    iziToast.warning({ title: 'Warning', message: 'Please enter a search term!' });
    return;
    }

    gallery.innerHTML = '';
    loader.style.display = 'block';

    try {
    const data = await fetchImages(query, page);
    loader.style.display = 'none';

    if (data.hits.length === 0) {
        iziToast.error({ title: 'No Results', message: 'Sorry, no images match your search query.' });
        return;
    }

    renderGallery(data.hits, gallery);
    lightbox.refresh();
    } catch (error) {
    iziToast.error({ title: 'Error', message: 'Something went wrong. Please try again later.' });
    loader.style.display = 'none';
    }
}
