const apiKey ='ddt0zfXHiUW4LgvgKjSjUI1W3oPcATlH';

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
request.then(response => response.json())
.then(({data}) =>{
    const{url} = data.images.original;
    
    const img = document.createElement('img');
    img.src=url;

    document.body.append(img);
})
.catch(console.warn);