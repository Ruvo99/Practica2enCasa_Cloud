const express = require('express');
// const cors = require('cors');
require('dotenv').config();

const router = require('./routes/routes.js');

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';

// const corsOptions = {origin: '*', optionsSuccessStatus: 200}
// app.use(cors(corsOptions));

app.use(express.json());

app.use(router);

app.listen(port, host, () => {
    console.log(`Server listening on port ${port} and host ${host}`);
});
