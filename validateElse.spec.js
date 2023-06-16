const {validateLinks} = require('./validateLinks.js');
global.fetch = (() => Promise.resolve({
    href: 'https://www.pixar.com/error404',
    status: 404,
  }));
  // test de estatus de links
describe('validar links', ()=>{
    test('deveulve un objeto con links y sus estados PARTE CATCH', async ()=>{
       const  link = {  
        href: 'https://www.pixar.com/error404'
    } ;
        const result = await validateLinks(link);
        expect(result).toStrictEqual({
            href: 'https://www.pixar.com/error404',
            status:'Fail',
        });

    });
});