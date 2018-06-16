const fs = require('fs')

/**
 * Excluir arquivos
 */
fs.unlink('public/img/image-1528838767227.jpg', function (err) {
    if (err) throw err
    console.log('File deleted!')
});

/*
fs.unlink('img/image-1528838049203.jpg', function (err) {
    if (err) throw err
    console.log('File deleted!')
});
*/