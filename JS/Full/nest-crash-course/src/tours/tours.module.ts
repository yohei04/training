import { isUniqueConstraint } from 'src/validation/isUnique';

import { Module } from '@nestjs/common';

import { ToursController } from './tours.controller';
import { ToursService } from './tours.service';

@Module({
  controllers: [ToursController],
  providers: [ToursService],
})
export class ToursModule {}
