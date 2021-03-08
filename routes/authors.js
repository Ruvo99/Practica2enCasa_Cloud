const router = require('express').Router();

//Regresa un JSON con las iniciales de cada autor
router.get('/', (req,res) => {
    res.json({
        author1: 'MARN',
        author2: 'AASN',
    })
})

module.exports = router;