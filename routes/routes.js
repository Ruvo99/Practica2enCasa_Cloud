const router = require('express').Router();

const opsRoute = require('./ops');
const authorsRoute = require('./authors');

router.use('/ops', opsRoute);
router.use('/authors', authorsRoute);

router.use('/', (req, res) =>{
    res.json({
        message: 'WELCOME!',
        paths: ['/ops', '/authors'],
    });
})

module.exports = router;