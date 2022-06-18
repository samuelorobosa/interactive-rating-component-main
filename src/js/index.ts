let rating:number = 1;

//get all ratings
let ratingButtons = document.querySelectorAll('div[data-value]');

//get star container
let ratingContainer = document.getElementById('illustration_bg_container');

//loop through all ratings
for(let i = 0; i < ratingButtons.length; i++){
    // @ts-ignore
    ratingButtons[i].addEventListener('click', (e)=>{
        // @ts-ignore
        let ratingValue :number = parseInt(e.target.dataset.value);

        rating =ratingValue;
        // @ts-ignore
        ratingContainer.innerHTML = "";

            //loop through the review container
            for(let i = 0; i<ratingValue; i++){
                const divNode = document.createElement('div');
                divNode.setAttribute('id', 'illustration_bg' );
                const imgNode = document.createElement('img');
                imgNode.setAttribute('src', './images/icon-star.svg');
                imgNode.setAttribute('alt', 'review_star');
                divNode.appendChild(imgNode);

                // @ts-ignore
                ratingContainer.appendChild(divNode);
            }
    })
}

//get the submit Button

let submitButton = document.getElementById('submitButton');

// @ts-ignore
submitButton.addEventListener('click', ()=>{
    let mainContainer = document.querySelector("#container");
    // @ts-ignore
    mainContainer.innerHTML = ''

    let html = `
    <div class="component-wrapper">
            <div id="illustration_bg_container_thanks">
                <div id="illustration_bg__thanks">
                    <img src="./images/illustration-thank-you.svg" alt="review_star">
                </div>
            </div>
            <p class="component__thanks">You selected ${rating} out of 5</p>
            <p class="component-text text-center">Thank You</p>
            <p class="component-subtext text-center"> We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch.</p>

        </div>
    `

    // @ts-ignore
    mainContainer.innerHTML = html;
})