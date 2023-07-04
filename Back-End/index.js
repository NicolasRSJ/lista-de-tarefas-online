const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const conn = require('./db/conn');

// CONFIGURANDO PERMISSÕES DO CABEÇALHO DA API
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    next();
})

// CONFIGURANDO CORS
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CONFIGURANDO MONGOOSE E INICIANDO O BANCO DE DADOS
mongoose.Promise = global.Promise;
conn();

// DEFINIÇÃO DAS PROPRIEDADES DE UMA TAREFA
const TarefaSchema = mongoose.Schema({
    titulo: {
        type: String,
        riquered: true,
    },
    descricao: {
        type: String,
        riquered: true,
    },
    concluida: {
        type: Boolean,
        riquered: true,
    }
}, {
    timestamps: true
});

const Tarefa = mongoose.model('Tarefa', TarefaSchema);

// Definição das rotas da API
const router = express.Router();

// ROTA DE TESTE
router.get('/', (req, res) => {
    res.json({ message: 'API da lista de tarefas funcionando!' });
});

// ROTA DAS TAREFAS
router.route('/tarefas')
    // CRIAR UMA NOVA TAREFA
    .post(async (req, res) => {
        const {titulo, descricao, concluida } = req.body;
        try {
            const tarefa = new Tarefa({
                titulo,
                descricao,
                concluida,
            });
            await tarefa.save();
            res.json(tarefa);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    })
    // BUSCAR TODAS AS TEREFAS
    .get(async (req, res) => {
        try {
          const tarefas = await Tarefa.find({});
          res.json(tarefas);
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error'  + err.message);
        }
    });

// ROTA DA TAREFA ESPECIFICADA POR ID
router.route('/tarefas/:_id')
    // BUSCAR TAREFA POR ID
    .get(async (req, res) => {
        console.log(req.params._id)
        try {  
            const tarefa = await Tarefa.findById(req.params._id);
            res.json(tarefa);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error: ' + err.message);
        }
    })
    // ATUALIZAR TAREFA POR ID
    .put(async (req, res) => {
        try {
          const tarefa = await Tarefa.findByIdAndUpdate(req.params._id, {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            concluida: req.body.concluida,
          }, { new: true });
          res.json(tarefa);
        } catch(err) {
          console.error(err.message);
          res.status(500).send('Server Error' + err.message);
        }
    })
    // EXCLUIR TAREFA POR ID
    .delete(async (req, res) => {
        try {
          const tarefa = await Tarefa.findByIdAndDelete(req.params._id);
          res.send(tarefa);
        } catch (error) {
          console.log(error);
          res.status(500).send(error);
        }
    }); 

// REGISTRAR ROTAS DA API
app.use('/api', router);

// INICIAR SERVIDOR
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`API da lista de tarefas rodando na porta ${port}`);
});