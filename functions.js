const ulContainer = document.querySelector("#ul");
console.log(ulContainer);

const oneCountryItems = (elements) => {
  let divInLi = document.createElement("div");
  divInLi.classList.add("div-in-li");

  for (let index = 1; index < 4; index++) {
    let pDivInLi = document.createElement("p");
    pDivInLi.classList.add("p-div-in-li");

    let spanLabel = document.createElement("span");
    spanLabel.classList.add("span-label");

    let spanValue = document.createElement("span");
    spanValue.classList.add("span-value");

    index === 1
      ? ((spanLabel.innerText = "Population: "),
        (spanValue.innerText = elements.population))
      : index === 2
      ? ((spanLabel.innerText = "Region: "),
        (spanValue.innerText = elements.region))
      : ((spanLabel.innerText = "Capital: "),
        (spanValue.innerText = elements.capital));

    divInLi.appendChild(pDivInLi);
    pDivInLi.appendChild(spanLabel);
    pDivInLi.appendChild(spanValue);
  }
  return divInLi;
};

const oneCountry = (elements) => {
  let newAElement = document.createElement("a"); // routing element
  newAElement.classList.add("new-a-element");
  newAElement.href = `?elements=${elements.name}`; //routing href
  let newIl = document.createElement("li");
  newIl.classList.add("one-country");

  let imgFlag = document.createElement("img");
  imgFlag.src = elements.flagUrl;
  imgFlag.classList.add("img-flag");
  newIl.appendChild(imgFlag);

  let spanName = document.createElement("span");
  spanName.innerText = elements.name;
  newIl.appendChild(spanName);

  newIl.appendChild(oneCountryItems(elements));
  newAElement.appendChild(newIl);
  return newAElement;
};

const renderAllElements = (list) => {
  console.log(list);
  list.forEach((elements) => {
    ulContainer.appendChild(oneCountry(elements));
  });
};

export { renderAllElements };
