import { PartialType } from '@nestjs/mapped-types';
import { CreateProductModuleDto } from './create-product-module.dto';

export class UpdateProductModuleDto extends PartialType(CreateProductModuleDto) {}
