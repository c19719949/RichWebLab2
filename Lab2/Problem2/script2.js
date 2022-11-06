
const api_url = 'https://jsonplaceholder.typicode.com/posts'

async function getdata()
{
    const response = await fetch(api_url);
    
    const data = await response.json();


    const data2 = data.filter(entry => entry.title.split(' ').length > 6);
    
    console.log(data2);




}

getdata();



