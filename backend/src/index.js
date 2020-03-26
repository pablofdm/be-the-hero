const express = require ('express');
const routes = require('./routes')
const cors = require('cors')
const app =  express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.listen(3333);

// Tipos de paramêtros:
// Query params: Parametros nomeados enviado na rota após "?" (Filtros, paginação)
// Route params: Parâmetros utilizados para identificar recursos
// Request body: Corpo da requisição, utilizado para criar ou alterar recursos


