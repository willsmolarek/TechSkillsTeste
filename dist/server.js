"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// Usuários em memória (array)
let users = [
    { id: 1, name: "João Silva", email: "joao@email.com", isActive: true },
    { id: 2, name: "Maria Souza", email: "maria@email.com", isActive: false },
];
// GET /users - Retorna todos os usuários
app.get('/users', (req, res) => {
    res.json(users);
});
// GET /users/:id - Retorna usuário pelo ID
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(user);
});
// POST /users - Adiciona um novo usuário (validação simples)
app.post('/users', (req, res) => {
    const { id, name, email, isActive } = req.body;
    if (typeof id !== 'number' ||
        typeof name !== 'string' ||
        typeof email !== 'string' ||
        typeof isActive !== 'boolean') {
        return res.status(400).json({ message: 'Dados inválidos' });
    }
    // Verifica se o ID já existe
    if (users.some(u => u.id === id)) {
        return res.status(409).json({ message: 'ID já existe' });
    }
    const newUser = { id, name, email, isActive };
    users.push(newUser);
    res.status(201).json(newUser);
});
// PUT /users/:id - Atualiza um usuário existente
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, isActive } = req.body;
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    if ((name && typeof name !== 'string') ||
        (email && typeof email !== 'string') ||
        (isActive !== undefined && typeof isActive !== 'boolean')) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }
    const updatedUser = Object.assign(Object.assign({}, users[userIndex]), req.body);
    users[userIndex] = updatedUser;
    res.json(updatedUser);
});
// DELETE /users/:id - Remove um usuário
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    users.splice(userIndex, 1);
    res.status(204).send();
});
// Inicia o servidor
app.listen(port, () => {
    console.log(`API iniciada na porta ${port}`);
});
