const fs = require('fs');
const colors = require('colors')


const createFile = async ( base = 5, listar = false, multiplier = 10 ) => {

    try {
        let solve = '';
        let consoleMessage = '';
        for (let i = 1; i <= multiplier; i++) {

            solve += `${base} x ${i} = ${base * i} \n`
            consoleMessage += `${base} ${'x'.red} ${i} ${'='.red} ${base * i} \n`
        }
        if (listar) {
            console.log('======================'.brightBlue);
            console.log('   Tabla del:', colors.green(base));
            console.log('======================'.brightBlue)


            console.log(consoleMessage)
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, solve);
        return `tabla-${base}.txt`
    } catch (error) {
        throw error
    }
    

    // console.log(solve)

    // fs.writeFileSync(`tabla-${base}.txt`, solve);

    // console.log(`tabla-${base}.txt creada`)

}

module.exports = {
    createFile,
}