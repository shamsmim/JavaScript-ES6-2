// web-storage API - allows us to store & read data in browser
// web storage API - localstorage, sessionStorage

//localStorage - store, read, update and remove data
// no expiry data: data never gets lost even if you close the browser

//..........getItem(key)......................

const countriesList = JSON.parse(localStorage.getItem("countries"));
console.log(countriesList);


//..........getItem(key)......................



