import { Injectable } from '@nestjs/common';
import { CreateProductModuleDto } from './dto/create-product-module.dto';
import { UpdateProductModuleDto } from './dto/update-product-module.dto';

@Injectable()
export class ProductModuleService {
  create(createProductModuleDto: CreateProductModuleDto) {
    return 'This action adds a new productModule';
  }

  findAll() {
    return `This action returns all productModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productModule`;
  }

  update(id: number, updateProductModuleDto: UpdateProductModuleDto) {
    return `This action updates a #${id} productModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} productModule`;
  }
}
