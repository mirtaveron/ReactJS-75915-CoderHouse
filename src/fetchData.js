export const getAPI = (url) => {
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la respuesta de la API");
        }
        return response.json();
    })
    .catch(err => {
        console.error("Error en getAPI:", err);
        throw err;
    });
};