// importar path
// saber que vamos a testear
// cambiar la ruta de acuerdo a lo que nececito
const { coneverterAbsolut, itExist,extencion, readingFile, getLinks } = require('./path.js')

 describe('coneverterAbsolute', () => {
    test('Es una functión', () =>{
        expect( typeof coneverterAbsolut).toBe('function')
    });
    test('convertir ruta relativa a absoluta', ()=>{
        const path = 'C:/Users/maria/OneDrive/Escritorio/MdLinks/DEV005-md-links-lite/path.js';
        const result = coneverterAbsolut(path);
        expect(result).toEqual(path);
    });
 });