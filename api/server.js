const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let usuarios = [
    { id: 1, nome: 'Ana Silva', email: 'ana.silva@example.com' },
    { id: 2, nome: 'Carlos Souza', email: 'carlos.souza@example.com' }
];

app.get('/api/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/api/usuarios', (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({ message: 'Nome e email são obrigatórios.' });
    }

    const novoUsuario = {
        id: Date.now(),
        nome,
        email
    };

    usuarios.push(novoUsuario);

    console.log('Usuário cadastrado:', novoUsuario);
    res.status(201).json(novoUsuario);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
