const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao.js');
const Tabelas = require('./infraestrutura/tabelas');

conexao.connect(
    erro => {

        if (!!erro) {
            console.log('Deu erro na conexão com o banco: ' + erro);
        } else {
            console.log('Conectado com sucesso');
            Tabelas.init(conexao);
            const app = customExpress();

            app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
        }

    })
