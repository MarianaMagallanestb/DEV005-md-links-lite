const { validateLinks } = require('C:/Users/maria/OneDrive/Escritorio/MdLinks/DEV005-md-links-lite/validateLinks.js');
const pathMo = require('path');
const fs = require('fs');
const markDownIt = require('markdown-it');
const { JSDOM } = require('jsdom');

// FUNCIÓN QUE CONVIERTE RUTAS A ABSOLUTAS 
const coneverterAbsolut = (path = '') => {
  //console.log("rutas recibidas del validatemdlinks", path);
  // rootsAbsolutes me va a "decir" si mi ruta es R o A, devuelve un boleano.
  const rootsAbsolutes = pathMo.isAbsolute(path)
  //console.log('ES ABSOLUTA?', rootsAbsolutes)

  if (rootsAbsolutes === false) {
    // resultConverteer nos va a "resolver" la ruta, si era relativa se pasa a absoluta 
    return pathMo.resolve(path);
    //console.log('RUTA CONVERTIDA A ABSOLUTA', resultConverter);
  } else {
    return path
  }
}

// FUNCIÓN DE EXTENCIÓN
const extencion = (path = '') => {
  return new Promise((resolve, reject) => {
    // ext me trae la extensión del archivo
    let ext = pathMo.extname(path)
    if (ext === '.md') {
      resolve('es un archivo', ext);
    } else {
      reject('El archivo no es .md');
    }
  })

}


//FUNCIÓN PARA VALIDAR EXISTENCIA DE ARCHIVO 
const itExist = (path = '') => {
  if (fs.existsSync(path)) {
    return true
  } else {
    return false
  }
};


//-----------------------------------------------------------------------------------------------------------------------------------------------

//FUNCIÓN PARA EXTRAER LOS LINKS 
const getLinks = (path = '', data) => {
  const linkss = [];
  const md = new markDownIt();
  let resultHtml = md.render(data);
  const dom = new JSDOM(resultHtml)
  const document = dom.window.document;
  //html
  const getElemts = document.querySelectorAll('a');
  getElemts.forEach((getElement) => {
    const text = getElement.textContent;
    const href = getElement.getAttribute("href");
    linkss.push({
      href: href,
      text: text,
      file: path
    });
    return linkss
  });

  return linkss;
}


//FUNCIÓN PARA LEER ARCHIVO
const readingFile = (path = '') => {
  return new Promise((resolve, reject) => {
    // funcion readfile para leer el archivo
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error(error))
        // console.log('error: ', failContent);
      } else {
        // const contentFile = data
        // console.log('enlace', contentFile);
        const saveLinks = getLinks(path, data);
        resolve(saveLinks);
      };
    });
  });
};

module.exports = {
  coneverterAbsolut, readingFile, itExist, getLinks, extencion
};
