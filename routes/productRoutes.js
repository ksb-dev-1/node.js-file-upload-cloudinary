import { Router } from 'express';
const router = Router();

import { createProduct, getAllProducts } from '../controllers/productController.js';
import { uploadProductImage, uploadProductImageLocal } from '../controllers/uploadsController.js';

router.route('/').post(createProduct).get(getAllProducts);
router.route('/upload/cloudinary').post(uploadProductImage);
router.route('/upload/local').post(uploadProductImageLocal);

export default router;
