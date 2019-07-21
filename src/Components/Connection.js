

export async function makefetch(autor) {
  var url = "https://api.pushshift.io/reddit/search/submission/";
  console.log("URL",url)
  // Where we're fetching data from
  fetch(`https://jsonplaceholder.typicode.com/users`+autor)
    // We get the API response and receive data in JSON format...
    .then(response => console.log(response.json()))
}
