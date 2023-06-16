// traer la importación al archivo validateLinks
const {validateLinks} = require('./validateLinks.js');
//const fetch = require('node-fetch');
// const fs = require('fs');

global.fetch = (() => Promise.resolve({
    href: 'https://www.google.com',
    status: 200,
  }));
  // test de estatus de links
describe('validar links', ()=>{
    test('deveulve un objeto con links y sus estados', async ()=>{
       const  link = {  
        href: 'https://www.google.com'
    } ;
        const result = await validateLinks(link);
        expect(result).toStrictEqual({
            href: 'https://www.google.com',
            status:'Ok',
        });

    });
});
// que sea una promesa 
// que esa promesa respnda 

// funcion en el else 
