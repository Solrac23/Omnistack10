const express            = require('express');
const mongoose           = require('mongoose');
const cors               = require('cors');
const http               = require('http');
const routes             = require('./routes');
const { setupWebsocket } = require('./webSocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect("mongodb+srv://admin:4638554885@cluster0.imo3x.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}) //mesma conexão 

app.use(cors());
app.use(express.json())
app.use(routes)

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmentros:
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção) Usando: Delete, Post
//Body: request.body (Dados para criação ou alteração de um registro)  Usando Post, Put

// MongoDB (Não-relacional)

server.listen(3333)
