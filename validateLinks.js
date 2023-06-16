//const fetch = require('node-fetch');
// const point =require('./index')
const validateLinks = (obj) => {
    //agregar nueva propiedad de status
    return fetch(obj.href)
        .then((response) => {
            let status;
            if (response.status < 404 === true) {
                response.status = status
                status = 'Ok';
            }else {
                status ='Fail'
            }
            return {
                ...obj,
                 status,
            }
        })

        .catch((error) => {
            error.status = 'Fail';
            return error;
          });
};


module.exports = {validateLinks};