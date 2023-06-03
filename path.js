// funcion que compuebe la ruta absoluta o relativa
// transforme la ruta a absoluta
// tomar la ruta abosula y ver si es un archivo  (NO LEER EN CASO DE QUE SEA DIRECTORIO)
// revisar si es archivo md?
// si es md que lea el contenido
// buscar links dentro del texto md
// funciones invocar dentro del mdLinks resolve y reject
// notas extra : (mdLinks es index / validateMdLinks.js es cli.js )(validar con fecth)
const pathMo = require('path');
const fs = require('fs');
// coneverterAbsolut toma la ruta y transforma las relativas a abolutas
const coneverterAbsolut = (path = '') => {
  console.log("rutas recibidas del validatemdlinks", path);
  //validacion para saber si el archivo existe 
  if(fs.existsSync(path)){

    console.log("El archivo EXISTE!");
    }else{
    console.log("El archivo NO EXISTE!");
    }
  //validación si es un arcivo .md
  
  // rootsAbsolutes me va a "decir" si mi ruta es R o A, devuelve un boleano.
  const rootsAbsolutes = pathMo.isAbsolute(path)
  console.log('ABSOLUTA?', rootsAbsolutes);
  // resultConverteer nos va a "resolver" la ruta, si era relativa se pasa a absoluta 
  const resultConverter = pathMo.resolve(path);
  console.log('CONVERTIDA A ABSOLUTA', resultConverter);

};

// const convertRoute = (pathByUser) => {
//   // escribir una validacion si el archivo existe
//   // escribir una validacion si el archivo es un .md
//   const isAbsolute = path.isAbsolute(pathByUser);
//   // escribir un if que valide si es true retorne la ruta si es false resuelva como  absoluta y retorne la ruta absoluta
//   console.log(path.resolve(pathByUser));
//   return isAbsolute;
// };
// console.log(convertRoute('./README.md'));

module.exports = {
  coneverterAbsolut,
};
//};//if (aver === ''){
  // return path
  //}else{