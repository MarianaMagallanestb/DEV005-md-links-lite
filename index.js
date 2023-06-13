// // importar Path.js, validateLinks.js 
// const { coneverterAbsolut, extencion, itExist, getLinks, readingFile } = require('./path.js')
// const { validateLinks } = require('./validateLinks.js')

// const mdLinks = (path, options) => {
//   return new Promise((resolve, reject) => {
//     const routeVerificate = itExist(path)
//     if (!routeVerificate) {
//       reject(new Error("No existe la ruta"))
//       return
//     }
//     const routerAbsolute = coneverterAbsolut(path)
//     if (!routerAbsolute(path)) {
//       reject(new Error("La ruta no es absoluta"))
//       return
//     }
//     extencion(routerAbsolute)
//     if (!options && routerAbsolute) {
//       getLinks(routerAbsolute)
//     } else if (routerAbsolute && options.validate === true) {
//       const extLinks = getLinks(routerAbsolute)
//         .then((data) => {
//           readingFile(routerAbsolute, data)
//             .then((response) => {
//               resolve(response, 25)
//               validateLinks(response);
//             })
//             .catch((err) => {
//               console.error(err.message, 29)
//             })
//         })

//       const linksYaValidados = extLinks.map(link => validateLinks(link))
//       Promise.all(linksYaValidados).then(respuesta => console.log(respuesta))
//       .catch((error)=>{reject(error)})
//     }

//   })
// };

// // validateLinks debe de validar solamente un link

// module.exports = {
//   mdLinks
// };
