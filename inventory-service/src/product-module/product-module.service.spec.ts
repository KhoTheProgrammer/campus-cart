import { Test, TestingModule } from '@nestjs/testing';
import { ProductModuleService } from './product-module.service';

describe('ProductModuleService', () => {
  let service: ProductModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductModuleService],
    }).compile();

    service = module.get<ProductModuleService>(ProductModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
