// importar Path.js, validateLinks.js 
const { coneverterAbsolut, extencion, itExist, getLinks, readingFile } = require('./path.js')
const { validateLinks } = require('./validateLinks.js')

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    let reouterConvert = '';
    const routeVerificate = itExist(path)
    if (!routeVerificate) {
      reject("No existe la ruta")
    }else{
       reouterConvert = coneverterAbsolut(path)
    } 
    console.log('hola', reouterConvert);
    if(options.validate){
      readingFile(reouterConvert).then((links) => Promise.all(links.map((link)=>(validateLinks(link)))))
      .then((resValidate) =>{
        resolve(resValidate)
      })
      .catch((error)=>{
        reject(error)
      })
    }else {
      readingFile(reouterConvert).then((links) => {
        resolve(links)
      })
      .catch((error)=>{
        reject(error)
      })
    }
})
}

/*mdLinks('C:/Users/maria/OneDrive/Escritorio/MdLinks/DEV005-md-links-lite/markDown/routes.md', { validate: true }).then((result) => {
  console.log(/*'resultValidate',*/ //result);
//}).catch((error) => {
  //console.log(/*'erroValidate',*/error);
//})

module.exports = {
  mdLinks
};
