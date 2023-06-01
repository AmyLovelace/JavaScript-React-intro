//const getImagePromise =()=>{
//    const promise = new Promise((resolve,reject)=> {
//        resolve('https://ajajjaj.com')
//    })
//    return promise;
//}

const getImage = async() => {
   
    try {
        const apiKey ='ddt0zfXHiUW4LgvgKjSjUI1W3oPcATlH';
    const request = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await request.json();
    
    const{url} = data.images.original;

    const img = document.createElement('img');
    img.src =url;
    document.body.append(img);
    
    } catch (error) {
        console.error(error)
    }
    
}

getImage();

