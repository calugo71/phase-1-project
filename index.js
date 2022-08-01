const drinkCardTemplate=document.querySelector("[data-drink-template]")
const userCardContainer=document.querySelector("[data-drink-cards-container]")
const searchInput=document.querySelector("[data-search]")

let drinks = []


searchInput.addEventListener("input", (e) => {
    const value=e.target.value
    console.log(value)
})

fetch('https:www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
.then(res=>res.json())
.then(data=> {
    data.drinks.forEach(drinks => {
    const card=drinkCardTemplate.content.cloneNode(true).children[0];
    const header = card.querySelector("[data-header");
    const thumb = card.querySelector("[data-image]");
    header.textContent=drinks.strDrink;
    thumb.src=drinks.strDrinkThumb;
    userCardContainer.append(card);
})});
