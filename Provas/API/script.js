// Função para obter as raças de cachorros e criar os botões
async function loadBreeds() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        const breeds = data.message;
        const breedButtons = document.getElementById('breed-buttons');
        breedButtons.innerHTML = '';
        for (let breed in breeds) {
            if (breeds[breed].length === 0) {
                createBreedButton(breed);
            } else {
                breeds[breed].forEach(subBreed => createBreedButton(`${breed}/${subBreed}`));
            }
        }
    } catch (error) {
        displayError('Não foi possível carregar as raças. Tente novamente mais tarde.');
    }
}

// Função para criar e adicionar o botão de raça
function createBreedButton(breed) {
    const button = document.createElement('button');
    button.textContent = breed;
    button.onclick = () => loadBreedImages(breed);
    document.getElementById('breed-buttons').appendChild(button);
}

// Função para carregar e exibir imagens da raça selecionada no modal
async function loadBreedImages(breed) {
    try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/4`);
        const data = await response.json();
        const images = data.message;
        const modalImageGallery = document.getElementById('modal-image-gallery');
        modalImageGallery.innerHTML = '';
        images.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = breed;
            modalImageGallery.appendChild(img);
        });
        // Show the modal
        document.getElementById('myModal').style.display = 'block';
    } catch (error) {
        displayError('Não foi possível carregar as imagens. Tente novamente mais tarde.');
    }
}

// Função para exibir mensagens de erro
function displayError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
}

// Get the modal
const modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Carregar as raças quando a página for carregada
document.addEventListener('DOMContentLoaded', loadBreeds);