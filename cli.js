const validateMdLinks = require('./mdLinks');
//const fetch = require('node-fetch');
const {mdLinks} = require('./mdLinks');

mdLinks('./markDown/routes.md', { validate: true  }).then((result) => {
  console.log(/*'resultValidate',*/ result);
}).catch((error) => {
  console.log(/*'erroValidate',*/error);
});
// ruta definitiva './markDown/routes.md'
// ruta absoluta 'C:/Users/maria/OneDrive/Escritorio/MdLinks/DEV005-md-links-lite/markDown/routes.md'