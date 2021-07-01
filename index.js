const fs = require("fs");
const os = require('os');
const path = require("path");
const process = require("process");



console.log("Hackeando tu sistema operativo...");

setTimeout(() => {
    if (process.platform === "linux") {
        console - log("Tú molas, y te explicaré el porqué: Porque Linux mola, pero Linux mola porque tu molas mucho más.");
    }
    if (process.platform === "win32") {
        console.log("Windows lo usan aquellos que ni siquiera saben que diferencia hay entre AC/DC, tú no molas tanto...");
    }
    if (process.platform === "darwin") {
        console.log("Tú das putísimo asco, a no ser que tu nombre sea Pol o Geraldine por lo que pasarías a ser el/la putísim@ am@ con una caquita de sistema operativo, pero como consejo te diré que inviertas mejor tu dinero.");
    }



    var free_memory = os.freemem();
    var free_mem_in_kb = free_memory / 1024;
    var free_mem_in_mb = free_mem_in_kb / 1024;
    var free_mem_in_gb = free_mem_in_mb / 1024;

    free_mem_in_kb = Math.floor(free_mem_in_kb);
    free_mem_in_mb = Math.floor(free_mem_in_mb);
    free_mem_in_gb = Math.floor(free_mem_in_gb);

    free_mem_in_mb = free_mem_in_mb % 1024;
    free_mem_in_kb = free_mem_in_kb % 1024;
    free_memory = free_memory % 1024;

    const sistemaOperativo = process.platform;
    const usuario = os.userInfo().username;
    const carpetaUsuario = os.userInfo().homedir;

    fs.readdir(carpetaUsuario, (err, archivos) => {
        for (const archivo of archivos) {
            const archivoInfo = fs.statSync(path.join(carpetaUsuario, archivo));
            console.log(
                archivo,
                archivoInfo.size,
                `¿Es una carpeta? ${archivoInfo.isDirectory()}`
            );
        }
    });

    console.log(`Memoria libre: ${free_mem_in_gb}GB + ${free_mem_in_mb}MB + ${free_mem_in_kb}KB and ${free_memory}Bytes`);
    console.log(`La versión de tu Sistema Operativo es ${sistemaOperativo}`);
    console.log(`Tu usuario de Sistema Operativo es ${usuario} y tu carpeta es ${carpetaUsuario}`);
    // console.log(`Estos son los archivos y carpetas de tu carpeta de usuario: ${archivos} ${directorios}`);

}, 2000);