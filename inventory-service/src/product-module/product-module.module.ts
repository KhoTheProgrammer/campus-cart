import { Module } from '@nestjs/common';
import { ProductModuleService } from './product-module.service';
import { ProductModuleController } from './product-module.controller';

@Module({
  controllers: [ProductModuleController],
  providers: [ProductModuleService],
})
export class ProductModuleModule {}
