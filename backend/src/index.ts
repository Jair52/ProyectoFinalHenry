import express from 'express';
import router from './routes';

const app = express();
app.use(express.json());

const PORT = 3000;

app.use((req, res, next) => {
    const { method, originalUrl } = req;
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Permitir acceso desde http://localhost:5173
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Permitir los métodos HTTP especificados
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Permitir los encabezados especificados
    console.log(`${method} ${originalUrl}`);
    next();
});

app.use('/api/', router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
