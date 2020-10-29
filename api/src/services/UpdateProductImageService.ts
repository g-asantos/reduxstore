import { getCustomRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import uploadConfig from '../config/upload';
import ProductsRepository from '../repositories/ProductsRepository';
import Product from '../entities/Product';
import AppError from '../errors/AppError';

interface Request {
  product_id: string;
  imageFileName: string;
}

class UpdateProductImageService {
  public async execute({
    product_id,
    imageFileName,
  }: Request): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne({
      where: { id: product_id },
    });

    if (!product) {
      throw new AppError('Product does not exist');
    }

    if (product.image) {
      const productImageAvatarPath = path.join(
        uploadConfig.directory,
        product.image,
      );

      const productImageAvatarExists = await fs.promises.stat(
        productImageAvatarPath,
      );

      if (productImageAvatarExists) {
        await fs.promises.unlink(productImageAvatarPath);
      }
    }

    product.image = imageFileName;

    await productsRepository.save(product);

    return product;
  }
}

export default UpdateProductImageService;
