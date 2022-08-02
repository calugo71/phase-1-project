const submitBtn=document.getElementById('search');
const searchParam=document.getElementById('search-text');
const drinkCards=document.querySelector(".drink-cards");

submitBtn.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log(searchParam.value)
});

function fetchSearch(){
fetch('https://api.api-ninjas.com/v1/cocktail?name='+ searchParam.value, {
    headers: { 'X-Api-Key': 'K94J8aIYDUHZ4VyJ4vqXqw==YNi6rwL7ZYxX0LpE'}})
    .then(res=>res.json())
    .then(data=> {
        data.forEach(datas => {
            renderDrinkCards(datas)
        })
    });
};

function renderDrinkCards(datas){
    // let audio= new Audio("Downloads/J Dilla - No One's Home_pWkzofZ1YKQ_youtube.mp3")
    let siteHeader=document.querySelector(".top-header")
    let cardBody = document.createElement('div')
    let cardText=document.createElement('p')
    let cardTitle = document.createElement('h5')
    let cardSpirit=document.createElement('button')
    cardBody.className = "card-body"
    cardTitle.className = "card-title"
    cardSpirit.className="spirit-btn"
    cardSpirit.innerText="What's Your Spirit?!"
    cardTitle.innerText = datas.name
    cardText.className="card-text"
    cardText.innerText= datas.ingredients
    cardBody.append(cardTitle, cardText, cardSpirit)
    drinkCards.append(cardBody)
    cardBody.addEventListener('mouseover', (e) => {
        siteHeader.innerText=datas.instructions
    })
    cardSpirit.addEventListener('click', (e) => {
        document.getElementById('audio1').play();
    })
}