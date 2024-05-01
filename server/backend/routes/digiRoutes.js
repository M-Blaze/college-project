
import express from 'express'
import * as digiController from '../controller/digiController.js'
import { protect } from '../middleware/authMiddleware.js';
import { upload } from '../middleware/imageMiddleware.js';

const router = express.Router();

router.delete('/digicard/:cardId', digiController.deleteCard)
router.post('/createDigicard',[protect,upload.single('selectedFile')], digiController.createDigicard);
router.post('/save-template', digiController.saveTemplate);
router.get('/digiCards/:id', digiController.getDigicard)
router.get('/card/:cardId', digiController.getCard)
router.get('/digiCardsByUser/:userId',protect, digiController.getAllDigiCard);
router.put('/edit/:id',[protect,upload.single('selectedFile')], digiController.editDigicard);

export default router