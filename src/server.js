const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const SECRET_KEY = '123'; // ¡Usa una clave segura en producción!
const users = [
    { id: 1, email: 'admin@test.com', password: '123' }
];

// Ruta de login
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
});

// Ruta protegida de ejemplo
app.get('/api/protected', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
  
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ message: `Bienvenido usuario ${decoded.userId}` });
    } catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
});

app.listen(5000, () => console.log('Servidor en http://localhost:5000'));
