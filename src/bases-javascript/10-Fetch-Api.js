const apiKey = 'YT88DnxOKIY2gzL3x9iG7cq2lDOi9Cbk';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// Promesas en cadena
peticion
    .then(response => response.json())
    .then(({ data }) => {
        // Desestructuracion
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(error => console.log(error));