const {validateLink} = require('./validarunlink')

const prueba = [{
    href: 'https://www.sugo.com',
    text: 'sugo.com',
    file: 'C:/Users/maria/OneDrive/Escritorio/MdLinks/DEV005-md-links-lite/markDown/routes.md'
},
{
    href: 'https://www.google.com',
    text: 'CGoogle controla tu vida',
    file: 'C:/Users/maria/OneDrive/Escritorio/MdLinks/DEV005-md-links-lite/markDown/routes.md'
},
{
    href: 'https://www.yahoo.com',
    text: ' Nadie usa yahoo',
    file: 'C:/Users/maria/OneDrive/Escritorio/MdLinks/DEV005-md-links-lite/markDown/routes.md'
},
{
    href: 'https://www.hoyesviernesynadielosabe.org',
    text: 'esta web ni existe',
    file: 'C:/Users/maria/OneDrive/Escritorio/MdLinks/DEV005-md-links-lite/markDown/routes.md'
}
];

const linksYaValidados=prueba.map(link=>validateLink(link)) // inverstiag .map
Promise.all(linksYaValidados).then(respuesta=>console.log(respuesta))