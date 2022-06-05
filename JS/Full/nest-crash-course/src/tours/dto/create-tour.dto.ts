import { IsNotEmpty } from 'class-validator';
import { isUnique } from 'src/validation/isUnique';

export class CreateTourDto {
  @IsNotEmpty()
  @isUnique({ context: 'tour' })
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
