const submitBtn=document.getElementById('search');
const searchParam=document.getElementById('search-text');
const drinkCards=document.querySelector(".drink-cards");
const aha="ProjectAudio/aha.mp3";
const dancingQueen="ProjectAudio/dancingQueen.mp3" 

submitBtn.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log(searchParam.value)
    drinkCards.innerHTML='';
}); 

function fetchSearch(){
    fetch('https://api.api-ninjas.com/v1/cocktail?name='+ searchParam.value, {
        headers: { 'X-Api-Key': 'K94J8aIYDUHZ4VyJ4vqXqw==YNi6rwL7ZYxX0LpE'}})
    .then(res=>res.json())
    .then(data=> {
        data.forEach(datas => {
            renderDrinkCards(datas)
        })
    console.log(data);
    });
};

function renderDrinkCards(datas){
    let siteHeader=document.querySelector(".top-header")
    let cardBody=document.createElement('div')
    let cardText=document.createElement('p')
    let cardTitle=document.createElement('h5')
    let cardSpirit=document.createElement('button')
    cardBody.className="card-body"
    cardTitle.className="card-title"
    cardSpirit.className="spirit-btn"
    cardSpirit.innerText="What's Your Spirit?!"
    cardTitle.innerText=datas.name
    cardText.className="card-text"
    cardText.innerText=datas.ingredients
    cardBody.append(cardTitle, cardText, cardSpirit)
    drinkCards.append(cardBody)
    cardBody.addEventListener('mouseover', (e) => {
        siteHeader.innerText=datas.instructions
    })
    cardSpirit.addEventListener('click', (e) => {
        if(searchParam.value=='champagne'){
            document.getElementById('dancingQueen').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('dancingQueen').pause();
            })
    }
        else if(searchParam.value=='martini'){
            document.getElementById('aha').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('aha').pause();
            })
        }
        else if(searchParam.value=='rum'){
            document.getElementById('rum').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('rum').pause();
            })
        }
        else if(searchParam.value=='tequila'){
            document.getElementById('tequila').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('tequila').pause();
            })
        }
        else if(searchParam.value=='sugar'){
            document.getElementById('sugar').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('sugar').pause();
            })
        }
        else if(searchParam.value=='beer'){
            document.getElementById('beer').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('beer').pause();
            })
        }
        else if(searchParam.value=='vodka'){
            document.getElementById('vodka').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('vodka').pause();
            })
        }
        else if(searchParam.value=='coconut'){
            document.getElementById('coconut').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('coconut').pause();
            })
        }
        else if(searchParam.value=='coke'){
            document.getElementById('coke').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('coke').pause();
            })
        }
        else if(searchParam.value=='mint'){
            document.getElementById('mint').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('mint').pause();
            })
        }
        else if(searchParam.value=='pop'){
            document.getElementById('pop').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('pop').pause();
            })
        }
        else if(searchParam.value=='bourbon'){
            document.getElementById('bourbon').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('bourbon').pause();
            })
        }
        else if(searchParam.value=='scotch'){
            document.getElementById('scotch').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('scotch').pause();
            })
        }
        else if(searchParam.value=='wine'){
            document.getElementById('wine').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('wine').pause();
            })
        }
        else if(searchParam.value=='brandy'){
            document.getElementById('brandy').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('brandy').pause();
            })
        }
        else if(searchParam.value=='margarita'){
            document.getElementById('margarita').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('margarita').pause();
            })
        }
        else if(searchParam.value=='whiskey'){
            document.getElementById('whiskey').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('whiskey').pause();
            })
        }
        else if(searchParam.value=='irish'){
            document.getElementById('irish').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('irish').pause();
            })
        }
        else if(searchParam.value=='gin'){
            document.getElementById('gin').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('gin').pause();
            })
        }
        else if(searchParam.value=='french'){
            document.getElementById('french').play();
            cardSpirit.addEventListener('click', (e) =>{
                document.getElementById('french').pause();
            })
        }
    });
};
