const router = require('express').Router();

//Importar los routes 
const opsRoute = require('./ops');
const authorsRoute = require('./authors');

//Conectar cada path con su route
router.use('/ops', opsRoute);
router.use('/authors', authorsRoute);

//Directorio para el usuario
router.use('/', (req, res) =>{
    res.json({
        message: 'WELCOME!',
        paths: ['/ops', '/authors'],
    });
})

//Exportar el router
module.exports = router;