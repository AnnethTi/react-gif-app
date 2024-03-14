export const getGifts = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=AbZxT4pLyxYMmZ4pSUf7Kc7RNNkEedBw&q=${ category }&limit=3`
    const resp = await fetch(url);
    const {data} = await resp.json()

    const gifs = data.map( img => ({
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url
    }) )

    return gifs;

}