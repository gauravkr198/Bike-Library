import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Bike {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ description: 'Unique identifier for the bike' })
  id: string;

  @Column()
  @ApiProperty({ description: 'The make of the bike', example: 'Yamaha' })
  make: string;

  @Column()
  @ApiProperty({ description: 'The model of the bike', example: 'R15' })
  model: string;

  @Column()
  @ApiProperty({ description: 'The year the bike was made', example: 2022 })
  year: number;

  @Column()
  @ApiProperty({ description: 'The type of the bike (e.g., Cruiser, Sport)', example: 'Sport' })
  type: string;
}
