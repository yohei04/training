import { Tour } from '@prisma/client';

export class TourEntity implements Tour {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  tourType: string;
  timeType: string;
  country: string;
  participantsNumber: number;
  ageLimit: number;
  description: string | null;
  price: number;
  size: string | null;
}
