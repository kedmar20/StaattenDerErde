const ulContainer = document.querySelector("#ul");
console.log(ulContainer);

const oneCountryItems = (elements) => {
  let divInLi = document.createElement("div");
  divInLi.classList.add("divinli");

  for (let index = 1; index < 4; index++) {
    let pDivInLi = document.createElement("p");
    pDivInLi.classList.add("pDivInLi");

    let spanLabel = document.createElement("span");
    spanLabel.classList.add("spanLabel");
    spanLabel.innerText =
      index == 1 ? "Population: " : index == 2 ? "Region: " : "Capital: ";

    let spanValue = document.createElement("span");
    spanValue.classList.add("spanValue");
    spanValue.innerText =
      index == 1
        ? elements.population
        : index == 2
        ? elements.region
        : elements.capital;
    divInLi.appendChild(pDivInLi);
    pDivInLi.appendChild(spanLabel);
    pDivInLi.appendChild(spanValue);
    // pDivInLi.appendFirstChild(spanPopulation);
  }
  return divInLi;
};

const oneCountry = (elements) => {
  let newIl = document.createElement("li");
  newIl.classList.add("oneCountry");

  let imgFlag = document.createElement("img");
  imgFlag.src = elements.flagUrl;
  imgFlag.classList.add("imgFlag");
  newIl.appendChild(imgFlag);

  let spanName = document.createElement("span");
  spanName.innerText = elements.name;
  newIl.appendChild(spanName);

  newIl.appendChild(oneCountryItems(elements));
  return newIl;
};

const renderAllElements = (list) => {
  console.log(list);
  list.forEach((elements) => {
    ulContainer.appendChild(oneCountry(elements));
  });
};

export { renderAllElements };
