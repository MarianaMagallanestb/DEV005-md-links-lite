const fetch = require('node-fetch');
const point =require('./index')
const validateLinks = (obj) => {
    //agregar nueva propiedad de status
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

        .catch((error) => reject(error))
};

/*const prueba = [{
    href: 'https://www.sugo.com',
    text: 'sugo.com',
    file: 'C:/Users/maria/OneDrive/Escritorio/MdLinks/DEV005-md-links-lite/markDown/routes.md'
}];*/
// validateLinks(readingFile);

module.exports = {validateLinks};

// retorno implisito











