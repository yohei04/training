import { PrismaService } from 'src/prisma/prisma.service';

import { Injectable } from '@nestjs/common';

import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';

@Injectable()
export class ToursService {
  constructor(private prisma: PrismaService) {}

  create(createTourDto: CreateTourDto) {
    return this.prisma.tour.create({
      data: createTourDto,
    });
  }

  findAll() {
    return this.prisma.tour.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} tour`;
  }

  update(id: number, updateTourDto: UpdateTourDto) {
    return `This action updates a #${id} tour`;
  }

  remove(id: number) {
    return `This action removes a #${id} tour`;
  }
}
