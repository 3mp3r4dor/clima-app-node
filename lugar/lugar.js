const axios = require('axios');



const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAVvD8qNZnaDHwi850GAqgdbgT4YCZQ5dk`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coords = location.geometry.location;

    console.log('Direccion: ', location.formatted_address);
    console.log('Latitud ', coords.lat);
    console.log('Longitud ', coords.lng);
    // console.log(JSON.stringify(resp.data, undefined, 2));
    // console.log(resp.status);


    return {
        direccion: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
}

module.exports = {
    getLugarLatLng
}