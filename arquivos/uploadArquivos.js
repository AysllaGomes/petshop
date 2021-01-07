const fileSystem = require('fs');
const path = require('path');

module.exports = (caminho, nomeArquivo, callbackImagemCriada) => {

    const tipo = path.extname(caminho);
    const novoCaminho = `./assets/${nomeArquivo}${tipo}`;
    const tiposValidos = ['jpg', 'png', 'jpeg'];
    const isTipoValido = tiposValidos.indexOf(tipo.substr(1)) !== -1;

    if (isTipoValido) {

        fileSystem.createReadStream(caminho)
            .pipe(
                fileSystem.createWriteStream(novoCaminho)
            )
            .on('finish', () => {
                callbackImagemCriada(false, novoCaminho)
            });

    } else {

        const erro = 'O tipo do arquivo é inválido '
        callbackImagemCriada(erro);

    }

}
