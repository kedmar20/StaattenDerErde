/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findNach": () => (/* binding */ findNach)
/* harmony export */ });
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ "./functions.js");
/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters.js */ "./filters.js");
/* harmony import */ var _render_single_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-single.js */ "./render-single.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./styles.css");





let findNach;

// if (window.location.search.includes("?elements=")) {
//   renderSingle();
// } else {
const apiUrl = "https://restcountries.com/v3.1/all";
let filteredRestCountries = [];

fetch(apiUrl, { mode: "no-cors" })
   .then((ress) => {
      return ress.json();
   })
   .then((resse) => {
      filteredRestCountries = resse.map((newList) => {
         return {
            capital: newList.capital ? newList.capital.join(", ") : "no capital",
            name: newList.name.common,
            region: newList.region,
            population: newList.population.toLocaleString(),
            flagUrl: newList.flags.png,
         };
      });
      findNach = function (elem) {
         let findNach2 = findNach;
         resse.forEach((reter) => {
            if (elem === reter.cca3) {
               findNach2 = reter.name.common;
            }
         });
         return findNach2;
      };
      // sort by name
      const filteredRestContriesAlphabetic = filteredRestCountries.sort((a, b) => {
         const nameA = a.name.toUpperCase(); // ignore upper and lowercase
         const nameB = b.name.toUpperCase(); // ignore upper and lowercase
         if (nameA < nameB) {
            return -1;
         }
         if (nameA > nameB) {
            return 1;
         }
         // names must be equal
         return 0;
      });

      if (window.location.search.includes("?elements=")) {
         (0,_render_single_js__WEBPACK_IMPORTED_MODULE_2__.renderSingle)();
      } else {
         //   // filter by name:
         (0,_filters_js__WEBPACK_IMPORTED_MODULE_1__.filterRestCountriesByName)(filteredRestContriesAlphabetic);
      }
   });




/***/ }),

/***/ "./filters.js":
/*!********************!*\
  !*** ./filters.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterRestCountriesByName": () => (/* binding */ filterRestCountriesByName)
/* harmony export */ });
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ "./functions.js");


const filterRestCountriesByName = (list) => {
  const inputFilter = document.querySelector(".input-filter");
  const inputFilterRegions = document.querySelector("#region");
  const ulTag = document.querySelector("#ul");
  let inputValue = "";
  let chosenRegion = "";
  let theList = list;

  (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.renderAllElements)(theList);
  //   inputFilter.addEventListener("input", (e) => {
  //     inputValue = e.target.value.toLowerCase().trim();
  //     console.log(inputValue);
  //     ulTag.innerHTML = "";
  //     theList = list.filter((el) => {
  //       //list is still the original list of countries from app.js
  //       return el.name.toLowerCase().includes(inputValue);
  //     });
  //     renderAllElements(theList);
  //   });

  //   inputFilterRegions.addEventListener("change", (ele) => {
  //     console.log(ele.target.value);
  //     ulTag.innerHTML = "";
  //     theList = list.filter((e) => {
  //       //list is still the original list of countries from app.js
  //       return e.region.includes(ele.target.value);
  //     });

  //     renderAllElements(theList);
  //   });
  // };
  const allFilterFunction = () => {
    ulTag.innerHTML = "";
    theList = list.filter((e) => {
      return (
        e.region.includes(chosenRegion) &&
        (e.name.toLowerCase().includes(inputValue) ||
          e.capital.toLowerCase().includes(inputValue))
      );
    });
    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.renderAllElements)(theList);
  };

  inputFilter.addEventListener("input", (e) => {
    inputValue = e.target.value.toLowerCase().trim();
    // ulTag.innerHTML = "";
    allFilterFunction();
  });

  //fcn change the placeholders text depending on the screen view:
  // function testMedia(media) {
  //   if (media.matches) {
  //     inputFilter.placeholder = "search for a country or capital...";
  //   } else {
  //     inputFilter.placeholder = "search...";
  //   }
  // }
  // const media = window.matchMedia("(min-width: 900px)");
  // //after loading:
  // testMedia(media);
  // //change listening:
  // media.addEventListener("change", testMedia);

  inputFilterRegions.addEventListener("change", (ele) => {
    chosenRegion = ele.target.value;
    allFilterFunction();
  });
};




