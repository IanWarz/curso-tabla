const fs = require('fs');
require('colors')

const creaArchivo = (base = 3)=>{
    console.log('==============');
    let tittle = `  tabla del ${base}`
    console.log(tittle.red);
    console.log('==============');
    
    let salida = '';
    for (let i = 1; i < 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
        
    }
    console.log(salida.rainbow);
    fs.writeFile(`./salida/tabla${base}.txt`, salida, (err) => {
    if(err) throw err;
    let footer = `tabla del ${base} creada correctamente`;
    console.log(footer.green);
    })
}

module.exports = {
    creaArchivo 
}