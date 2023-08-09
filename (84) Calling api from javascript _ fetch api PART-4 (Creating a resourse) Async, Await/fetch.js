// 4 way to call api--XMLHttpRequest fetch, axios, jquery
// fetch() - global method for making Http-Request
// 2 way to call fetch - then, async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch returns a promise
// - returned promise can only handel network error
// - dose not support all the older browser

console.clear();
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:'DELETE',
    
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        title: 'fooMAAA',
        body: 'barMAA',
        userId: 1,
    }),
    })
    
    .then((res) => {
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then((res) => console.log(res))
// Error Handeling just use Catch
.catch((err) => console.log(err));

