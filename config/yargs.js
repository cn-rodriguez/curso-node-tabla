const argv = require('yargs')
                .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        describe: 'recive a number',
                        demandOption: true,

                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        describe: 'List the results',
                        default: false
                    },
                    'm': {
                        alias: 'multiplier',
                        type: 'number',
                        describe: 'Max multiplier',
                    }

                })
                .boolean('l')
                .check( (argv, options) => {
                    console.log('yargs', argv)
                    if (isNaN( argv.base )) {
                        throw 'Base must be a number';
                    }
                    if (isNaN( argv.multiplier )) {
                        throw 'Multiplier must be a number';
                    }
                    return true;

                })
                .argv;

module.exports = argv;