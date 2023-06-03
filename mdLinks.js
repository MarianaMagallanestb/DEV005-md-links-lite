// traermos las funciones del path
const { coneverterAbsolut } = require('./path');

module.exports = (path, options) => new Promise((resolve, reject) => {
  console.log(path);
  const routesAbsolutes = coneverterAbsolut(path);
  console.log('routesAbsolutes', routesAbsolutes);
  resolve(path, options);
});
