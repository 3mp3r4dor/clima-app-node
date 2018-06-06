const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'direccion de la ciudad para obtener el clima'
        }
    })
    .help().argv;

module.exports = {
    argv
}