/***/ }),

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAllElements": () => (/* binding */ renderAllElements)
/* harmony export */ });
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




/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/search.svg */ "./assets/search.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/arrow_back.svg */ "./assets/arrow_back.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --LightModeText: hsl(200, 15%, 16%);\r\n  --LightModeInput: hsl(0, 1%, 34%);\r\n  --LightModeBackground: hsl(0, 0%, 98%);\r\n  font-size: 1.1vw;\r\n  color: var(--LightModeBackground);\r\n}\r\n\r\n*,\r\n::after,\r\n::before {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  /* list-style: none; */\r\n}\r\n\r\nbody {\r\n  max-width: 100vw;\r\n  max-height: 100vw;\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n  background-color: hsl(210, 17%, 20%);\r\n}\r\n\r\nheader {\r\n  height: 10vh;\r\n  width: 90%;\r\n  background-color: var(--LightModeText);\r\n  margin: auto;\r\n  padding: 0.35em 1.5em;\r\n  font-size: 35px;\r\n}\r\n\r\n.href-header-text {\r\n  color: var(--LightModeBackground);\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\nmain {\r\n  align-items: center;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  /* padding: 3em 0; */\r\n  width: 90%;\r\n  margin: auto;\r\n  background-color: var(--LightModeInput);\r\n}\r\n\r\n.filters {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 3em;\r\n  width: 100%;\r\n}\r\n\r\nform {\r\n  color: #b9b9b9;\r\n  display: flex;\r\n  padding: 2px;\r\n  border: 1px solid currentColor;\r\n  border-radius: 5px;\r\n}\r\n\r\ninput[type=\"search\"] {\r\n  border: none;\r\n  background: transparent;\r\n  margin: 0;\r\n  padding: 7px 8px;\r\n  font-size: 14px;\r\n  color: inherit;\r\n  border: 1px solid transparent;\r\n  border-radius: inherit;\r\n  width: 24rem;\r\n  outline: none;\r\n}\r\n\r\ninput[type=\"search\"]::placeholder {\r\n  color: #bbb;\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n}\r\n\r\n.label-site-search {\r\n  text-indent: -999px;\r\n  overflow: hidden;\r\n  width: 40px;\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 1px solid none;\r\n  border-radius: inherit;\r\n  background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")\r\n    /* url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\") */\r\n    no-repeat center;\r\n  background-size: 1.5vw;\r\n  opacity: 0.7;\r\n}\r\n\r\n.option,\r\n#region {\r\n  width: 17rem;\r\n  color: #b9b9b9;\r\n  display: flex;\r\n  padding: 2px 17px;\r\n  border: 1px solid currentColor;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  background: transparent;\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n}\r\n\r\n.option:not(:checked) {\r\n  background-color: #4d4b4b;\r\n  line-height: 5px;\r\n  letter-spacing: 5px;\r\n}\r\n\r\n.option:checked {\r\n  color: #111111;\r\n  letter-spacing: 5px;\r\n}\r\n\r\n.container-countries {\r\n  background-color: var(--LightModeInput);\r\n  /* max-width: 75vw; */\r\n  width: 95%;\r\n  display: grid;\r\n  grid-template-columns: 18vw 18vw 18vw 18vw;\r\n  /* grid-auto-rows: 1fr; */\r\n  gap: 3vw;\r\n  justify-content: space-around;\r\n  align-items: top;\r\n  padding: 2em 0 5em 0;\r\n}\r\n\r\n.one-country {\r\n  background-color: var(--LightModeText);\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 22vw;\r\n  border-radius: 1vw;\r\n  box-shadow: 0px 0px 15px 2px #252525;\r\n}\r\n\r\n.new-a-element {\r\n  text-decoration: none;\r\n  color: var(--LightModeBackground);\r\n  cursor: pointer;\r\n}\r\n\r\n.img-flag {\r\n  width: 100%;\r\n  aspect-ratio: 320/196;\r\n  margin-bottom: 0.5vw;\r\n  border-radius: 0.5vw 0.5vw 0 0;\r\n}\r\n\r\n.div-in-li,\r\n.one-country > span {\r\n  padding-left: 1vw;\r\n  margin-top: 1vw;\r\n}\r\n\r\n.one-country > span,\r\n.span-label {\r\n  font-weight: 700;\r\n  letter-spacing: 0.1vw;\r\n}\r\n\r\n.span-label {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .container-countries {\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n\r\n  .one-country {\r\n    height: 30vw;\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .span-label {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .label-site-search {\r\n    background-size: 2.5vw;\r\n  }\r\n\r\n  .option,\r\n  #region {\r\n    width: 170px;\r\n    margin-left: 10px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  header {\r\n    width: 100%;\r\n  }\r\n  main {\r\n    width: 100%;\r\n  }\r\n  .container-countries {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n  .one-country {\r\n    height: fit-content;\r\n    font-size: 2.3rem;\r\n    padding: 10px;\r\n  }\r\n  .span-label {\r\n    font-size: 1.9rem;\r\n  }\r\n  header {\r\n    font-size: 30px;\r\n    padding: 0.6em;\r\n  }\r\n  input[type=\"search\"] {\r\n    width: 36vw;\r\n  }\r\n  .label-site-search {\r\n    background-size: 4.5vw;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n  .container-countries {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  .one-country {\r\n    /* height: 40vh; */\r\n    font-size: 4rem;\r\n  }\r\n  .span-label {\r\n    font-size: 3.5rem;\r\n  }\r\n  header {\r\n    font-size: 25px;\r\n    padding: 0.8em;\r\n  }\r\n}\r\n\r\n.container-countries-single {\r\n  display: flex;\r\n  width: 95%;\r\n  height: 100%;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding-bottom: 16vh;\r\n}\r\n.div-for-items-right {\r\n  height: 45vh;\r\n  width: 50%;\r\n  background-color: transparent;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 3vh;\r\n  padding-left: 6vw;\r\n}\r\n.img-single {\r\n  width: 40%;\r\n  box-shadow: 0px 0px 15px -4px #000000;\r\n  border-radius: 5px;\r\n  margin-left: 2vw;\r\n}\r\n.div-list-grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\r\n  font-size: 0.8rem;\r\n  letter-spacing: 1px;\r\n\r\n  line-height: 3vh;\r\n}\r\n.div-list-grid-span-label {\r\n  font-weight: 700;\r\n  font-size: 0.9rem;\r\n}\r\n.border-span-buttons {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\nbutton {\r\n  width: 11vw;\r\n  height: 4vh;\r\n  border: none;\r\n  border-radius: 5px;\r\n  margin: 0.6vh;\r\n  box-shadow: 0px 0px 15px -6px #000000;\r\n  cursor: pointer;\r\n  background-color: var(--LightModeText);\r\n  color: var(--LightModeBackground);\r\n  transition: all 0.3s;\r\n}\r\nbutton:hover {\r\n  transform: scale(107%);\r\n  background-color: hsl(200, 15%, 20%);\r\n}\r\n.button-back {\r\n  font-size: 2vh;\r\n  letter-spacing: 1.5px;\r\n  width: 8vw;\r\n  background: var(--LightModeText) url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat left;\r\n  background-position-x: 20px;\r\n  background-size: 1.5vw;\r\n  padding: 0 0 0 1.5vw;\r\n}\r\n.p-for-name {\r\n  font-size: 2.5rem;\r\n  font-weight: 700;\r\n  letter-spacing: 1.8px;\r\n}\r\n.border-span-label {\r\n  margin-right: 0.5vw;\r\n  font-weight: 700;\r\n  letter-spacing: 1.1px;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .div-list-grid {\r\n    grid-template-columns: 1fr;\r\n    font-size: 1.6rem;\r\n  }\r\n  .div-list-grid-span-label {\r\n    font-size: 1.6rem;\r\n  }\r\n  button {\r\n    width: 17vw;\r\n  }\r\n\r\n  .button-back {\r\n    width: 12vw;\r\n    background-position-x: 10px;\r\n    background-size: 2.5vw;\r\n    padding: 0 0 0 2.5vw;\r\n  }\r\n  .border-span-label {\r\n    margin-right: 0.5vw;\r\n    font-weight: 700;\r\n    letter-spacing: 1.1px;\r\n    font-size: 1.6rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .container-countries-single {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    padding: 6px 0 56px 0;\r\n  }\r\n  .div-for-items-right {\r\n    padding-top: 10px;\r\n    height: min-content;\r\n    width: 100%;\r\n    align-items: center;\r\n    padding-left: 0vw;\r\n  }\r\n  .img-single {\r\n    width: 70%;\r\n    margin-left: 0vw;\r\n    margin-top: 3vh;\r\n  }\r\n  .div-list-grid {\r\n    font-size: 3.6rem;\r\n  }\r\n  .div-list-grid-span-label {\r\n    font-size: 3.4rem;\r\n  }\r\n  .div-border-countries {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  .border-span-label {\r\n    margin: auto;\r\n    padding-bottom: 5px;\r\n    font-weight: 700;\r\n    letter-spacing: 1.1px;\r\n    font-size: 3.4rem;\r\n  }\r\n  button {\r\n    width: 27vw;\r\n    height: 6vh;\r\n  }\r\n  .p-for-name {\r\n    font-size: 5.5rem;\r\n  }\r\n  .button-back {\r\n    width: 29vw;\r\n    background-size: 3.5vw;\r\n  }\r\n  .border-span-buttons {\r\n    justify-content: center;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./styles.css"],"names":[],"mappings":"AAAA;EACE,mCAAmC;EACnC,iCAAiC;EACjC,sCAAsC;EACtC,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,sCAAsC;EACtC,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,sCAAsC;EACtC,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,oBAAoB;EACpB,UAAU;EACV,YAAY;EACZ,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,cAAc;EACd,aAAa;EACb,YAAY;EACZ,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,SAAS;EACT,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,6BAA6B;EAC7B,sBAAsB;EACtB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,sCAAsC;AACxC;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,sBAAsB;EACtB;;oBAEkB;EAClB,sBAAsB;EACtB,YAAY;AACd;;AAEA;;EAEE,YAAY;EACZ,cAAc;EACd,aAAa;EACb,iBAAiB;EACjB,8BAA8B;EAC9B,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,uCAAuC;EACvC,qBAAqB;EACrB,UAAU;EACV,aAAa;EACb,0CAA0C;EAC1C,yBAAyB;EACzB,QAAQ;EACR,6BAA6B;EAC7B,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,sCAAsC;EACtC,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;EACrB,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,oBAAoB;EACpB,8BAA8B;AAChC;;AAEA;;EAEE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;;EAEE,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE;IACE,kCAAkC;EACpC;;EAEA;IACE,YAAY;IACZ,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;;IAEE,YAAY;IACZ,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,WAAW;EACb;EACA;IACE,WAAW;EACb;EACA;IACE,8BAA8B;EAChC;EACA;IACE,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;EACf;EACA;IACE,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,cAAc;EAChB;EACA;IACE,WAAW;EACb;EACA;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,kBAAkB;IAClB,eAAe;EACjB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,cAAc;EAChB;AACF;;AAEA;EACE,aAAa;EACb,UAAU;EACV,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,YAAY;EACZ,UAAU;EACV,6BAA6B;EAC7B,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,QAAQ;EACR,iBAAiB;AACnB;AACA;EACE,UAAU;EACV,qCAAqC;EACrC,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,uCAAuC;EACvC,iBAAiB;EACjB,mBAAmB;;EAEnB,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,eAAe;AACjB;AACA;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,qCAAqC;EACrC,eAAe;EACf,sCAAsC;EACtC,iCAAiC;EACjC,oBAAoB;AACtB;AACA;EACE,sBAAsB;EACtB,oCAAoC;AACtC;AACA;EACE,cAAc;EACd,qBAAqB;EACrB,UAAU;EACV,uFAA0E;EAC1E,2BAA2B;EAC3B,sBAAsB;EACtB,oBAAoB;AACtB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,qBAAqB;AACvB;AACA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE;IACE,0BAA0B;IAC1B,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,WAAW;EACb;;EAEA;IACE,WAAW;IACX,2BAA2B;IAC3B,sBAAsB;IACtB,oBAAoB;EACtB;EACA;IACE,mBAAmB;IACnB,gBAAgB;IAChB,qBAAqB;IACrB,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,WAAW;IACX,sBAAsB;IACtB,qBAAqB;EACvB;EACA;IACE,iBAAiB;IACjB,mBAAmB;IACnB,WAAW;IACX,mBAAmB;IACnB,iBAAiB;EACnB;EACA;IACE,UAAU;IACV,gBAAgB;IAChB,eAAe;EACjB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,aAAa;IACb,sBAAsB;EACxB;EACA;IACE,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,qBAAqB;IACrB,iBAAiB;EACnB;EACA;IACE,WAAW;IACX,WAAW;EACb;EACA;IACE,iBAAiB;EACnB;EACA;IACE,WAAW;IACX,sBAAsB;EACxB;EACA;IACE,uBAAuB;EACzB;AACF","sourcesContent":[":root {\r\n  --LightModeText: hsl(200, 15%, 16%);\r\n  --LightModeInput: hsl(0, 1%, 34%);\r\n  --LightModeBackground: hsl(0, 0%, 98%);\r\n  font-size: 1.1vw;\r\n  color: var(--LightModeBackground);\r\n}\r\n\r\n*,\r\n::after,\r\n::before {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  /* list-style: none; */\r\n}\r\n\r\nbody {\r\n  max-width: 100vw;\r\n  max-height: 100vw;\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n  background-color: hsl(210, 17%, 20%);\r\n}\r\n\r\nheader {\r\n  height: 10vh;\r\n  width: 90%;\r\n  background-color: var(--LightModeText);\r\n  margin: auto;\r\n  padding: 0.35em 1.5em;\r\n  font-size: 35px;\r\n}\r\n\r\n.href-header-text {\r\n  color: var(--LightModeBackground);\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\nmain {\r\n  align-items: center;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  /* padding: 3em 0; */\r\n  width: 90%;\r\n  margin: auto;\r\n  background-color: var(--LightModeInput);\r\n}\r\n\r\n.filters {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 3em;\r\n  width: 100%;\r\n}\r\n\r\nform {\r\n  color: #b9b9b9;\r\n  display: flex;\r\n  padding: 2px;\r\n  border: 1px solid currentColor;\r\n  border-radius: 5px;\r\n}\r\n\r\ninput[type=\"search\"] {\r\n  border: none;\r\n  background: transparent;\r\n  margin: 0;\r\n  padding: 7px 8px;\r\n  font-size: 14px;\r\n  color: inherit;\r\n  border: 1px solid transparent;\r\n  border-radius: inherit;\r\n  width: 24rem;\r\n  outline: none;\r\n}\r\n\r\ninput[type=\"search\"]::placeholder {\r\n  color: #bbb;\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n}\r\n\r\n.label-site-search {\r\n  text-indent: -999px;\r\n  overflow: hidden;\r\n  width: 40px;\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 1px solid none;\r\n  border-radius: inherit;\r\n  background: transparent url(assets/search.svg)\r\n    /* url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\") */\r\n    no-repeat center;\r\n  background-size: 1.5vw;\r\n  opacity: 0.7;\r\n}\r\n\r\n.option,\r\n#region {\r\n  width: 17rem;\r\n  color: #b9b9b9;\r\n  display: flex;\r\n  padding: 2px 17px;\r\n  border: 1px solid currentColor;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  background: transparent;\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n}\r\n\r\n.option:not(:checked) {\r\n  background-color: #4d4b4b;\r\n  line-height: 5px;\r\n  letter-spacing: 5px;\r\n}\r\n\r\n.option:checked {\r\n  color: #111111;\r\n  letter-spacing: 5px;\r\n}\r\n\r\n.container-countries {\r\n  background-color: var(--LightModeInput);\r\n  /* max-width: 75vw; */\r\n  width: 95%;\r\n  display: grid;\r\n  grid-template-columns: 18vw 18vw 18vw 18vw;\r\n  /* grid-auto-rows: 1fr; */\r\n  gap: 3vw;\r\n  justify-content: space-around;\r\n  align-items: top;\r\n  padding: 2em 0 5em 0;\r\n}\r\n\r\n.one-country {\r\n  background-color: var(--LightModeText);\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 22vw;\r\n  border-radius: 1vw;\r\n  box-shadow: 0px 0px 15px 2px #252525;\r\n}\r\n\r\n.new-a-element {\r\n  text-decoration: none;\r\n  color: var(--LightModeBackground);\r\n  cursor: pointer;\r\n}\r\n\r\n.img-flag {\r\n  width: 100%;\r\n  aspect-ratio: 320/196;\r\n  margin-bottom: 0.5vw;\r\n  border-radius: 0.5vw 0.5vw 0 0;\r\n}\r\n\r\n.div-in-li,\r\n.one-country > span {\r\n  padding-left: 1vw;\r\n  margin-top: 1vw;\r\n}\r\n\r\n.one-country > span,\r\n.span-label {\r\n  font-weight: 700;\r\n  letter-spacing: 0.1vw;\r\n}\r\n\r\n.span-label {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .container-countries {\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n\r\n  .one-country {\r\n    height: 30vw;\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .span-label {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .label-site-search {\r\n    background-size: 2.5vw;\r\n  }\r\n\r\n  .option,\r\n  #region {\r\n    width: 170px;\r\n    margin-left: 10px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  header {\r\n    width: 100%;\r\n  }\r\n  main {\r\n    width: 100%;\r\n  }\r\n  .container-countries {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n  .one-country {\r\n    height: fit-content;\r\n    font-size: 2.3rem;\r\n    padding: 10px;\r\n  }\r\n  .span-label {\r\n    font-size: 1.9rem;\r\n  }\r\n  header {\r\n    font-size: 30px;\r\n    padding: 0.6em;\r\n  }\r\n  input[type=\"search\"] {\r\n    width: 36vw;\r\n  }\r\n  .label-site-search {\r\n    background-size: 4.5vw;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n  .container-countries {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  .one-country {\r\n    /* height: 40vh; */\r\n    font-size: 4rem;\r\n  }\r\n  .span-label {\r\n    font-size: 3.5rem;\r\n  }\r\n  header {\r\n    font-size: 25px;\r\n    padding: 0.8em;\r\n  }\r\n}\r\n\r\n.container-countries-single {\r\n  display: flex;\r\n  width: 95%;\r\n  height: 100%;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding-bottom: 16vh;\r\n}\r\n.div-for-items-right {\r\n  height: 45vh;\r\n  width: 50%;\r\n  background-color: transparent;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 3vh;\r\n  padding-left: 6vw;\r\n}\r\n.img-single {\r\n  width: 40%;\r\n  box-shadow: 0px 0px 15px -4px #000000;\r\n  border-radius: 5px;\r\n  margin-left: 2vw;\r\n}\r\n.div-list-grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\r\n  font-size: 0.8rem;\r\n  letter-spacing: 1px;\r\n\r\n  line-height: 3vh;\r\n}\r\n.div-list-grid-span-label {\r\n  font-weight: 700;\r\n  font-size: 0.9rem;\r\n}\r\n.border-span-buttons {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\nbutton {\r\n  width: 11vw;\r\n  height: 4vh;\r\n  border: none;\r\n  border-radius: 5px;\r\n  margin: 0.6vh;\r\n  box-shadow: 0px 0px 15px -6px #000000;\r\n  cursor: pointer;\r\n  background-color: var(--LightModeText);\r\n  color: var(--LightModeBackground);\r\n  transition: all 0.3s;\r\n}\r\nbutton:hover {\r\n  transform: scale(107%);\r\n  background-color: hsl(200, 15%, 20%);\r\n}\r\n.button-back {\r\n  font-size: 2vh;\r\n  letter-spacing: 1.5px;\r\n  width: 8vw;\r\n  background: var(--LightModeText) url(assets/arrow_back.svg) no-repeat left;\r\n  background-position-x: 20px;\r\n  background-size: 1.5vw;\r\n  padding: 0 0 0 1.5vw;\r\n}\r\n.p-for-name {\r\n  font-size: 2.5rem;\r\n  font-weight: 700;\r\n  letter-spacing: 1.8px;\r\n}\r\n.border-span-label {\r\n  margin-right: 0.5vw;\r\n  font-weight: 700;\r\n  letter-spacing: 1.1px;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .div-list-grid {\r\n    grid-template-columns: 1fr;\r\n    font-size: 1.6rem;\r\n  }\r\n  .div-list-grid-span-label {\r\n    font-size: 1.6rem;\r\n  }\r\n  button {\r\n    width: 17vw;\r\n  }\r\n\r\n  .button-back {\r\n    width: 12vw;\r\n    background-position-x: 10px;\r\n    background-size: 2.5vw;\r\n    padding: 0 0 0 2.5vw;\r\n  }\r\n  .border-span-label {\r\n    margin-right: 0.5vw;\r\n    font-weight: 700;\r\n    letter-spacing: 1.1px;\r\n    font-size: 1.6rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .container-countries-single {\r\n    width: 100%;\r\n    flex-direction: column;\r\n    padding: 6px 0 56px 0;\r\n  }\r\n  .div-for-items-right {\r\n    padding-top: 10px;\r\n    height: min-content;\r\n    width: 100%;\r\n    align-items: center;\r\n    padding-left: 0vw;\r\n  }\r\n  .img-single {\r\n    width: 70%;\r\n    margin-left: 0vw;\r\n    margin-top: 3vh;\r\n  }\r\n  .div-list-grid {\r\n    font-size: 3.6rem;\r\n  }\r\n  .div-list-grid-span-label {\r\n    font-size: 3.4rem;\r\n  }\r\n  .div-border-countries {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  .border-span-label {\r\n    margin: auto;\r\n    padding-bottom: 5px;\r\n    font-weight: 700;\r\n    letter-spacing: 1.1px;\r\n    font-size: 3.4rem;\r\n  }\r\n  button {\r\n    width: 27vw;\r\n    height: 6vh;\r\n  }\r\n  .p-for-name {\r\n    font-size: 5.5rem;\r\n  }\r\n  .button-back {\r\n    width: 29vw;\r\n    background-size: 3.5vw;\r\n  }\r\n  .border-span-buttons {\r\n    justify-content: center;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./render-single.js":
/*!**************************!*\
  !*** ./render-single.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderSingle": () => (/* binding */ renderSingle)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./app.js");


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
          createdButton.innerText = `${(0,_app_js__WEBPACK_IMPORTED_MODULE_0__.findNach)(staat.borders[i])}`;
          // createdButtonA.href = `/`;
          createdButtonA.href = `./?elements=${(0,_app_js__WEBPACK_IMPORTED_MODULE_0__.findNach)(staat.borders[i])}`;
          console.log(createdButtonA.href);
          divBorderCountriesSpansButtons.appendChild(createdButtonA);
          createdButtonA.appendChild(createdButton);
        }
      }
    }
  }
};




/***/ }),

/***/ "./assets/arrow_back.svg":
/*!*******************************!*\
  !*** ./assets/arrow_back.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eef4d3d1e08f36dbdd7e.svg";

/***/ }),

/***/ "./assets/search.svg":
/*!***************************!*\
  !*** ./assets/search.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1fb1efbe7f4ba50911e.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map