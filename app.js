const { argv } = require('./config/yargs');
const { getLugarLatLng } = require('./lugar/lugar.js');
const { getClima } = require('./clima/clima');
// console.log(argv.direccion);

//  getLugarLatLng(argv.direccion)
//      .then(resp => {
//          console.log(resp);
//      })
//      .catch(err => {
//          console.log(err)
//      });

let getInfo = async(direccion) => {

    try {

        let coors = await getLugarLatLng(argv.direccion);
        let temp = await getClima(coors.lat, coors.lng);

        return `El clima en ${ coors.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

// getClima(19.7152565, -99.1370798)
//     .then(temperatura => {
//         console.log(temperatura);
//     })
//     .catch(error => console.log(error));