const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f01e734b29e6bc41d3e2f231247b3355`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}