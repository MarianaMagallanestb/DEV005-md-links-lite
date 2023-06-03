const validateMdLinks = require('./mdLinks');


validateMdLinks('./markDown/routes.md', { validate: false }).then((result) => {
  console.log('resultValidate', result);
}).catch((error) => {
  console.log('erroValidate',error);
});
