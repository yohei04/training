import { IsNotEmpty } from 'class-validator';

export class CreateTourDto {
  @IsNotEmpty()
  name;

  @IsNotEmpty()
  tourType;

  @IsNotEmpty()
  timeType;

  @IsNotEmpty()
  country;

  @IsNotEmpty()
  participantsNumber;

  @IsNotEmpty()
  ageLimit;

  description;

  @IsNotEmpty()
  price;

  size;
}
