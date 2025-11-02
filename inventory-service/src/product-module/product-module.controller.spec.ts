import { Test, TestingModule } from '@nestjs/testing';
import { ProductModuleController } from './product-module.controller';
import { ProductModuleService } from './product-module.service';

describe('ProductModuleController', () => {
  let controller: ProductModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductModuleController],
      providers: [ProductModuleService],
    }).compile();

    controller = module.get<ProductModuleController>(ProductModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
