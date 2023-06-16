// importar Path.js, validateLinks.js 
const { coneverterAbsolut, itExist, readingFile } = require('./path.js')
const { validateLinks } = require('./validateLinks.js')

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    let reouterConvert = '';
    const routeVerificate = itExist(path)
    if (!routeVerificate) {
      reject("No existe la ruta")
    } else {
      reouterConvert = coneverterAbsolut(path)
    }
    console.log('hola', reouterConvert);
    if (options.validate) {
      readingFile(reouterConvert).then((links) => Promise.all(links.map((link) => (validateLinks(link)))))
        .then((resValidate) => {
          resolve(resValidate)
        })
        .catch((error) => {
          reject(error)
        })
    } else {
      readingFile(reouterConvert).then((links) => {
        resolve(links)
      })
        .catch((error) => {
          reject(error)
        })
    }
  })
}

module.exports = {
  mdLinks
};
