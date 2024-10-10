import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bike } from './bike.entity';
import { CreateBikeDto } from './create-bike.dto';

@Injectable()
export class BikeService {
  constructor(
    @InjectRepository(Bike)
    private bikeRepository: Repository<Bike>,
  ) {}

  async findAll(): Promise<Bike[]> {
    return this.bikeRepository.find();
  }

  async findOne(id: string): Promise<Bike> {
    const bike = await this.bikeRepository.findOneBy({ id });
    if (!bike) {
      throw new NotFoundException(`Bike with ID ${id} not found`);
    }
    return bike;
  }

  async create(createBikeDto: CreateBikeDto): Promise<Bike> {
    const bike = this.bikeRepository.create(createBikeDto);
    return this.bikeRepository.save(bike);
  }

  async update(id: string, createBikeDto: CreateBikeDto): Promise<Bike> {
    const bike = await this.findOne(id);
    Object.assign(bike, createBikeDto);
    return this.bikeRepository.save(bike);
  }

  async remove(id: string): Promise<void> {
    const result = await this.bikeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Bike with ID ${id} not found`);
    }
  }
}
