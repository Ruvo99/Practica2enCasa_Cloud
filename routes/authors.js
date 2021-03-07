const router = require('express').Router();

router.get('/', (req,res) => {
    res.json({
        autor1: 'MARN',
        author2: 'AASN',
    })
})

module.exports = router;