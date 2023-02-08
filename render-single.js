const renderSingle = () => {
  console.log(window.location.search);
  document.querySelector(".filters").innerHTML = "";

  const searchParams = new URLSearchParams(window.location.search);
  const nameOfCountry = searchParams.get("elements");
  // let singleCountry;

  // if error:
  if (!nameOfCountry) {
    backHomePage();
  }

  const apiUrlSingle = `https://restcountries.com/v3.1/name/${nameOfCountry}`;
  fetch(apiUrlSingle)
    .then((res) => res.json())
    .then(([res]) => {
      if (!res || res.length === 0) {
        backHomePage();
      }
      // singleCountry = {
      //   capital: res.capital ? res.capital.join(", ") : "no capital",
      // };
      renderSingleCountry(res);
    });
};

const backHomePage = () => {
  window.location.href = "/";
};

const renderSingleCountry = (staat) => {
  const mainDivForSingle = document.querySelector("main");
  const filtersDivForSingle = document.querySelector(".filters");
  const buttonBack = document.createElement("button");
  buttonBack.classList.add("button-back");
  buttonBack.innerText = "<-back";
  const imgSingle = document.createElement("img");
  imgSingle.classList.add("img-single");
  imgSingle.src = staat.flags.png;
  const divForItemsRight = document.createElement("div");
  divForItemsRight.classList.add("div-for-items-right");
  console.log(staat);

  filtersDivForSingle.appendChild(buttonBack);
  mainDivForSingle.appendChild(imgSingle);
  mainDivForSingle.appendChild(divForItemsRight);
  // divForItemsRight.appendChild('pForName')
  // divForItemsRight.appendChild('divListGrid')
  // divForItemsRight.appendChild('divBorderCountries')
};

export { renderSingle };
