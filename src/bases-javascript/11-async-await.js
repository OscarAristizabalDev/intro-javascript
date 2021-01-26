// Async - await

const getImagen = async() => {


    try {
        const apiKey = 'YT88DnxOKIY2gzL3x9iG7cq2lDOi9Cbk';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        // Desestructuracion
        const { data } = await respuesta.json();
        // Desestructuracion
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.log(error);
    }
}

getImagen();