import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BikeService } from './bike.service';
import { CreateBikeDto } from './create-bike.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('bikes')  // Group the routes under 'bikes' in the Swagger UI
@Controller('bikes')
export class BikeController {
  constructor(private readonly bikeService: BikeService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve a list of all bikes' }) // Document the operation
  findAll() {
    return this.bikeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a bike by its ID' })
  findOne(@Param('id') id: string) {
    return this.bikeService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Add a new bike' })
  create(@Body() createBikeDto: CreateBikeDto) {
    return this.bikeService.create(createBikeDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing bike by ID' })
  update(@Param('id') id: string, @Body() createBikeDto: CreateBikeDto) {
    return this.bikeService.update(id, createBikeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a bike by its ID' })
  remove(@Param('id') id: string) {
    return this.bikeService.remove(id);
  }
}
