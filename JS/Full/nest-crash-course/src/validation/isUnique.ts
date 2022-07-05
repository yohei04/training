import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';

@ValidatorConstraint({ name: 'isUnique', async: true })
export class isUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async validate(property: any, args: ValidationArguments) {
    console.log({ args });
    const resource = await this.prismaService[args.constraints[0]].findFirst({
      where: {
        [args.property]: property,
      },
    });
    if (resource) return false;
    return true;
  }

  defaultMessage(): string {
    return '重複しています';
    // return 'この$propertyはすでに存在します';
  }
}

export function isUnique(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    console.log({ object, validationOptions });
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [validationOptions.context],
      validator: isUniqueConstraint,
    });
  };
}
