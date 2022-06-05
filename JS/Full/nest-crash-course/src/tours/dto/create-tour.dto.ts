import { IsNotEmpty } from 'class-validator';

export class CreateTourDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  tourType: string;

  @IsNotEmpty()
  timeType: string;

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  participantsNumber: number;

  @IsNotEmpty()
  ageLimit: number;

  description: string;

  @IsNotEmpty()
  price: number;

  size: string;
}
