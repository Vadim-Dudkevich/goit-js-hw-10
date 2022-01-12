const BASE_URL = 'https://restcountries.com/v3.1/name/';
const fields = 'fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${BASE_URL}${name}?${fields}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}

// export function fetchCountries(name) {
//   const url = 'https://restcountries.com/v3.1/name/';
//   const filter = '?fields=name,capital,population,flags,languages';
//   return fetch(`${url}${name}${filter}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
