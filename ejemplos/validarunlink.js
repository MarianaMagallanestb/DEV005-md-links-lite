const fetch = require('node-fetch');

const validateLink = (obj) => {
    return fetch(obj.href)
        .then((response) => {
            let status;
            if (response.status < 404 === true) {
                status = 'Ok';
            } else {
                status = 'Fail'
            }
            return {
                ...obj,
                 status
            }
        })

        .catch((error) =>`Retornar el objeto jajajajajja`)
};

/*const prueba = [{
    href: 'https://www.sugo.com',
    text: 'sugo.com',
    file: 'C:/Users/maria/OneDrive/Escritorio/MdLinks/DEV005-md-links-lite/markDown/routes.md'
}];*/
// validateLinks(readingFile);

module.exports = {validateLink};

// retorno implisito











