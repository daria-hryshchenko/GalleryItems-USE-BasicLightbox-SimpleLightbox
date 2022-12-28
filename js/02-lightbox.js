import {
    galleryItems
} from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryMarkupEl = createGallery(galleryItems);
galleryEl.innerHTML = galleryMarkupEl;

//create elements for gallery

function createGallery(images) {
    return images.map(({
            preview,
            original,
            description
        }) =>
        `<a href=${original} class="gallery__item">
        <img src=${preview} class="gallery__image" alt=${description}/> 
        </a>`
    ).join("");
};

// check to click a  image  
galleryEl.addEventListener('click', modalImg);

function modalImg(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

};

let gallery = new SimpleLightbox('.gallery a', {
    captionSelector: ".gallery__image",
    captionsData: "alt",
    captionDelay: 250,
});

gallery.on('error.simplelightbox', function (e) {
    console.log(e);
});