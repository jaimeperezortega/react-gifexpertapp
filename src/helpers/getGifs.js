

const getGifs = async (category) =>{
    const api_key = 'F66xJDyIiesFVJxeZPLpoABB3Hv6A81w';
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=6&api_key=${api_key}`
    try {
        const response = await fetch(url);
        const {data} = await response.json();
        
        const gifs = data.map(img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        
        return gifs
        
    } catch (error) {
        console.log(error)
    }
    
  }  

  export default getGifs;