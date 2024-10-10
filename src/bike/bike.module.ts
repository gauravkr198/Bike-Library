import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeService } from './bike.service';
import { BikeController } from './bike.controller';
import { Bike } from './bike.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bike])], // Register the Bike entity
  providers: [BikeService],
  controllers: [BikeController],
})
export class BikeModule {}
