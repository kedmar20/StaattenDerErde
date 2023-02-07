import { renderAllElements } from "./functions.js";
import { filterRestCountriesByName } from "./filters.js";

const apiUrl = "https://restcountries.com/v3.1/all";

let filteredRestCountries = [];

fetch(apiUrl)
  .then((ress) => {
    return ress.json();
  })
  .then((resse) => {
    filteredRestCountries = resse.map((newList) => {
      return {
        capital: newList.capital ? newList.capital.join(", ") : "no capital",
        name: newList.name.common,
        region: newList.region,
        population: newList.population,
        flagUrl: newList.flags.png,
      };
    });

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

    // filter by name:

    filterRestCountriesByName(filteredRestContriesAlphabetic);
  });
