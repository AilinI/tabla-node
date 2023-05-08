const fs = require('fs')
const colors = require('colors');

const crearArchivo = async (base, listar, hasta) => {

    try {
        let salida, consola = ''

        for (let index = 1; index <= hasta; index++) {
            const multi = base * index;
            salida += `${base} x ${index} = ${multi}\n`
            consola += `${base} ${'x'.brightMagenta} ${index} ${'='.brightMagenta} ${multi}\n`
        }
        fs.writeFileSync(`./salida/tabla-${base}`, salida)
        if (listar) {
            console.log(colors.rainbow("=================="));
            console.log(colors.brightBlue('Tabla del '.brightMagenta, base));
            console.log(colors.rainbow("=================="));
            console.log(consola)
        }
        return 'Tabla creada'
    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}