// const { formatPostcssSourceMap } = require("vite");

addEventListener("DOMContentLoaded", (event) => {


    const ratingState = document.querySelector("#rating-state");
    const thankState = document.querySelector("#thank-state");
    const starSelected = document.querySelector("#selected-rating");
    const form = document.querySelector("form");

    // query selector => premier element html rencontrer
    //  les [] au sein de "" permette de specifier des caracteriques precises d'un element 

    
    form.addEventListener("submit", (event) =>{
        event.preventDefault(); 
        //  Cette méthode empêche le comportement par défaut du formulaire,
        //  qui est de recharger la page. Cela permet de gérer la soumission du formulaire 
        // avec JavaScript au lieu de laisser le navigateur agir automatiquement.

        const rating = document.querySelector('input[name="rating"]:checked');

        if(rating){
            console.log(`Note sélectionnée : ${rating.value}`);

            starSelected.textContent = `You selected ${rating.value} out of 5`

            ratingState.classList.remove('flex');
            ratingState.classList.add('hidden');

            thankState.classList.remove('hidden');
            thankState.classList.add('flex');



        }
        else{
            alert("Veuillez mettre une note !");
        }
    });


});
