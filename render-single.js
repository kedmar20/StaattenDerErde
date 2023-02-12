import { findNach } from "./app.js";

const renderSingle = () => {
  console.log(window.location.search);
  document.querySelector(".filters").innerHTML = "";

  const searchParams = new URLSearchParams(window.location.search);
  const nameOfCountry = searchParams.get("elements");

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
      renderSingleCountry(res);
    });
};

const backHomePage = () => {
  window.location.href = "./index.html";
};

const renderSingleCountry = (staat) => {
  const mainDivForSingle = document.querySelector(".container-countries");
  mainDivForSingle.classList.add("container-countries-single");
  mainDivForSingle.classList.remove("container-countries");
  const filtersDivForSingle = document.querySelector(".filters");
  const buttonBack = document.createElement("button");
  const buttonBackA = document.createElement("a");
  buttonBack.classList.add("button-back");

  buttonBack.innerText = "Back";
  buttonBackA.href = `./index.html`;
  const imgSingle = document.createElement("img");
  imgSingle.classList.add("img-single");
  imgSingle.src = staat.flags.png;
  const divForItemsRight = document.createElement("div");
  divForItemsRight.classList.add("div-for-items-right");
  const pForName = document.createElement("p");
  pForName.classList.add("p-for-name");
  pForName.innerText = `${staat.name.common}`;
  const divListGrid = document.createElement("div");
  divListGrid.classList.add("div-list-grid");
  const divBorderCountries = document.createElement("div");
  divBorderCountries.classList.add("div-border-countries");

  console.log(staat);
  buttonBackA.appendChild(buttonBack);
  filtersDivForSingle.appendChild(buttonBackA);
  mainDivForSingle.appendChild(imgSingle);
  mainDivForSingle.appendChild(divForItemsRight);
  divForItemsRight.appendChild(pForName);
  divForItemsRight.appendChild(divListGrid);
  divListGridSpans(staat);
  divForItemsRight.appendChild(divBorderCountries);
  divBorderCountriesSpans(staat);

  function divListGridSpans(staat) {
    console.log(
      // Object.values({ ...staat.demonyms })[0].f,

      Object.values(staat.demonyms)
        .map((el) => el.f)
        .join(", "),

      Object.entries(staat.demonyms),
      Object.keys(staat.demonyms),
      Object.values(staat.demonyms)
    );
    for (let i = 0; i < 10; i++) {
      const media = window.matchMedia("(min-width: 600px)");
      const divListGridSpan = document.createElement("span");
      const divListGridSpanLabel = document.createElement("span");
      divListGridSpanLabel.classList.add("div-list-grid-span-label");
      const divListGridSpanValue = document.createElement("span");
      divListGridSpan.appendChild(divListGridSpanLabel);
      divListGridSpan.appendChild(divListGridSpanValue);
      divListGrid.appendChild(divListGridSpan);
      function testMedia(media) {
        if (media.matches) {
          i === 0
            ? ((divListGridSpanLabel.innerText = `Native Name: `),
              (divListGridSpanValue.innerText = `${
                Object.values(staat.name.nativeName)[0].official
              }`))
            : i === 1
            ? ((divListGridSpanLabel.innerText = `Top Level Domain: `),
              (divListGridSpanValue.innerText = `${staat.tld}`))
            : i === 2
            ? ((divListGridSpanLabel.innerText = `Population: `),
              (divListGridSpanValue.innerText = `${staat.population.toLocaleString()}`))
            : i === 3
            ? ((divListGridSpanLabel.innerText = `Currencies: `),
              (divListGridSpanValue.innerText = `${
                Object.values(staat.currencies)[0].name
                // .map((el) => {
                //   return el.name;
                // })
                // .join(", ")
              }`))
            : i === 4
            ? ((divListGridSpanLabel.innerText = `Region: `),
              (divListGridSpanValue.innerText = `${staat.region}`))
            : i === 5
            ? ((divListGridSpanLabel.innerText = `Languages: `),
              (divListGridSpanValue.innerText = `${Object.values(
                staat.languages
              ).join(", ")}`))
            : i === 6
            ? ((divListGridSpanLabel.innerText = `Sub Region: `),
              (divListGridSpanValue.innerText = `${staat.subregion}`))
            : i === 7
            ? ((divListGridSpanLabel.innerText = ``),
              (divListGridSpanValue.innerText = ``))
            : i === 8
            ? ((divListGridSpanLabel.innerText = `Capital: `),
              (divListGridSpanValue.innerText = `${staat.capital.join(", ")}`))
            : i === 9;
          console.log(i);
        } else {
          console.log("media works!");
          i === 0
            ? ((divListGridSpanLabel.innerText = `Native Name: `),
              (divListGridSpanValue.innerText = `${
                Object.values(staat.name.nativeName)[0].official
              }`))
            : i === 6
            ? ((divListGridSpanLabel.innerText = `Top Level Domain: `),
              (divListGridSpanValue.innerText = `${staat.tld}`))
            : i === 1
            ? ((divListGridSpanLabel.innerText = `Population: `),
              (divListGridSpanValue.innerText = `${staat.population.toLocaleString()}`))
            : i === 7
            ? ((divListGridSpanLabel.innerText = `Currencies: `),
              (divListGridSpanValue.innerText = `${
                Object.values(staat.currencies)[0].name
                // .map((el) => {
                //   return el.name;
                // })
                // .join(", ")
              }`))
            : i === 2
            ? ((divListGridSpanLabel.innerText = `Region: `),
              (divListGridSpanValue.innerText = `${staat.region}`))
            : i === 8
            ? ((divListGridSpanLabel.innerText = `Languages: `),
              (divListGridSpanValue.innerText = `${Object.values(
                staat.languages
              ).join(", ")}`))
            : i === 3
            ? ((divListGridSpanLabel.innerText = `Sub Region: `),
              (divListGridSpanValue.innerText = `${staat.subregion}`))
            : i === 5
            ? ((divListGridSpanLabel.innerHTML = `<br>`),
              (divListGridSpanValue.innerText = ``))
            : i === 4
            ? ((divListGridSpanLabel.innerText = `Capital: `),
              (divListGridSpanValue.innerText = `${staat.capital.join(", ")}`))
            : i === 9;
        }
      }
      testMedia(media);
      media.addEventListener("change", testMedia);
    }
  }

  function divBorderCountriesSpans(staat) {
    const divBorderCountriesSpansLabel = document.createElement("span");
    divBorderCountriesSpansLabel.classList.add("border-span-label");
    divBorderCountriesSpansLabel.innerText = `Border Countries: `;
    const divBorderCountriesSpansButtons = document.createElement("span");
    divBorderCountriesSpansButtons.classList.add("border-span-buttons");
    divBorderCountriesSpansButtonsCreator(staat);
    divBorderCountries.appendChild(divBorderCountriesSpansLabel);
    divBorderCountries.appendChild(divBorderCountriesSpansButtons);

    function divBorderCountriesSpansButtonsCreator(staat) {
      let sbl = staat.borders.length;
      sbl > 0 ? creator(staat) : "";

      function creator(staat) {
        for (let i = 0; i < sbl; i++) {
          console.log(i);
          const createdButton = document.createElement("button");
          const createdButtonA = document.createElement("a");
          createdButton.classList.add("creator-button");
          createdButton.innerText = `${findNach(staat.borders[i])}`;
          // createdButtonA.href = `/`;
          createdButtonA.href = `./index.html/?elements=${findNach(
            staat.borders[i]
          )}`;
          console.log(createdButtonA.href);
          divBorderCountriesSpansButtons.appendChild(createdButtonA);
          createdButtonA.appendChild(createdButton);
        }
      }
    }
  }
};

export { renderSingle };
