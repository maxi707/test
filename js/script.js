function createCardItem(data) {
  let cardItem = document.createElement("article");

  let cardTop = document.createElement("div");
  let cardImg = document.createElement("img");
  let cardTopWrapper = document.createElement("div");
  let cardId = document.createElement("span");
  let cardFavourite = document.createElement("span");

  let cardBottom = document.createElement("div");
  let cardBottomWrapper = document.createElement("div");
  let cardTitle = document.createElement("h2");
  let cardAge = document.createElement("span");
  let cardRate = document.createElement("span");
  let cardDescription = document.createElement("p");

  cardItem.classList.add("card__item");
  cardTop.classList.add("card__top");

  //img_link
  cardImg.classList.add("card__img");
  cardImg.src = data.img_link;
  cardImg.alt = data.name;
  cardImg.width = 300;

  cardTopWrapper.classList.add("card__top-wrapper");

  //id
  cardId.classList.add("card__id");
  cardId.textContent = `ID: ${data.id}`;

  //favourite
  cardFavourite.classList.add("card__favourite");
  if (data.favourite) {
    cardFavourite.classList.add("card__favourite--yes");
  } else {
    cardFavourite.classList.add("card__favourite--no");
  }

  cardTopWrapper.append(cardId, cardFavourite);
  cardTop.append(cardImg, cardTopWrapper);
  cardItem.append(cardTop);

  cardBottom.classList.add("card__bottom");
  cardBottomWrapper.classList.add("card__bottom-wrapper");

  //name
  cardTitle.classList.add("card__title");
  cardTitle.textContent = data.name;

  //age
  cardAge.classList.add("card__age");
  cardAge.textContent = `${data.age} ${getAgeEnding(data.age)}`;

  //rate
  cardRate.classList.add("card__rate");
  cardRate.textContent = `${data.rate}/10`;

  //description
  cardDescription.classList.add("card__description");
  cardDescription.textContent = data.description;

  cardBottomWrapper.append(cardTitle, cardAge, cardRate);
  cardBottom.append(cardBottomWrapper, cardDescription);
  cardItem.append(cardBottom);

  return cardItem;
}

// Функция, возвращающая одну из строк "год", "года", "лет".
function getAgeEnding(age) {
  if (age % 100 >= 11 && age % 100 <= 14) return "лет";
  else if (age % 10 == 1) return "год";
  else if (age % 10 >= 2 && age % 10 <= 4) return "года";
  else return "лет";
}

let container = document.getElementById("root");
let card = document.createElement("div");
card.classList.add("card");

cats.forEach((element) => {
  card.append(createCardItem(element));
});

container.append(card);
