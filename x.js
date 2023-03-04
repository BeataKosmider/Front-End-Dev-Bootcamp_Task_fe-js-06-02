/*import Html from "./index.html";*/
const newBtn = document.createElement("button");
newBtn.setAttribute("id", "getGoat");
document.body.appendChild(newBtn);

const imageContainer = document.querySelector("#image");
const apiUrl = "https://placegoat.com/300/200";

const fetchGoatImage = () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const goatImage = data;
      const img = document.createElement("img");
      img.setAttribute("src", goatImage);
      img.setAttribute("data-test", "img-goat");
      imageContainer.appendChild(img);
    });
};
newBtn.addEventListener("click", fetchGoatImage);

/*GoatImage(300, 200);
const ImageAttr = (width, height) => {
  img.src = "https://placegoat.com/${width}/${height}";
};*/
/*fetch(apiUrl, {
    method: "post",
    headers: {
        "width": "300px",
        "heigh": "200px"
    },
    body: dataToSend
})
.then(res => res.json())
.then(res => {
    ???
})*/

/*Przygotuj ponownie przycisk z atrybutem id=”getGoat”. Spraw aby po kliknięciu w niego dodany został dynamicznie element <img> o src podanym niżej:
https://placegoat.com/

Nie wystarczy jednak sam adres powyżej - musisz jeszcze dodać do ścieżki informacje o rozmiarze w następującym formacie: https://placegoat.com/szerokosc/wysokosc gdzie szerokość powinna być równa 300px, a wysokość 200px. 

Dodaj do elementu <img> atrybut data-test=”img-goat”.*/
