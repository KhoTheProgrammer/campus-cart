import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModuleModule } from './product-module/product-module.module';

@Module({
  imports: [ProductModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
