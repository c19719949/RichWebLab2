
const api_url = 'https://jsonplaceholder.typicode.com/posts'

  async function getdata(){
    const response = await fetch(api_url);
  
    const data = await response.json();
    console.log(data);


    








  }

  getdata();