const argv = require('./config/yargs');
const colors = require('colors');
const { createFile } = require('./helpers/multiplicar');

// const yargs = require('yargs/yargs').argv

console.clear();

console.log(argv)

createFile(argv.b, argv.l, argv.m)
    .then( nombreArchivo => console.log(nombreArchivo.trap.rainbow, 'creado'))
    .catch( err => console.log(err))

