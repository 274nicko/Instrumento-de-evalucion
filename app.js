const url = "https://dog.ceo/api/breeds/image/random";

const main_card = document.querySelector('#main-card');
const templete_card = document.querySelector('#templete-card').content;

const fragment = document.createDocumentFragment();

const btn_generate = document.getElementById('btn-generate');

btn_generate.addEventListener('click', FetchApi);

function CreateCard(dogs){
    let clone_templete = document.importNode(templete_card, true);
    clone_templete.querySelector(".img-card").setAttribute('src', dogs.message);
    clone_templete.querySelector(".img-card").setAttribute('alt', dogs.message);
    fragment.appendChild(clone_templete);
    main_card.appendChild(fragment);    
}

function FetchApi(){
    fetch(url)
    .then(response => response.json())
    .then(element =>{
        main_card.innerHTML = '';
        CreateCard(element)
    })
}