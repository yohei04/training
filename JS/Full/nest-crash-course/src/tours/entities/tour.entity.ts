import { Tour } from '@prisma/client';

export class TourEntity implements Tour {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  tourType: number;
  timeType: number;
  country: string;
  participantsNumber: number;
  ageLimit: number;
  description: string;
  price: number;
  size: number;
}
