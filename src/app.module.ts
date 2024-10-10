import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeModule } from './bike/bike.module';
import { AppController } from './app.controller'; // Import the controller

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bikes.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    BikeModule,
  ],
  controllers: [AppController], // Register the controller
})
export class AppModule {}
