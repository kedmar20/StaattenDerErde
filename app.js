import { renderAllElements } from "./functions.js";
import { filterRestCountriesByName } from "./filters.js";
import { renderSingle } from "./render-single.js";
import "./styles.css";

let findNach;

// if (window.location.search.includes("?elements=")) {
//   renderSingle();
// } else {
const apiUrl = "https://restcountries.com/v3.1/all";
let filteredRestCountries = [];

fetch(apiUrl, { mode: 'no-cors'})
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
    const filteredRestContriesAlphabetic = filteredRestCountries.sort(
      (a, b) => {
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
      }
    );

    if (window.location.search.includes("?elements=")) {
      renderSingle();
    } else {
      //   // filter by name:
      filterRestCountriesByName(filteredRestContriesAlphabetic);
    }
  });

export { findNach };
