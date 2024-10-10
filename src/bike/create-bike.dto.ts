import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateBikeDto {
  @ApiProperty({
    description: 'The make of the bike, e.g., Yamaha',
    example: 'Yamaha',   // Example of what value should look like
  })
  @IsString()
  make: string;

  @ApiProperty({
    description: 'The model of the bike, e.g., R15',
    example: 'R15',
  })
  @IsString()
  model: string;

  @ApiProperty({
    description: 'The year of the bike, e.g., 2022',
    example: 2022,
  })
  @IsNumber()
  year: number;

  @ApiProperty({
    description: 'The type of bike, e.g., Sport or Cruiser',
    example: 'Sport',
  })
  @IsString()
  type: string;
}
