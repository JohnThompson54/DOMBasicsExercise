// 1
const portillos = document.getElementById (`portillos`);
console.log(portillos);

// 2
const images = document.getElementsByTagName (`img`);
console.log(images);

// 3
const centered = document.getElementsByClassName ('center');
console.log(centered);

// 4
const ginosEast = document.querySelector (`#ginos`);
console.log(ginosEast)

// 5
const pTags = document.querySelectorAll (`p`);
console.log(pTags)

// 6a
const h1 = document.querySelector (`h1`);

// 6b
console.dir(h1)
console.log(h1.innerText);
h1.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago!`
console.log(h1.innerText);

// 7a
const others = document.getElementById(`others`);

// 7b
console.dir(others);
console.log(others.innerHTML);
others.innerHTML = `<h3>Other favorites</h3>`;
console.log(others.innerHTML);

// 8a
const aTag = document.querySelector (`a`);
console.dir(aTag)

// 8b
console.log(aTag.href);
aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`

// 9
/*console.dir(h1);
console.log(h1.classList);
h1.classList.add(`text-color`);
console.log(h1.classList);
h1.classList.add(`background-color`);
console.log(h1.classList);*/


h1.classList.add(`background`, `text-color`);
console.log(h1.classList);

// 10
h1.classList.remove(`background`);
console.log(h1.classList);

// 11a
const h4 = document.createElement(`h4`);
console.log(h4);

// 11b
console.dir(h4);
console.log(h4.innerText);
h4.innerText = `CHICAGO: A great place to eat!`;
console.log(h4.innerText);

// 11c
const body = document.querySelector(`body`)
body.prepend(h4.innerText);

// 12a
const h5 = document.createElement(`h5`);

// 12b
console.dir(h5)
console.log(h5.innerText);
h5.innerText = `See you in the Windy City sometime!`;
console.log(h5.innerText);

// 12c
/*const foodLink = document.querySelector('[aTag]');
console.dir(foodLink);
const span1 = document.createElement(`span`);
span1.innerText = `h5.innerText`;
foodLink.insertAdjacentElement(`afterend`, span1);
*/
// 13
/*const jaysBeef = document.querySelector(`[li="Jay's Beef"`)
jaysBeef.remove();
*/

// BONUS

// 14
const divs = document.querySelectorAll(`divs`);

// 14b
console.dir(divs);
console.log(divs.classList);
divs.classList.add(`background`);
divs.classList.toggle(`background`);

// 15a
const hungry = ["Thanks", "A", "Lot", "Now", "I", "Am", "Hungry"]