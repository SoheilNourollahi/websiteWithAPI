let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let dataSearch = form.search.value;
  start(dataSearch)
    .then((element) => {
      preTagSorter();

      cardCreator(element);
      form.reset();
    })
    .catch(
      console.log(
        "sorry, some err! detected, call to your hero for repair this! :)"
      )
    );
});
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  location.reload();
});
const start = async (e) => {
  const bigData = await fetch(
    `https://api.unsplash.com/search/photos?client_id=BV56Bz3CjNVA8FAJ9mqlbSDBSr2TUZCI3Zrc1shmMWs&per_page=50&query=${e}`
  );

  const data = await bigData.json();
  console.log(data);
  return data;
};
function preTagSorter() {
  const main = document.querySelector("main");

  const sectionInput = document.createElement("section");
  main.append(sectionInput);
  sectionInput.className = "input";

  const sectionContainer = document.createElement("section");
  main.append(sectionContainer);
  sectionContainer.className = "container";
}

function cardCreator(data) {
  const container = document.querySelector(".container");

  data.results.forEach((e) => {
    const card = document.createElement("section");
    card.className = "card";
    container.append(card);

    const img = document.createElement("img");
    img.setAttribute("src", e.urls.thumb);
    img.setAttribute("alt", e.alt_description);
    card.append(img);

    const a = document.createElement("a");
    a.setAttribute("target", "_blank");
    a.setAttribute("href", e.urls.regular);
    a.textContent = `Regular Size View`;
    card.append(a);

    const buy = document.createElement("input");
    buy.setAttribute("type", "button");
    buy.setAttribute("value", "buy");
    card.append(buy);
  });
}

function Refresh() {
  form.addEventListener("submit", (e) => {
    console.log("page is refreshed");
  });
}
