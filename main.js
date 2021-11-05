/*
    1. creo un array di post
    2. salvo in delle variabili il contenuto dei post da modificare
    3. controllo se le immagini sono presenti
    4. gestisco il click sul like in modo che aggiorni il counter
*/
const postArray = [
    {
        "profileImg": "https://randomwordgenerator.com/img/picture-generator/54e3dd434a52a514f1dc8460962e33791c3ad6e04e50744172287ed29049cd_640.jpg",
        "postAuthor": "Jack Salerno",
        "postTime": "Ieri",
        "postText": "Lorem ipsum",
        "postImg": "https://randomwordgenerator.com/img/picture-generator/dan-meyers-XzFOfXOMq-4-unsplash.jpg",
        "likeCounter": 70
    },
    {
        "profileImg": "https://randomwordgenerator.com/img/picture-generator/57e1d0434a56a914f1dc8460962e33791c3ad6e04e50744172287ed3974ccd_640.jpg",
        "postAuthor": "Aldo Cunno",
        "postTime": "6 giorni fa",
        "postText": "Lorem ipsum",
        "postImg": "https://randomwordgenerator.com/img/picture-generator/54e0dd424951ad14f1dc8460962e33791c3ad6e04e507440742a7ad19f48c5_640.jpg",
        "likeCounter": 60
    },
    {
        "profileImg": "",
        "postAuthor": "Eddy Vivi",
        "postTime": "6 mesi fa",
        "postText": "Lorem ipsum",
        "postImg": "",
        "likeCounter": 50
    },
    {
        "profileImg": "https://randomwordgenerator.com/img/picture-generator/55e4dd404f53ae14f1dc8460962e33791c3ad6e04e50744172287edc954fc7_640.jpg",
        "postAuthor": "Gianluca Causio",
        "postTime": "una settimana fa",
        "postText": "Lorem ipsum",
        "postImg": "https://randomwordgenerator.com/img/picture-generator/g40961e1834d40ab3b80213664dba37d3b71256b5579cf742771f55d7cf0be955ab2cb75339f28bdf328625987652a612_640.jpg",
        "likeCounter": 40
    }
];
let container = document.getElementById("container");

let post = "";
for(let i = 0; i < postArray.length; i++){
    let {profileImg, postAuthor, postTime, postText, postImg, likeCounter} = postArray[i];

    if(profileImg == ""){
        profileImg = "https://unsplash.it/300/300?image=10";
    }
    if(postImg == ""){
        postImg = "https://unsplash.it/300/300?image=10";
    }

    post += `
            <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${profileImg}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${postAuthor}</div>
                        <div class="post-meta__time">${postTime}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${postText}</div>
            <div class="post__image">
                <img src="${postImg}" alt="" />
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likeCounter}</b> persone
                    </div>
                </div> 
            </div>            
            </div>`;
}

container.innerHTML = post;


for(let i = 0; i < postArray.length; i++){
    let buttons = document.getElementsByClassName("like-button  js-like-button")[i];
    buttons.addEventListener("click", function(){
        postArray[i].likeCounter++;
        console.log(postArray[i].likeCounter);
    });
}






