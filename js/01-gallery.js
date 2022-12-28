import {
    galleryItems
} from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryMarkupEl = createGallery(galleryItems);

galleryEl.innerHTML = galleryMarkupEl;


//create elements for gallery

function createGallery(images) {
    return images.map(({
            preview,
            original,
            description
        }) =>
        `<a href=${original} class="gallery__link">
        <img src=${preview} data-source="large-image.jpg" class="gallery__image" alt=${description}/> 
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

    const instance = basicLightbox.create(
        `<img src="${event.target.closest('.gallery__link').href}"
        width="800"
        height="600">`
    );
    instance.show();

    window.addEventListener("keydown", (event) => {
        if (event.code === 'Escape') {
            instance.close();
        }
    })

}