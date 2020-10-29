import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import multer from 'multer';

import uploadConfig from '../config/upload';

import ProductsRepository from '../repositories/ProductsRepository';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import UpdateProductImageService from '../services/UpdateProductImageService';

const productsRouter = Router();
const upload = multer(uploadConfig);

productsRouter.get('/', async (request, response) => {
  const productsRepository = getCustomRepository(ProductsRepository);
  const products = await productsRepository.find();

  return response.json(products);
});

productsRouter.post('/', ensureAuthenticated, async (request, response) => {
  const { title, price, quantity, user_id } = request.body;

  const productsRepository = getCustomRepository(ProductsRepository);
  const product = productsRepository.create({
    price,
    title,
    quantity,
    user_id,
  });

  await productsRepository.save(product);

  return response.json(product);
});

productsRouter.patch(
  '/:id/image',
  ensureAuthenticated,
  upload.single('image'),
  async (request, response) => {
    const updateProductImage = new UpdateProductImageService();

    const product = await updateProductImage.execute({
      product_id: request.params.id,
      imageFileName: request.file.filename,
    });

    return response.json(product);
  },
);

export default productsRouter;
