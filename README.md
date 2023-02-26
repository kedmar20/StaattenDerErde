# StaattenDerErde 
( https://kedmar20.github.io/StaattenDerErde-RESTapi-RoutingDetail/ )

The integration with the [REST Countries API](https://restcountries.com) to pull country data and display it.

Users are able to:
- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page (routing)
- Click through to the border countries on the detail page

## Details (what have I done?):
### Javascript: 
  - Vanilla JS (without frameworks)
  - code construct and structure built (mostly) with functions 
  - filters: input + choose cooperation
  
### Routing Detail View
  if (window.location.search.includes("?elements=")) {
  		renderSingle();
	... 
  new URLSearchParams(window.location.search);  

### REST API:
  - fetch() + HTTP methods
  - data reduction trough array.map()
  - countries alphabetic sorting
  
### NodeJS + npm + node.modules  
### Webpack + bundling
  
### Githubpages deployment
### GIT + Github
  
### CSS:
  - flex + grid
  - mediaqueries
  
