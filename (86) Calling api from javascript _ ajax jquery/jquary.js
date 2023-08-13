console.clear();

const makeRequest = async (url, method) => {

    try{
        const result = await $.ajax({
            url: url,
            method: method,
        });
        return result; 
    }catch(err){
        console.log(err);
    }

}
const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "GET")
    .then((res) => console.log(res));
};

getData();