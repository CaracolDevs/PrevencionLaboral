const express = require('express')

const controller = require('../controllers/values')

const router = express.Router()

/**
 * Ruta: /user GET
 */
router.get(
    `/get`,
    controller.get
    
)

router.post(
    '/add',
    controller.add
)

router.get(
    '/delete/:id',
    controller.delete
)

router.get(
    '/edit/:id',
    controller.edit
)

router.post(
    '/edit/:id',
    controller.editProcess
)


module.exports = router