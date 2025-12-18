import { Router } from 'express'
import { check } from 'express-validator';
import { validarResultado } from '../helpers/validarCampos.js';
import { validarJWT } from '../helpers/validarJWT.js';
import {
    getReservas,
    createReserva,
    updateReserva,
    deleteReserva
} from '../controllers/reservas.controller.js'

const router = Router()

router.get('/', getReservas);
router.post('/', createReserva)
router.put('/:id', 
    [
        validarJWT, 
        check('id', 'No es un ID válido').isMongoId(),
        validarResultado
    ],
    updateReserva
);
router.delete('/:id', validarJWT, deleteReserva);

export default router
