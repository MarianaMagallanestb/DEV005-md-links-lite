const {validateLinks} = require('./validateLinks.js');
global.fetch = (() => Promise.reject({
    href: 'https://googlx.com',
    status: 404,
  }));
  // test de estatus de links
describe('validar links', ()=>{
    test('deveulve un objeto con links y sus estados PARTE CATCH', async ()=>{
       const  link = {  
        href: 'https://googlx.com'
    } ;
        const result = await validateLinks(link);
        expect(result).toStrictEqual({
            href: 'https://googlx.com',
            status:'Fail',
        });

    });
});